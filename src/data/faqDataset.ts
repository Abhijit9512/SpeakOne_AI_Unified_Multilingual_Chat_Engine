import type { FAQ } from '../types';

export const faqDataset: FAQ[] = [
  // Admissions Category
  {
    id: '1',
    intent: 'admission_process',
    category: 'Admissions',
    priority: 1,
    keywords: ['admission', 'process', 'apply', 'enroll', 'join', 'entrance'],
    synonyms: ['how to get admission', 'admission procedure', 'enrollment process'],
    translations: {
      en: {
        question: 'What is the admission process for engineering courses?',
        answer: 'Admission is based on JEE Main/Advanced scores. Apply online through the college portal, submit required documents, and pay the admission fee.'
      },
      hi: {
        question: 'इंजीनियरिंग कोर्सेस के लिए प्रवेश प्रक्रिया क्या है?',
        answer: 'प्रवेश JEE मेन/एडवांस्ड स्कोर के आधार पर है। कॉलेज पोर्टल के माध्यम से ऑनलाइन आवेदन करें, आवश्यक दस्तावेज़ जमा करें, और प्रवेश शुल्क का भुगतान करें।'
      },
      mr: {
        question: 'इंजिनीअरिंग कोर्सेससाठी प्रवेश प्रक्रिया काय आहे?',
        answer: 'प्रवेश JEE मेन/अडव्हान्स्ड स्कोअरच्या आधारावर आहे. कॉलेज पोर्टलच्या माध्यमातून ऑनलाइन अर्ज करा, आवश्यक दस्तऐवज सादर करा आणि प्रवेश शुल्क भरा.'
      },
      kn: {
        question: 'ಇಂಜಿನಿಯರಿಂಗ್ ಕೋರ್ಸ್‌ಗಳಿಗೆ ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ ಏನು?',
        answer: 'ಪ್ರವೇಶವು JEE ಮೇನ್/ಅಡ್ವಾನ್ಸ್ಡ್ ಸ್ಕೋರ್‌ಗಳ ಆಧಾರದ ಮೇಲೆ ಇದೆ. ಕಾಲೇಜು ಪೋರ್ಟಲ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ ಅರ್ಜ ಸಲ್ಲಿಸಿ, ಅಗತ್ಯ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಸಲ್ಲಿಸಿ, ಮತ್ತು ಪ್ರವೇಶ ಶುಲ್ಕ ಪಾವತಿಸಿ.'
      },
      te: {
        question: 'ఇంజనీరింగ్ కోర్సుల కోసం ప్రవేశ ప్రక్రియ ఏమిటి?',
        answer: 'ప్రవేశం JEE మెయిన్/అడ్వాన్స్‌డ్ స్కోర్‌ల ఆధారంగా ఉంటుంది. కళాశాల పోర్టల్ ద్వారా ఆన్‌లైన్ దరఖాస్తు చేసుకోండి, అవసరమైన డాక్యుమెంట్‌లను సమర్పించండి, మరియు ప్రవేశ ఫీజు చెల్లించండి.'
      }
    }
  },
  {
    id: '2',
    intent: 'admission_eligibility',
    category: 'Admissions',
    priority: 1,
    keywords: ['eligible', 'eligibility', 'criteria', 'requirement', 'qualification'],
    synonyms: ['who can apply', 'minimum qualification', 'eligibility criteria'],
    translations: {
      en: {
        question: 'What are the eligibility criteria for BTech admission?',
        answer: 'Minimum 50% marks in 10+2 with Physics, Chemistry, and Mathematics. Valid JEE score required for merit-based admission.'
      },
      hi: {
        question: 'बीटेक प्रवेश के लिए पात्रता मानदंड क्या हैं?',
        answer: '10+2 में भौतिकी, रसायन विज्ञान और गणित के साथ न्यूनतम 50% अंक। मेरिट-आधारित प्रवेश के लिए वैध JEE स्कोर आवश्यक।'
      },
      mr: {
        question: 'बीटेक प्रवेशासाठी पात्रता निकष काय आहेत?',
        answer: '10+2 मध्ये भौतिकशास्त्र, रसायनशास्त्र आणि गणितासह न्यूनतम 50% गुण. मेरिट-आधारित प्रवेशासाठी वैध JEE स्कोअर आवश्यक.'
      },
      kn: {
        question: 'ಬಿಟೆಕ್ ಪ್ರವೇಶಕ್ಕೆ ಅರ್ಹತಾ ಮಾನದಂಡಗಳು ಯಾವುವು?',
        answer: '10+2 ರಲ್ಲಿ ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ ಮತ್ತು ಗಣಿತದೊಂದಿಗೆ ಕನಿಷ್ಠ 50% ಅಂಕಗಳು. ಮೆರಿಟ್-ಆಧಾರಿತ ಪ್ರವೇಶಕ್ಕೆ ಮಾನ್ಯವಾದ JEE ಸ್ಕೋರ್ ಅಗತ್ಯ.'
      },
      te: {
        question: 'బిటెక్ ప్రవేశానికి అర్హతా ప్రమాణాలు ఏమిటి?',
        answer: '10+2 లో ఫిజిక్స్, కెమిస్ట్రీ మరియు మ్యాథమెటిక్స్‌తో కనీసం 50% మార్కులు. మెరిట్-ఆధారిత ప్రవేశానికి చెల్లుబాటు అయిన JEE స్కోర్ అవసరం.'
      }
    }
  },

  // Fees Category
  {
    id: '3',
    intent: 'fee_structure',
    category: 'Fees',
    priority: 1,
    keywords: ['fee', 'fees', 'cost', 'payment', 'tuition', 'structure'],
    synonyms: ['how much fees', 'fee details', 'payment structure'],
    translations: {
      en: {
        question: 'What is the fee structure for BTech first year?',
        answer: 'First year fees: ₹85,000 tuition + ₹15,000 other charges = ₹1,00,000 total. Payment can be made semester-wise or annually.'
      },
      hi: {
        question: 'बीटेक पहले वर्ष के लिए फीस संरचना क्या है?',
        answer: 'पहले वर्ष की फीस: ₹85,000 ट्यूशन + ₹15,000 अन्य शुल्क = कुल ₹1,00,000। भुगतान सेमेस्टर-वार या वार्षिक रूप से किया जा सकता है।'
      },
      mr: {
        question: 'बीटेक पहिल्या वर्षासाठी फी संरचना काय आहे?',
        answer: 'पहिल्या वर्षाची फी: ₹85,000 शिक्षण + ₹15,000 इतर शुल्क = एकूण ₹1,00,000. भरणे सेमेस्टरवार किंवा वार्षिक केले जाऊ शकते.'
      },
      kn: {
        question: 'ಬಿಟೆಕ್ ಮೊದಲ ವರ್ಷದ ಶುಲ್ಕ ರಚನೆ ಏನು?',
        answer: 'ಮೊದಲ ವರ್ಷದ ಶುಲ್ಕ: ₹85,000 ಟ್ಯೂಷನ್ + ₹15,000 ಇತರ ಶುಲ್ಕಗಳು = ಒಟ್ಟು ₹1,00,000. ಪಾವತಿಯನ್ನು ಸೆಮೆಸ್ಟರ್-ವಾರವಾಗಿ ಅಥವಾ ವಾರ್ಷಿಕವಾಗಿ ಮಾಡಬಹುದು.'
      },
      te: {
        question: 'బిటెక్ మొదటి సంవత్సరానికి ఫీజు నిర్మాణం ఏమిటి?',
        answer: 'మొదటి సంవత్సరం ఫీజు: ₹85,000 ట్యూషన్ + ₹15,000 ఇతర చార్జీలు = మొత్తం ₹1,00,000. చెల్లింపులను సెమిస్టర్-వారీగా లేదా వార్షికంగా చేయవచ్చు.'
      }
    }
  },
  {
    id: '4',
    intent: 'fee_payment_modes',
    category: 'Fees',
    priority: 2,
    keywords: ['payment', 'online', 'offline', 'mode', 'method', 'installment'],
    synonyms: ['how to pay fees', 'payment options', 'fee payment methods'],
    translations: {
      en: {
        question: 'How can I pay my college fees?',
        answer: 'You can pay online through the college portal (net banking, UPI, cards) or offline at the accounts department (cash, DD, cheque). EMI option available for annual payment.'
      },
      hi: {
        question: 'मैं अपनी कॉलेज फीस कैसे भर सकता हूं?',
        answer: 'आप कॉलेज पोर्टल के माध्यम से ऑनलाइन (नेट बैंकिंग, UPI, कार्ड) या खाता विभाग में ऑफलाइन (नकद, DD, चेक) भुगतान कर सकते हैं। वार्षिक भुगतान के लिए EMI विकल्प उपलब्ध है।'
      },
      mr: {
        question: 'मी माझे कॉलेज फी कसे भरू शकतो?',
        answer: 'तुम्ही कॉलेज पोर्टलच्या माध्यमातून ऑनलाइन (नेट बँकिंग, UPI, कार्ड) किंवा खाते विभागात ऑफलाइन (रोख, DD, चेक) फी भरू शकता. वार्षिक भरण्यासाठी EMI पर्याय उपलब्ध आहे.'
      },
      kn: {
        question: 'ನಾನು ನನ್ನ ಕಾಲೇಜು ಶುಲ್ಕವನ್ನು ಹೇಗೆ ಪಾವತಿಸಬಹುದು?',
        answer: 'ನೀವು ಕಾಲೇಜು ಪೋರ್ಟಲ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ (ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್, UPI, ಕಾರ್ಡ್‌ಗಳು) ಅಥವಾ ಖಾತೆ ಇಲಾಖೆಯಲ್ಲಿ ಆಫ್‌ಲೈನ್ (ನಗದು, DD, ಚೆಕ್) ಪಾವತಿಸಬಹುದು. ವಾರ್ಷಿಕ ಪಾವತಿಗೆ EMI ಆಯ್ಕೆ ಲಭ್ಯವಿದೆ.'
      },
      te: {
        question: 'నేను నా కళాశాల ఫీజులను ఎలా చెల్లించగలను?',
        answer: 'మీరు కళాశాల పోర్టల్ ద్వారా ఆన్‌లైన్ (నెట్ బ్యాంకింగ్, UPI, కార్డులు) లేదా అకౌంట్స్ విభాగంలో ఆఫ్‌లైన్ (నగదు, DD, చెక్) చెల్లించవచ్చు. వార్షిక చెల్లింపుకు EMI ఎంపిక అందుబాటులో ఉంది.'
      }
    }
  },

  // Courses Category
  {
    id: '5',
    intent: 'available_courses',
    category: 'Courses',
    priority: 1,
    keywords: ['courses', 'programs', 'branches', 'specializations', 'degrees'],
    synonyms: ['what courses available', 'list of courses', 'academic programs'],
    translations: {
      en: {
        question: 'What engineering courses are available in your college?',
        answer: 'We offer CSE, IT, ECE, EEE, Mechanical, Civil, Chemical, and Biotechnology Engineering. All courses are AICTE approved with NBA accreditation.'
      },
      hi: {
        question: 'आपके कॉलेज में कौन से इंजीनियरिंग कोर्स उपलब्ध हैं?',
        answer: 'हम CSE, IT, ECE, EEE, मैकेनिकल, सिविल, केमिकल, और बायोटेक्नोलॉजी इंजीनियरिंग प्रदान करते हैं। सभी कोर्स AICTE अनुमोदित और NBA मान्यता प्राप्त हैं।'
      },
      mr: {
        question: 'तुमच्या कॉलेजमध्ये कोणते इंजिनीअरिंग कोर्सेस उपलब्ध आहेत?',
        answer: 'आम्ही CSE, IT, ECE, EEE, मेकॅनिकल, सिविल, केमिकल, आणि बायोटेक्नॉलॉजी इंजिनीअरिंग ऑफर करतो. सर्व कोर्सेस AICTE मंजूर आणि NBA मान्यताप्राप्त आहेत.'
      },
      kn: {
        question: 'ನಿಮ್ಮ ಕಾಲೇಜಿನಲ್ಲಿ ಯಾವ ಇಂಜಿನಿಯರಿಂಗ್ ಕೋರ್ಸ್‌ಗಳು ಲಭ್ಯವಿವೆ?',
        answer: 'ನಾವು CSE, IT, ECE, EEE, ಮೆಕ್ಯಾನಿಕಲ್, ಸಿವಿಲ್, ಕೆಮಿಕಲ್, ಮತ್ತು ಬಯೋಟೆಕ್ನಾಲಜಿ ಇಂಜಿನಿಯರಿಂಗ್ ಅನ್ನು ನೀಡುತ್ತೇವೆ. ಎಲ್ಲಾ ಕೋರ್ಸ್‌ಗಳು AICTE ಅನುಮೋದಿತ ಮತ್ತು NBA ಪ್ರಮಾಣೀಕೃತವಾಗಿವೆ.'
      },
      te: {
        question: 'మీ కళాశాలలో ఏ ఇంజనీరింగ్ కోర్సులు అందుబాటులో ఉన్నాయి?',
        answer: 'మేము CSE, IT, ECE, EEE, మెకానికల్, సివిల్, కెమికల్, మరియు బయోటెక్నాలజీ ఇంజనీరింగ్ అందిస్తున్నాము. అన్ని కోర్సులు AICTE ఆమోదితం మరియు NBA గుర్తింపు పొందినవి.'
      }
    }
  },

  // Exams Category
  {
    id: '6',
    intent: 'exam_schedule',
    category: 'Exams',
    priority: 1,
    keywords: ['exam', 'schedule', 'timetable', 'date', 'semester', 'internal'],
    synonyms: ['when are exams', 'exam dates', 'exam timetable'],
    translations: {
      en: {
        question: 'When will the semester exams start?',
        answer: 'Odd semester exams: December 1-15. Even semester exams: May 10-25. Practical exams: 7 days before theory exams. Detailed schedule on student portal.'
      },
      hi: {
        question: 'सेमेस्टर परीक्षाएं कब शुरू होंगी?',
        answer: 'विषम सेमेस्टर परीक्षाएं: 1-15 दिसंबर। सम सेमेस्टर परीक्षाएं: 10-25 मई। प्रैक्टिकल परीक्षाएं: थ्योरी परीक्षाओं से 7 दिन पहले। विस्तृत कार्यक्रम छात्र पोर्टल पर।'
      },
      mr: {
        question: 'सेमेस्टर परीक्षा कधी सुरू होणार?',
        answer: 'विषम सेमेस्टर परीक्षा: 1-15 डिसेंबर. सम सेमेस्टर परीक्षा: 10-25 मे. प्रॅक्टिकल परीक्षा: थिअरी परीक्षांपूर्वी 7 दिवस. तपशीलवार वेळापत्रक विद्यार्थी पोर्टलवर.'
      },
      kn: {
        question: 'ಸೆಮೆಸ್ಟರ್ ಪರೀಕ್ಷೆಗಳು ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ?',
        answer: 'ಆಡ್ ಸೆಮೆಸ್ಟರ್ ಪರೀಕ್ಷೆಗಳು: ಡಿಸೆಂಬರ್ 1-15. ಈವನ್ ಸೆಮೆಸ್ಟರ್ ಪರೀಕ್ಷೆಗಳು: ಮೇ 10-25. ಪ್ರಾಕ್ಟಿಕಲ್ ಪರೀಕ್ಷೆಗಳು: ಸಿದ್ಧಾಂತ ಪರೀಕ್ಷೆಗಳಿಂದ 7 ದಿನಗಳ ಮೊದಲು. ವಿವರವಾದ ವೇಳಾಪಟ್ಟಿ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ.'
      },
      te: {
        question: 'సెమిస్టర్ పరీక్షలు ఎప్పుడు ప్రారంభమవుతాయి?',
        answer: 'ఆడ్ సెమిస్టర్ పరీక్షలు: డిసెంబర్ 1-15. ఈవెన్ సెమిస్టర్ పరీక్షలు: మే 10-25. ప్రాక్టికల్ పరీక్షలు: థియరీ పరీక్షలకు 7 రోజుల ముందు. వివరాల షెడ్యూల్ విద్యార్థి పోర్టల్‌లో.'
      }
    }
  },

  // Results Category
  {
    id: '7',
    intent: 'result_declaration',
    category: 'Results',
    priority: 1,
    keywords: ['result', 'marks', 'grade', 'score', 'declaration', 'announcement'],
    synonyms: ['when results', 'result date', 'mark announcement'],
    translations: {
      en: {
        question: 'When will the semester results be declared?',
        answer: 'Results are typically declared within 30 days after exams. Odd semester: Mid-January. Even semester: Mid-June. Check student portal for exact dates.'
      },
      hi: {
        question: 'सेमेस्टर परिणाम कब घोषित किए जाएंगे?',
        answer: 'परिणाम आमतौर पर परीक्षाओं के 30 दिनों के भीतर घोषित किए जाते हैं। विषम सेमेस्टर: मध्य जनवरी। सम सेमेस्टर: मध्य जून। सटीक तिथियों के लिए छात्र पोर्टल देखें।'
      },
      mr: {
        question: 'सेमेस्टर निकाल कधी जाहीर केले जातील?',
        answer: 'निकाल आम्ही सहसा परीक्षांनंतर 30 दिवसांच्या आत जाहीर करतो. विषम सेमेस्टर: मध्य जानेवारी. सम सेमेस्टर: मध्य जून. अचूक तारखांसाठी विद्यार्थी पोर्टल पहा.'
      },
      kn: {
        question: 'ಸೆಮೆಸ್ಟರ್ ಫಲಿತಾಂಶಗಳು ಯಾವಾಗ ಘೋಷಿಸಲ್ಪಡುತ್ತವೆ?',
        answer: 'ಫಲಿತಾಂಶಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಪರೀಕ್ಷೆಗಳ 30 ದಿನಗಳೊಳಗೆ ಘೋಷಿಸಲ್ಪಡುತ್ತವೆ. ಆಡ್ ಸೆಮೆಸ್ಟರ್: ಮಧ್ಯ ಜನವರಿ. ಈವನ್ ಸೆಮೆಸ್ಟರ್: ಮಧ್ಯ ಜೂನ್. ಖಚಿತ ದಿನಾಂಕಗಳಿಗಾಗಿ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ಪರಿಶೀಲಿಸಿ.'
      },
      te: {
        question: 'సెమిస్టర్ ఫలితాలు ఎప్పుడు ప్రకటించబడతాయి?',
        answer: 'ఫలితాలు సాధారణంగా పరీక్షల తర్వాత 30 రోజుల్లో ప్రకటించబడతాయి. ఆడ్ సెమిస్టర్: మధ్య జనవరి. ఈవెన్ సెమిస్టర్: మధ్య జూన్. ఖచ్చితమైన తేదీల కోసం విద్యార్థి పోర్టల్ చూడండి.'
      }
    }
  },

  // Hostel Category
  {
    id: '8',
    intent: 'hostel_facilities',
    category: 'Hostel',
    priority: 1,
    keywords: ['hostel', 'accommodation', 'mess', 'food', 'room', 'facility'],
    synonyms: ['hostel life', 'mess food', 'hostel rooms'],
    translations: {
      en: {
        question: 'What facilities are available in the hostel?',
        answer: 'WiFi, 24/7 water, gym, sports facilities, study room, medical room. Rooms: 2/3/4 sharing with AC/non-AC options. Mess provides 4 meals daily.'
      },
      hi: {
        question: 'हॉस्टल में कौन सी सुविधाएं उपलब्ध हैं?',
        answer: 'WiFi, 24/7 पानी, जिम, खेल सुविधाएं, अध्ययन कक्ष, मेडिकल रूम। कमरे: 2/3/4 शेयरिंग AC/नॉन-AC विकल्पों के साथ। मेस दैनिक 4 भोजन प्रदान करता है।'
      },
      mr: {
        question: 'हॉस्टेलमध्ये कोणत्या सोयी सुविधा उपलब्ध आहेत?',
        answer: 'WiFi, २४/७ पाणी, जिम, खेळ सुविधा, अभ्यास खोली, वैद्यकीय खोली. खोल्या: २/३/४ शेअरिंग AC/नॉन-AC पर्यायांसह. मेस दररोज ४ जेवण देतो.'
      },
      kn: {
        question: 'ಹಾಸ್ಟೆಲ್‌ನಲ್ಲಿ ಯಾವ ಸೌಲಭ್ಯಗಳು ಲಭ್ಯವಿವೆ?',
        answer: 'WiFi, 24/7 ನೀರು, ಜಿಮ್, ಕ್ರೀಡಾ ಸೌಲಭ್ಯಗಳು, ಅಧ್ಯಯನ ಕೊಠಡಿ, ವೈದ್ಯಕೀಯ ಕೊಠಡಿ. ಕೊಠಡಿಗಳು: 2/3/4 ಹಂಚಿಕೆ AC/ನಾನ್-AC ಆಯ್ಕೆಗಳೊಂದಿಗೆ. ಮೆಸ್ ದಿನಕ್ಕೆ 4 ಭೋಜನವನ್ನು ಒದಗಿಸುತ್ತದೆ.'
      },
      te: {
        question: 'హాస్టల్‌లో ఏమి సౌకర్యాలు అందుబాటులో ఉన్నాయి?',
        answer: 'WiFi, 24/7 నీరు, జిమ్, క్రీడా సౌకర్యాలు, అధ్యయన గది, వైద్య గది. గదులు: 2/3/4 షేరింగ్ AC/నాన్-AC ఎంపికలతో. మెస్ రోజుకు 4 భోజనాలను అందిస్తుంది.'
      }
    }
  },

  // Placement Category
  {
    id: '9',
    intent: 'placement_statistics',
    category: 'Placement',
    priority: 1,
    keywords: ['placement', 'job', 'campus', 'recruitment', 'company', 'package'],
    synonyms: ['placement record', 'job placement', 'campus recruitment'],
    translations: {
      en: {
        question: 'What are the placement statistics for your college?',
        answer: '95% placement rate with highest package ₹45 LPA and average ₹8 LPA. Top recruiters: TCS, Infosys, Wipro, Amazon, Microsoft. 200+ companies visit annually.'
      },
      hi: {
        question: 'आपके कॉलेज के प्लेसमेंट आँकड़े क्या हैं?',
        answer: '95% प्लेसमेंट रेट उच्चतम पैकेज ₹45 LPA और औसत ₹8 LPA के साथ। शीर्ष भर्तीकर्ता: TCS, Infosys, Wipro, Amazon, Microsoft। सालाना 200+ कंपनियां आती हैं।'
      },
      mr: {
        question: 'तुमच्या कॉलेजचे प्लेसमेंट आकडेवारी काय आहे?',
        answer: '95% प्लेसमेंट दर सर्वोच्च पॅकेज ₹45 LPA आणि सरासरी ₹8 LPA सह. टॉप भर्तीदार: TCS, Infosys, Wipro, Amazon, Microsoft. वार्षिक 200+ कंपन्या येतात.'
      },
      kn: {
        question: 'ನಿಮ್ಮ ಕಾಲೇಜಿನ ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಅಂಕಿಅಂಶಗಳು ಯಾವುವು?',
        answer: '95% ಪ್ಲೇಸ್‌ಮೆಂಟ್ ದರ ಅತ್ಯುನ್ನತ ಪ್ಯಾಕೇಜ್ ₹45 LPA ಮತ್ತು ಸರಾಸರಿ ₹8 LPA ಜೊತೆ. ಪ್ರಮುಖ ನೇಮಕಾತಿದಾರರು: TCS, Infosys, Wipro, Amazon, Microsoft. ವಾರ್ಷಿಕ 200+ ಕಂಪನಿಗಳು ಭೇಟಿ ನೀಡುತ್ತವೆ.'
      },
      te: {
        question: 'మీ కళాశాల ప్లేస్‌మెంట్ గణాంకాలు ఏమిటి?',
        answer: '95% ప్లేస్‌మెంట్ రేట్ అత్యధిక ప్యాకేజ్ ₹45 LPA మరియు సగటు ₹8 LPAతో. ప్రముఖ నియామకులు: TCS, Infosys, Wipro, Amazon, Microsoft. వార్షికంగా 200+ కంపెనీలు సందర్శిస్తాయి.'
      }
    }
  },

  // Scholarship Category
  {
    id: '10',
    intent: 'scholarship_programs',
    category: 'Scholarship',
    priority: 1,
    keywords: ['scholarship', 'financial', 'aid', 'grant', 'merit', 'economy'],
    synonyms: ['financial help', 'merit scholarship', 'scholarship for poor'],
    translations: {
      en: {
        question: 'What scholarships are available for students?',
        answer: 'Merit scholarship (90%+), EWS scholarship, minority scholarship, sports quota. Apply through national scholarship portal or college aid committee.'
      },
      hi: {
        question: 'छात्रों के लिए कौन सी छात्रवृत्तियां उपलब्ध हैं?',
        answer: 'मेरिट छात्रवृत्ति (90%+), EWS छात्रवृत्ति, अल्पसंख्यक छात्रवृत्ति, खेल कोटा। राष्ट्रीय छात्रवृत्ति पोर्टल या कॉलेज सहायता समिति के माध्यम से आवेदन करें।'
      },
      mr: {
        question: 'विद्यार्थ्यांसाठी कोणत्या शिष्यवृत्ती उपलब्ध आहेत?',
        answer: 'मेरिट शिष्यवृत्ती (९०%+), EWS शिष्यवृत्ती, अल्पसंख्याक शिष्यवृत्ती, क्रीडा कोटा. राष्ट्रीय शिष्यवृत्ती पोर्टल किंवा कॉलेज मदत समितीच्या माध्यमातून अर्ज करा.'
      },
      kn: {
        question: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಾವ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು ಲಭ್ಯವಿವೆ?',
        answer: 'ಮೆರಿಟ್ ವಿದ್ಯಾರ್ಥಿವೇತನ (90%+), EWS ವಿದ್ಯಾರ್ಥಿವೇತನ, ಅಲ್ಪಸಂಖ್ಯಾತ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಕ್ರೀಡಾ ಕೋಟಾ. ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ ಅಥವಾ ಕಾಲೇಜು ಸಹಾಯ ಸಮಿತಿ ಮೂಲಕ ಅರ್ಜ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'విద్యార్థుల కోసం ఏమి స్కాలర్‌షిప్‌లు అందుబాటులో ఉన్నాయి?',
        answer: 'మెరిట్ స్కాలర్‌షిప్ (90%+), EWS స్కాలర్‌షిప్, మైనారిటీ స్కాలర్‌షిప్, క్రీడా కోటా. జాతీయ స్కాలర్‌షిప్ పోర్టల్ లేదా కళాశాల సహాయ కమిటీ ద్వారా దరఖాస్తు చేసుకోండి.'
      }
    }
  },

  // Documents Category
  {
    id: '11',
    intent: 'required_documents',
    category: 'Documents',
    priority: 1,
    keywords: ['documents', 'certificates', 'papers', 'id', 'proof'],
    synonyms: ['what documents needed', 'required certificates', 'admission documents'],
    translations: {
      en: {
        question: 'What documents are required for admission?',
        answer: '10th/12th marksheets, transfer certificate, conduct certificate, birth certificate, Aadhar card, passport photos, and income certificate (if applicable).'
      },
      hi: {
        question: 'प्रवेश के लिए कौन से दस्तावेज़ आवश्यक हैं?',
        answer: '10वीं/12वीं मार्कशीट, ट्रांसफर सर्टिफिकेट, आचरण प्रमाण पत्र, जन्म प्रमाण पत्र, आधार कार्ड, पासपोर्ट फोटो, और आय प्रमाण पत्र (यदि लागू हो)।'
      },
      mr: {
        question: 'प्रवेशासाठी कोणते दस्तऐवज आवश्यक आहेत?',
        answer: '१०वी/१२वी मार्कशीट, ट्रान्सफर सर्टिफिकेट, आचार प्रमाणपत्र, जन्म प्रमाणपत्र, आधार कार्ड, पासपोर्ट फोटो, आणि उत्पन्न प्रमाणपत्र (जर लागू असेल).'
      },
      kn: {
        question: 'ಪ್ರವೇಶಕ್ಕೆ ಯಾವ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳು ಅಗತ್ಯವಿವೆ?',
        answer: '10ನೇ/12ನೇ ಮಾರ್ಕ್‌ಶೀಟ್‌ಗಳು, ವರ್ಗಾವಣೆ ಪ್ರಮಾಣಪತ್ರ, ನಡತೆ ಪ್ರಮಾಣಪತ್ರ, ಜನನ ಪ್ರಮಾಣಪತ್ರ, ಆಧಾರ್ ಕಾರ್ಡ್, ಪಾಸ್‌ಪೋರ್ಟ್ ಫೋಟೋಗಳು, ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ (ಅನ್ವಯಿಸಿದರೆ).'
      },
      te: {
        question: 'ప్రవేశానికి ఏమి డాక్యుమెంట్లు అవసరం?',
        answer: '10వ/12వ మార్క్‌షీట్‌లు, బదిలీ సర్టిఫికేట్, ప్రవర్తన సర్టిఫికేట్, జన్మధృవీకరణ పత్రం, ఆధార్ కార్డ్, పాస్‌పోర్ట్ ఫోటోలు, మరియు ఆదాయ ధృవీకరణ పత్రం (వర్తిస్తే).'
      }
    }
  },

  // General Category
  {
    id: '12',
    intent: 'college_timing',
    category: 'General',
    priority: 2,
    keywords: ['timing', 'hours', 'schedule', 'working hours', 'college hours'],
    synonyms: ['college timing', 'class hours', 'working time'],
    translations: {
      en: {
        question: 'What are the college working hours?',
        answer: 'College runs from 9:00 AM to 4:30 PM, Monday to Saturday. Library and labs remain open until 6:00 PM. Administrative office: 9:00 AM to 5:00 PM.'
      },
      hi: {
        question: 'कॉलेज के कार्य घंटे क्या हैं?',
        answer: 'कॉलेज सोमवार से शनिवार तक सुबह 9:00 बजे से शाम 4:30 बजे तक चलता है। लाइब्रेरी और लैब्स शाम 6:00 बजे तक खुली रहती हैं। प्रशासनिक कार्यालय: सुबह 9:00 बजे से शाम 5:00 बजे तक।'
      },
      mr: {
        question: 'कॉलेजचे कार्य तास कोणते आहेत?',
        answer: 'कॉलेज सोमवार ते शनिवार सकाळी ९:०० ते सायंकाळी ४:३० वाजेपर्यंत चालते. ग्रंथालय आणि प्रयोगशाळा सायंकाळी ६:०० वाजेपर्यंत खुली असतात. प्रशासकीय कार्यालय: सकाळी ९:०० ते सायंकाळी ५:०० वाजेपर्यंत.'
      },
      kn: {
        question: 'ಕಾಲೇಜಿನ ಕೆಲಸದ ಸಮಯಗಳು ಯಾವುವು?',
        answer: 'ಕಾಲೇಜು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ ಸಂಜೆ 4:30 ರವರೆಗೆ ನಡೆಯುತ್ತದೆ. ಲೈಬ್ರರಿ ಮತ್ತು ಲ್ಯಾಬ್‌ಗಳು ಸಂಜೆ 6:00 ರವರೆಗೆ ತೆರೆದಿರುತ್ತವೆ. ಆಡಳಿತ ಕಚೇರಿ: ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ ಸಂಜೆ 5:00 ರವರೆಗೆ.'
      },
      te: {
        question: 'కళాశాల పని గంటలు ఏమిటి?',
        answer: 'కళాశాల సోమవారం నుండి శనివారం వరకు ఉదయం 9:00 నుండి సాయంత్రం 4:30 వరకు నడుస్తుంది. లైబ్రరీ మరియు ల్యాబ్‌లు సాయంత్రం 6:00 వరకు తెరిచి ఉంటాయి. అడ్మినిస్ట్రేటివ్ ఆఫీస్: ఉదయం 9:00 నుండి సాయంత్రం 5:00 వరకు.'
      }
    }
  }
];

