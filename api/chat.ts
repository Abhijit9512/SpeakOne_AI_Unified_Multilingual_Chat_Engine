import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { faqDataset } from "../src/data/faqDataset";

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

function findFAQAnswer(userQuestion: string) {
  if (!userQuestion) return null;

  const question = userQuestion.toLowerCase();

  let bestMatch = null;
  let bestScore = 0;

  for (const item of faqDataset) {
    let score = 0;

    const keywords = item.keywords || [];
    const synonyms = item.synonyms || [];

    // keyword match
    for (const word of keywords) {
      if (question.includes(word.toLowerCase())) {
        score += 3;
      }
    }

    // synonym match
    for (const word of synonyms) {
      if (question.includes(word.toLowerCase())) {
        score += 2;
      }
    }

    // question similarity
    const datasetQuestion = item.translations?.en?.question?.toLowerCase();
    if (datasetQuestion && question.includes(datasetQuestion)) {
      score += 5;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  // require minimum match score
  if (bestScore >= 3 && bestMatch) {
    return bestMatch.translations.en.answer;
  }

  return null;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 1️⃣ check dataset first
    const datasetAnswer = findFAQAnswer(message);

    if (datasetAnswer) {
      return res.status(200).json({
        reply: datasetAnswer
      });
    }

    // 2️⃣ if not found → call AI
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: message }],
      max_tokens: 500
    });

    const reply =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I could not find an answer.";

    return res.status(200).json({ reply });

  } catch (error) {

    console.error("API ERROR:", error);

    return res.status(500).json({
      error: "Internal server error"
    });

  }

}