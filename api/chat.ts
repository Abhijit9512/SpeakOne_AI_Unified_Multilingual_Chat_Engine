import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { faqDataset } from "../src/data/faqDataset";

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

// detect language
function detectLanguage(text: string) {
  if (/[\u0C80-\u0CFF]/.test(text)) return "kn";
  if (/[\u0C00-\u0C7F]/.test(text)) return "te";
  if (/[\u0900-\u097F]/.test(text)) {
    if (text.includes("का") || text.includes("काय")) return "mr";
    return "hi";
  }
  return "en";
}

// search answer in dataset
function findFAQAnswer(userMessage: string) {

  const msg = userMessage.toLowerCase();

  for (const faq of faqDataset) {

    for (const lang of ['en','hi','mr','kn','te'] as const) {

      const q = faq.translations[lang]?.question?.toLowerCase();

      if (q && msg.includes(q.substring(0,20))) {
        return faq.translations[lang].answer;
      }

    }

    for (const keyword of faq.keywords || []) {
      if (msg.includes(keyword.toLowerCase())) {
        return faq.translations.en.answer;
      }
    }

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
      return res.status(400).json({ error: "Message required" });
    }

    // 1️⃣ check dataset first
    const datasetAnswer = findFAQAnswer(message);

    if (datasetAnswer) {
      return res.status(200).json({
        reply: datasetAnswer
      });
    }

    // 2️⃣ fallback to AI API
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: message }],
      max_tokens: 1000
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {

    console.error("API ERROR:", error);

    return res.status(500).json({
      error: "Server error"
    });
  }
}