export const languageDetectionPatterns = {
  hi: [/[\u0900-\u097F]/, /kya hai|hai kya|kaise|kab|kidhar|kyon/],
  mr: [/[\u0900-\u097F]/, /kaay aahe|aahe kaay|kase|kay|kuthun/],
  kn: [/[\u0C80-\u0CFF]/, /ēnu|yāvu|hēge|yāva|ēg|yaake/],
  te: [/[\u0C00-\u0C7F]/, /ēmi|ēvaru|ela|eppudu|ekkada|enduku/],
  en: [/[a-zA-Z]/, /what|how|when|where|why|which/]
};

export const synonymsMap = {
  'admission': ['enroll', 'join', 'get admission', 'take admission', 'admission process'],
  'fees': ['fee', 'cost', 'payment', 'tuition', 'charges'],
  'exam': ['examination', 'test', 'paper', 'assessment'],
  'result': ['marks', 'grade', 'score', 'outcome'],
  'hostel': ['accommodation', 'mess', 'dormitory', 'residence'],
  'placement': ['job', 'recruitment', 'campus', 'company'],
  'scholarship': ['financial aid', 'grant', 'help', 'support', 'merit'],
  'documents': ['papers', 'certificates', 'proof', 'id'],
  'courses': ['programs', 'branches', 'subjects', 'degrees'],
  'timing': ['hours', 'schedule', 'working hours', 'time']
};