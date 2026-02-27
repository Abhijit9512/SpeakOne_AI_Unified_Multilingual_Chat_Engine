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
  },

    {
    id: '13',
    intent: 'admission_cancellation',
    category: 'Admissions',
    priority: 1,
    keywords: ['cancel admission', 'withdraw', 'dropout', 'seat cancel'],
    synonyms: ['admission cancel process', 'withdraw admission'],
    translations: {
      en: {
        question: 'How can I cancel my admission?',
        answer: 'Submit a written request to the Registrar office with your ID card and fee receipt. Refund will be processed as per college rules.'
      },
      hi: {
        question: 'मैं अपना प्रवेश कैसे रद्द कर सकता हूं?',
        answer: 'रजिस्ट्रार कार्यालय में आवेदन और आवश्यक दस्तावेज जमा करें। नियमों के अनुसार शुल्क वापसी की जाएगी।'
      },
      mr: {
        question: 'मी माझा प्रवेश कसा रद्द करू शकतो?',
        answer: 'रजिस्ट्रार कार्यालयात अर्ज आणि आवश्यक कागदपत्रे जमा करा. नियमांनुसार फी परत मिळेल.'
      },
      kn: {
        question: 'ನಾನು ನನ್ನ ಪ್ರವೇಶವನ್ನು ಹೇಗೆ ರದ್ದು ಮಾಡಬಹುದು?',
        answer: 'ರಿಜಿಸ್ಟ್ರಾರ್ ಕಚೇರಿಗೆ ಅರ್ಜಿ ಮತ್ತು ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿ. ನಿಯಮಾನುಸಾರ ಶುಲ್ಕ ಮರುಪಾವತಿ ಮಾಡಲಾಗುತ್ತದೆ.'
      },
      te: {
        question: 'నేను నా ప్రవేశాన్ని ఎలా రద్దు చేసుకోవచ్చు?',
        answer: 'రిజిస్ట్రార్ కార్యాలయానికి దరఖాస్తు మరియు అవసరమైన పత్రాలు సమర్పించండి. నియమాల ప్రకారం ఫీజు రీఫండ్ చేయబడుతుంది.'
      }
    }
  },

  {
    id: '14',
    intent: 'fee_refund',
    category: 'Fees',
    priority: 1,
    keywords: ['refund', 'money back', 'fee return'],
    synonyms: ['refund policy', 'fee refund'],
    translations: {
      en: {
        question: 'What is the fee refund policy?',
        answer: 'Refund is processed based on AICTE norms depending on the withdrawal date.'
      },
      hi: {
        question: 'फीस रिफंड नीति क्या है?',
        answer: 'रिफंड AICTE नियमों के अनुसार वापसी की तिथि के आधार पर किया जाता है।'
      },
      mr: {
        question: 'फी परतावा धोरण काय आहे?',
        answer: 'परतावा AICTE नियमांनुसार केला जातो.'
      },
      kn: {
        question: 'ಶುಲ್ಕ ಮರುಪಾವತಿ ನೀತಿ ಏನು?',
        answer: 'AICTE ನಿಯಮಗಳ ಪ್ರಕಾರ ಮರುಪಾವತಿ ಮಾಡಲಾಗುತ್ತದೆ.'
      },
      te: {
        question: 'ఫీజు రీఫండ్ పాలసీ ఏమిటి?',
        answer: 'AICTE నిబంధనల ప్రకారం రీఫండ్ ఇవ్వబడుతుంది.'
      }
    }
  },

  {
    id: '15',
    intent: 'course_change',
    category: 'Admissions',
    priority: 2,
    keywords: ['change branch', 'course change'],
    synonyms: ['branch transfer'],
    translations: {
      en: {
        question: 'Can I change my engineering branch after admission?',
        answer: 'Branch change is allowed after first year based on merit and seat availability.'
      },
      hi: {
        question: 'क्या मैं प्रवेश के बाद शाखा बदल सकता हूं?',
        answer: 'पहले वर्ष के बाद मेरिट और सीट उपलब्धता के आधार पर शाखा बदल सकते हैं।'
      },
      mr: {
        question: 'मी प्रवेशानंतर शाखा बदलू शकतो का?',
        answer: 'पहिल्या वर्षानंतर गुणवत्तेच्या आधारावर शाखा बदलता येते.'
      },
      kn: {
        question: 'ಪ್ರವೇಶದ ನಂತರ ಶಾಖೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದೇ?',
        answer: 'ಮೊದಲ ವರ್ಷದ ನಂತರ ಮೆರಿಟ್ ಆಧಾರದ ಮೇಲೆ ಶಾಖೆ ಬದಲಾವಣೆ ಸಾಧ್ಯ.'
      },
      te: {
        question: 'ప్రవేశం తర్వాత బ్రాంచ్ మార్చుకోవచ్చా?',
        answer: 'మొదటి సంవత్సరం తర్వాత మెరిట్ ఆధారంగా మార్పు సాధ్యం.'
      }
    }
  },

  {
    id: '16',
    intent: 'attendance_shortage',
    category: 'Exams',
    priority: 1,
    keywords: ['attendance', 'shortage'],
    synonyms: ['low attendance'],
    translations: {
      en: {
        question: 'What happens if I have low attendance?',
        answer: 'Students must maintain 75% attendance. Otherwise, they may not be allowed to appear for exams.'
      },
      hi: {
        question: 'अगर मेरी उपस्थिति कम हो तो क्या होगा?',
        answer: '75% उपस्थिति आवश्यक है, अन्यथा परीक्षा में बैठने की अनुमति नहीं मिलेगी।'
      },
      mr: {
        question: 'हजेरी कमी असल्यास काय होते?',
        answer: '७५% हजेरी आवश्यक आहे, अन्यथा परीक्षेला बसता येणार नाही.'
      },
      kn: {
        question: 'ಹಾಜರಾತಿ ಕಡಿಮೆ ಇದ್ದರೆ ಏನಾಗುತ್ತದೆ?',
        answer: '75% ಹಾಜರಾತಿ ಅಗತ್ಯ.'
      },
      te: {
        question: 'హాజరు తక్కువగా ఉంటే ఏమవుతుంది?',
        answer: '75% హాజరు తప్పనిసరి.'
      }
    }
  },

  {
    id: '17',
    intent: 'revaluation',
    category: 'Results',
    priority: 2,
    keywords: ['revaluation', 'recheck'],
    synonyms: ['recounting'],
    translations: {
      en: {
        question: 'How can I apply for revaluation?',
        answer: 'Apply online within 7 days of result declaration and pay the required fee.'
      },
      hi: {
        question: 'पुनर्मूल्यांकन के लिए कैसे आवेदन करें?',
        answer: 'परिणाम के 7 दिनों के भीतर ऑनलाइन आवेदन करें।'
      },
      mr: {
        question: 'पुनर्मूल्यांकनासाठी अर्ज कसा करावा?',
        answer: 'निकालानंतर ७ दिवसांत ऑनलाइन अर्ज करा.'
      },
      kn: {
        question: 'ಮರುಮೌಲ್ಯಮಾಪನಕ್ಕೆ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?',
        answer: '7 ದಿನಗಳಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'రివాల్యుయేషన్‌కు ఎలా దరఖాస్తు చేయాలి?',
        answer: '7 రోజుల్లో ఆన్‌లైన్‌లో అప్లై చేయండి.'
      }
    }
  },

  {
    id: '18',
    intent: 'transport_facility',
    category: 'Facilities',
    priority: 2,
    keywords: ['bus', 'transport'],
    synonyms: ['college bus'],
    translations: {
      en: {
        question: 'Is transport facility available?',
        answer: 'Yes, buses are available from major city locations. Fees depend on distance.'
      },
      hi: {
        question: 'क्या परिवहन सुविधा उपलब्ध है?',
        answer: 'हाँ, प्रमुख शहरों से बस सुविधा उपलब्ध है।'
      },
      mr: {
        question: 'बस सुविधा उपलब्ध आहे का?',
        answer: 'हो, प्रमुख शहरांमधून बस सुविधा आहे.'
      },
      kn: {
        question: 'ಬಸ್ ಸೌಲಭ್ಯ ಲಭ್ಯವಿದೆಯೇ?',
        answer: 'ಹೌದು, ಪ್ರಮುಖ ನಗರಗಳಿಂದ ಲಭ್ಯ.'
      },
      te: {
        question: 'రవాణా సౌకర్యం ఉందా?',
        answer: 'అవును, ప్రధాన నగరాల నుండి ఉంది.'
      }
    }
  },
    {
    id: '19',
    intent: 'migration_certificate',
    category: 'Documents',
    priority: 1,
    keywords: ['migration', 'certificate transfer'],
    synonyms: ['university migration'],
    translations: {
      en: {
        question: 'How can I get a migration certificate?',
        answer: 'Submit an application to the exam section with your last marksheet and ID proof. Certificate will be issued within 7 working days.'
      },
      hi: {
        question: 'माइग्रेशन सर्टिफिकेट कैसे प्राप्त करें?',
        answer: 'परीक्षा विभाग में आवेदन और आवश्यक दस्तावेज जमा करें।'
      },
      mr: {
        question: 'मायग्रेशन सर्टिफिकेट कसे मिळेल?',
        answer: 'परीक्षा विभागात अर्ज करा.'
      },
      kn: {
        question: 'ಮೈಗ್ರೇಶನ್ ಪ್ರಮಾಣಪತ್ರ ಹೇಗೆ ಪಡೆಯಬೇಕು?',
        answer: 'ಪರೀಕ್ಷಾ ವಿಭಾಗಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'మైగ్రేషన్ సర్టిఫికేట్ ఎలా పొందాలి?',
        answer: 'పరీక్ష విభాగానికి దరఖాస్తు చేయండి.'
      }
    }
  },

  {
    id: '20',
    intent: 'bonafide_certificate',
    category: 'Documents',
    priority: 1,
    keywords: ['bonafide', 'student proof'],
    synonyms: ['study certificate'],
    translations: {
      en: {
        question: 'How to get a bonafide certificate?',
        answer: 'Apply through the student portal or submit a request in the admin office. Certificate is issued within 2 days.'
      },
      hi: {
        question: 'बोनाफाइड प्रमाणपत्र कैसे प्राप्त करें?',
        answer: 'छात्र पोर्टल या कार्यालय में आवेदन करें।'
      },
      mr: {
        question: 'बोनाफाईड प्रमाणपत्र कसे मिळेल?',
        answer: 'विद्यार्थी पोर्टलवर अर्ज करा.'
      },
      kn: {
        question: 'ಬೋನಾಫೈಡ್ ಪ್ರಮಾಣಪತ್ರ ಹೇಗೆ ಪಡೆಯುವುದು?',
        answer: 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'బోనాఫైడ్ సర్టిఫికేట్ ఎలా పొందాలి?',
        answer: 'స్టూడెంట్ పోర్టల్ ద్వారా అప్లై చేయండి.'
      }
    }
  },

  {
    id: '21',
    intent: 'id_card_lost',
    category: 'General',
    priority: 2,
    keywords: ['id lost', 'duplicate id'],
    synonyms: ['new id card'],
    translations: {
      en: {
        question: 'What should I do if my ID card is lost?',
        answer: 'Report to the admin office immediately and apply for a duplicate ID by paying the prescribed fee.'
      },
      hi: {
        question: 'अगर मेरा आईडी कार्ड खो जाए तो क्या करें?',
        answer: 'प्रशासन कार्यालय में रिपोर्ट करें और डुप्लीकेट के लिए आवेदन करें।'
      },
      mr: {
        question: 'माझा आयडी कार्ड हरवला तर काय करावे?',
        answer: 'प्रशासन कार्यालयात तक्रार करा.'
      },
      kn: {
        question: 'ಐಡಿ ಕಾರ್ಡ್ ಕಳೆದುಹೋದರೆ ಏನು ಮಾಡಬೇಕು?',
        answer: 'ಆಡಳಿತ ಕಚೇರಿಗೆ ಮಾಹಿತಿ ನೀಡಿ.'
      },
      te: {
        question: 'ఐడి కార్డు పోతే ఏమి చేయాలి?',
        answer: 'అడ్మిన్ కార్యాలయానికి తెలియజేయండి.'
      }
    }
  },

  {
    id: '22',
    intent: 'library_rules',
    category: 'Library',
    priority: 1,
    keywords: ['library', 'rules', 'books'],
    synonyms: ['library timing'],
    translations: {
      en: {
        question: 'What are the library rules?',
        answer: 'Students can borrow 3 books for 14 days. Late return will attract a fine.'
      },
      hi: {
        question: 'लाइब्रेरी के नियम क्या हैं?',
        answer: '14 दिनों के लिए 3 पुस्तकें ले सकते हैं। देर से लौटाने पर जुर्माना लगेगा।'
      },
      mr: {
        question: 'ग्रंथालयाचे नियम काय आहेत?',
        answer: '१४ दिवसांसाठी ३ पुस्तके घेता येतात.'
      },
      kn: {
        question: 'ಲೈಬ್ರರಿ ನಿಯಮಗಳು ಯಾವುವು?',
        answer: '14 ದಿನಗಳ ಕಾಲ 3 ಪುಸ್ತಕಗಳು.'
      },
      te: {
        question: 'లైబ్రరీ నియమాలు ఏమిటి?',
        answer: '14 రోజుల పాటు 3 పుస్తకాలు.'
      }
    }
  },

  {
    id: '23',
    intent: 'medical_leave',
    category: 'General',
    priority: 2,
    keywords: ['medical', 'leave'],
    synonyms: ['sick leave'],
    translations: {
      en: {
        question: 'How to apply for medical leave?',
        answer: 'Submit a medical certificate to your department within 3 days.'
      },
      hi: {
        question: 'मेडिकल अवकाश कैसे लें?',
        answer: '3 दिनों के भीतर मेडिकल प्रमाणपत्र जमा करें।'
      },
      mr: {
        question: 'वैद्यकीय रजा कशी घ्यावी?',
        answer: '3 दिवसांत प्रमाणपत्र द्या.'
      },
      kn: {
        question: 'ವೈದ್ಯಕೀಯ ರಜೆ ಹೇಗೆ ಪಡೆಯುವುದು?',
        answer: '3 ದಿನಗಳಲ್ಲಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'మెడికల్ లీవ్ ఎలా తీసుకోవాలి?',
        answer: '3 రోజుల్లో సమర్పించండి.'
      }
    }
  },

  {
    id: '24',
    intent: 'internship_permission',
    category: 'Placement',
    priority: 2,
    keywords: ['internship', 'permission'],
    synonyms: ['industrial training'],
    translations: {
      en: {
        question: 'How can I get permission for internship?',
        answer: 'Submit the company offer letter to the training and placement cell.'
      },
      hi: {
        question: 'इंटर्नशिप की अनुमति कैसे प्राप्त करें?',
        answer: 'ऑफर लेटर टीपीओ कार्यालय में जमा करें।'
      },
      mr: {
        question: 'इंटर्नशिपसाठी परवानगी कशी मिळेल?',
        answer: 'ऑफर लेटर जमा करा.'
      },
      kn: {
        question: 'ಇಂಟರ್ನ್‌ಶಿಪ್ ಅನುಮತಿ ಹೇಗೆ ಪಡೆಯುವುದು?',
        answer: 'ಆಫರ್ ಲೆಟರ್ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'ఇంటర్న్‌షిప్ అనుమతి ఎలా పొందాలి?',
        answer: 'ఆఫర్ లెటర్ సమర్పించండి.'
      }
    }
  },

  {
    id: '25',
    intent: 'backlog_exam',
    category: 'Exams',
    priority: 1,
    keywords: ['backlog', 'supplementary'],
    synonyms: ['arrear exam'],
    translations: {
      en: {
        question: 'When are backlog exams conducted?',
        answer: 'Backlog exams are conducted every semester along with regular exams.'
      },
      hi: {
        question: 'बैकलॉग परीक्षा कब होती है?',
        answer: 'हर सेमेस्टर नियमित परीक्षा के साथ।'
      },
      mr: {
        question: 'बॅकलॉग परीक्षा कधी असते?',
        answer: 'प्रत्येक सेमेस्टर.'
      },
      kn: {
        question: 'ಬ್ಯಾಕ್‌ಲಾಗ್ ಪರೀಕ್ಷೆಗಳು ಯಾವಾಗ?',
        answer: 'ಪ್ರತಿ ಸೆಮಿಸ್ಟರ್.'
      },
      te: {
        question: 'బ్యాక్‌లాగ్ పరీక్షలు ఎప్పుడు?',
        answer: 'ప్రతి సెమిస్టర్.'
      }
    }
  },

  {
    id: '26',
    intent: 'college_holidays',
    category: 'General',
    priority: 2,
    keywords: ['holiday', 'vacation'],
    synonyms: ['leave calendar'],
    translations: {
      en: {
        question: 'Where can I check college holidays?',
        answer: 'Holiday list is available on the college website and notice board.'
      },
      hi: {
        question: 'कॉलेज की छुट्टियां कहाँ देखें?',
        answer: 'वेबसाइट और नोटिस बोर्ड पर।'
      },
      mr: {
        question: 'कॉलेज सुट्ट्या कुठे पाहू?',
        answer: 'वेबसाइटवर उपलब्ध.'
      },
      kn: {
        question: 'ರಜೆಗಳ ಪಟ್ಟಿಯನ್ನು ಎಲ್ಲ ನೋಡಬಹುದು?',
        answer: 'ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ.'
      },
      te: {
        question: 'కళాశాల సెలవులు ఎక్కడ చూడాలి?',
        answer: 'వెబ్‌సైట్‌లో చూడండి.'
      }
    }
  },
    {
    id: '27',
    intent: 'duplicate_marksheet',
    category: 'Documents',
    priority: 1,
    keywords: ['duplicate marksheet', 'lost marksheet'],
    synonyms: ['new marksheet'],
    translations: {
      en: {
        question: 'How can I get a duplicate marksheet?',
        answer: 'Submit a written request with FIR copy and ID proof to the exam section. Processing takes 10 working days.'
      },
      hi: {
        question: 'डुप्लीकेट मार्कशीट कैसे प्राप्त करें?',
        answer: 'एफआईआर और पहचान पत्र के साथ परीक्षा विभाग में आवेदन करें।'
      },
      mr: {
        question: 'डुप्लिकेट मार्कशीट कशी मिळेल?',
        answer: 'एफआयआरसह अर्ज करा.'
      },
      kn: {
        question: 'ಡ್ಯುಪ್ಲಿಕೇಟ್ ಮಾರ್ಕ್‌ಶೀಟ್ ಹೇಗೆ ಪಡೆಯಬೇಕು?',
        answer: 'ಎಫ್‌ಐಆರ್ ಜೊತೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'డుప్లికేట్ మార్క్‌షీట్ ఎలా పొందాలి?',
        answer: 'ఎఫ్‌ఐఆర్‌తో అప్లై చేయండి.'
      }
    }
  },

  {
    id: '28',
    intent: 'hostel_cancellation',
    category: 'Hostel',
    priority: 1,
    keywords: ['cancel hostel', 'leave hostel'],
    synonyms: ['hostel withdrawal'],
    translations: {
      en: {
        question: 'How to cancel hostel admission?',
        answer: 'Submit a request to the hostel warden. Refund will be processed based on hostel policy.'
      },
      hi: {
        question: 'हॉस्टल रद्द कैसे करें?',
        answer: 'वार्डन को आवेदन दें।'
      },
      mr: {
        question: 'हॉस्टेल कसे रद्द करावे?',
        answer: 'वार्डनकडे अर्ज करा.'
      },
      kn: {
        question: 'ಹಾಸ್ಟೆಲ್ ರದ್ದು ಹೇಗೆ?',
        answer: 'ವಾರ್ಡನ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
      },
      te: {
        question: 'హాస్టల్ రద్దు ఎలా?',
        answer: 'వార్డెన్‌కు అప్లై చేయండి.'
      }
    }
  },

  {
    id: '29',
    intent: 'wifi_issue',
    category: 'Facilities',
    priority: 2,
    keywords: ['wifi', 'internet'],
    synonyms: ['network problem'],
    translations: {
      en: {
        question: 'What should I do if hostel WiFi is not working?',
        answer: 'Report the issue to the IT helpdesk or hostel office for quick resolution.'
      },
      hi: {
        question: 'वाईफाई काम नहीं कर रहा तो क्या करें?',
        answer: 'आईटी हेल्पडेस्क में शिकायत करें।'
      },
      mr: {
        question: 'वाईफाय काम करत नसेल तर काय करावे?',
        answer: 'आयटी विभागाला कळवा.'
      },
      kn: {
        question: 'ವೈಫೈ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ?',
        answer: 'ಐಟಿ ಸಹಾಯ ಕೇಂದ್ರಕ್ಕೆ ತಿಳಿಸಿ.'
      },
      te: {
        question: 'వైఫై పని చేయకపోతే?',
        answer: 'ఐటి హెల్ప్‌డెస్క్‌కు తెలియజేయండి.'
      }
    }
  },

  {
    id: '30',
    intent: 'sports_facilities',
    category: 'Facilities',
    priority: 2,
    keywords: ['sports', 'gym'],
    synonyms: ['ground', 'sports club'],
    translations: {
      en: {
        question: 'What sports facilities are available?',
        answer: 'Cricket, football, basketball, badminton courts and gym are available.'
      },
      hi: {
        question: 'खेल सुविधाएं क्या हैं?',
        answer: 'क्रिकेट, फुटबॉल, बास्केटबॉल उपलब्ध हैं।'
      },
      mr: {
        question: 'खेळ सुविधा कोणत्या आहेत?',
        answer: 'क्रिकेट, फुटबॉल उपलब्ध.'
      },
      kn: {
        question: 'ಕ್ರೀಡಾ ಸೌಲಭ್ಯಗಳು ಯಾವುವು?',
        answer: 'ಕ್ರಿಕೆಟ್, ಫುಟ್ಬಾಲ್ ಲಭ್ಯ.'
      },
      te: {
        question: 'క్రీడా సౌకర్యాలు ఏమిటి?',
        answer: 'క్రికెట్, ఫుట్‌బాల్ ఉన్నాయి.'
      }
    }
  },

  {
    id: '31',
    intent: 'ragging_policy',
    category: 'General',
    priority: 1,
    keywords: ['ragging', 'anti ragging'],
    synonyms: ['harassment'],
    translations: {
      en: {
        question: 'What is the anti-ragging policy?',
        answer: 'Ragging is strictly prohibited. Students must submit anti-ragging affidavit. Strict action will be taken.'
      },
      hi: {
        question: 'एंटी रैगिंग नीति क्या है?',
        answer: 'रैगिंग पर सख्त प्रतिबंध है।'
      },
      mr: {
        question: 'रॅगिंगविरोधी नियम काय आहेत?',
        answer: 'रॅगिंगवर बंदी आहे.'
      },
      kn: {
        question: 'ರ್ಯಾಗಿಂಗ್ ನಿಯಮಗಳು ಯಾವುವು?',
        answer: 'ಕಠಿಣ ಕ್ರಮ.'
      },
      te: {
        question: 'రాగింగ్ పాలసీ ఏమిటి?',
        answer: 'కఠిన చర్య.'
      }
    }
  },

  {
    id: '32',
    intent: 'disciplinary_action',
    category: 'General',
    priority: 2,
    keywords: ['discipline', 'rules'],
    synonyms: ['punishment'],
    translations: {
      en: {
        question: 'What happens if a student violates rules?',
        answer: 'Disciplinary committee will take action including warning, suspension, or expulsion.'
      },
      hi: {
        question: 'नियम तोड़ने पर क्या होगा?',
        answer: 'अनुशासन समिति कार्रवाई करेगी।'
      },
      mr: {
        question: 'नियम तोडल्यास काय?',
        answer: 'शिस्तभंग कारवाई.'
      },
      kn: {
        question: 'ನಿಯಮ ಉಲ್ಲಂಘಿಸಿದರೆ?',
        answer: 'ಶಿಸ್ತು ಕ್ರಮ.'
      },
      te: {
        question: 'నిబంధనలు ఉల్లంఘిస్తే?',
        answer: 'క్రమశిక్షణ చర్య.'
      }
    }
  },

  {
    id: '33',
    intent: 'parent_meeting',
    category: 'General',
    priority: 2,
    keywords: ['parent meeting'],
    synonyms: ['ptm'],
    translations: {
      en: {
        question: 'Does the college conduct parent-teacher meetings?',
        answer: 'Yes, PTM is conducted every semester.'
      },
      hi: {
        question: 'क्या पीटीएम होती है?',
        answer: 'हर सेमेस्टर।'
      },
      mr: {
        question: 'पालक बैठक होते का?',
        answer: 'हो.'
      },
      kn: {
        question: 'ಪೋಷಕರ ಸಭೆ ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'పేరెంట్ మీటింగ్ ఉందా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '34',
    intent: 'industrial_visit',
    category: 'Courses',
    priority: 2,
    keywords: ['industrial visit'],
    synonyms: ['industry tour'],
    translations: {
      en: {
        question: 'Are industrial visits conducted?',
        answer: 'Yes, every year for practical exposure.'
      },
      hi: {
        question: 'क्या इंडस्ट्रियल विजिट होती है?',
        answer: 'हाँ, हर वर्ष।'
      },
      mr: {
        question: 'इंडस्ट्रियल व्हिजिट होते का?',
        answer: 'हो.'
      },
      kn: {
        question: 'ಉದ್ಯಮ ಭೇಟಿ ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'ఇండస్ట్రియల్ విజిట్ ఉందా?',
        answer: 'అవును.'
      }
    }
  },
    {
    id: '35',
    intent: 'semester_freeze',
    category: 'Academics',
    priority: 1,
    keywords: ['freeze semester', 'break semester'],
    synonyms: ['gap semester'],
    translations: {
      en: {
        question: 'Can I freeze my semester due to personal reasons?',
        answer: 'Yes, students can apply for semester freeze with valid documents and approval from the academic committee.'
      },
      hi: {
        question: 'क्या मैं सेमेस्टर फ्रीज कर सकता हूं?',
        answer: 'हाँ, उचित कारण और दस्तावेज़ के साथ अनुमति मिल सकती है।'
      },
      mr: {
        question: 'मी सेमेस्टर फ्रीज करू शकतो का?',
        answer: 'हो, योग्य कारण असल्यास.'
      },
      kn: {
        question: 'ಸೆಮಿಸ್ಟರ್ ಫ್ರೀಜ್ ಮಾಡಬಹುದೇ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'సెమిస్టర్ ఫ్రీజ్ చేయవచ్చా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '36',
    intent: 'lateral_entry',
    category: 'Admissions',
    priority: 1,
    keywords: ['lateral entry', 'diploma admission'],
    synonyms: ['direct second year'],
    translations: {
      en: {
        question: 'Is lateral entry available for diploma students?',
        answer: 'Yes, diploma holders can directly join the second year through lateral entry.'
      },
      hi: {
        question: 'क्या डिप्लोमा छात्रों के लिए लेटरल एंट्री है?',
        answer: 'हाँ, दूसरे वर्ष में प्रवेश मिलता है।'
      },
      mr: {
        question: 'डिप्लोमा विद्यार्थ्यांसाठी लेटरल एंट्री आहे का?',
        answer: 'हो.'
      },
      kn: {
        question: 'ಡಿಪ್ಲೊಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಲೇಟರಲ್ ಎಂಟ್ರಿ ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'డిప్లొమా విద్యార్థులకు లేటరల్ ఎంట్రీ ఉందా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '37',
    intent: 'online_classes',
    category: 'Academics',
    priority: 2,
    keywords: ['online class'],
    synonyms: ['virtual learning'],
    translations: {
      en: {
        question: 'Are online classes available?',
        answer: 'Online classes are conducted in special situations like emergencies.'
      },
      hi: {
        question: 'क्या ऑनलाइन कक्षाएं होती हैं?',
        answer: 'आपातकाल में।'
      },
      mr: {
        question: 'ऑनलाइन वर्ग आहेत का?',
        answer: 'हो, विशेष परिस्थितीत.'
      },
      kn: {
        question: 'ಆನ್‌ಲೈನ್ ತರಗತಿಗಳು ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'ఆన్‌లైన్ క్లాసులు ఉన్నాయా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '38',
    intent: 'digital_library',
    category: 'Library',
    priority: 2,
    keywords: ['digital library'],
    synonyms: ['ebooks'],
    translations: {
      en: {
        question: 'Does the college provide digital library access?',
        answer: 'Yes, students can access journals and ebooks through the digital library portal.'
      },
      hi: {
        question: 'क्या डिजिटल लाइब्रेरी है?',
        answer: 'हाँ।'
      },
      mr: {
        question: 'डिजिटल लायब्ररी आहे का?',
        answer: 'हो.'
      },
      kn: {
        question: 'ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'డిజిటల్ లైబ్రరీ ఉందా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '39',
    intent: 'startup_support',
    category: 'Placement',
    priority: 2,
    keywords: ['startup', 'entrepreneurship'],
    synonyms: ['incubation'],
    translations: {
      en: {
        question: 'Does the college support startups?',
        answer: 'Yes, we have an incubation center and mentorship programs.'
      },
      hi: {
        question: 'क्या कॉलेज स्टार्टअप को सपोर्ट करता है?',
        answer: 'हाँ।'
      },
      mr: {
        question: 'स्टार्टअपसाठी मदत मिळते का?',
        answer: 'हो.'
      },
      kn: {
        question: 'ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಬೆಂಬಲ ಇದೆಯೆ?',
        answer: 'ಹೌದು.'
      },
      te: {
        question: 'స్టార్టప్‌కు మద్దతు ఉందా?',
        answer: 'అవును.'
      }
    }
  },

  {
    id: '40',
    intent: 'student_clubs',
    category: 'Activities',
    priority: 2,
    keywords: ['clubs', 'activities'],
    synonyms: ['student groups'],
    translations: {
      en: {
        question: 'What student clubs are available?',
        answer: 'Technical, cultural, sports, coding, robotics, and entrepreneurship clubs.'
      },
      hi: {
        question: 'कौन से क्लब हैं?',
        answer: 'तकनीकी और सांस्कृतिक क्लब।'
      },
      mr: {
        question: 'क्लब कोणते आहेत?',
        answer: 'तांत्रिक आणि सांस्कृतिक.'
      },
      kn: {
        question: 'ಕ್ಲಬ್‌ಗಳು ಯಾವುವು?',
        answer: 'ತಾಂತ್ರಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ.'
      },
      te: {
        question: 'క్లబ్‌లు ఏమిటి?',
        answer: 'టెక్నికల్ మరియు కల్చరల్.'
      }
    }
  },

  {
    id: '41',
    intent: 'hostel_rules',
    category: 'Hostel',
    priority: 2,
    keywords: ['hostel rules'],
    synonyms: ['curfew'],
    translations: {
      en: {
        question: 'What are hostel rules?',
        answer: 'Students must follow curfew timings and discipline guidelines.'
      },
      hi: {
        question: 'हॉस्टल के नियम क्या हैं?',
        answer: 'समय और अनुशासन का पालन करें।'
      },
      mr: {
        question: 'हॉस्टेल नियम काय?',
        answer: 'शिस्त आवश्यक.'
      },
      kn: {
        question: 'ಹಾಸ್ಟೆಲ್ ನಿಯಮಗಳು?',
        answer: 'ಶಿಸ್ತು.'
      },
      te: {
        question: 'హాస్టల్ నియమాలు?',
        answer: 'క్రమశిక్షణ.'
      }
    }
  },

  {
    id: '42',
    intent: 'canteen_facilities',
    category: 'Facilities',
    priority: 2,
    keywords: ['canteen', 'food'],
    synonyms: ['cafeteria'],
    translations: {
      en: {
        question: 'What food options are available in the canteen?',
        answer: 'Vegetarian and non-vegetarian meals, snacks, and beverages are available.'
      },
      hi: {
        question: 'कैंटीन में क्या उपलब्ध है?',
        answer: 'शाकाहारी और मांसाहारी भोजन।'
      },
      mr: {
        question: 'कॅन्टीनमध्ये काय मिळते?',
        answer: 'शाकाहारी आणि मांसाहारी.'
      },
      kn: {
        question: 'ಕ್ಯಾಂಟೀನ್‌ನಲ್ಲಿ ಏನು?',
        answer: 'ಭೋಜನ ಲಭ್ಯ.'
      },
      te: {
        question: 'కాంటీన్‌లో ఏమి?',
        answer: 'ఆహారం.'
      }
    }
  },
  {
  id: '43',
  intent: 'internship_support',
  category: 'Placement',
  priority: 1,
  keywords: ['internship', 'training', 'industrial', 'experience'],
  synonyms: ['internship help', 'summer training'],
  translations: {
    en: {
      question: 'Does the college provide internship opportunities?',
      answer: 'Yes, the college has tie-ups with IT and core companies. Students get internship support from 2nd year onwards through the placement cell.'
    },
    hi: {
      question: 'क्या कॉलेज इंटर्नशिप के अवसर प्रदान करता है?',
      answer: 'हाँ, कॉलेज का विभिन्न कंपनियों के साथ सहयोग है। छात्रों को दूसरे वर्ष से इंटर्नशिप सहायता दी जाती है।'
    },
    mr: {
      question: 'कॉलेज इंटर्नशिपची संधी देते का?',
      answer: 'होय, विविध कंपन्यांशी टायअप आहे. दुसऱ्या वर्षापासून इंटर्नशिप मदत दिली जाते.'
    },
    kn: {
      question: 'ಕಾಲೇಜು ಇಂಟರ್ನ್‌ಶಿಪ್ ಅವಕಾಶಗಳನ್ನು ನೀಡುತ್ತದೆಯೇ?',
      answer: 'ಹೌದು, ಕಂಪನಿಗಳೊಂದಿಗೆ ಒಪ್ಪಂದಗಳಿವೆ. 2ನೇ ವರ್ಷದ ನಂತರ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಸಿಗುತ್ತದೆ.'
    },
    te: {
      question: 'కళాశాల ఇంటర్న్‌షిప్ అవకాశాలు ఇస్తుందా?',
      answer: 'అవును, కంపెనీలతో టైఅప్స్ ఉన్నాయి. రెండో సంవత్సరం నుండి సహాయం అందుతుంది.'
    }
  }
},

{
  id: '44',
  intent: 'startup_support',
  category: 'Facilities',
  priority: 2,
  keywords: ['startup', 'entrepreneur', 'incubation'],
  synonyms: ['business support', 'innovation'],
  translations: {
    en: {
      question: 'Is there any startup or incubation support?',
      answer: 'Yes, the college has an innovation and incubation center to guide students in startup development and funding.'
    },
    hi: {
      question: 'क्या स्टार्टअप के लिए सहायता उपलब्ध है?',
      answer: 'हाँ, कॉलेज में इनोवेशन और इन्क्यूबेशन सेंटर है।'
    },
    mr: {
      question: 'स्टार्टअपसाठी मदत आहे का?',
      answer: 'होय, इनोव्हेशन आणि इन्क्युबेशन सेंटर उपलब्ध आहे.'
    },
    kn: {
      question: 'ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಬೆಂಬಲ ಇದೆಯೇ?',
      answer: 'ಹೌದು, ಇನೋವೇಶನ್ ಸೆಂಟರ್ ಇದೆ.'
    },
    te: {
      question: 'స్టార్ట్‌అప్ సహాయం ఉందా?',
      answer: 'అవును, ఇన్నోవేషన్ సెంటర్ ఉంది.'
    }
  }
},

{
  id: '45',
  intent: 'library_membership',
  category: 'Facilities',
  priority: 2,
  keywords: ['library', 'membership'],
  synonyms: ['books access'],
  translations: {
    en: {
      question: 'How can I get a library membership?',
      answer: 'Library access is automatic after admission. Your student ID works as a library card.'
    },
    hi: {
      question: 'लाइब्रेरी सदस्यता कैसे मिलेगी?',
      answer: 'प्रवेश के बाद स्वतः मिलती है।'
    },
    mr: {
      question: 'ग्रंथालय सदस्यत्व कसे मिळेल?',
      answer: 'प्रवेशानंतर आपोआप मिळते.'
    },
    kn: {
      question: 'ಗ್ರಂಥಾಲಯ ಸದಸ್ಯತ್ವ ಹೇಗೆ?',
      answer: 'ಪ್ರವೇಶದ ನಂತರ ಸ್ವಯಂ ಲಭ್ಯ.'
    },
    te: {
      question: 'లైబ్రరీ సభ్యత్వం ఎలా పొందాలి?',
      answer: 'ప్రవేశం తర్వాత ఆటోమేటిక్‌గా లభిస్తుంది.'
    }
  }
},

{
  id: '46',
  intent: 'sports_facilities',
  category: 'Facilities',
  priority: 2,
  keywords: ['sports', 'ground', 'games'],
  synonyms: ['playground'],
  translations: {
    en: {
      question: 'What sports facilities are available?',
      answer: 'Cricket, football, basketball, indoor games, and a gym are available. Annual sports events are conducted.'
    },
    hi: {
      question: 'खेल सुविधाएं क्या हैं?',
      answer: 'क्रिकेट, फुटबॉल, जिम आदि उपलब्ध हैं।'
    },
    mr: {
      question: 'खेळ सुविधा कोणत्या आहेत?',
      answer: 'क्रिकेट, फुटबॉल, जिम उपलब्ध आहे.'
    },
    kn: {
      question: 'ಕ್ರೀಡಾ ಸೌಲಭ್ಯಗಳು ಯಾವುವು?',
      answer: 'ಕ್ರಿಕೆಟ್, ಫುಟ್‌ಬಾಲ್, ಜಿಮ್ ಲಭ್ಯ.'
    },
    te: {
      question: 'క్రీడా సౌకర్యాలు ఏమిటి?',
      answer: 'క్రికెట్, ఫుట్‌బాల్, జిమ్ అందుబాటులో ఉన్నాయి.'
    }
  }
},

{
  id: '47',
  intent: 'ragging_policy',
  category: 'General',
  priority: 1,
  keywords: ['ragging', 'anti ragging'],
  synonyms: ['harassment'],
  translations: {
    en: {
      question: 'What is the anti-ragging policy?',
      answer: 'The campus is ragging-free. Strict action is taken against offenders as per UGC guidelines.'
    },
    hi: {
      question: 'एंटी रैगिंग नीति क्या है?',
      answer: 'कॉलेज रैगिंग मुक्त है।'
    },
    mr: {
      question: 'अँटी रॅगिंग धोरण काय आहे?',
      answer: 'कॉलेज रॅगिंग मुक्त आहे.'
    },
    kn: {
      question: 'ರ್ಯಾಗಿಂಗ್ ವಿರುದ್ಧ ನೀತಿ ಏನು?',
      answer: 'ಕ್ಯಾಂಪಸ್ ರ್ಯಾಗಿಂಗ್ ಮುಕ್ತವಾಗಿದೆ.'
    },
    te: {
      question: 'యాంటీ ర్యాగింగ్ పాలసీ ఏమిటి?',
      answer: 'క్యాంపస్ ర్యాగింగ్ రహితం.'
    }
  }
},

{
  id: '48',
  intent: 'medical_facility',
  category: 'Facilities',
  priority: 2,
  keywords: ['medical', 'health'],
  synonyms: ['doctor'],
  translations: {
    en: {
      question: 'Is medical support available on campus?',
      answer: 'Yes, a medical room with a doctor and first aid is available 24/7.'
    },
    hi: {
      question: 'क्या मेडिकल सुविधा है?',
      answer: 'हाँ, 24/7 उपलब्ध है।'
    },
    mr: {
      question: 'वैद्यकीय सुविधा आहे का?',
      answer: 'होय, २४/७ आहे.'
    },
    kn: {
      question: 'ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯ ಇದೆಯೇ?',
      answer: 'ಹೌದು, 24/7 ಇದೆ.'
    },
    te: {
      question: 'మెడికల్ సౌకర్యం ఉందా?',
      answer: 'అవును, 24/7 ఉంది.'
    }
  }
},

{
  id: '49',
  intent: 'wifi_availability',
  category: 'Facilities',
  priority: 2,
  keywords: ['wifi', 'internet'],
  synonyms: ['network'],
  translations: {
    en: {
      question: 'Is WiFi available in the campus?',
      answer: 'Yes, high-speed WiFi is available across the campus and hostel.'
    },
    hi: {
      question: 'क्या वाईफाई उपलब्ध है?',
      answer: 'हाँ, पूरे कैंपस में उपलब्ध है।'
    },
    mr: {
      question: 'WiFi उपलब्ध आहे का?',
      answer: 'होय, संपूर्ण कॅम्पसमध्ये आहे.'
    },
    kn: {
      question: 'ವೈಫೈ ಇದೆಯೇ?',
      answer: 'ಹೌದು, ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಇದೆ.'
    },
    te: {
      question: 'వైఫై ఉందా?',
      answer: 'అవును, క్యాంపస్‌లో ఉంది.'
    }
  }
},

{
  id: '50',
  intent: 'college_fest',
  category: 'General',
  priority: 2,
  keywords: ['fest', 'events'],
  synonyms: ['annual fest'],
  translations: {
    en: {
      question: 'Does the college conduct annual cultural fests?',
      answer: 'Yes, technical and cultural fests are conducted every year with national-level participation.'
    },
    hi: {
      question: 'क्या वार्षिक उत्सव होते हैं?',
      answer: 'हाँ, हर वर्ष आयोजित होते हैं।'
    },
    mr: {
      question: 'वार्षिक फेस्ट होतो का?',
      answer: 'होय, दरवर्षी होतो.'
    },
    kn: {
      question: 'ವಾರ್ಷಿಕ ಉತ್ಸವ ಇದೆಯೇ?',
      answer: 'ಹೌದು, ಪ್ರತಿವರ್ಷ ನಡೆಯುತ್ತದೆ.'
    },
    te: {
      question: 'వార్షిక ఫెస్ట్ ఉందా?',
      answer: 'అవును, ప్రతి సంవత్సరం ఉంటుంది.'
    }
  }
},
{
  id: '51',
  intent: 'CGPA_To_Percentage',
  category: 'Academics',
  priority: 2,
  keywords: ['cgpa', 'percentage', 'formula', 'sgpa', 'marks'],
  synonyms: ['cgpa formula', 'percentage calculation'],
  translations: {
    en: {
      question: 'How to convert CGPA to percentage?',
      answer: 'As per university rules, to convert CGPA to percentage, multiply your CGPA by 10 and subtract 7.5 (Formula: Percentage = (CGPA * 10) - 7.5).'
    },
    hi: {
      question: 'CGPA ko percentage me kaise badle?',
      answer: 'यूनिवर्सिटी के नियमानुसार, CGPA को प्रतिशत में बदलने के लिए, अपने CGPA को 10 से गुणा करें और 7.5 घटाएं (सूत्र: प्रतिशत = (CGPA * 10) - 7.5)।'
    },
    mr: {
      question: 'CGPA चे percentage कसे काढायचे?',
      answer: 'युनिव्हर्सिटीच्या नियमानुसार, CGPA चे टक्केवारीत रूपांतर करण्यासाठी, तुमच्या CGPA ला 10 ने गुणाकार करा आणि 7.5 वजा करा (सूत्र: टक्केवारी = (CGPA * 10) - 7.5).'
    },
    kn: {
      question: 'CGPA inda percentage ge convert madodu hege?',
      answer: 'ವಿಶ್ವವಿದ್ಯಾಲಯದ ನಿಯಮಗಳ ಪ್ರಕಾರ, CGPA ಅನ್ನು ಶೇಕಡಾವಾರುಗೆ ಪರಿವರ್ತಿಸಲು, ನಿಮ್ಮ CGPA ಅನ್ನು 10 ರಿಂದ ಗುಣಿಸಿ ಮತ್ತು 7.5 ಅನ್ನು ಕಳೆಯಿರಿ.'
    },
    te: {
      question: 'CGPA ni percentage ga ela convert cheyali?',
      answer: 'యూనివర్సిటీ నిబంధనల ప్రకారం, CGPAని శాతంగా మార్చడానికి, మీ CGPAని 10తో గుణించి, 7.5 తీసివేయండి.'
    }
  }
},
{
  id: '52',
  intent: 'Result_Withheld',
  category: 'Examination',
  priority: 2,
  keywords: ['result', 'withheld', 'rr', 'blocked'],
  synonyms: ['result not showing', 'result issue'],
  translations: {
    en: {
      question: 'Why is my result withheld?',
      answer: 'Results are generally withheld due to unpaid fees, library dues, or mismatch in the exam form. Contact the exam section immediately.'
    },
    hi: {
      question: 'Mera result withheld kyu dikha raha hai?',
      answer: 'आमतौर पर रोकी गई फीस, लाइब्रेरी बकाया या परीक्षा फॉर्म में बेमेल होने के कारण परिणाम रोक दिए जाते हैं। तुरंत परीक्षा अनुभाग से संपर्क करें।'
    },
    mr: {
      question: 'माझा result withheld का दाखवत आहे?',
      answer: 'फी न भरल्यामुळे, लायब्ररी ड्यूज किंवा परीक्षा फॉर्ममधील चुकीमुळे निकाल राखून ठेवला जातो. त्वरित परीक्षा विभागाशी संपर्क साधा.'
    },
    kn: {
      question: 'Nanna result withheld yake torsitide?',
      answer: 'ಪಾವತಿಸದ ಶುಲ್ಕಗಳು ಅಥವಾ ಪರೀಕ್ಷಾ ನಮೂನೆಯಲ್ಲಿನ ತಪ್ಪುಗಳಿಂದ ಫಲಿತಾಂಶವನ್ನು ತಡೆಹಿಡಿಯಬಹುದು. ತಕ್ಷಣ ಪರೀಕ್ಷಾ ವಿಭಾಗವನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    },
    te: {
      question: 'Na result withheld ani enduku chupistundi?',
      answer: 'సాధారణంగా చెల్లించని ఫీజులు లేదా పరీక్ష ఫారమ్‌లో పొరపాట్ల వల్ల ఫలితాలు నిలిపివేయబడతాయి. వెంటనే పరీక్ష విభాగాన్ని సంప్రదించండి.'
    }
  }
},
{
  id: '53',
  intent: 'Canteen_Menu',
  category: 'Facilities',
  priority: 2,
  keywords: ['canteen', 'food', 'menu', 'mess'],
  synonyms: ['canteen timing', 'veg food'],
  translations: {
    en: {
      question: 'What is available in the canteen?',
      answer: 'The campus canteen is pure vegetarian and serves breakfast, thali, and snacks from 8:00 AM to 6:00 PM. A daily menu is displayed at the counter.'
    },
    hi: {
      question: 'Canteen me kya milta hai?',
      answer: 'कैंपस कैंटीन शुद्ध शाकाहारी है और सुबह 8:00 बजे से शाम 6:00 बजे तक नाश्ता, थाली और स्नैक्स परोसती है।'
    },
    mr: {
      question: 'Canteen मध्ये काय मिळते?',
      answer: 'कॅम्पस कॅन्टीन शुद्ध शाकाहारी आहे आणि सकाळी 8:00 ते संध्याकाळी 6:00 पर्यंत नाश्ता, थाळी आणि स्नॅक्स देते.'
    },
    kn: {
      question: 'Canteen alli enu sigutte?',
      answer: 'ಕ್ಯಾಂಪಸ್ ಕ್ಯಾಂಟೀನ್ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿಯಾಗಿದ್ದು ಬೆಳಿಗ್ಗೆ 8 ರಿಂದ ಸಂಜೆ 6 ರವರೆಗೆ ಆಹಾರ ನೀಡುತ್ತದೆ.'
    },
    te: {
      question: 'Canteen lo em dorukutundi?',
      answer: 'క్యాంపస్ క్యాంటీన్ స్వచ్ఛమైన శాఖాహారం మరియు ఉదయం 8 నుండి సాయంత్రం 6 వరకు ఆహారం అందిస్తుంది.'
    }
  }
},
{
  id: '54',
  intent: 'Student_Parking',
  category: 'Facilities',
  priority: 2,
  keywords: ['parking', 'bike', 'vehicle'],
  synonyms: ['two wheeler', 'campus parking'],
  translations: {
    en: {
      question: 'Is parking available for students?',
      answer: 'Yes, free two-wheeler parking is available for all registered students. Car parking is restricted to staff and faculty only.'
    },
    hi: {
      question: 'Kya students ke liye parking hai?',
      answer: 'हाँ, सभी पंजीकृत छात्रों के लिए मुफ्त दोपहिया वाहन पार्किंग उपलब्ध है।'
    },
    mr: {
      question: 'Students साठी parking आहे का?',
      answer: 'होय, सर्व विद्यार्थ्यांसाठी मोफत दुचाकी पार्किंग उपलब्ध आहे.'
    },
    kn: {
      question: 'Students ge parking idya?',
      answer: 'ಹೌದು, ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ದ್ವಿಚಕ್ರ ವಾಹನ ನಿಲುಗಡೆ ಲಭ್ಯವಿದೆ.'
    },
    te: {
      question: 'Students ki parking unda?',
      answer: 'అవును, విద్యార్థులకు ఉచిత ద్విచక్ర వాహన పార్కింగ్ అందుబాటులో ఉంది.'
    }
  }
},
{
  id: '55',
  intent: 'Campus_ATM',
  category: 'Facilities',
  priority: 2,
  keywords: ['atm', 'bank', 'cash'],
  synonyms: ['sbi atm', 'withdraw'],
  translations: {
    en: {
      question: 'Is there an ATM on campus?',
      answer: 'Yes, there is an SBI ATM located near the main college gate, accessible 24/7.'
    },
    hi: {
      question: 'Kya campus me ATM hai?',
      answer: 'हाँ, कॉलेज के मुख्य गेट के पास SBI ATM स्थित है, जो 24/7 उपलब्ध है।'
    },
    mr: {
      question: 'Campus मध्ये ATM आहे का?',
      answer: 'होय, कॉलेजच्या मुख्य गेटजवळ SBI ATM आहे.'
    },
    kn: {
      question: 'Campus alli ATM idya?',
      answer: 'ಹೌದು, ಕಾಲೇಜಿನ ಮುಖ್ಯ ಗೇಟ್ ಬಳಿ SBI ATM ಇದೆ.'
    },
    te: {
      question: 'Campus lo ATM unda?',
      answer: 'అవును, కాలేజీ ప్రధాన గేటు దగ్గర SBI ATM ఉంది.'
    }
  }
},
{
  id: '56',
  intent: 'Startup_Incubation',
  category: 'Entrepreneurship',
  priority: 2,
  keywords: ['startup', 'incubation', 'e-cell', 'business', 'funding'],
  synonyms: ['entrepreneurship support', 'business idea'],
  translations: {
    en: {
      question: 'Is there an incubation center?',
      answer: 'The college has an active E-Cell and an Incubation Center that provides mentorship, workspace, and seed funding support for student startups.'
    },
    hi: {
      question: 'Kya incubation center hai?',
      answer: 'कॉलेज में एक सक्रिय ई-सेल और एक इनक्यूबेशन सेंटर है जो छात्र स्टार्टअप के लिए मेंटरशिप, कार्यक्षेत्र और सीड फंडिंग सहायता प्रदान करता है।'
    },
    mr: {
      question: 'Incubation center आहे का?',
      answer: 'कॉलेजमध्ये एक सक्रिय E-Cell आणि इनक्युबेशन सेंटर आहे जे विद्यार्थी स्टार्टअप्ससाठी मार्गदर्शन, वर्कस्पेस आणि सीड फंडिंग सपोर्ट देते.'
    },
    kn: {
      question: 'Incubation center idya?',
      answer: 'ಕಾಲೇಜಿನಲ್ಲಿ ಸಕ್ರಿಯವಾದ E-Cell ಮತ್ತು ಇನ್ಕ್ಯುಬೇಶನ್ ಸೆಂಟರ್ ಇದೆ, ಇದು ವಿದ್ಯಾರ್ಥಿಗಳ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸೀಡ್ ಫಂಡಿಂಗ್ ಬೆಂಬಲ ನೀಡುತ್ತದೆ.'
    },
    te: {
      question: 'Incubation center unda?',
      answer: 'కళాశాలలో యాక్టివ్ ఇ-సెల్ మరియు ఇంక్యుబేషన్ సెంటర్ ఉన్నాయి, ఇది విద్యార్థి స్టార్టప్‌లకు మార్గదర్శకత్వం మరియు ఫండింగ్ మద్దతును అందిస్తుంది.'
    }
  }
},
{
  id: '57',
  intent: 'Alumni_Referral',
  category: 'Placement',
  priority: 2,
  keywords: ['alumni', 'referral', 'network', 'seniors'],
  synonyms: ['alumni association', 'job referral'],
  translations: {
    en: {
      question: 'How to connect with alumni?',
      answer: 'You can join the official College Alumni Network portal through the website to connect with seniors for job referrals and mentorship.'
    },
    hi: {
      question: 'Alumni se kaise connect kare?',
      answer: 'जॉब रेफरल और मेंटरशिप के लिए सीनियर्स से जुड़ने के लिए आप वेबसाइट के माध्यम से आधिकारिक कॉलेज एलुमनी नेटवर्क पोर्टल से जुड़ सकते हैं।'
    },
    mr: {
      question: 'Alumni सोबत connect कसा करू?',
      answer: 'जॉब रेफरल आणि मार्गदर्शनासाठी सीनियर्सशी कनेक्ट होण्यासाठी तुम्ही वेबसाईटवरून अधिकृत कॉलेज ॲल्युमनी नेटवर्क पोर्टलवर जॉईन होऊ शकता.'
    },
    kn: {
      question: 'Alumni jote connect hege aagodu?',
      answer: 'ಉದ್ಯೋಗ ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಹಿರಿಯರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ನೀವು ಅಧಿಕೃತ ಅಲುಮ್ನಿ ನೆಟ್‌ವರ್ಕ್ ಪೋರ್ಟಲ್‌ಗೆ ಸೇರಬಹುದು.'
    },
    te: {
      question: 'Alumni tho ela connect avvali?',
      answer: 'ఉద్యోగ రిఫరల్స్ మరియు మార్గదర్శకత్వం కోసం సీనియర్లతో కనెక్ట్ కావడానికి అధికారిక అలుమ్ని నెట్‌వర్క్ పోర్టల్‌లో చేరవచ్చు.'
    }
  }
},
{
  id: '58',
  intent: 'Minority_Scholarship',
  category: 'Scholarship',
  priority: 2,
  keywords: ['minority', 'scholarship', 'nsp', 'quota'],
  synonyms: ['alpsankhyak', 'national minority'],
  translations: {
    en: {
      question: 'Is minority scholarship available?',
      answer: 'Yes, students belonging to Muslim, Sikh, Christian, Buddhist, Jain, and Parsi communities can apply for the National Minority Scholarship through NSP.'
    },
    hi: {
      question: 'Kya minority scholarship milti hai?',
      answer: 'हाँ, मुस्लिम, सिख, ईसाई, बौद्ध, जैन और पारसी समुदायों के छात्र NSP के माध्यम से राष्ट्रीय अल्पसंख्यक छात्रवृत्ति के लिए आवेदन कर सकते हैं।'
    },
    mr: {
      question: 'Minority scholarship आहे का?',
      answer: 'होय, मुस्लिम, शीख, ख्रिश्चन, बौद्ध, जैन आणि पारशी समुदायातील विद्यार्थी NSP द्वारे राष्ट्रीय अल्पसंख्याक शिष्यवृत्तीसाठी अर्ज करू शकतात.'
    },
    kn: {
      question: 'Minority scholarship idya?',
      answer: 'ಹೌದು, ಮುಸ್ಲಿಂ, ಸಿಖ್, ಕ್ರಿಶ್ಚಿಯನ್, ಬೌದ್ಧ, ಜೈನ್ ಮತ್ತು ಪಾರ್ಸಿ ಸಮುದಾಯದ ವಿದ್ಯಾರ್ಥಿಗಳು NSP ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು.'
    },
    te: {
      question: 'Minority scholarship unda?',
      answer: 'అవును, ముస్లిం, సిక్కు, క్రైస్తవ, బౌద్ధ, జైన్ మరియు పార్శీ వర్గాలకు చెందిన విద్యార్థులు NSP ద్వారా దరఖాస్తు చేసుకోవచ్చు.'
    }
  }
},
{
  id: '59',
  intent: 'Scholarship_Status_Check',
  category: 'Scholarship',
  priority: 2,
  keywords: ['scholarship', 'status', 'mahadbt', 'nsp', 'track'],
  synonyms: ['scholarship received', 'application status'],
  translations: {
    en: {
      question: 'How to check scholarship status?',
      answer: 'You can track your scholarship application status by logging into your account on the MahaDBT or NSP portal using your Application ID.'
    },
    hi: {
      question: 'Scholarship ka status kaise check kare?',
      answer: 'आप अपने एप्लिकेशन आईडी का उपयोग करके MahaDBT या NSP पोर्टल पर लॉग इन करके अपनी छात्रवृत्ति आवेदन स्थिति देख सकते हैं।'
    },
    mr: {
      question: 'Scholarship status कसा check करू?',
      answer: 'तुम्ही तुमचा Application ID वापरून MahaDBT किंवा NSP पोर्टलवर लॉग इन करून स्कॉलरशिपचा स्टेटस ट्रॅक करू शकता.'
    },
    kn: {
      question: 'Scholarship status check madodu hege?',
      answer: 'ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಐಡಿ ಬಳಸಿ MahaDBT ಅಥವಾ NSP ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಲಾಗ್ ಇನ್ ಮಾಡಿ ಸ್ಥಿತಿಯನ್ನು ನೋಡಬಹುದು.'
    },
    te: {
      question: 'Scholarship status ela check cheyali?',
      answer: 'మీ అప్లికేషన్ IDతో MahaDBT లేదా NSP పోర్టల్‌లో లాగిన్ చేసి స్థితిని ట్రాక్ చేయవచ్చు.'
    }
  }
},
{
  id: '60',
  intent: 'Character_Certificate',
  category: 'Certificates',
  priority: 2,
  keywords: ['character', 'conduct', 'certificate', 'moral'],
  synonyms: ['charitra', 'conduct cert'],
  translations: {
    en: {
      question: 'How to get a character certificate?',
      answer: 'A Character or Conduct Certificate is issued along with your Transfer Certificate upon graduation. For a mid-course certificate, submit an application to the HOD.'
    },
    hi: {
      question: 'Character certificate kaise milega?',
      answer: 'ग्रेजुएशन के बाद आपकी TC के साथ कैरेक्टर/कंडक्ट सर्टिफिकेट जारी किया जाता है। बीच में चाहिए तो HOD को आवेदन दें।'
    },
    mr: {
      question: 'Character certificate कसे मिळेल?',
      answer: 'पदवी पूर्ण झाल्यानंतर तुमच्या TC सोबत कॅरेक्टर/कंडक्ट सर्टिफिकेट दिले जाते. कोर्स चालू असताना HOD कडे अर्ज करा.'
    },
    kn: {
      question: 'Character certificate hege sigutte?',
      answer: 'ಪದವಿ ನಂತರ TC ಜೊತೆ ನೀಡಲಾಗುತ್ತದೆ. ಮಧ್ಯದಲ್ಲಿ ಬೇಕಾದರೆ HOD ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
    },
    te: {
      question: 'Character certificate ela tisyali?',
      answer: 'గ్రాడ్యుయేషన్ తర్వాత TCతో ఇస్తారు. మధ్యలో కావాలంటే HODకు దరఖాస్తు చేయాలి.'
    }
  }
},
{
  id: '61',
  intent: 'Transcript_Request',
  category: 'Examination',
  priority: 2,
  keywords: ['transcript', 'marksheet', 'abroad', 'sealed'],
  synonyms: ['official transcript', 'foreign study'],
  translations: {
    en: {
      question: 'How to get official transcripts?',
      answer: 'Official transcripts for higher education abroad can be requested from the university exam section by paying ₹500 per copy. The process usually takes 15 days.'
    },
    hi: {
      question: 'Transcript kaise milega?',
      answer: 'विदेश में उच्च शिक्षा के लिए आधिकारिक ट्रांसक्रिप्ट ₹500 प्रति प्रति भुगतान करके परीक्षा अनुभाग से प्राप्त किए जा सकते हैं। प्रक्रिया में लगभग 15 दिन लगते हैं।'
    },
    mr: {
      question: 'Official transcript कसे मिळेल?',
      answer: 'परदेशातील शिक्षणासाठी अधिकृत ट्रान्सक्रिप्ट्स ₹500 प्रति प्रत भरून परीक्षा विभागाकडून मिळवता येतात. साधारण 15 दिवस लागतात.'
    },
    kn: {
      question: 'Official transcript hege sigutte?',
      answer: 'ವಿದೇಶಿ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಪ್ರತಿ ಪ್ರತಿಗೆ ₹500 ಪಾವತಿಸಿ ಪರೀಕ್ಷಾ ವಿಭಾಗದಿಂದ ಪಡೆಯಬಹುದು. 15 ದಿನಗಳು ಬೇಕಾಗುತ್ತದೆ.'
    },
    te: {
      question: 'Official transcript ela vastundi?',
      answer: 'విదేశీ విద్య కోసం కాపీకి ₹500 చెల్లించి పరీక్ష విభాగం నుండి పొందవచ్చు. సుమారు 15 రోజులు పడుతుంది.'
    }
  }
},
{
  id: '62',
  intent: 'Lost_And_Found',
  category: 'Facilities',
  priority: 2,
  keywords: ['lost', 'found', 'phone', 'bag', 'wallet'],
  synonyms: ['missing item', 'lost department'],
  translations: {
    en: {
      question: 'I lost my phone. What should I do?',
      answer: 'Any lost and found items should be reported or deposited at the Security Cabin near the main gate.'
    },
    hi: {
      question: 'Mera phone kho gaya hai. Kya karu?',
      answer: 'खोई और पाई गई किसी भी वस्तु की सूचना मुख्य द्वार के पास सुरक्षा केबिन में दी जानी चाहिए या जमा की जानी चाहिए।'
    },
    mr: {
      question: 'Maza phone haravla aahe. Kay karu?',
      answer: 'कोणतीही हरवलेली किंवा सापडलेली वस्तू मुख्य गेटजवळील सिक्युरिटी केबिनमध्ये जमा करावी किंवा त्याची नोंद करावी.'
    },
    kn: {
      question: 'Nanna phone kaleduhogide. Enu madbeku?',
      answer: 'ಕಳೆದುಹೋದ ಅಥವಾ ಕಂಡುಬಂದ ವಸ್ತುಗಳನ್ನು ಮುಖ್ಯ ಗೇಟ್ ಬಳಿಯ ಭದ್ರತಾ ಕ್ಯಾಬಿನ್‌ನಲ್ಲಿ ವರದಿ ಮಾಡಬೇಕು.'
    },
    te: {
      question: 'Na phone poyindi. Em cheyali?',
      answer: 'పోగొట్టుకున్న లేదా దొరికిన వస్తువులను ప్రధాన ద్వారం సమీపంలోని సెక్యూరిటీ క్యాబిన్ వద్ద నివేదించాలి.'
    }
  }
},
{
  id: '63',
  intent: 'NCC_NSS_Join',
  category: 'Activities',
  priority: 2,
  keywords: ['ncc', 'nss', 'enrollment', 'cadet'],
  synonyms: ['national cadet corps', 'social service'],
  translations: {
    en: {
      question: 'How to join NCC or NSS?',
      answer: 'Registration for NCC and NSS opens in August. Interested first-year students can fill the form at the Sports and Activities office.'
    },
    hi: {
      question: 'NCC kaise join kare?',
      answer: 'NCC और NSS के लिए पंजीकरण अगस्त में खुलता है। इच्छुक प्रथम वर्ष के छात्र खेल और गतिविधि कार्यालय में फॉर्म भर सकते हैं।'
    },
    mr: {
      question: 'NCC kashi join karaychi?',
      answer: 'NCC आणि NSS साठी नोंदणी ऑगस्टमध्ये सुरू होते. इच्छुक प्रथम वर्षाचे विद्यार्थी क्रीडा आणि उपक्रम कार्यालयात फॉर्म भरू शकतात.'
    },
    kn: {
      question: 'NCC hege join aagodu?',
      answer: 'NCC ಮತ್ತು NSS ನೋಂದಣಿ ಆಗಸ್ಟ್‌ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಆಸಕ್ತ 1ನೇ ವರ್ಷದ ವಿದ್ಯಾರ್ಥಿಗಳು ಕ್ರೀಡೆ ಮತ್ತು ಚಟುವಟಿಕೆ ಕಚೇರಿಯಲ್ಲಿ ಫಾರ್ಮ್ ತುಂಬಬಹುದು.'
    },
    te: {
      question: 'NCC lo ela join avvali?',
      answer: 'NCC మరియు NSS రిజిస్ట్రేషన్ ఆగస్టులో ప్రారంభమవుతుంది. ఆసక్తి గల 1వ సంవత్సరం విద్యార్థులు స్పోర్ట్స్ ఆఫీస్‌లో ఫారమ్ నింపవచ్చు.'
    }
  }
},
{
  id: '64',
  intent: 'College_Fest',
  category: 'Events',
  priority: 2,
  keywords: ['fest', 'cultural', 'technical', 'gathering'],
  synonyms: ['annual fest', 'freshers'],
  translations: {
    en: {
      question: 'When is the college fest?',
      answer: 'The annual cultural fest is usually held in the second week of February. Dates are announced on Instagram and notice boards.'
    },
    hi: {
      question: 'College fest kab hai?',
      answer: 'वार्षिक सांस्कृतिक उत्सव आमतौर पर फरवरी के दूसरे सप्ताह में आयोजित किया जाता है। तारीखों की घोषणा इंस्टाग्राम और नोटिस बोर्ड पर की जाती है।'
    },
    mr: {
      question: 'College fest kadhi aahe?',
      answer: 'वार्षिक सांस्कृतिक महोत्सव साधारणपणे फेब्रुवारीच्या दुसऱ्या आठवड्यात आयोजित केला जातो. तारखा इंस्टाग्राम आणि नोटीस बोर्डवर जाहीर केल्या जातात.'
    },
    kn: {
      question: 'College fest yavaga?',
      answer: 'ವಾರ್ಷಿಕ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಫೆಬ್ರವರಿಯ ಎರಡನೇ ವಾರದಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ. ದಿನಾಂಕಗಳನ್ನು Instagram ಮತ್ತು ಸೂಚನಾ ಫಲಕಗಳಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.'
    },
    te: {
      question: 'College fest eppudu?',
      answer: 'వార్షిక సాంస్కృతిక ఉత్సవం సాధారణంగా ఫిబ్రవరి రెండవ వారంలో జరుగుతుంది. తేదీలు నోటీస్ బోర్డులలో ప్రకటించబడతాయి.'
    }
  }
},
{
  id: '65',
  intent: 'Mobile_App_Login',
  category: 'IT Services',
  priority: 2,
  keywords: ['mobile app', 'erp', 'attendance app', 'student app'],
  synonyms: ['college app', 'portal app'],
  translations: {
    en: {
      question: 'Does the college have a mobile app?',
      answer: "Yes, you can download the 'MyCampus ERP' app from the Google Play Store or Apple App Store and log in using your student portal credentials."
    },
    hi: {
      question: 'Kya college ka mobile app hai?',
      answer: "हाँ, आप Google Play Store या Apple App Store से 'MyCampus ERP' ऐप डाउनलोड कर सकते हैं और अपने छात्र पोर्टल आईडी-पासवर्ड से लॉगिन कर सकते हैं।"
    },
    mr: {
      question: 'College che mobile app aahe ka?',
      answer: "होय, तुम्ही Google Play Store किंवा Apple App Store वरून 'MyCampus ERP' ॲप डाउनलोड करून तुमच्या स्टुडंट पोर्टल आयडी-पासवर्डने लॉगिन करू शकता."
    },
    kn: {
      question: 'College mobile app idya?',
      answer: "ಹೌದು, ನೀವು Google Play Store ಅಥವಾ Apple App Store ನಿಂದ 'MyCampus ERP' ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ವಿವರಗಳಿಂದ ಲಾಗಿನ್ ಮಾಡಬಹುದು."
    },
    te: {
      question: 'College mobile app unda?',
      answer: "అవును, మీరు Google Play Store లేదా Apple App Store నుండి 'MyCampus ERP' యాప్‌ను డౌన్‌లోడ్ చేసి మీ స్టూడెంట్ పోర్టల్ వివరాలతో లాగిన్ చేయవచ్చు."
    }
  }
},
{
  id: '66',
  intent: 'Change_Registered_Mobile',
  category: 'IT Services',
  priority: 2,
  keywords: ['mobile number', 'email update', 'contact change'],
  synonyms: ['update profile', 'change phone'],
  translations: {
    en: {
      question: 'How can I change my registered mobile number or email?',
      answer: 'To update your registered mobile number or email, submit a written request with a copy of your Aadhar card to the IT Helpdesk.'
    },
    hi: {
      question: 'Mobile number kaise badle?',
      answer: 'अपना पंजीकृत मोबाइल नंबर या ईमेल बदलने के लिए, अपने आधार कार्ड की प्रति के साथ आईटी हेल्पडेस्क में लिखित आवेदन जमा करें।'
    },
    mr: {
      question: 'Mobile number kasa badlu?',
      answer: 'तुमचा नोंदणीकृत मोबाईल नंबर किंवा ईमेल बदलण्यासाठी आधार कार्डच्या प्रतीसह आयटी हेल्पडेस्ककडे लेखी अर्ज जमा करा.'
    },
    kn: {
      question: 'Mobile number change madodu hege?',
      answer: 'ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್ ಬದಲಿಸಲು ಆಧಾರ್ ಕಾರ್ಡ್ ನಕಲಿನೊಂದಿಗೆ ಐಟಿ ಹೆಲ್ಪ್‌ಡೆಸ್ಕ್‌ಗೆ ಲಿಖಿತ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.'
    },
    te: {
      question: 'Mobile number ela marchali?',
      answer: 'మీ రిజిస్టర్డ్ మొబైల్ నంబర్ లేదా ఇమెయిల్ మార్చడానికి, ఆధార్ కార్డ్ కాపీతో IT హెల్ప్‌డెస్క్‌కు వ్రాతపూర్వక అభ్యర్థన ఇవ్వాలి.'
    }
  }
},
{
  id: '67',
  intent: 'Womens_Cell_ICC',
  category: 'Support',
  priority: 1,
  keywords: ['women cell', 'harassment', 'complaint', 'icc'],
  synonyms: ['grievance', 'safety', 'internal committee'],
  translations: {
    en: {
      question: 'How to contact the Women Grievance Cell?',
      answer: "The Internal Complaints Committee (ICC) handles women's grievances and harassment cases. You can confidentially email them at icc@college.edu."
    },
    hi: {
      question: 'Womens cell se kaise contact kare?',
      answer: 'आंतरिक शिकायत समिति (ICC) महिलाओं की शिकायतों और उत्पीड़न के मामलों को संभालती है। आप icc@college.edu पर गोपनीय रूप से ईमेल कर सकते हैं।'
    },
    mr: {
      question: 'Womens cell sobat kasa contact karu?',
      answer: 'अंतर्गत तक्रार समिती (ICC) महिलांच्या तक्रारी हाताळते. तुम्ही icc@college.edu वर गोपनीयपणे ईमेल करू शकता.'
    },
    kn: {
      question: 'Womens cell ge hege sampark madodu?',
      answer: 'ಆಂತರಿಕ ದೂರುಗಳ ಸಮಿತಿ (ICC) ಮಹಿಳೆಯರ ದೂರುಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. ನೀವು icc@college.edu ಗೆ ಗೌಪ್ಯವಾಗಿ ಇಮೇಲ್ ಮಾಡಬಹುದು.'
    },
    te: {
      question: 'Womens cell tho ela contact avvali?',
      answer: 'అంతర్గత ఫిర్యాదు కమిటీ (ICC) మహిళల ఫిర్యాదులను పరిష్కరిస్తుంది. మీరు icc@college.edu కు గోప్యంగా ఇమెయిల్ చేయవచ్చు.'
    }
  }
},
{
  id: '68',
  intent: 'Change_Local_Address',
  category: 'Student Portal',
  priority: 2,
  keywords: ['address update', 'local address', 'permanent address', 'profile edit'],
  synonyms: ['change address', 'update profile', 'shifted hostel'],
  translations: {
    en: {
      question: 'How can I update my local or permanent address?',
      answer: "You can update your local or permanent address directly from the 'Profile Settings' menu in the Student Portal."
    },
    hi: {
      question: 'Apna address kaise badle?',
      answer: "आप स्टूडेंट पोर्टल में 'Profile Settings' मेनू से सीधे अपना स्थानीय या स्थायी पता अपडेट कर सकते हैं।"
    },
    mr: {
      question: 'Pata kasa badlaycha?',
      answer: "तुम्ही स्टुडंट पोर्टलवरील 'Profile Settings' मेनूमधून तुमचा स्थानिक किंवा कायमचा पत्ता थेट अपडेट करू शकता."
    },
    kn: {
      question: 'Address change madodu hege?',
      answer: "ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿರುವ 'Profile Settings' ಮೆನುವಿನಿಂದ ನಿಮ್ಮ ಸ್ಥಳೀಯ ಅಥವಾ ಶಾಶ್ವತ ವಿಳಾಸವನ್ನು ನೇರವಾಗಿ ನವೀಕರಿಸಬಹುದು."
    },
    te: {
      question: 'Address ela marchali?',
      answer: "మీరు స్టూడెంట్ పోర్టల్‌లోని 'Profile Settings' మెను నుండి మీ స్థానిక లేదా శాశ్వత చిరునామాను నేరుగా అప్‌డేట్ చేయవచ్చు."
    }
  }
},
{
  id: '69',
  intent: 'Exam_Scribe_Disability',
  category: 'Examinations',
  priority: 1,
  keywords: ['scribe', 'writer', 'extra time', 'disabled student', 'exam support'],
  synonyms: ['divyang support', 'physically handicapped exam', 'disability help'],
  translations: {
    en: {
      question: 'How can a disabled student apply for a scribe or extra time in exams?',
      answer: 'Divyang (disabled) students requiring a scribe or extra time (20 minutes per hour) must apply to the Exam Controller at least 15 days before the examination.'
    },
    hi: {
      question: 'Exam me writer ya extra time kaise milega?',
      answer: 'दिव्यांग छात्रों को जिन्हें लेखक (scribe) या अतिरिक्त समय (20 मिनट प्रति घंटा) की आवश्यकता है, उन्हें परीक्षा से 15 दिन पहले परीक्षा नियंत्रक को आवेदन करना होगा।'
    },
    mr: {
      question: 'Exam sathi writer kiwa extra time kasa milnar?',
      answer: 'दिव्यांग विद्यार्थ्यांना लेखक (scribe) किंवा अतिरिक्त वेळ (20 मिनिटे प्रति तास) आवश्यक असल्यास, त्यांनी परीक्षेच्या 15 दिवस आधी परीक्षा नियंत्रकाकडे अर्ज करावा.'
    },
    kn: {
      question: 'Exam ge scribe athava extra time hege sigutte?',
      answer: 'ವಿಕಲಚೇತನ ವಿದ್ಯಾರ್ಥಿಗಳು ಬರಹಗಾರ (scribe) ಅಥವಾ ಹೆಚ್ಚುವರಿ ಸಮಯ (20 ನಿಮಿಷ ಪ್ರತಿ ಗಂಟೆ) ಬೇಕಾದರೆ, ಪರೀಕ್ಷೆಗೆ 15 ದಿನಗಳ ಮೊದಲು ಪರೀಕ್ಷಾ ನಿಯಂತ್ರಕರಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು.'
    },
    te: {
      question: 'Exam ki scribe leda extra time ela pondali?',
      answer: 'స్క్రైబ్ లేదా అదనపు సమయం (ప్రతి గంటకు 20 నిమిషాలు) అవసరమైన దివ్యాంగ విద్యార్థులు పరీక్షలకు 15 రోజుల ముందు పరీక్ష నియంత్రణాధికారికి దరఖాస్తు చేయాలి.'
    }
  }
},
{
  id: '70',
  intent: 'AICTE_Affiliation_Status',
  category: 'Accreditation',
  priority: 1,
  keywords: ['AICTE approved', 'UGC approved', 'affiliation', 'degree valid'],
  synonyms: ['AICTE list', 'recognition status', 'approval status'],
  translations: {
    en: {
      question: 'Is the college AICTE approved and UGC recognized?',
      answer: 'Yes, the college is AICTE-approved and UGC-recognized. You can verify the latest affiliation status on the official AICTE website.'
    },
    hi: {
      question: 'Kya college AICTE approved hai?',
      answer: 'हाँ, कॉलेज AICTE-अनुमोदित और UGC-मान्यता प्राप्त है। नवीनतम जानकारी के लिए आधिकारिक AICTE वेबसाइट देखें।'
    },
    mr: {
      question: 'College AICTE approved ahe ka?',
      answer: 'होय, कॉलेज AICTE-अनुमोदित आणि UGC-मान्यता प्राप्त आहे. नवीनतम माहितीसाठी अधिकृत AICTE वेबसाइट तपासा.'
    },
    kn: {
      question: 'College AICTE approved idya?',
      answer: 'ಹೌದು, ಕಾಲೇಜು AICTE-ಅನುಮೋದಿತ ಮತ್ತು UGC-ಮಾನ್ಯತೆ ಪಡೆದಿದೆ. ಇತ್ತೀಚಿನ ಮಾಹಿತಿಗಾಗಿ ಅಧಿಕೃತ AICTE ವೆಬ್‌ಸೈಟ್ ಪರಿಶೀಲಿಸಿ.'
    },
    te: {
      question: 'College AICTE approved aa?',
      answer: 'అవును, కళాశాల AICTE-అనుమతించబడినది మరియు UGC-అధీకృతం. తాజా సమాచారానికి అధికారిక AICTE వెబ్‌సైట్ చూడండి.'
    }
  }
},
{
  id: '71',
  intent: 'Regional_Fest_Dates',
  category: 'Events',
  priority: 2,
  keywords: ['cultural fest', 'sports meet', 'technical fest', 'ganesh utsav'],
  synonyms: ['college fest', 'event dates', 'annual fest'],
  translations: {
    en: {
      question: 'When is the college cultural fest and sports meet?',
      answer: 'Cultural fest: 15–17 March 2026. Sports meet: 10–12 February. Please check the events page regularly for updates.'
    },
    hi: {
      question: 'College ka cultural fest kab hai?',
      answer: 'सांस्कृतिक उत्सव: 15–17 मार्च 2026। स्पोर्ट्स मीट: 10–12 फरवरी। अपडेट के लिए इवेंट्स पेज देखें।'
    },
    mr: {
      question: 'College cha cultural fest kadhi ahe?',
      answer: 'सांस्कृतिक उत्सव: 15–17 मार्च 2026. स्पोर्ट्स मीट: 10–12 फेब्रुवारी. अपडेटसाठी इव्हेंट्स पेज पहा.'
    },
    kn: {
      question: 'College cultural fest yavaga?',
      answer: 'ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ: 15–17 ಮಾರ್ಚ್ 2026. ಸ್ಪೋರ್ಟ್ಸ್ ಮೀಟ್: 10–12 ಫೆಬ್ರುವರಿ. ನವೀಕರಣಕ್ಕಾಗಿ ಈವೆಂಟ್ಸ್ ಪುಟ ಪರಿಶೀಲಿಸಿ.'
    },
    te: {
      question: 'College cultural fest eppudu?',
      answer: 'కల్చరల్ ఫెస్ట్: 15–17 మార్చి 2026. స్పోర్ట్స్ మీట్: 10–12 ఫిబ్రవరి. అప్‌డేట్స్ కోసం ఈవెంట్స్ పేజీ చూడండి.'
    }
  }
},
{
  id: '72',
  intent: 'Mess_Warden_Complaint',
  category: 'Hostel',
  priority: 1,
  keywords: ['mess food', 'warden complaint', 'hostel food', 'menu change'],
  synonyms: ['food quality issue', 'veg quantity', 'hostel mess complaint'],
  translations: {
    en: {
      question: 'How can I complain about hostel mess food?',
      answer: 'Submit your mess complaint through the hostel app or contact the mess warden directly at messwarden@college.edu.'
    },
    hi: {
      question: 'Mess ka khana kharab hai, complaint kaise kare?',
      answer: 'मेस शिकायत हॉस्टल ऐप के माध्यम से या सीधे messwarden@college.edu पर भेजें।'
    },
    mr: {
      question: 'Mess cha khana kharab ahe, complaint kasa karu?',
      answer: 'मेस तक्रार हॉस्टल ॲपद्वारे किंवा थेट messwarden@college.edu वर पाठवा.'
    },
    kn: {
      question: 'Mess food complaint hege madodu?',
      answer: 'ಮೆಸ್ ದೂರು ಹೋಸ್ಟೆಲ್ ಆಪ್ ಮೂಲಕ ಅಥವಾ messwarden@college.eduಗೆ ಕಳುಹಿಸಿ.'
    },
    te: {
      question: 'Mess food complaint ela ivvali?',
      answer: 'మెస్ ఫుడ్ ఫిర్యాదులు హాస్టల్ యాప్ ద్వారా లేదా messwarden@college.eduకి పంపండి.'
    }
  }
},
{
  id: '73',
  intent: 'Xerox_Copy_Rules',
  category: 'Campus Services',
  priority: 3,
  keywords: ['xerox', 'photocopy', 'print rate', 'colour print'],
  synonyms: ['copy shop', 'duplicate notes', 'printing charges'],
  translations: {
    en: {
      question: 'What are the xerox and printing charges in college?',
      answer: 'Xerox charges are ₹1 for black & white and ₹5 for colour A4. The service is available at the co-op store. For bulk printing, bring your own paper.'
    },
    hi: {
      question: 'College me xerox ka rate kya hai?',
      answer: 'ज़ेरॉक्स: ₹1 काला-सफेद, ₹5 रंगीन A4. को-ऑप स्टोर पर उपलब्ध; बल्क के लिए अपना कागज़ लाएं।'
    },
    mr: {
      question: 'College madhe xerox charges kiti ahet?',
      answer: 'ज़ेरॉक्स: ₹1 काळा-पांढरा, ₹5 रंगीत A4. को-ऑप स्टोअरवर उपलब्ध; बल्कसाठी स्वतः कागद आणा.'
    },
    kn: {
      question: 'College xerox rate estu?',
      answer: 'ಜೆರಾಕ್ಸ್: ₹1 ಕಪ್ಪು-ಬಿಳಿ, ₹5 ರಂಗೀನ A4. ಕೋ-ಆಪ್ ಸ್ಟೋರ್‌ನಲ್ಲಿ ಲಭ್ಯ; ಬಹಳ ಪ್ರಮಾಣಕ್ಕೆ ನಿಮ್ಮ ಕಾಗದ ತರಬೇಕು.'
    },
    te: {
      question: 'College xerox charges entha?',
      answer: 'జెరాక్స్: ₹1 బ్లాక్ & వైట్, ₹5 కలర్ A4. కో-ఆప్ స్టోర్‌లో లభ్య; బల్క్‌కు మీ కాగితం తీసుకురండి.'
    }
  }
},
{
  id: '74',
  intent: 'Guest_Lecture_Schedule',
  category: 'Academics',
  priority: 2,
  keywords: ['guest lecture', 'seminar', 'expert talk', 'workshop'],
  synonyms: ['guest professor', 'technical seminar', 'academic event'],
  translations: {
    en: {
      question: 'When is the next guest lecture?',
      answer: 'The next guest lecture is by Dr. Rao on Artificial Intelligence on 5 March at 4 PM. The full schedule is available on the academics portal.'
    },
    hi: {
      question: 'Agla guest lecture kab hai?',
      answer: 'अगला गेस्ट लेक्चर: डॉ. राव द्वारा AI पर, 5 मार्च 4 PM। पूरा शेड्यूल अकादमिक्स पोर्टल पर उपलब्ध है।'
    },
    mr: {
      question: 'Pudhil guest lecture kadhi ahe?',
      answer: 'पुढील गेस्ट लेक्चर: डॉ. राव यांचे AI वर, 5 मार्च 4 PM. संपूर्ण शेड्यूल अकॅडेमिक्स पोर्टलवर आहे.'
    },
    kn: {
      question: 'Next guest lecture yavaga?',
      answer: 'ಮುಂದಿನ ಗೆಸ್ಟ್ ಲೆಕ್ಚರ್: ಡಾ. ರಾವ್ ಅವರ AI, 5 ಮಾರ್ಚ್ 4 PM. ಸಂಪೂರ್ಣ ಷೆಡ್ಯೂಲ್ ಅಕಾಡೆಮಿಕ್ಸ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಲಭ್ಯ.'
    },
    te: {
      question: 'Next guest lecture eppudu?',
      answer: 'తదుపరి గెస్ట్ లెక్చర్: డా. రావు గారి AI పై, మార్చి 5, సాయంత్రం 4 PM. పూర్తి షెడ్యూల్ అకాడెమిక్స్ పోర్టల్‌లో అందుబాటులో ఉంది.'
    }
  }
},
{
  id: '75',
  intent: 'Hostel_Room_Allotment_Process',
  category: 'Hostel',
  priority: 2,
  keywords: ['hostel room', 'room allotment', 'seat allocation', 'hostel application'],
  synonyms: ['room assignment', 'hostel process', 'FCFS allotment'],
  translations: {
    en: {
      question: 'How are hostel rooms allotted?',
      answer: 'Rooms are allotted on a first-come-first-served basis after submitting the online hostel application form and paying the security deposit.'
    },
    hi: {
      question: 'Hostel ka room kaise milta hai?',
      answer: 'ऑनलाइन हॉस्टल आवेदन फॉर्म भरने और सुरक्षा जमा जमा करने के बाद पहले-आओ-पहले-पाओ के आधार पर कमरे आवंटित किए जाते हैं।'
    },
    mr: {
      question: 'Hostel cha room kasa milto?',
      answer: 'ऑनलाइन हॉस्टल अर्ज फॉर्म भरून आणि सुरक्षा जमा भरल्यानंतर प्रथम-आले-प्रथम-सेवा या आधारावर रूम वाटप होते.'
    },
    kn: {
      question: 'Hostel room hege allot maaduttare?',
      answer: 'ನೀವು ಆನ್‌ಲೈನ್ ಹಾಸ್ಟೆಲ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಮತ್ತು ಭದ್ರತಾ ಠೇವಣಿ ಪಾವತಿಸಿದ ನಂತರ ಮೊದಲ ಬರುವವರಿಗೆ ಮೊದಲ ಆದ್ಯತೆ (FCFS) ಆಧಾರದ ಮೇಲೆ ಕೊಠಡಿಗಳನ್ನು ಹಂಚಲಾಗುತ್ತದೆ.'
    },
    te: {
      question: 'Hostel lo room ela allot chestaru?',
      answer: 'మీరు ఆన్‌లైన్ హాస్టల్ అప్లికేషన్ సమర్పించి, సెక్యూరిటీ డిపాజిట్ చెల్లించిన తర్వాత ఫస్ట్-కమ్-ఫస్ట్-సర్వ్ (FCFS) ఆధారంగా గదులు కేటాయిస్తారు.'
    }
  }
},
{
  id: '76',
  intent: 'Library_Digital_Resources_Access',
  category: 'Library',
  priority: 2,
  keywords: ['e-books', 'digital library', 'library login', 'PDF download'],
  synonyms: ['library portal', 'e-resources', 'online textbooks'],
  translations: {
    en: {
      question: 'How can I access e-books from the library?',
      answer: 'Log in to the library portal using your student ID, go to "Digital Resources" and select "E-Books" to download PDFs.'
    },
    hi: {
      question: 'Library se e-books kaise download kare?',
      answer: 'अपने छात्र आईडी से लाइब्रेरी पोर्टल में लॉगिन करें, “Digital Resources” पर जाएँ और “E-Books” पर क्लिक करके PDF डाउनलोड करें।'
    },
    mr: {
      question: 'Library madhun e-books kase download karayche?',
      answer: 'विद्यार्थी आयडीने लायब्ररी पोर्टलमध्ये लॉगिन करा, “Digital Resources” मध्ये जाऊन “E-Books” वर क्लिक करून PDF डाउनलोड करा.'
    },
    kn: {
      question: 'Library ninda e-books hege download maadbeku?',
      answer: 'ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ಐಡಿ ಬಳಸಿ ಲೈಬ್ರರಿ ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ, “Digital Resources” ಗೆ ಹೋಗಿ “E-Books” ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.'
    },
    te: {
      question: 'Library nundi e-books ela download cheyali?',
      answer: 'మీ స్టూడెంట్ ఐడి ద్వారా లైబ్రరీ పోర్టల్‌లో లాగిన్ అయి, “Digital Resources” కి వెళ్లి “E-Books” పై క్లిక్ చేసి PDFలను డౌన్‌లోడ్ చేయండి.'
    }
  }
},
{
  id: '77',
  intent: 'Placement_Eligibility_Criteria',
  category: 'Placement',
  priority: 1,
  keywords: ['placement eligibility', 'CGPA requirement', 'campus placement', 'backlogs'],
  synonyms: ['placement rules', 'GPA criteria', 'eligibility checklist'],
  translations: {
    en: {
      question: 'What are the eligibility criteria for campus placement?',
      answer: 'A minimum CGPA of 7.0, no active backlogs, and clearance of all internal assessments are required for campus placement eligibility.'
    },
    hi: {
      question: 'Placement ke liye eligibility kya hai?',
      answer: 'कैंपस प्लेसमेंट के लिए न्यूनतम CGPA 7.0, कोई भी बैकलॉग न होना और सभी आंतरिक मूल्यांकन पास होना आवश्यक है।'
    },
    mr: {
      question: 'Placement sathi eligibility kay ahe?',
      answer: 'कॅम्पस प्लेसमेंटसाठी किमान CGPA 7.0, कोणतेही बॅकलॉग नसणे आणि सर्व आंतरिक मूल्यांकन पास असणे आवश्यक आहे.'
    },
    kn: {
      question: 'Placement eligibility yenu?',
      answer: 'ಕ್ಯಾಂಪಸ್ ಪ್ಲೇಸ್ಮೆಂಟ್‌ಗಾಗಿ ಕನಿಷ್ಠ CGPA 7.0, ಯಾವುದೇ ಬ್ಯಾಕ್ಲಾಗ್ ಇಲ್ಲದಿರುವುದು ಮತ್ತು ಎಲ್ಲಾ ಇಂಟರ್ನಲ್ ಅಸೆಸ್ಮೆಂಟ್ ಪಾಸ್ ಆಗಿರುವುದು ಅಗತ್ಯ.'
    },
    te: {
      question: 'Placement eligibility enti?',
      answer: 'క్యాంపస్ ప్లేస్‌మెంట్‌కు కనీసం CGPA 7.0, బ్యాక్లాగ్‌లు లేకపోవడం మరియు అన్ని అంతర్గత మూల్యాంకనాలు పాస్ అయి ఉండటం అవసరం.'
    }
  }
},
{
  id: '78',
  intent: 'Sports_Scholarship_Application',
  category: 'Scholarship',
  priority: 2,
  keywords: ['sports scholarship', 'sports quota', 'athlete scholarship', 'merit certificate'],
  synonyms: ['sports form', 'sports-cell application', 'quota scholarship'],
  translations: {
    en: {
      question: 'How can I apply for a sports scholarship?',
      answer: 'Download the "Sports Scholarship Form" from the sports-cell website, attach your recent tournament certificate, and submit it to the admin office.'
    },
    hi: {
      question: 'Sports scholarship ke liye kaise apply kare?',
      answer: 'स्पोर्ट्स-सेल की वेबसाइट से “Sports Scholarship Form” डाउनलोड करें, हालिया टूर्नामेंट प्रमाणपत्र संलग्न करें और एडमिन ऑफिस में जमा करें।'
    },
    mr: {
      question: 'Sports scholarship sathi kase apply karayche?',
      answer: 'स्पोर्ट्स-सेल वेबसाइटवरून “Sports Scholarship Form” डाउनलोड करा, अलीकडील स्पर्धा प्रमाणपत्र जोडून अॅडमिन ऑफिसमध्ये सादर करा.'
    },
    kn: {
      question: 'Sports scholarship hege apply maadbeku?',
      answer: 'ಸ್ಪೋರ್ಟ್ಸ್-ಸೆಲ್ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ “Sports Scholarship Form” ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ, ಇತ್ತೀಚಿನ ಟೂರ್ನಮೆಂಟ್ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಸೇರಿಸಿ ಆಡ್ಮಿನ್ ಕಚೇರಿಗೆ ಸಲ್ಲಿಸಿ.'
    },
    te: {
      question: 'Sports scholarship ki apply ela cheyali?',
      answer: 'స్పోర్ట్స్-సెల్ వెబ్‌సైట్ నుండి “Sports Scholarship Form” డౌన్‌లోడ్ చేసి, తాజా టోర్నమెంట్ సర్టిఫికేట్ జోడించి అడ్మిన్ ఆఫీస్‌లో సమర్పించండి.'
    }
  }
},
{
  id: '79',
  intent: 'Anti_Ragging_Complaint_Procedure',
  category: 'Student Support',
  priority: 1,
  keywords: ['anti-ragging', 'ragging complaint', 'helpline', 'incident report'],
  synonyms: ['ragging email', 'complain to dean', 'safe harbor contact'],
  translations: {
    en: {
      question: 'How can I file an anti-ragging complaint?',
      answer: 'Send an email to anti-ragging@college.edu with details or call the 24-hour helpline 1800-555-RAG. You may also approach the Dean of Student Welfare.'
    },
    hi: {
      question: 'Ragging ki complaint kaise kare?',
      answer: 'anti-ragging@college.edu पर ईमेल भेजें या 24-घंटे हेल्पलाइन 1800-555-RAG पर कॉल करें। आप डीन ऑफ स्टूडेंट वेलफेयर से भी संपर्क कर सकते हैं।'
    },
    mr: {
      question: 'Ragging complaint kase karaychi?',
      answer: 'anti-ragging@college.edu ला ईमेल करा किंवा 24-तास हेल्पलाइन 1800-555-RAG वर कॉल करा. डीन ऑफ स्टुडंट वेलफेअर यांच्याशीही संपर्क साधू शकता.'
    },
    kn: {
      question: 'Ragging complaint hege file maadbeku?',
      answer: 'anti-ragging@college.edu ಗೆ ಇಮೇಲ್ ಕಳುಹಿಸಿ ಅಥವಾ 24-ಗಂಟೆ ಹಾಟ್‌ಲೈನ್ 1800-555-RAG ಗೆ ಕರೆ ಮಾಡಿ. ಡೀನ್ ಆಫ್ ಸ್ಟುಡಂಟ್ ವೆಲ್ಫೇರ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.'
    },
    te: {
      question: 'Ragging complaint ela file cheyali?',
      answer: 'anti-ragging@college.edu కి ఇమెయిల్ పంపండి లేదా 24-గంటల హెల్ప్‌లైన్ 1800-555-RAG కు కాల్ చేయండి. డీన్ ఆఫ్ స్టూడెంట్ వెల్ఫేర్‌ను కూడా సంప్రదించవచ్చు.'
    }
  }
},
{
  id: '80',
  intent: 'Lab_Safety_Training_Schedule',
  category: 'Laboratory',
  priority: 2,
  keywords: ['lab safety', 'training date', 'lab orientation', 'safety drill'],
  synonyms: ['PPE training', 'mandatory lab session', 'lab safety workshop'],
  translations: {
    en: {
      question: 'When is the lab safety training scheduled?',
      answer: 'Lab safety training will be conducted on 12 March 2026 from 10 AM to 12 PM in the Central Laboratory. Attendance is compulsory.'
    },
    hi: {
      question: 'Lab safety training kab hai?',
      answer: '12 मार्च 2026 को सुबह 10 बजे से 12 बजे तक सेंट्रल लैब में लैब सुरक्षा प्रशिक्षण होगा। उपस्थिति अनिवार्य है।'
    },
    mr: {
      question: 'Lab safety training kadhi ahe?',
      answer: '12 मार्च 2026 रोजी सकाळी 10 ते 12 वाजता सेंट्रल लॅबमध्ये लॅब सुरक्षा प्रशिक्षण होईल. उपस्थिती अनिवार्य आहे.'
    },
    kn: {
      question: 'Lab safety training yavaga ide?',
      answer: '12 ಮಾರ್ಚ್ 2026 ರಂದು ಬೆಳಗ್ಗೆ 10 ರಿಂದ 12 ಗಂಟೆಯವರೆಗೆ ಸೆಂಟ್ರಲ್ ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಲ್ಯಾಬ್ ಸುರಕ್ಷತಾ ತರಬೇತಿ ನಡೆಯಲಿದೆ. ಹಾಜರಾತಿ ಕಡ್ಡಾಯ.'
    },
    te: {
      question: 'Lab safety training eppudu?',
      answer: '12 మార్చి 2026 ఉదయం 10 నుండి 12 వరకు సెంట్రల్ ల్యాబ్‌లో ల్యాబ్ సేఫ్టీ ట్రైనింగ్ జరుగుతుంది. హాజరు తప్పనిసరి.'
    }
  }
},
{
  id: '81',
  intent: 'Internship_Application_Process',
  category: 'Career Services',
  priority: 1,
  keywords: ['summer internship', 'internship portal', 'internship form', 'internship eligibility'],
  synonyms: ['internship registration', 'apply internship', 'career portal internship'],
  translations: {
    en: {
      question: 'How can I apply for a summer internship?',
      answer: 'Visit the Career Services portal, register using your student ID, complete the "Internship Application Form", attach your résumé, and submit before 30 April 2026.'
    },
    hi: {
      question: 'Summer internship kaise apply kare?',
      answer: 'करियर सर्विसेज पोर्टल पर जाएँ, छात्र आईडी से रजिस्टर करें, “Internship Application Form” भरें, रिज़्यूमे अटैच करें और 30 अप्रैल 2026 से पहले सबमिट करें।'
    },
    mr: {
      question: 'Summer internship kase apply karayche?',
      answer: 'करिअर सर्व्हिसेस पोर्टलवर जा, विद्यार्थी आयडीने नोंदणी करा, “Internship Application Form” भरा, रेज्युमे जोडून 30 एप्रिल 2026 पूर्वी सबमिट करा.'
    },
    kn: {
      question: 'Summer internship hege apply maadbeku?',
      answer: 'ಕೇರಿಯರ್ ಸರ್ವಿಸಸ್ ಪೋರ್ಟಲ್‌ಗೆ ಹೋಗಿ, ವಿದ್ಯಾರ್ಥಿ ಐಡಿ ಮೂಲಕ ನೋಂದಣಿ ಮಾಡಿ, “Internship Application Form” ಭರ್ತಿ ಮಾಡಿ, ರೆಸ್ಯೂಮ್ ಅಟ್ಯಾಚ್ ಮಾಡಿ 30 ಏಪ್ರಿಲ್ 2026 ಕ್ಕಿಂತ ಮೊದಲು ಸಲ್ಲಿಸಿ.'
    },
    te: {
      question: 'Summer internship ki apply ela cheyali?',
      answer: 'కెరీర్ సర్వీసెస్ పోర్టల్‌లోకి వెళ్లి, స్టూడెంట్ ఐడి ద్వారా రిజిస్టర్ చేసి, “Internship Application Form” పూరించి, రెజ్యూమే జోడించి 30 ఏప్రిల్ 2026 కు ముందు సమర్పించండి.'
    }
  }
},
{
  id: '82',
  intent: 'Alumni_Network_Registration',
  category: 'Alumni',
  priority: 2,
  keywords: ['alumni network', 'alumni registration', 'alumni portal', 'alumni association'],
  synonyms: ['alumni sign up', 'graduate registration', 'alumni membership'],
  translations: {
    en: {
      question: 'How do I register for the alumni network?',
      answer: 'Go to alumni.college.edu, click "Register", enter your graduation year, degree, and contact details, then verify through the email sent to you.'
    },
    hi: {
      question: 'Alumni network me kaise join kare?',
      answer: 'alumni.college.edu पर जाएँ, “Register” पर क्लिक करें, ग्रेजुएशन वर्ष, डिग्री और संपर्क विवरण भरें, फिर ईमेल से वेरिफाई करें।'
    },
    mr: {
      question: 'Alumni network madhe kasa join karaycha?',
      answer: 'alumni.college.edu ला जा, “Register” वर क्लिक करा, ग्रॅज्युएशन वर्ष, डिग्री व संपर्क माहिती भरा आणि ईमेलद्वारे व्हेरिफाय करा.'
    },
    kn: {
      question: 'Alumni network ge hege join maadbeku?',
      answer: 'alumni.college.edu ಗೆ ಹೋಗಿ, “Register” ಕ್ಲಿಕ್ ಮಾಡಿ, ಪದವಿ ವರ್ಷ, ಪದವಿ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ, ನಂತರ ಇಮೇಲ್ ಮೂಲಕ ದೃಢೀಕರಿಸಿ.'
    },
    te: {
      question: 'Alumni network lo join ela cheyali?',
      answer: 'alumni.college.edu కి వెళ్లి “Register” క్లిక్ చేసి, గ్రాడ్యుయేషన్ సంవత్సరం, డిగ్రీ, సంప్రదింపు వివరాలు నమోదు చేసి, ఇమెయిల్ ద్వారా వెరిఫై చేయండి.'
    }
  }
},
{
  id: '83',
  intent: 'Exam_Revaluation_Request',
  category: 'Examinations',
  priority: 1,
  keywords: ['re-evaluation', 'revaluation form', 'regrade request', 'exam recheck'],
  synonyms: ['answer sheet review', 'marks recheck', 're-evaluation fee'],
  translations: {
    en: {
      question: 'How can I request re-evaluation of my answer sheet?',
      answer: 'Download the "Re-evaluation Request Form" from the Exam Office, fill in your roll number and subject, pay ₹500, and submit it within 15 days after results are announced.'
    },
    hi: {
      question: 'Answer sheet ka re-evaluation kaise kare?',
      answer: 'Exam Office से “Re-evaluation Request Form” डाउनलोड करें, रोल नंबर व विषय भरें, ₹500 जमा करें और परिणाम के 15 दिनों के भीतर जमा करें।'
    },
    mr: {
      question: 'Answer sheet chi re-evaluation kase karaychi?',
      answer: 'Exam Office वरून “Re-evaluation Request Form” डाउनलोड करा, रोल नंबर व विषय भरा, ₹500 भरून निकालानंतर 15 दिवसांत सादर करा.'
    },
    kn: {
      question: 'Answer sheet re-evaluation hege maadbeku?',
      answer: 'Exam Office ನಿಂದ “Re-evaluation Request Form” ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ, ರೋಲ್ ನಂಬರ್ ಮತ್ತು ವಿಷಯ ಭರ್ತಿ ಮಾಡಿ, ₹500 ಪಾವತಿಸಿ ಫಲಿತಾಂಶದ 15 ದಿನಗಳೊಳಗೆ ಸಲ್ಲಿಸಿ.'
    },
    te: {
      question: 'Answer sheet re-evaluation ela request cheyali?',
      answer: 'Exam Office నుండి “Re-evaluation Request Form” డౌన్‌లోడ్ చేసి, రోల్ నంబర్ మరియు సబ్జెక్ట్ నమోదు చేసి, ₹500 చెల్లించి ఫలితాల తర్వాత 15 రోజుల్లో సమర్పించండి.'
    }
  }
},
{
  id: '84',
  intent: 'Faculty_Leave_Application',
  category: 'HR',
  priority: 2,
  keywords: ['faculty leave', 'leave application', 'sabbatical', 'medical leave professor'],
  synonyms: ['leave balance', 'HR leave portal', 'professor leave request'],
  translations: {
    en: {
      question: 'How can faculty apply for leave?',
      answer: 'Log in to the HR portal, select "Leave Application", choose the leave type, attach supporting documents, and submit. Approval will be notified via email.'
    },
    hi: {
      question: 'Faculty leave kaise apply kare?',
      answer: 'HR पोर्टल में लॉगिन करें, “Leave Application” चुनें, प्रकार चुनें, दस्तावेज़ अटैच करें और सबमिट करें। स्वीकृति ईमेल से मिलेगी।'
    },
    mr: {
      question: 'Faculty leave kase apply karaycha?',
      answer: 'HR पोर्टलमध्ये लॉगिन करा, “Leave Application” निवडा, प्रकार निवडा, कागदपत्रे जोडून सबमिट करा. मंजुरी ईमेलने कळेल.'
    },
    kn: {
      question: 'Faculty leave hege apply maadbeku?',
      answer: 'HR ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ, “Leave Application” ಆಯ್ಕೆ ಮಾಡಿ, ರಜೆ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ, ದಾಖಲೆಗಳನ್ನು ಅಟ್ಯಾಚ್ ಮಾಡಿ ಸಲ್ಲಿಸಿ. ಅನುಮೋದನೆ ಇಮೇಲ್ ಮೂಲಕ ಬರುತ್ತದೆ.'
    },
    te: {
      question: 'Faculty leave ki apply ela cheyali?',
      answer: 'HR పోర్టల్‌లో లాగిన్ అయి, “Leave Application” ఎంచుకుని, అవసరమైన పత్రాలను జోడించి సమర్పించండి. ఆమోదం ఇమెయిల్ ద్వారా వస్తుంది.'
    }
  }
},
{
  id: '85',
  intent: 'Campus_WiFi_Password_Reset',
  category: 'IT Support',
  priority: 1,
  keywords: ['WiFi reset', 'campus network', 'forgot password', 'WiFi credentials'],
  synonyms: ['WiFi login issue', 'network password change', 'IT helpdesk WiFi'],
  translations: {
    en: {
      question: 'How do I reset my campus Wi-Fi password?',
      answer: 'Visit the IT Helpdesk portal, click "Wi-Fi Password Reset", verify using your student ID, and a new password will be emailed to you within 5 minutes.'
    },
    hi: {
      question: 'Campus Wi-Fi password kaise reset kare?',
      answer: 'IT Helpdesk पोर्टल पर “Wi-Fi Password Reset” पर क्लिक करें, छात्र आईडी से वेरिफाई करें, नया पासवर्ड 5 मिनट में ईमेल होगा।'
    },
    mr: {
      question: 'Campus Wi-Fi password kase reset karaycha?',
      answer: 'IT Helpdesk पोर्टलवर “Wi-Fi Password Reset” क्लिक करा, विद्यार्थी आयडीने व्हेरिफाय करा, 5 मिनिटांत नवीन पासवर्ड ईमेलवर येईल.'
    },
    kn: {
      question: 'Campus Wi-Fi password hege reset maadbeku?',
      answer: 'IT Helpdesk ಪೋರ್ಟಲ್‌ನಲ್ಲಿ “Wi-Fi Password Reset” ಕ್ಲಿಕ್ ಮಾಡಿ, ವಿದ್ಯಾರ್ಥಿ ಐಡಿ ಮೂಲಕ ದೃಢೀಕರಿಸಿ, 5 ನಿಮಿಷಗಳಲ್ಲಿ ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಇಮೇಲ್ ಆಗುತ್ತದೆ.'
    },
    te: {
      question: 'Campus Wi-Fi password ela reset cheyali?',
      answer: 'IT Helpdesk పోర్టల్‌లో “Wi-Fi Password Reset” పై క్లిక్ చేసి, స్టూడెంట్ ఐడి ద్వారా వెరిఫై చేసి, 5 నిమిషాల్లో కొత్త పాస్వర్డ్ ఇమెయిల్ ద్వారా వస్తుంది.'
    }
  }
},
{
  id: '86',
  intent: 'Student_Club_Registration',
  category: 'Student Affairs',
  priority: 2,
  keywords: ['club registration', 'student club', 'society formation', 'club funding'],
  synonyms: ['club charter', 'student organization setup', 'club approval process'],
  translations: {
    en: {
      question: 'How can I register a new student club?',
      answer: 'Submit the "Club Registration Form" to the Student Affairs office along with a constitution draft, founding members list, and budget proposal. Approval takes up to 2 weeks.'
    },
    hi: {
      question: 'Naya student club kaise register kare?',
      answer: '“Club Registration Form” Student Affairs office में जमा करें, संविधान ड्राफ्ट, संस्थापक सदस्यों की सूची और बजट प्रस्ताव संलग्न करें। 2 सप्ताह में स्वीकृति मिलेगी।'
    },
    mr: {
      question: 'Nava student club kase register karaycha?',
      answer: '“Club Registration Form” Student Affairs office ला द्या, संविधान ड्राफ्ट, संस्थापक सदस्यांची यादी व बजेट प्रस्ताव जोडा. 2 आठवड्यांत मंजुरी मिळेल.'
    },
    kn: {
      question: 'New student club hege register maadbeku?',
      answer: '“Club Registration Form” ಅನ್ನು Student Affairs ಕಚೇರಿಗೆ ಸಲ್ಲಿಸಿ, ಸಂವಿಧಾನ ಕರಡು, ಸ್ಥಾಪಕ ಸದಸ್ಯರ ಪಟ್ಟಿ ಮತ್ತು ಬಜೆಟ್ ಪ್ರಸ್ತಾಪ ಅಟ್ಯಾಚ್ ಮಾಡಿ. 2 ವಾರಗಳಲ್ಲಿ ಅನುಮೋದನೆ ಬರುತ್ತದೆ.'
    },
    te: {
      question: 'New student club ki register ela cheyali?',
      answer: '“Club Registration Form” ను Student Affairs ఆఫీస్‌కు సమర్పించి, చార్టర్ డ్రాఫ్ట్, స్థాపక సభ్యుల జాబితా మరియు బడ్జెట్ ప్రతిపాదన జోడించండి. 2 వారాల్లో ఆమోదం వస్తుంది.'
    }
  }
},
{
  id: '87',
  intent: 'Admission_Process',
  category: 'Admissions',
  priority: 1,
  keywords: ['admission process', 'eligibility criteria', 'entrance exam', 'application deadline', 'required documents', 'NRI admission'],
  synonyms: ['apply admission', 'college eligibility', 'admission last date', 'offline application', 'NRI quota process'],
  translations: {
    en: {
      question: 'What are the eligibility criteria for B.Tech AI, is there an entrance exam for M.Sc. Biotechnology, what is the last date to apply for 2026, can I apply offline, and what documents are required for NRI quota admission?',
      answer: 'For B.Tech AI, candidates must complete 10+2 with Physics, Mathematics, and Chemistry or Computer Science with minimum required marks. M.Sc. Biotechnology requires a relevant bachelor’s degree and may involve an entrance exam or merit-based selection. The last date to apply for the 2026 academic year is 30 June 2026. The application process is primarily online, while offline applications are allowed only in special cases. For NRI quota admission, required documents include passport copy, NRI sponsor proof, academic certificates, valid visa, and residence proof abroad.'
    },
    hi: {
      question: 'B.Tech AI की पात्रता क्या है, M.Sc. बायोटेक्नोलॉजी में प्रवेश परीक्षा है, 2026 की आखिरी तारीख क्या है, क्या ऑफलाइन आवेदन संभव है, और NRI कोटा के लिए कौन से दस्तावेज चाहिए?',
      answer: 'B.Tech AI के लिए 10+2 में भौतिकी, गणित और रसायन या कंप्यूटर साइंस के साथ न्यूनतम अंक आवश्यक हैं। M.Sc. बायोटेक्नोलॉजी के लिए संबंधित स्नातक डिग्री और प्रवेश परीक्षा या मेरिट आधारित चयन हो सकता है। 2026 के लिए अंतिम तिथि 30 जून 2026 है। आवेदन प्रक्रिया मुख्य रूप से ऑनलाइन है, विशेष मामलों में ऑफलाइन अनुमति है। NRI कोटा के लिए पासपोर्ट कॉपी, स्पॉन्सर प्रमाण, शैक्षणिक प्रमाणपत्र, वीज़ा और विदेश निवास प्रमाण आवश्यक हैं।'
    },
    mr: {
      question: 'B.Tech AI साठी पात्रता काय आहे, MSc बायोटेक प्रवेश परीक्षा आहे का, 2026 ची अंतिम तारीख काय, ऑफलाइन अर्ज शक्य आहे का, आणि NRI कोटा साठी कोणती कागदपत्रे आवश्यक आहेत?',
      answer: 'B.Tech AI साठी 10+2 मध्ये भौतिकशास्त्र, गणित आणि रसायनशास्त्र किंवा संगणकशास्त्रासह आवश्यक गुण असावेत. MSc बायोटेकसाठी संबंधित पदवी आणि प्रवेश परीक्षा किंवा मेरिटवर आधारित निवड होते. 2026 साठी अंतिम तारीख 30 जून 2026 आहे. अर्ज प्रक्रिया मुख्यतः ऑनलाइन आहे, विशेष प्रकरणात ऑफलाइन अर्ज स्वीकारले जातात. NRI कोटा साठी पासपोर्ट प्रत, स्पॉन्सर पुरावा, शैक्षणिक प्रमाणपत्रे, व्हिसा आणि परदेशातील रहिवासाचा पुरावा आवश्यक आहे.'
    },
    kn: {
      question: 'B.Tech AI ಅರ್ಹತೆ ಏನು, MSc ಬಯೋಟೆಕ್ನಾಲಜಿ ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಇದೆಯೇ, 2026 ಕೊನೆಯ ದಿನಾಂಕ ಯಾವುದು, ಆಫ್‌ಲೈನ್ ಅರ್ಜಿ ಸಾಧ್ಯವೇ, ಮತ್ತು NRI ಕೋಟಾ ದಾಖಲೆಗಳು ಯಾವುವು?',
      answer: 'B.Tech AI ಗೆ 10+2 ನಲ್ಲಿ ಭೌತಶಾಸ್ತ್ರ, ಗಣಿತ ಮತ್ತು ರಸಾಯನಶಾಸ್ತ್ರ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್‌ನಲ್ಲಿ ಅಗತ್ಯ ಅಂಕಗಳು ಬೇಕು. MSc ಬಯೋಟೆಕ್ನಾಲಜಿಗೆ ಸಂಬಂಧಿತ ಪದವಿ ಮತ್ತು ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಅಥವಾ ಮೆರುಗು ಆಧಾರಿತ ಆಯ್ಕೆ ಇರುತ್ತದೆ. 2026 ಅರ್ಜಿ ಕೊನೆಯ ದಿನಾಂಕ 30 ಜೂನ್ 2026. ಪ್ರಕ್ರಿಯೆ ಮುಖ್ಯವಾಗಿ ಆನ್‌ಲೈನ್, ವಿಶೇಷ ಸಂದರ್ಭಗಳಲ್ಲಿ ಆಫ್‌ಲೈನ್ ಅನುಮತಿ ಇದೆ. NRI ಕೋಟಾಗಾಗಿ ಪಾಸ್‌ಪೋರ್ಟ್ ಪ್ರತ, ಸ್ಪಾನ್ಸರ್ ದಾಖಲೆ, ಶೈಕ್ಷಣಿಕ ಪ್ರಮಾಣಪತ್ರಗಳು, ವೀಸಾ ಮತ್ತು ವಾಸದ ಸಾಕ್ಷಿ ಅಗತ್ಯ.'
    },
    te: {
      question: 'B.Tech AI అర్హత ఏమిటి, MSc బయోటెక్నాలజీ ప్రవేశ పరీక్ష ఉందా, 2026 చివరి తేదీ ఏమిటి, ఆఫ్‌లైన్ దరఖాస్తు సాధ్యమా, మరియు NRI కోటా కోసం ఏ డాక్యుమెంట్లు అవసరం?',
      answer: 'B.Tech AI కోసం 10+2లో ఫిజిక్స్, మ్యాథ్స్, కెమిస్ట్రీ లేదా కంప్యూటర్ సైన్స్‌లో కనీస మార్కులు అవసరం. MSc బయోటెక్నాలజీకి సంబంధిత డిగ్రీ మరియు ప్రవేశ పరీక్ష లేదా మెరిట్ ఆధారిత ఎంపిక ఉంటుంది. 2026 చివరి తేదీ 30 జూన్ 2026. దరఖాస్తు ప్రధానంగా ఆన్‌లైన్, ప్రత్యేక సందర్భాల్లో ఆఫ్‌లైన్ అనుమతి ఉంది. NRI కోటా కోసం పాస్‌పోర్ట్ కాపీ, స్పాన్సర్ ప్రూఫ్, విద్యా సర్టిఫికెట్లు, వీసా మరియు నివాస ఆధారాలు అవసరం.'
    }
  }
},
{
  id: '88',
  intent: 'Scholarship_Application',
  category: 'Scholarships',
  priority: 1,
  keywords: ['scholarship apply', 'SC ST scholarship', 'EBC income limit', 'multiple scholarships', 'scholarship status', 'application rejected'],
  synonyms: ['post matric scholarship', 'scholarship eligibility', 'track scholarship', 'scholarship deadline', 'scholarship documents'],
  translations: {
    en: {
      question: 'How do I apply for the SC/ST post-matric scholarship, what is the income limit for EBC, can I apply for multiple scholarships, how do I track status, and what happens if my scholarship is rejected?',
      answer: 'Apply through the government scholarship portal by registering with your Aadhaar and academic details, then submit the required documents before the deadline. The income limit for EBC scholarship is as per government norms and updated yearly. Students may apply for multiple scholarships, but only one eligible scholarship will be approved. You can track your application status on the scholarship portal using your application ID. If your application is rejected, you can check the reason, correct the documents, and reapply or contact the scholarship office for support.'
    },
    hi: {
      question: 'SC/ST पोस्ट-मैट्रिक छात्रवृत्ति के लिए आवेदन कैसे करें, EBC आय सीमा क्या है, क्या कई छात्रवृत्तियों के लिए आवेदन कर सकते हैं, स्थिति कैसे देखें, और अस्वीकृति होने पर क्या होगा?',
      answer: 'सरकारी छात्रवृत्ति पोर्टल पर आधार और शैक्षणिक जानकारी से पंजीकरण करके आवेदन करें और अंतिम तिथि से पहले दस्तावेज़ जमा करें। EBC आय सीमा सरकारी नियमों के अनुसार होती है और हर वर्ष अपडेट होती है। छात्र कई छात्रवृत्तियों के लिए आवेदन कर सकते हैं, लेकिन केवल एक पात्र छात्रवृत्ति स्वीकृत होगी। आवेदन की स्थिति पोर्टल पर आवेदन आईडी से ट्रैक की जा सकती है। अस्वीकृति होने पर कारण जांचें, दस्तावेज़ सुधारें और पुनः आवेदन करें या छात्रवृत्ति कार्यालय से संपर्क करें।'
    },
    mr: {
      question: 'SC/ST पोस्ट-मॅट्रिक शिष्यवृत्तीसाठी अर्ज कसा करावा, EBC उत्पन्न मर्यादा काय आहे, अनेक शिष्यवृत्त्यांसाठी अर्ज करू शकतो का, स्थिती कशी तपासावी, आणि अर्ज नाकारल्यास काय करावे?',
      answer: 'सरकारी शिष्यवृत्ती पोर्टलवर आधार आणि शैक्षणिक तपशीलांसह नोंदणी करून अर्ज करा आणि अंतिम तारखेपूर्वी कागदपत्रे सादर करा. EBC उत्पन्न मर्यादा सरकारी नियमांनुसार दरवर्षी अद्ययावत केली जाते. विद्यार्थी अनेक शिष्यवृत्त्यांसाठी अर्ज करू शकतात, परंतु फक्त एक पात्र शिष्यवृत्ती मंजूर होते. अर्जाची स्थिती पोर्टलवर अर्ज आयडीने तपासता येते. अर्ज नाकारल्यास कारण तपासा, कागदपत्रे सुधारून पुन्हा अर्ज करा किंवा शिष्यवृत्ती कार्यालयाशी संपर्क साधा.'
    },
    kn: {
      question: 'SC/ST ಪೋಸ್ಟ್-ಮ್ಯಾಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನಕ್ಕೆ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು, EBC ಆದಾಯ ಮಿತಿ ಎಷ್ಟು, ಅನೇಕ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳಿಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದೇ, ಸ್ಥಿತಿ ಹೇಗೆ ಪರಿಶೀಲಿಸಬೇಕು, ಮತ್ತು ತಿರಸ್ಕಾರವಾದರೆ ಏನು ಮಾಡಬೇಕು?',
      answer: 'ಸರ್ಕಾರದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಆಧಾರ್ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಿವರಗಳಿಂದ ನೋಂದಣಿ ಮಾಡಿ, ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಗಡುವಿನೊಳಗೆ ಸಲ್ಲಿಸಿ. EBC ಆದಾಯ ಮಿತಿ ಸರ್ಕಾರದ ನಿಯಮಾನುಸಾರ ಪ್ರತಿ ವರ್ಷ ನವೀಕರಿಸಲಾಗುತ್ತದೆ. ವಿದ್ಯಾರ್ಥಿಗಳು ಅನೇಕ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳಿಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದು, ಆದರೆ ಒಂದೇ ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅನುಮೋದನೆ ಸಿಗುತ್ತದೆ. ಅರ್ಜಿ ಸ್ಥಿತಿಯನ್ನು ಅರ್ಜಿ ಐಡಿ ಮೂಲಕ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಬಹುದು. ಅರ್ಜಿ ತಿರಸ್ಕೃತವಾದರೆ ಕಾರಣ ತಿಳಿದು, ದಾಖಲೆಗಳನ್ನು ಸರಿಪಡಿಸಿ ಮರುಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಬಹುದು ಅಥವಾ ವಿದ್ಯಾರ್ಥಿವೇತನ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.'
    },
    te: {
      question: 'SC/ST పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్‌కు ఎలా దరఖాస్తు చేయాలి, EBC ఆదాయ పరిమితి ఎంత, అనేక స్కాలర్‌షిప్‌లకు దరఖాస్తు చేయవచ్చా, స్థితిని ఎలా చూడాలి, మరియు తిరస్కరణ అయితే ఏమి చేయాలి?',
      answer: 'ప్రభుత్వ స్కాలర్‌షిప్ పోర్టల్‌లో ఆధార్ మరియు విద్యా వివరాలతో నమోదు చేసి, అవసరమైన పత్రాలను గడువులోగా సమర్పించాలి. EBC ఆదాయ పరిమితి ప్రభుత్వ నియమాల ప్రకారం ప్రతి సంవత్సరం మారుతుంది. విద్యార్థులు అనేక స్కాలర్‌షిప్‌లకు దరఖాస్తు చేయవచ్చు, కానీ ఒకే అర్హత గల స్కాలర్‌షిప్ మంజూరు అవుతుంది. దరఖాస్తు స్థితిని అప్లికేషన్ ఐడి ద్వారా పోర్టల్‌లో చూడవచ్చు. తిరస్కరణ అయితే కారణాన్ని తెలుసుకొని, పత్రాలను సరిచేసి మళ్లీ దరఖాస్తు చేయాలి లేదా స్కాలర్‌షిప్ కార్యాలయాన్ని సంప్రదించాలి.'
    }
  }
},
{
  id: '89',
  intent: 'Hostel_Facilities',
  category: 'Hostel',
  priority: 1,
  keywords: ['hostel room allocation', 'roommate selection', 'hostel amenities', 'mess complaint', 'hostel visitors', 'FCFS hostel'],
  synonyms: ['hostel rules', 'hostel facilities', 'room allotment policy', 'mess food complaint', 'visitor policy'],
  translations: {
    en: {
      question: 'How are hostel rooms allocated, can I choose my roommate, what amenities are provided, how do I complain about mess food, and are visitors allowed?',
      answer: 'Hostel rooms are generally allotted on a first-come-first-serve basis after application approval and fee payment. Roommates are usually assigned randomly, but mutual requests may be considered. Rooms include basic furniture, Wi-Fi, electricity, and in some blocks AC facilities. Mess complaints can be submitted through the hostel app or directly to the warden. Visitors are allowed during specified visiting hours with entry registration.'
    },
    hi: {
      question: 'हॉस्टल कमरे कैसे आवंटित होते हैं, क्या मैं रूममेट चुन सकता हूं, कौन सी सुविधाएँ मिलती हैं, मैस शिकायत कैसे करें, और क्या आगंतुकों की अनुमति है?',
      answer: 'हॉस्टल कमरे आवेदन स्वीकृति और शुल्क जमा करने के बाद पहले-आओ-पहले-पाओ आधार पर आवंटित किए जाते हैं। रूममेट सामान्यतः यादृच्छिक रूप से दिए जाते हैं, लेकिन आपसी अनुरोध पर विचार किया जा सकता है। कमरों में बुनियादी फर्नीचर, वाई-फाई, बिजली और कुछ ब्लॉकों में एसी सुविधा होती है। मैस शिकायत हॉस्टल ऐप या वार्डन को दी जा सकती है। आगंतुक निर्धारित समय में पंजीकरण के साथ अनुमति प्राप्त कर सकते हैं।'
    },
    mr: {
      question: 'हॉस्टल रूम कसे वाटप होतात, रूममेट निवडता येतो का, कोणत्या सोयी आहेत, मेस तक्रार कशी करावी, आणि पाहुण्यांना परवानगी आहे का?',
      answer: 'हॉस्टल रूम अर्ज मंजुरी आणि फी भरल्यानंतर प्रथम-आले-प्रथम-सेवा तत्त्वावर वाटप केले जातात. रूममेट साधारणपणे यादृच्छिक असतात, परंतु परस्पर विनंती असल्यास विचार केला जाऊ शकतो. रूममध्ये मूलभूत फर्निचर, वाय-फाय, वीज आणि काही ब्लॉक्समध्ये एसी सुविधा असते. मेस तक्रार हॉस्टल ॲपद्वारे किंवा वार्डनकडे करता येते. पाहुण्यांना ठराविक वेळेत नोंदणीसह परवानगी दिली जाते.'
    },
    kn: {
      question: 'ಹಾಸ್ಟೆಲ್ ಕೊಠಡಿಗಳನ್ನು ಹೇಗೆ ಹಂಚಲಾಗುತ್ತದೆ, ರೂಮ್‌ಮೇಟ್ ಆಯ್ಕೆ ಮಾಡಬಹುದೇ, ಯಾವ ಸೌಲಭ್ಯಗಳಿವೆ, ಮೆಸ್ ದೂರು ಹೇಗೆ ನೀಡಬೇಕು, ಮತ್ತು ಸಂದರ್ಶಕರಿಗೆ ಅನುಮತಿ ಇದೆಯೇ?',
      answer: 'ಹಾಸ್ಟೆಲ್ ಕೊಠಡಿಗಳು ಅರ್ಜಿ ಅನುಮೋದನೆ ಮತ್ತು ಶುಲ್ಕ ಪಾವತಿ ನಂತರ ಮೊದಲ ಬರುವವರಿಗೆ ಮೊದಲ ಸೇವೆ ಆಧಾರದ ಮೇಲೆ ಹಂಚಲಾಗುತ್ತವೆ. ರೂಮ್‌ಮೇಟ್ ಸಾಮಾನ್ಯವಾಗಿ ಯಾದೃಚ್ಛಿಕವಾಗಿ ನೀಡಲಾಗುತ್ತದೆ, ಆದರೆ ಪರಸ್ಪರ ವಿನಂತಿ ಇದ್ದರೆ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಕೊಠಡಿಗಳಲ್ಲಿ ಮೂಲಭೂತ ಪೀಠೋಪಕರಣ, ವೈ-ಫೈ, ವಿದ್ಯುತ್ ಮತ್ತು ಕೆಲವು ಬ್ಲಾಕ್‌ಗಳಲ್ಲಿ ಎಸಿ ಸೌಲಭ್ಯವಿದೆ. ಮೆಸ್ ದೂರುಗಳನ್ನು ಹಾಸ್ಟೆಲ್ ಆಪ್ ಅಥವಾ ವಾರ್ಡನ್‌ಗೆ ಸಲ್ಲಿಸಬಹುದು. ಸಂದರ್ಶಕರಿಗೆ ನಿರ್ದಿಷ್ಟ ಸಮಯದಲ್ಲಿ ನೋಂದಣಿಯೊಂದಿಗೆ ಅನುಮತಿ ಇದೆ.'
    },
    te: {
      question: 'హాస్టల్ గదులు ఎలా కేటాయిస్తారు, రూమ్‌మేట్ ఎంచుకోవచ్చా, ఏమి సౌకర్యాలు ఉన్నాయి, మెస్ ఫిర్యాదు ఎలా చేయాలి, మరియు సందర్శకులకు అనుమతి ఉందా?',
      answer: 'హాస్టల్ గదులు దరఖాస్తు ఆమోదం మరియు ఫీజు చెల్లించిన తర్వాత ఫస్ట్-కమ్-ఫస్ట్-సర్వ్ పద్ధతిలో కేటాయించబడతాయి. రూమ్‌మేట్ సాధారణంగా యాదృచ్ఛికంగా కేటాయిస్తారు, కానీ పరస్పర అభ్యర్థనలపై పరిగణించవచ్చు. గదుల్లో ప్రాథమిక ఫర్నిచర్, వై-ఫై, విద్యుత్ మరియు కొన్ని బ్లాక్స్‌లో ఎసి సౌకర్యం ఉంటుంది. మెస్ ఫిర్యాదులు హాస్టల్ యాప్ ద్వారా లేదా వార్డెన్‌కు ఇవ్వవచ్చు. సందర్శకులు నిర్ణీత సమయాల్లో నమోదు చేసుకుని అనుమతి పొందవచ్చు.'
    }
  }
},
{
  id: '90',
  intent: 'Examination_Timetable',
  category: 'Examination',
  priority: 1,
  keywords: ['exam timetable', 'semester exam dates', 'hall ticket download', 'exam syllabus change', 'late exam form', 'exam center change'],
  synonyms: ['exam schedule', 'exam admit card', 'test dates', 'exam pattern', 'exam form deadline', 'exam venue change'],
  translations: {
    en: {
      question: 'When will the semester-end examination timetable be released, where can I download the hall ticket, is there any syllabus change, what is the grace period for late exam form submission, and how can I request a change in my exam center?',
      answer: 'The semester-end examination timetable is usually released 3–4 weeks before the exams on the official college website and notice board. Hall tickets can be downloaded from the student portal using login credentials. Any syllabus changes will be communicated by the respective department or updated on the website. The grace period for late exam form submission is generally 3–7 days with a late fee. To request a change in the exam center, students must submit a written application to the examination section along with valid supporting documents.'
    },
    hi: {
      question: 'सेमेस्टर-एंड परीक्षा समय-सारणी कब जारी होगी, हॉल टिकट कहाँ से डाउनलोड करें, क्या सिलेबस में बदलाव है, परीक्षा फॉर्म देर से जमा करने की अवधि क्या है, और परीक्षा केंद्र कैसे बदलें?',
      answer: 'सेमेस्टर-एंड परीक्षा समय-सारणी आमतौर पर परीक्षा से 3–4 सप्ताह पहले कॉलेज की आधिकारिक वेबसाइट और नोटिस बोर्ड पर जारी की जाती है। हॉल टिकट छात्र पोर्टल से लॉगिन करके डाउनलोड किया जा सकता है। सिलेबस में किसी भी बदलाव की जानकारी संबंधित विभाग या वेबसाइट पर दी जाती है। परीक्षा फॉर्म देर से जमा करने के लिए सामान्यतः 3–7 दिन की अवधि होती है और विलंब शुल्क लागू होता है। परीक्षा केंद्र बदलने के लिए छात्रों को परीक्षा विभाग में लिखित आवेदन और आवश्यक दस्तावेज जमा करने होते हैं।'
    },
    mr: {
      question: 'सेमिस्टर परीक्षा वेळापत्रक कधी जाहीर होईल, हॉल तिकीट कुठून डाउनलोड करायचे, अभ्यासक्रमात बदल आहे का, परीक्षा फॉर्म उशिरा सादर करण्यासाठी मुदत किती आहे, आणि परीक्षा केंद्र कसे बदलायचे?',
      answer: 'सेमिस्टर-एंड परीक्षा वेळापत्रक साधारणपणे परीक्षेच्या 3–4 आठवडे आधी अधिकृत वेबसाइट आणि नोटीस बोर्डवर जाहीर केले जाते. हॉल तिकीट विद्यार्थी पोर्टलवरून लॉगिन करून डाउनलोड करता येते. अभ्यासक्रमातील बदल संबंधित विभाग किंवा वेबसाइटवर जाहीर केले जातात. परीक्षा फॉर्म उशिरा सादर करण्यासाठी साधारण 3–7 दिवसांची मुदत असते आणि विलंब शुल्क लागू होते. परीक्षा केंद्र बदलण्यासाठी परीक्षा विभागाकडे लेखी अर्ज आणि आवश्यक कागदपत्रे जमा करावी लागतात.'
    },
    kn: {
      question: 'ಸೆಮಿಸ್ಟರ್ ಪರೀಕ್ಷಾ ವೇಳಾಪಟ್ಟಿ ಯಾವಾಗ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ, ಹಾಲ್ ಟಿಕೆಟ್ ಎಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಕು, ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಬದಲಾವಣೆ ಇದೆಯೇ, ಪರೀಕ್ಷಾ ಫಾರ್ಮ್ ತಡವಾಗಿ ಸಲ್ಲಿಸಲು ಅವಧಿ ಎಷ್ಟು, ಮತ್ತು ಪರೀಕ್ಷಾ ಕೇಂದ್ರವನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸಬಹುದು?',
      answer: 'ಸೆಮಿಸ್ಟರ್ ಅಂತಿಮ ಪರೀಕ್ಷಾ ವೇಳಾಪಟ್ಟಿ ಸಾಮಾನ್ಯವಾಗಿ ಪರೀಕ್ಷೆಗೆ 3–4 ವಾರಗಳ ಮೊದಲು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಸೂಚನಾ ಫಲಕದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ಹಾಲ್ ಟಿಕೆಟ್ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್‌ನಿಂದ ಲಾಗಿನ್ ಮಾಡಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು. ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಬದಲಾವಣೆ ಇದ್ದರೆ ಸಂಬಂಧಿತ ವಿಭಾಗ ತಿಳಿಸುತ್ತದೆ. ಪರೀಕ್ಷಾ ಫಾರ್ಮ್ ತಡವಾಗಿ ಸಲ್ಲಿಸಲು ಸಾಮಾನ್ಯವಾಗಿ 3–7 ದಿನಗಳ ಅವಧಿ ಇರುತ್ತದೆ ಮತ್ತು ದಂಡ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಪರೀಕ್ಷಾ ಕೇಂದ್ರ ಬದಲಾವಣೆಗಾಗಿ ಪರೀಕ್ಷಾ ವಿಭಾಗಕ್ಕೆ ಲಿಖಿತ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು.'
    },
    te: {
      question: 'సెమిస్టర్ పరీక్షా సమయపట్టిక ఎప్పుడు విడుదల అవుతుంది, హాల్ టికెట్ ఎక్కడ డౌన్‌లోడ్ చేయాలి, సిలబస్‌లో మార్పులు ఉన్నాయా, ఆలస్యంగా ఫారమ్ సమర్పించడానికి గ్రేస్ పీరియడ్ ఎంత, మరియు పరీక్షా కేంద్రాన్ని ఎలా మార్చాలి?',
      answer: 'సెమిస్టర్ ముగింపు పరీక్షల సమయపట్టిక సాధారణంగా పరీక్షలకు 3–4 వారాల ముందు అధికారిక వెబ్‌సైట్ మరియు నోటీస్ బోర్డులో విడుదల అవుతుంది. హాల్ టికెట్ స్టూడెంట్ పోర్టల్ ద్వారా డౌన్‌లోడ్ చేయవచ్చు. సిలబస్‌లో మార్పులు ఉంటే సంబంధిత విభాగం తెలియజేస్తుంది. ఆలస్యంగా పరీక్ష ఫారమ్ సమర్పించడానికి సాధారణంగా 3–7 రోజుల గ్రేస్ పీరియడ్ ఉంటుంది మరియు ఫైన్ ఉంటుంది. పరీక్షా కేంద్రం మార్పు కోసం పరీక్ష విభాగానికి రాతపూర్వకంగా దరఖాస్తు చేయాలి.'
    }
  }
},
{
  id: '91',
  intent: 'Library_Services',
  category: 'Library',
  priority: 1,
  keywords: ['library book issue', 'number of books', 'e books access', 'library timing exam', 'reserve book', 'digital library app'],
  synonyms: ['library membership', 'online journals', 'library schedule', 'book reservation', 'library mobile access'],
  translations: {
    en: {
      question: 'How many books can I issue from the library, how do I access e-books and journals, what are the library timings during exams, can I reserve issued books, and is there a digital library mobile app?',
      answer: 'Students can usually issue 3–5 books at a time depending on their course and membership. E-books and journals can be accessed through the college library portal using student login credentials. During exam season, library timings are often extended, including evening hours. Students can reserve books that are currently issued by placing an online request or informing the librarian. Many colleges also provide a digital library or mobile app for accessing e-resources, renewal, and reservations.'
    },
    hi: {
      question: 'लाइब्रेरी से कितनी किताबें जारी कर सकते हैं, ई-बुक्स और जर्नल्स कैसे एक्सेस करें, परीक्षा के दौरान लाइब्रेरी का समय क्या है, क्या जारी किताब को रिजर्व कर सकते हैं, और क्या कोई मोबाइल ऐप है?',
      answer: 'छात्र सामान्यतः एक समय में 3–5 किताबें जारी कर सकते हैं, यह कोर्स और सदस्यता पर निर्भर करता है। ई-बुक्स और जर्नल्स कॉलेज लाइब्रेरी पोर्टल से लॉगिन करके एक्सेस किए जा सकते हैं। परीक्षा के दौरान लाइब्रेरी समय बढ़ाया जाता है और शाम तक खुली रहती है। जो किताब पहले से जारी है उसे ऑनलाइन अनुरोध या लाइब्रेरियन को बताकर रिजर्व किया जा सकता है। कई कॉलेज डिजिटल लाइब्रेरी या मोबाइल ऐप भी प्रदान करते हैं।'
    },
    mr: {
      question: 'लायब्ररीमधून किती पुस्तके घेऊ शकतो, ई-बुक्स कसे वापरायचे, परीक्षेत वेळ काय असतो, पुस्तक रिझर्व्ह करता येते का, आणि मोबाईल अॅप आहे का?',
      answer: 'विद्यार्थी साधारणपणे एकावेळी 3–5 पुस्तके घेऊ शकतात, हे कोर्स आणि सदस्यत्वावर अवलंबून असते. ई-बुक्स आणि जर्नल्स लायब्ररी पोर्टलवरून लॉगिन करून वापरता येतात. परीक्षा काळात लायब्ररीची वेळ वाढवली जाते. आधीच दिलेले पुस्तक ऑनलाइन विनंती करून किंवा लायब्रेरियनला सांगून रिझर्व्ह करता येते. अनेक कॉलेज डिजिटल लायब्ररी किंवा मोबाईल अॅप देतात.'
    },
    kn: {
      question: 'ಲೈಬ್ರರಿಯಿಂದ ಎಷ್ಟು ಪುಸ್ತಕಗಳನ್ನು ಪಡೆಯಬಹುದು, ಇ-ಪುಸ್ತಕಗಳನ್ನು ಹೇಗೆ ಪ್ರವೇಶಿಸಬಹುದು, ಪರೀಕ್ಷಾ ಸಮಯದಲ್ಲಿ ಸಮಯ ಯಾವುದು, ನೀಡಿದ ಪುಸ್ತಕವನ್ನು ಮೀಸಲು ಇಡಬಹುದೇ, ಮತ್ತು ಮೊಬೈಲ್ ಆ್ಯಪ್ ಇದೆಯೇ?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ 3–5 ಪುಸ್ತಕಗಳನ್ನು ಪಡೆಯಬಹುದು, ಇದು ಕೋರ್ಸ್ ಮತ್ತು ಸದಸ್ಯತ್ವದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ಇ-ಪುಸ್ತಕಗಳು ಮತ್ತು ಜರ್ನಲ್‌ಗಳನ್ನು ಲೈಬ್ರರಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ಪ್ರವೇಶಿಸಬಹುದು. ಪರೀಕ್ಷಾ ಸಮಯದಲ್ಲಿ ಸಮಯವನ್ನು ವಿಸ್ತರಿಸಲಾಗುತ್ತದೆ. ನೀಡಿರುವ ಪುಸ್ತಕವನ್ನು ಆನ್‌ಲೈನ್ ವಿನಂತಿ ಮೂಲಕ ಅಥವಾ ಲೈಬ್ರೇರಿಯನ್‌ಗೆ ತಿಳಿಸಿ ಮೀಸಲು ಇಡಬಹುದು. ಕೆಲವು ಕಾಲೇಜುಗಳು ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ ಮೊಬೈಲ್ ಆ್ಯಪ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ.'
    },
    te: {
      question: 'లైబ్రరీ నుండి ఎన్ని పుస్తకాలు తీసుకోవచ్చు, ఇ-బుక్‌లను ఎలా యాక్సెస్ చేయాలి, పరీక్ష సమయంలో టైమింగ్స్ ఏమిటి, జారీ చేసిన పుస్తకాన్ని రిజర్వ్ చేయవచ్చా, మరియు మొబైల్ యాప్ ఉందా?',
      answer: 'విద్యార్థులు సాధారణంగా ఒకేసారి 3–5 పుస్తకాలు తీసుకోవచ్చు, ఇది కోర్సు మరియు సభ్యత్వంపై ఆధారపడుతుంది. ఇ-బుక్‌లు మరియు జర్నల్‌లు లైబ్రరీ పోర్టల్ ద్వారా యాక్సెస్ చేయవచ్చు. పరీక్షల సమయంలో లైబ్రరీ టైమింగ్స్ పెంచబడతాయి. ఇప్పటికే జారీ చేసిన పుస్తకాన్ని ఆన్‌లైన్ రిక్వెస్ట్ ద్వారా లేదా లైబ్రేరియన్‌ను సంప్రదించి రిజర్వ్ చేయవచ్చు. చాలా కాలేజీలు డిజిటల్ లైబ్రరీ లేదా మొబైల్ యాప్‌ను అందిస్తాయి.'
    }
  }
},
{
  id: '92',
  intent: 'Campus_Transport',
  category: 'Transport',
  priority: 1,
  keywords: ['bus routes', 'college bus pass', 'bus timings', 'first bus', 'last bus', 'emergency travel', 'bus live tracking'],
  synonyms: ['transport service', 'monthly pass cost', 'bus schedule', 'campus bus timing', 'bus stop list', 'GPS bus tracking'],
  translations: {
    en: {
      question: 'What are the college bus routes, how much does the monthly bus pass cost, what are the first and last bus timings, can I travel without a pass in emergencies, and where can I track buses live?',
      answer: 'The college operates multiple bus routes connecting major areas of the city to the campus. Route details and stop lists are available on the transport notice board and official website. The monthly bus pass cost varies depending on distance and route. The first bus usually departs around 7:00 AM and the last bus leaves campus around 5:30–6:00 PM. In emergency situations, students may be allowed to board without a pass after informing the transport in-charge. Live tracking of college buses is available through the official transport app or student portal if provided by the institution.'
    },
    hi: {
      question: 'कॉलेज बस रूट क्या हैं, मासिक पास की कीमत कितनी है, पहली और आखिरी बस का समय क्या है, क्या आपातकाल में बिना पास यात्रा कर सकते हैं, और लाइव ट्रैकिंग कहाँ मिलेगी?',
      answer: 'कॉलेज शहर के प्रमुख क्षेत्रों से कैंपस तक कई बस रूट संचालित करता है। रूट और स्टॉप की जानकारी ट्रांसपोर्ट नोटिस बोर्ड या आधिकारिक वेबसाइट पर उपलब्ध है। मासिक बस पास की कीमत दूरी के अनुसार अलग होती है। पहली बस आमतौर पर सुबह 7:00 बजे और आखिरी बस शाम 5:30–6:00 बजे के बीच निकलती है। आपातकाल में ट्रांसपोर्ट इंचार्ज की अनुमति से बिना पास यात्रा की जा सकती है। लाइव ट्रैकिंग आधिकारिक ट्रांसपोर्ट ऐप या छात्र पोर्टल पर उपलब्ध होती है।'
    },
    mr: {
      question: 'कॉलेज बस रूट कोणते आहेत, मासिक पास किती आहे, पहिली आणि शेवटची बस किती वाजता असते, आपत्कालात पासशिवाय प्रवास करता येतो का, आणि लाइव्ह ट्रॅकिंग कुठे मिळेल?',
      answer: 'कॉलेज शहरातील प्रमुख भागांमधून कॅम्पसपर्यंत अनेक बस रूट चालवते. रूट आणि थांब्यांची माहिती ट्रान्सपोर्ट नोटीस बोर्ड किंवा अधिकृत वेबसाइटवर मिळते. मासिक पासची किंमत अंतरानुसार बदलते. पहिली बस साधारण सकाळी 7:00 वाजता आणि शेवटची बस संध्याकाळी 5:30–6:00 वाजता सुटते. आपत्कालीन परिस्थितीत ट्रान्सपोर्ट इंचार्जची परवानगी घेऊन पासशिवाय प्रवास करता येतो. लाइव्ह ट्रॅकिंग अधिकृत अॅप किंवा विद्यार्थी पोर्टलवर उपलब्ध असते.'
    },
    kn: {
      question: 'ಕಾಲೇಜ್ ಬಸ್ ಮಾರ್ಗಗಳು ಯಾವುವು, ಮಾಸಿಕ ಪಾಸ್ ದರ ಎಷ್ಟು, ಮೊದಲ ಮತ್ತು ಕೊನೆಯ ಬಸ್ ಸಮಯ ಯಾವುದು, ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಪಾಸ್ ಇಲ್ಲದೆ ಪ್ರಯಾಣ ಮಾಡಬಹುದೇ, ಮತ್ತು ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ?',
      answer: 'ಕಾಲೇಜು ನಗರದಲ್ಲಿನ ಪ್ರಮುಖ ಪ್ರದೇಶಗಳಿಂದ ಕ್ಯಾಂಪಸ್‌ಗೆ ಹಲವು ಬಸ್ ಮಾರ್ಗಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ಮಾರ್ಗ ಮತ್ತು ನಿಲ್ದಾಣಗಳ ವಿವರಗಳು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಅಥವಾ ಸಾರಿಗೆ ಸೂಚನಾ ಫಲಕದಲ್ಲಿ ಲಭ್ಯವಿವೆ. ಮಾಸಿಕ ಪಾಸ್ ದರ ದೂರದ ಆಧಾರದ ಮೇಲೆ ಬದಲಾಗುತ್ತದೆ. ಮೊದಲ ಬಸ್ ಸಾಮಾನ್ಯವಾಗಿ ಬೆಳಿಗ್ಗೆ 7:00ಕ್ಕೆ ಮತ್ತು ಕೊನೆಯ ಬಸ್ ಸಂಜೆ 5:30–6:00ರ ನಡುವೆ ಹೊರಡುತ್ತದೆ. ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಸಾರಿಗೆ ಅಧಿಕಾರಿಯ ಅನುಮತಿಯೊಂದಿಗೆ ಪಾಸ್ ಇಲ್ಲದೆ ಪ್ರಯಾಣ ಮಾಡಲು ಅವಕಾಶ ಇರಬಹುದು. ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಅಧಿಕೃತ ಆಪ್ ಅಥವಾ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಲಭ್ಯವಿದೆ.'
    },
    te: {
      question: 'కాలేజ్ బస్ మార్గాలు ఏమిటి, నెలవారీ పాస్ ధర ఎంత, మొదటి మరియు చివరి బస్ సమయం ఏమిటి, అత్యవసర పరిస్థితుల్లో పాస్ లేకుండా ప్రయాణించవచ్చా, మరియు లైవ్ ట్రాకింగ్ ఎక్కడ దొరుకుతుంది?',
      answer: 'కాలేజ్ నగరంలోని ప్రధాన ప్రాంతాల నుండి క్యాంపస్‌కు అనేక బస్ మార్గాలను నిర్వహిస్తుంది. మార్గాలు మరియు స్టాప్ వివరాలు అధికారిక వెబ్‌సైట్ లేదా ట్రాన్స్‌పోర్ట్ నోటీస్ బోర్డులో అందుబాటులో ఉంటాయి. నెలవారీ పాస్ ధర దూరాన్ని బట్టి మారుతుంది. మొదటి బస్ సాధారణంగా ఉదయం 7:00 గంటలకు మరియు చివరి బస్ సాయంత్రం 5:30–6:00 మధ్య బయలుదేరుతుంది. అత్యవసర పరిస్థితుల్లో ట్రాన్స్‌పోర్ట్ ఇన్‌చార్జ్ అనుమతితో పాస్ లేకుండా ప్రయాణించవచ్చు. లైవ్ ట్రాకింగ్ అధికారిక యాప్ లేదా స్టూడెంట్ పోర్టల్ ద్వారా అందుబాటులో ఉంటుంది.'
    }
  }
},
{
  id: '93',
  intent: 'Placement_Cell',
  category: 'Placements',
  priority: 1,
  keywords: ['campus placement registration', 'placement companies', 'average package', 'summer internship application', 'placement training', 'job drive'],
  synonyms: ['placement cell', 'company visits', 'job opportunities', 'internship through college', 'campus recruitment training'],
  translations: {
    en: {
      question: 'How do I register for campus placements, which companies are visiting this year, what is the average package offered, how can I apply for summer internships, and does the college provide placement training?',
      answer: 'Students can register for campus placements through the placement cell portal or by submitting their details to the placement office. The list of visiting companies is published on the official website and notice board before each recruitment drive. The average package varies by course and industry, but details are shared annually by the placement cell. Students can apply for summer internships through the placement portal when internship notifications are released. The college provides placement training including aptitude tests, technical sessions, mock interviews, resume building workshops, and soft skills development programs.'
    },
    hi: {
      question: 'कैंपस प्लेसमेंट के लिए कैसे रजिस्टर करें, कौन सी कंपनियां आती हैं, औसत पैकेज क्या है, इंटर्नशिप कैसे आवेदन करें, और क्या प्रशिक्षण दिया जाता है?',
      answer: 'छात्र प्लेसमेंट सेल पोर्टल के माध्यम से या प्लेसमेंट कार्यालय में विवरण जमा करके रजिस्टर कर सकते हैं। आने वाली कंपनियों की सूची प्रत्येक ड्राइव से पहले वेबसाइट और नोटिस बोर्ड पर प्रकाशित की जाती है। औसत पैकेज कोर्स और उद्योग के अनुसार अलग होता है और इसकी जानकारी प्लेसमेंट सेल द्वारा साझा की जाती है। ग्रीष्मकालीन इंटर्नशिप के लिए छात्र प्लेसमेंट पोर्टल के माध्यम से आवेदन कर सकते हैं। कॉलेज द्वारा एप्टीट्यूड टेस्ट, तकनीकी सत्र, मॉक इंटरव्यू, रिज्यूमे वर्कशॉप और सॉफ्ट स्किल्स प्रशिक्षण दिया जाता है।'
    },
    mr: {
      question: 'कॅम्पस प्लेसमेंटसाठी नोंदणी कशी करावी, कोणत्या कंपन्या येतात, सरासरी पॅकेज किती असते, इंटर्नशिपसाठी अर्ज कसा करावा, आणि प्रशिक्षण दिले जाते का?',
      answer: 'विद्यार्थी प्लेसमेंट सेल पोर्टलद्वारे किंवा प्लेसमेंट कार्यालयात नोंदणी करू शकतात. येणाऱ्या कंपन्यांची यादी प्रत्येक ड्राइव्हपूर्वी वेबसाइट आणि नोटीस बोर्डवर जाहीर केली जाते. सरासरी पॅकेज कोर्स आणि उद्योगानुसार बदलते. उन्हाळी इंटर्नशिपसाठी विद्यार्थी प्लेसमेंट पोर्टलद्वारे अर्ज करू शकतात. कॉलेजकडून अॅप्टिट्यूड टेस्ट, तांत्रिक सत्र, मॉक इंटरव्ह्यू, रिझ्युमे वर्कशॉप आणि सॉफ्ट स्किल्स प्रशिक्षण दिले जाते.'
    },
    kn: {
      question: 'ಕ್ಯಾಂಪಸ್ ಪ್ಲೇಸ್‌ಮೆಂಟ್‌ಗೆ ಹೇಗೆ ನೋಂದಾಯಿಸಬೇಕು, ಯಾವ ಕಂಪನಿಗಳು ಬರುತ್ತವೆ, ಸರಾಸರಿ ಪ್ಯಾಕೇಜ್ ಎಷ್ಟು, ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗೆ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು, ಮತ್ತು ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆಯೇ?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಸೆಲ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅಥವಾ ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಕಚೇರಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಬಹುದು. ಭೇಟಿ ನೀಡುವ ಕಂಪನಿಗಳ ಪಟ್ಟಿ ಪ್ರತಿ ನೇಮಕಾತಿ ಡ್ರೈವ್ ಮೊದಲು ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಸೂಚನಾ ಫಲಕದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ಸರಾಸರಿ ಪ್ಯಾಕೇಜ್ ಕೋರ್ಸ್ ಮತ್ತು ಉದ್ಯಮದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ. ಬೇಸಿಗೆ ಇಂಟರ್ನ್‌ಶಿಪ್‌ಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು. ಕಾಲೇಜು ಅ್ಯಾಪ್ಟಿಟ್ಯೂಡ್ ಟೆಸ್ಟ್, ತಾಂತ್ರಿಕ ತರಗತಿಗಳು, ಮಾಕ್ ಸಂದರ್ಶನಗಳು, ರೆಸ್ಯೂಮ್ ವರ್ಕ್‌ಶಾಪ್ ಮತ್ತು ಸಾಫ್ಟ್ ಸ್ಕಿಲ್ಸ್ ತರಬೇತಿ ನೀಡುತ್ತದೆ.'
    },
    te: {
      question: 'క్యాంపస్ ప్లేస్‌మెంట్‌కు ఎలా నమోదు చేయాలి, ఏ కంపెనీలు వస్తాయి, సగటు ప్యాకేజీ ఎంత, ఇంటర్న్‌షిప్‌కు ఎలా దరఖాస్తు చేయాలి, మరియు శిక్షణ ఇస్తారా?',
      answer: 'విద్యార్థులు ప్లేస్‌మెంట్ సెల్ పోర్టల్ ద్వారా లేదా ప్లేస్‌మెంట్ కార్యాలయంలో నమోదు చేసుకోవచ్చు. వచ్చే కంపెనీల జాబితా ప్రతి డ్రైవ్‌కు ముందు వెబ్‌సైట్ మరియు నోటీస్ బోర్డులో ప్రకటించబడుతుంది. సగటు ప్యాకేజీ కోర్సు మరియు పరిశ్రమపై ఆధారపడి ఉంటుంది. సమ్మర్ ఇంటర్న్‌షిప్‌ల కోసం విద్యార్థులు ప్లేస్‌మెంట్ పోర్టల్ ద్వారా దరఖాస్తు చేయవచ్చు. కళాశాల అప్టిట్యూడ్ పరీక్షలు, టెక్నికల్ సెషన్లు, మాక్ ఇంటర్వ్యూలు, రిజ్యూమ్ వర్క్‌షాప్స్ మరియు సాఫ్ట్ స్కిల్స్ శిక్షణ అందిస్తుంది.'
    }
  }
},
{
  id: '94',
  intent: 'Fee_Payment',
  category: 'Finance',
  priority: 1,
  keywords: ['fee payment modes', 'tuition installment plan', 'fee deadline', 'fee refund process', 'late fee charges', 'online fee payment'],
  synonyms: ['payment methods', 'fee structure', 'semester fee due date', 'refund policy', 'late payment penalty', 'installment option'],
  translations: {
    en: {
      question: 'What are the accepted fee payment modes, is there an installment plan, what is the deadline for this semester, how can I apply for a refund, and are there late fees for delayed payment?',
      answer: 'Fees can be paid through online payment gateways, net banking, UPI, debit/credit cards, or directly at the accounts office via demand draft if permitted. Some courses offer installment plans upon prior approval from the administration. The fee payment deadline is announced at the beginning of each semester on the official website and notice board. To apply for a fee refund, students must submit a written application along with required documents to the accounts department as per the refund policy. Late payments may attract a penalty fee depending on the delay duration.'
    },
    hi: {
      question: 'शुल्क भुगतान के मोड क्या हैं, क्या किस्त योजना उपलब्ध है, अंतिम तिथि क्या है, रिफंड कैसे करें, और देरी शुल्क है क्या?',
      answer: 'शुल्क ऑनलाइन पेमेंट गेटवे, नेट बैंकिंग, यूपीआई, डेबिट/क्रेडिट कार्ड या अकाउंट्स कार्यालय में डिमांड ड्राफ्ट के माध्यम से जमा किया जा सकता है। कुछ कोर्स के लिए प्रशासन की अनुमति से किस्त योजना उपलब्ध हो सकती है। शुल्क भुगतान की अंतिम तिथि प्रत्येक सेमेस्टर की शुरुआत में वेबसाइट और नोटिस बोर्ड पर घोषित की जाती है। फीस रिफंड के लिए छात्रों को आवश्यक दस्तावेजों के साथ अकाउंट्स विभाग में लिखित आवेदन जमा करना होता है। देरी होने पर विलंब शुल्क लागू हो सकता है।'
    },
    mr: {
      question: 'फी भरण्याचे मोड कोणते आहेत, किस्त योजना आहे का, शेवटची तारीख काय आहे, रिफंड कसा मिळवायचा, आणि उशीर झाल्यास दंड आहे का?',
      answer: 'फी ऑनलाइन पेमेंट गेटवे, नेट बँकिंग, यूपीआय, डेबिट/क्रेडिट कार्ड किंवा अकाउंट्स ऑफिसमध्ये डिमांड ड्राफ्टद्वारे भरता येते. काही कोर्ससाठी प्रशासनाच्या परवानगीने किस्त योजना उपलब्ध असू शकते. फी भरण्याची अंतिम तारीख प्रत्येक सेमिस्टरच्या सुरुवातीला जाहीर केली जाते. फी रिफंडसाठी विद्यार्थ्यांनी आवश्यक कागदपत्रांसह अकाउंट्स विभागाकडे लेखी अर्ज करावा लागतो. उशिरा भरल्यास दंड आकारला जाऊ शकतो.'
    },
    kn: {
      question: 'ಶುಲ್ಕ ಪಾವತಿ ವಿಧಾನಗಳು ಯಾವುವು, ಕಂತು ಯೋಜನೆ ಇದೆಯೇ, ಕೊನೆಯ ದಿನಾಂಕ ಯಾವುದು, ಹಿಂಪಡೆಯಲು ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು, ಮತ್ತು ವಿಳಂಬ ಶುಲ್ಕ ಇದೆಯೇ?',
      answer: 'ಶುಲ್ಕವನ್ನು ಆನ್‌ಲೈನ್ ಪಾವತಿ ಗೇಟ್‌ವೇ, ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್, ಯುಪಿಐ, ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಅಥವಾ ಖಾತೆಗಳ ಕಚೇರಿಯಲ್ಲಿ ಡಿಮ್ಯಾಂಡ್ ಡ್ರಾಫ್ಟ್ ಮೂಲಕ ಪಾವತಿಸಬಹುದು. ಕೆಲವು ಕೋರ್ಸ್‌ಗಳಿಗೆ ಆಡಳಿತ ಅನುಮತಿಯಿಂದ ಕಂತು ಯೋಜನೆ ಲಭ್ಯವಿರಬಹುದು. ಶುಲ್ಕ ಪಾವತಿಯ ಕೊನೆಯ ದಿನಾಂಕವನ್ನು ಪ್ರತಿ ಸೆಮಿಸ್ಟರ್ ಆರಂಭದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ಹಿಂಪಡೆಯಲು ವಿದ್ಯಾರ್ಥಿಗಳು ಅಗತ್ಯ ದಾಖಲೆಗಳೊಂದಿಗೆ ಖಾತೆಗಳ ವಿಭಾಗಕ್ಕೆ ಲಿಖಿತ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು. ವಿಳಂಬವಾದಲ್ಲಿ ದಂಡ ವಿಧಿಸಬಹುದು.'
    },
    te: {
      question: 'ఫీ చెల్లింపు విధానాలు ఏమిటి, వాయిదా ప్లాన్ ఉందా, చివరి తేదీ ఏమిటి, రీఫండ్‌కు ఎలా దరఖాస్తు చేయాలి, మరియు ఆలస్య రుసుము ఉందా?',
      answer: 'ఫీని ఆన్‌లైన్ పేమెంట్ గేట్‌వే, నెట్ బ్యాంకింగ్, యూపీఐ, డెబిట్/క్రెడిట్ కార్డ్ లేదా అకౌంట్స్ కార్యాలయంలో డిమాండ్ డ్రాఫ్ట్ ద్వారా చెల్లించవచ్చు. కొన్ని కోర్సులకు పరిపాలన అనుమతితో వాయిదా ప్లాన్ అందుబాటులో ఉండవచ్చు. ఫీ చెల్లింపు చివరి తేదీ ప్రతి సెమిస్టర్ ప్రారంభంలో ప్రకటించబడుతుంది. రీఫండ్ కోసం అవసరమైన పత్రాలతో అకౌంట్స్ విభాగానికి రాతపూర్వకంగా దరఖాస్తు చేయాలి. ఆలస్యంగా చెల్లిస్తే ఫైన్ విధించబడుతుంది.'
    }
  }
},
{
  id: '95',
  intent: 'Student_Clubs',
  category: 'Student Affairs',
  priority: 2,
  keywords: ['join student club', 'campus clubs', 'club activities', 'club leadership', 'club event registration', 'start new club'],
  synonyms: ['student societies', 'club membership', 'club roles', 'club participation', 'student organizations'],
  translations: {
    en: {
      question: 'How can I join a student club, what are the active clubs and activities, can I start a new club, are leadership roles available, and how do I register for club events?',
      answer: 'Students can join clubs by registering through the student portal or during club orientation events. The college offers various active clubs such as technical, cultural, sports, entrepreneurship, and social service clubs. Students can also propose new clubs by submitting a request to the Student Affairs office with member details and a club plan. Leadership roles such as president, secretary, and coordinator are available based on experience and selection. Club events can be registered through the official college portal or club announcements.'
    },
    hi: {
      question: 'छात्र क्लब में कैसे शामिल हों, सक्रिय क्लब कौन से हैं, नया क्लब कैसे शुरू करें, नेतृत्व भूमिकाएँ उपलब्ध हैं क्या, और इवेंट्स के लिए कैसे रजिस्टर करें?',
      answer: 'छात्र छात्र पोर्टल या ओरिएंटेशन कार्यक्रमों के माध्यम से क्लबों में शामिल हो सकते हैं। कॉलेज में तकनीकी, सांस्कृतिक, खेल, उद्यमिता और सामाजिक सेवा जैसे कई सक्रिय क्लब हैं। नया क्लब शुरू करने के लिए सदस्य विवरण और योजना के साथ Student Affairs कार्यालय में प्रस्ताव जमा करना होता है। अध्यक्ष, सचिव और समन्वयक जैसे नेतृत्व पद अनुभव और चयन के आधार पर दिए जाते हैं। क्लब कार्यक्रमों के लिए कॉलेज पोर्टल या क्लब घोषणाओं के माध्यम से पंजीकरण किया जा सकता है।'
    },
    mr: {
      question: 'विद्यार्थी क्लबमध्ये कसे सहभागी व्हावे, सक्रिय क्लब कोणते आहेत, नवीन क्लब कसा सुरू करावा, नेतृत्व भूमिका आहेत का, आणि कार्यक्रमांसाठी नोंदणी कशी करावी?',
      answer: 'विद्यार्थी स्टुडंट पोर्टल किंवा ओरिएंटेशन कार्यक्रमांद्वारे क्लबमध्ये सहभागी होऊ शकतात. कॉलेजमध्ये तांत्रिक, सांस्कृतिक, क्रीडा, उद्योजकता आणि सामाजिक सेवा असे अनेक सक्रिय क्लब आहेत. नवीन क्लब सुरू करण्यासाठी सदस्यांची माहिती आणि योजना Student Affairs कार्यालयात सादर करावी लागते. अध्यक्ष, सचिव आणि समन्वयक यांसारख्या नेतृत्व भूमिका अनुभव आणि निवडीवर आधारित दिल्या जातात. क्लब कार्यक्रमांसाठी कॉलेज पोर्टल किंवा क्लबच्या घोषणांद्वारे नोंदणी करता येते.'
    },
    kn: {
      question: 'ವಿದ್ಯಾರ್ಥಿ ಕ್ಲಬ್‌ಗೆ ಹೇಗೆ ಸೇರುವುದು, ಸಕ್ರಿಯ ಕ್ಲಬ್‌ಗಳು ಯಾವುವು, ಹೊಸ ಕ್ಲಬ್ ಆರಂಭಿಸಬಹುದೇ, ನಾಯಕತ್ವ ಪಾತ್ರಗಳು ಲಭ್ಯವಿವೆಯೇ, ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಹೇಗೆ ನೋಂದಾಯಿಸಬೇಕು?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಸ್ಟುಡೆಂಟ್ ಪೋರ್ಟಲ್ ಅಥವಾ ಓರಿಯಂಟೇಶನ್ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಕ್ಲಬ್‌ಗಳಿಗೆ ಸೇರ್ಪಡೆಯಾಗಬಹುದು. ಕಾಲೇಜಿನಲ್ಲಿ ತಾಂತ್ರಿಕ, ಸಾಂಸ್ಕೃತಿಕ, ಕ್ರೀಡೆ, ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಸೇವೆ ಕ್ಲಬ್‌ಗಳು ಸಕ್ರಿಯವಾಗಿವೆ. ಹೊಸ ಕ್ಲಬ್ ಪ್ರಾರಂಭಿಸಲು ಸದಸ್ಯರ ವಿವರಗಳು ಮತ್ತು ಯೋಜನೆಯೊಂದಿಗೆ Student Affairs ಕಚೇರಿಗೆ ಪ್ರಸ್ತಾವನೆ ಸಲ್ಲಿಸಬೇಕು. ಅಧ್ಯಕ್ಷ, ಕಾರ್ಯದರ್ಶಿ ಮತ್ತು ಸಂಯೋಜಕ ಪಾತ್ರಗಳು ಅನುಭವ ಮತ್ತು ಆಯ್ಕೆ ಆಧಾರಿತವಾಗಿರುತ್ತವೆ. ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಕಾಲೇಜು ಪೋರ್ಟಲ್ ಅಥವಾ ಕ್ಲಬ್ ಘೋಷಣೆಗಳ ಮೂಲಕ ನೋಂದಾಯಿಸಬಹುದು.'
    },
    te: {
      question: 'విద్యార్థి క్లబ్‌లో ఎలా చేరాలి, సక్రియ క్లబ్‌లు ఏమిటి, కొత్త క్లబ్ ప్రారంభించవచ్చా, నాయకత్వ పాత్రలు ఉన్నాయా, మరియు ఈవెంట్లకు ఎలా నమోదు చేయాలి?',
      answer: 'విద్యార్థులు స్టూడెంట్ పోర్టల్ లేదా ఒరియెంటేషన్ కార్యక్రమాల ద్వారా క్లబ్‌లలో చేరవచ్చు. కళాశాలలో సాంకేతిక, సాంస్కృతిక, క్రీడలు, వ్యాపార మరియు సామాజిక సేవ క్లబ్‌లు ఉన్నాయి. కొత్త క్లబ్ ప్రారంభించడానికి సభ్యుల వివరాలు మరియు ప్రణాళికతో Student Affairs కార్యాలయానికి దరఖాస్తు చేయాలి. అధ్యక్షుడు, కార్యదర్శి మరియు సమన్వయకర్త వంటి నాయకత్వ పాత్రలు అనుభవం మరియు ఎంపిక ఆధారంగా ఇస్తారు. ఈవెంట్లకు కళాశాల పోర్టల్ లేదా క్లబ్ ప్రకటనల ద్వారా నమోదు చేయవచ్చు.'
    }
  }
},
{
  id: '96',
  intent: 'IT_Support',
  category: 'Technical Support',
  priority: 1,
  keywords: ['password reset', 'student portal login', 'campus wifi', 'college email', 'microsoft office', 'technical issue', 'exam portal'],
  synonyms: ['wifi not working', 'reset portal password', 'email setup', 'software access', 'online exam problem'],
  translations: {
    en: {
      question: 'How do I reset my student portal password, fix campus Wi-Fi issues, access my college email on my phone, get Microsoft Office for free, and report online exam technical problems?',
      answer: 'Students can reset their portal password using the “Forgot Password” option on the login page or by contacting the IT helpdesk. For Wi-Fi issues, ensure your device is registered and credentials are correct; you may also visit the IT support center. College email can be accessed through Outlook or Gmail apps using official credentials. Microsoft Office is available free through the college student license portal. Technical issues with the exam portal should be reported immediately via the IT helpdesk or support ticket system.'
    },
    hi: {
      question: 'स्टूडेंट पोर्टल पासवर्ड कैसे रीसेट करें, कैंपस वाई-फाई समस्या कैसे ठीक करें, कॉलेज ईमेल फोन पर कैसे एक्सेस करें, माइक्रोसॉफ्ट ऑफिस मुफ्त कैसे मिले, और ऑनलाइन परीक्षा की तकनीकी समस्या कैसे रिपोर्ट करें?',
      answer: 'छात्र “Forgot Password” विकल्प से पासवर्ड रीसेट कर सकते हैं या आईटी हेल्पडेस्क से संपर्क कर सकते हैं। वाई-फाई समस्या के लिए डिवाइस पंजीकरण और सही लॉगिन सुनिश्चित करें या आईटी सपोर्ट सेंटर जाएं। कॉलेज ईमेल Outlook या Gmail ऐप से एक्सेस किया जा सकता है। माइक्रोसॉफ्ट ऑफिस कॉलेज लाइसेंस पोर्टल से मुफ्त उपलब्ध है। ऑनलाइन परीक्षा पोर्टल की तकनीकी समस्या तुरंत आईटी हेल्पडेस्क या सपोर्ट टिकट के माध्यम से रिपोर्ट करें।'
    },
    mr: {
      question: 'स्टुडंट पोर्टल पासवर्ड कसा रीसेट करावा, कॅम्पस वाय-फाय समस्या कशी सोडवावी, कॉलेज ईमेल फोनवर कसे वापरावे, मायक्रोसॉफ्ट ऑफिस मोफत कसे मिळेल, आणि ऑनलाइन परीक्षा तांत्रिक समस्या कशी नोंदवावी?',
      answer: 'विद्यार्थी “Forgot Password” पर्याय वापरून पासवर्ड रीसेट करू शकतात किंवा आयटी हेल्पडेस्कशी संपर्क साधू शकतात. वाय-फाय समस्येसाठी डिव्हाइस नोंदणी आणि योग्य लॉगिन तपासा किंवा आयटी सपोर्ट सेंटरला भेट द्या. कॉलेज ईमेल Outlook किंवा Gmail अॅपद्वारे वापरता येतो. मायक्रोसॉफ्ट ऑफिस कॉलेज लायसन्स पोर्टलवर मोफत उपलब्ध आहे. ऑनलाइन परीक्षा पोर्टल समस्या आयटी हेल्पडेस्क किंवा सपोर्ट तिकिटद्वारे नोंदवा.'
    },
    kn: {
      question: 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್ ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವುದು, ಕ್ಯಾಂಪಸ್ ವೈ-ಫೈ ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವುದು, ಕಾಲೇಜು ಇಮೇಲ್ ಫೋನ್‌ನಲ್ಲಿ ಬಳಸುವುದು, ಮೈಕ್ರೋಸಾಫ್ಟ್ ಆಫೀಸ್ ಉಚಿತವಾಗಿ ಪಡೆಯುವುದು ಮತ್ತು ಆನ್‌ಲೈನ್ ಪರೀಕ್ಷಾ ತಾಂತ್ರಿಕ ಸಮಸ್ಯೆ ವರದಿ ಹೇಗೆ ಮಾಡುವುದು?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು “Forgot Password” ಆಯ್ಕೆಯನ್ನು ಬಳಸಿ ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಬಹುದು ಅಥವಾ ಐಟಿ ಸಹಾಯ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು. ವೈ-ಫೈ ಸಮಸ್ಯೆಗೆ ಸಾಧನ ನೋಂದಣಿ ಮತ್ತು ಸರಿಯಾದ ಲಾಗಿನ್ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ ಅಥವಾ ಐಟಿ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ. ಕಾಲೇಜು ಇಮೇಲ್ Outlook ಅಥವಾ Gmail ಆಪ್ ಮೂಲಕ ಪ್ರವೇಶಿಸಬಹುದು. ಮೈಕ್ರೋಸಾಫ್ಟ್ ಆಫೀಸ್ ಕಾಲೇಜು ಪರವಾನಗಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ಉಚಿತವಾಗಿ ಲಭ್ಯ. ಪರೀಕ್ಷಾ ಪೋರ್ಟಲ್ ಸಮಸ್ಯೆಗಳನ್ನು ತಕ್ಷಣ ಐಟಿ ಸಹಾಯ ಕೇಂದ್ರಕ್ಕೆ ವರದಿ ಮಾಡಿ.'
    },
    te: {
      question: 'విద్యార్థి పోర్టల్ పాస్‌వర్డ్‌ను రీసెట్ చేయడం, క్యాంపస్ వై-ఫై సమస్యలు పరిష్కరించడం, కాలేజ్ ఇమెయిల్‌ను ఫోన్‌లో యాక్సెస్ చేయడం, మైక్రోసాఫ్ట్ ఆఫీస్ ఉచితంగా పొందడం మరియు ఆన్‌లైన్ పరీక్షా సాంకేతిక సమస్యను ఎలా నివేదించాలి?',
      answer: 'విద్యార్థులు “Forgot Password” ద్వారా పాస్‌వర్డ్‌ను రీసెట్ చేయవచ్చు లేదా ఐటి హెల్ప్‌డెస్క్‌ను సంప్రదించవచ్చు. వై-ఫై సమస్యల కోసం పరికరం నమోదు మరియు సరైన లాగిన్‌ను నిర్ధారించాలి. కాలేజ్ ఇమెయిల్ Outlook లేదా Gmail యాప్ ద్వారా యాక్సెస్ చేయవచ్చు. మైక్రోసాఫ్ట్ ఆఫీస్ కాలేజ్ లైసెన్స్ పోర్టల్ ద్వారా ఉచితంగా లభిస్తుంది. ఆన్‌లైన్ పరీక్షా పోర్టల్ సమస్యలను వెంటనే ఐటి హెల్ప్‌డెస్క్‌కు నివేదించాలి.'
    }
  }
},
{
  id: '97',
  intent: 'Research_Publication_Support',
  category: 'Research & Academic Support',
  priority: 2,
  keywords: ['journal funding', 'international journal', 'scopus access', 'web of science', 'plagiarism check', 'conference grant', 'research repository'],
  synonyms: ['publication support', 'research grant', 'conference funding', 'turnitin check', 'paper submission'],
  translations: {
    en: {
      question: 'How can I get funding for international journal publication, access Scopus/Web of Science, request a plagiarism check, apply for conference grants, and submit my paper to the college repository?',
      answer: 'Students and faculty can apply for publication funding through the Research & Development (R&D) cell by submitting the journal acceptance letter and fee details. Access to Scopus and Web of Science is usually provided through the college digital library portal. Plagiarism checks can be requested via the library or R&D cell using approved software like Turnitin. Grants for international conferences are available upon submission of the acceptance letter and estimated expenses to the research committee. Research papers can be submitted to the institutional repository through the library portal or by emailing the repository administrator.'
    },
    hi: {
      question: 'अंतरराष्ट्रीय जर्नल प्रकाशन के लिए फंडिंग, स्कोपस/वेब ऑफ साइंस एक्सेस, प्लैगिएरिज्म चेक, सम्मेलन अनुदान और रिसर्च पेपर रिपॉजिटरी में जमा करने की प्रक्रिया क्या है?',
      answer: 'प्रकाशन फंडिंग के लिए छात्र और फैकल्टी R&D सेल में जर्नल स्वीकृति पत्र और शुल्क विवरण के साथ आवेदन कर सकते हैं। स्कोपस और वेब ऑफ साइंस का एक्सेस कॉलेज डिजिटल लाइब्रेरी पोर्टल से मिलता है। प्लैगिएरिज्म जांच लाइब्रेरी या R&D सेल के माध्यम से अधिकृत सॉफ्टवेयर से कराई जाती है। अंतरराष्ट्रीय सम्मेलन अनुदान के लिए स्वीकृति पत्र और खर्च विवरण जमा करना आवश्यक है। रिसर्च पेपर संस्थागत रिपॉजिटरी में लाइब्रेरी पोर्टल या ईमेल द्वारा जमा किया जा सकता है।'
    },
    mr: {
      question: 'आंतरराष्ट्रीय जर्नल प्रकाशन निधी, स्कोपस/वेब ऑफ सायन्स प्रवेश, प्लॅगिएरिझम तपासणी, परिषद अनुदान आणि संशोधन पेपर रिपॉझिटरीमध्ये सादर करण्याची प्रक्रिया काय आहे?',
      answer: 'प्रकाशन निधीसाठी विद्यार्थी व प्राध्यापक R&D सेलमध्ये जर्नल स्वीकृती पत्र आणि शुल्क तपशीलासह अर्ज करू शकतात. स्कोपस व वेब ऑफ सायन्स प्रवेश कॉलेज डिजिटल लायब्ररी पोर्टलवर उपलब्ध असतो. प्लॅगिएरिझम तपासणी लायब्ररी किंवा R&D सेलमार्फत अधिकृत सॉफ्टवेअरद्वारे केली जाते. आंतरराष्ट्रीय परिषद अनुदानासाठी स्वीकृती पत्र व खर्चाचा तपशील आवश्यक आहे. संशोधन पेपर संस्थात्मक रिपॉझिटरीमध्ये लायब्ररी पोर्टल किंवा ईमेलद्वारे सादर करता येतो.'
    },
    kn: {
      question: 'ಅಂತರಾಷ್ಟ್ರೀಯ ಜರ್ನಲ್ ಪ್ರಕಟಣೆಗಾಗಿ ಹಣಕಾಸು, ಸ್ಕೋಪಸ್/ವೆಬ್ ಆಫ್ ಸೈನ್ಸ್ ಪ್ರವೇಶ, ಪ್ಲಾಗಿಯಾರಿಸಂ ಪರೀಕ್ಷೆ, ಸಮ್ಮೇಳನ ಅನುದಾನ ಮತ್ತು ಸಂಶೋಧನಾ ಪ್ರಬಂಧವನ್ನು ಭಂಡಾರಕ್ಕೆ ಸಲ್ಲಿಸುವ ವಿಧಾನ ಯಾವುದು?',
      answer: 'ಪ್ರಕಾಶನ ಹಣಕಾಸಿಗಾಗಿ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಉಪನ್ಯಾಸಕರು R&D ಸೆಲ್‌ಗೆ ಜರ್ನಲ್ ಸ್ವೀಕೃತಿ ಪತ್ರ ಮತ್ತು ಶುಲ್ಕ ವಿವರಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು. ಸ್ಕೋಪಸ್ ಮತ್ತು ವೆಬ್ ಆಫ್ ಸೈನ್ಸ್ ಪ್ರವೇಶ ಕಾಲೇಜು ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ಲಭ್ಯ. ಪ್ಲಾಗಿಯಾರಿಸಂ ಪರೀಕ್ಷೆಯನ್ನು ಲೈಬ್ರರಿ ಅಥವಾ R&D ಸೆಲ್‌ನ ಅಧಿಕೃತ ಸಾಫ್ಟ್‌ವೇರ್ ಮೂಲಕ ಮಾಡಿಸಬಹುದು. ಅಂತರಾಷ್ಟ್ರೀಯ ಸಮ್ಮೇಳನಗಳಿಗೆ ಅನುದಾನಕ್ಕಾಗಿ ಸ್ವೀಕೃತಿ ಪತ್ರ ಮತ್ತು ವೆಚ್ಚ ವಿವರ ಸಲ್ಲಿಸಬೇಕು. ಸಂಶೋಧನಾ ಪ್ರಬಂಧವನ್ನು ಸಂಸ್ಥೆಯ ಭಂಡಾರಕ್ಕೆ ಲೈಬ್ರರಿ ಪೋರ್ಟಲ್ ಅಥವಾ ಇಮೇಲ್ ಮೂಲಕ ಸಲ್ಲಿಸಬಹುದು.'
    },
    te: {
      question: 'అంతర్జాతీయ జర్నల్ ప్రచురణ నిధులు, స్కోపస్/వెబ్ ఆఫ్ సైన్స్ ప్రాప్యత, ప్లాగియారిజం తనిఖీ, సదస్సు గ్రాంట్లు మరియు పరిశోధనా పత్రాన్ని రిపాజిటరీలో సమర్పించే విధానం ఏమిటి?',
      answer: 'ప్రచురణ నిధుల కోసం విద్యార్థులు మరియు అధ్యాపకులు R&D సెల్‌కు జర్నల్ అంగీకార పత్రం మరియు ఫీజు వివరాలతో దరఖాస్తు చేసుకోవచ్చు. స్కోపస్ మరియు వెబ్ ఆఫ్ సైన్స్ ప్రాప్యత కళాశాల డిజిటల్ లైబ్రరీ పోర్టల్ ద్వారా లభిస్తుంది. ప్లాగియారిజం తనిఖీని లైబ్రరీ లేదా R&D సెల్ ద్వారా అధీకృత సాఫ్ట్‌వేర్‌తో చేయించవచ్చు. అంతర్జాతీయ సదస్సుల కోసం గ్రాంట్లకు అంగీకార పత్రం మరియు ఖర్చు వివరాలు అవసరం. పరిశోధనా పత్రాన్ని సంస్థ రిపాజిటరీలో లైబ్రరీ పోర్టల్ లేదా ఇమెయిల్ ద్వారా సమర్పించవచ్చు.'
    }
  }
},
{
  id: '98',
  intent: 'International_Student_Services',
  category: 'Student Support & Global Services',
  priority: 2,
  keywords: ['visa renewal', 'international student support', 'english classes', 'immigration help', 'homestay', 'cultural programs'],
  synonyms: ['foreign student help', 'visa assistance', 'language support', 'accommodation help', 'immigration support'],
  translations: {
    en: {
      question: 'Does the college provide visa renewal assistance, English language support, homestay or off-campus accommodation guidance, cultural integration programs, and help with immigration paperwork?',
      answer: 'Yes. The International Student Office assists students with visa renewal, documentation, and compliance with immigration regulations. English language support classes and communication workshops are available to improve academic and social interaction. Students can get guidance for local homestay and verified off-campus accommodation through the student services office. Cultural integration programs, orientation sessions, and events are organized to help foreign students adapt to campus and local culture. Assistance with immigration forms and legal documentation is also provided by the international student support team.'
    },
    hi: {
      question: 'क्या कॉलेज वीजा नवीनीकरण, अंग्रेजी भाषा सहायता, आवास मार्गदर्शन, सांस्कृतिक एकीकरण कार्यक्रम और इमिग्रेशन दस्तावेज सहायता प्रदान करता है?',
      answer: 'हाँ। अंतरराष्ट्रीय छात्र कार्यालय वीजा नवीनीकरण, दस्तावेज़ और इमिग्रेशन नियमों के पालन में सहायता करता है। अंग्रेजी भाषा समर्थन कक्षाएँ और संचार कार्यशालाएँ उपलब्ध हैं। स्थानीय होमस्टे और ऑफ-कैंपस आवास के लिए छात्र सेवा कार्यालय मार्गदर्शन देता है। विदेशी छात्रों के लिए सांस्कृतिक कार्यक्रम, ओरिएंटेशन और कार्यक्रम आयोजित किए जाते हैं। इमिग्रेशन फॉर्म और कानूनी दस्तावेजों में भी सहायता प्रदान की जाती है।'
    },
    mr: {
      question: 'कॉलेज व्हिसा नूतनीकरण, इंग्रजी भाषा समर्थन, निवास मार्गदर्शन, सांस्कृतिक कार्यक्रम आणि इमिग्रेशन कागदपत्र मदत देते का?',
      answer: 'होय. आंतरराष्ट्रीय विद्यार्थी कार्यालय व्हिसा नूतनीकरण, कागदपत्रे आणि इमिग्रेशन नियमांचे पालन करण्यासाठी मदत करते. इंग्रजी भाषा समर्थन वर्ग आणि संवाद कार्यशाळा उपलब्ध आहेत. स्थानिक होमस्टे आणि ऑफ-कॅम्पस निवासासाठी मार्गदर्शन दिले जाते. परदेशी विद्यार्थ्यांसाठी सांस्कृतिक एकीकरण कार्यक्रम आणि ओरिएंटेशन आयोजित केले जातात. इमिग्रेशन फॉर्म आणि कायदेशीर कागदपत्रांमध्ये मदत दिली जाते.'
    },
    kn: {
      question: 'ಕಾಲೇಜು ವೀಸಾ ನವೀಕರಣ, ಇಂಗ್ಲಿಷ್ ಭಾಷಾ ಬೆಂಬಲ, ವಸತಿ ಮಾರ್ಗದರ್ಶನ, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವಲಸೆ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆಯೇ?',
      answer: 'ಹೌದು. ಅಂತರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿ ಕಚೇರಿ ವೀಸಾ ನವೀಕರಣ ಮತ್ತು ಅಗತ್ಯ ದಾಖಲೆಗಳಲ್ಲಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇಂಗ್ಲಿಷ್ ಭಾಷಾ ಬೆಂಬಲ ತರಗತಿಗಳು ಮತ್ತು ಸಂವಹನ ತರಬೇತಿ ಲಭ್ಯವಿದೆ. ಸ್ಥಳೀಯ ಹೋಮ್‌ಸ್ಟೇ ಮತ್ತು ಆಫ್-ಕ್ಯಾಂಪಸ್ ವಸತಿ ಹುಡುಕಲು ಮಾರ್ಗದರ್ಶನ ನೀಡಲಾಗುತ್ತದೆ. ವಿದೇಶಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಪರಿಚಯ ಸತ್ರಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ವಲಸೆ ಫಾರ್ಮ್ ಮತ್ತು ಕಾನೂನು ದಾಖಲೆಗಳಲ್ಲಿ ಸಹಾಯ ದೊರೆಯುತ್ತದೆ.'
    },
    te: {
      question: 'కళాశాల వీసా పునరుద్ధరణ, ఆంగ్ల భాషా మద్దతు, వసతి మార్గదర్శనం, సాంస్కృతిక కార్యక్రమాలు మరియు వలస సహాయం అందిస్తుందా?',
      answer: 'అవును. అంతర్జాతీయ విద్యార్థి కార్యాలయం వీసా పునరుద్ధరణ మరియు అవసరమైన పత్రాల్లో సహాయం అందిస్తుంది. ఆంగ్ల భాషా మద్దతు తరగతులు మరియు కమ్యూనికేషన్ శిక్షణ అందుబాటులో ఉన్నాయి. స్థానిక హోమ్‌స్టే మరియు క్యాంపస్ వెలుపల వసతి కోసం మార్గదర్శనం ఇవ్వబడుతుంది. విదేశీ విద్యార్థుల కోసం సాంస్కృతిక కార్యక్రమాలు మరియు ఓరియంటేషన్ సెషన్‌లు నిర్వహించబడతాయి. వలస ఫారమ్‌లు మరియు చట్టపరమైన పత్రాలలో సహాయం కూడా అందించబడుతుంది.'
    }
  }
},
{
  id: '99',
  intent: 'Mental_Health_Counseling',
  category: 'Student Wellness & Counseling',
  priority: 1,
  keywords: ['therapy session', 'counseling', 'mental health', 'stress management', 'anxiety support', 'peer support', 'academic accommodation'],
  synonyms: ['psychological support', 'wellness counseling', 'confidential therapy', 'emotional support', 'student mental health'],
  translations: {
    en: {
      question: 'How can I book a confidential therapy session, attend stress-management workshops, join peer support groups, access 24/7 mental health resources, and request academic accommodations?',
      answer: 'Students can book confidential therapy sessions through the college counseling center via the student portal or by visiting the wellness office. Stress-management workshops and wellness programs are organized before exam periods to help students manage pressure. Peer support groups are available for students facing anxiety, depression, or emotional challenges. Some mental health helplines, online counseling platforms, and emergency support services are accessible 24/7. Students with documented mental health conditions may request academic accommodations such as extended deadlines, flexible attendance, or special exam arrangements by submitting medical documentation to the academic support office.'
    },
    hi: {
      question: 'मैं गोपनीय थेरेपी सत्र कैसे बुक कर सकता हूँ, स्ट्रेस मैनेजमेंट कार्यशालाओं में भाग कैसे ले सकता हूँ, सहकर्मी समर्थन समूह कैसे जॉइन कर सकता हूँ, 24/7 मानसिक स्वास्थ्य सहायता कैसे प्राप्त कर सकता हूँ और शैक्षणिक आवास कैसे मांग सकता हूँ?',
      answer: 'छात्र कॉलेज काउंसलिंग केंद्र के माध्यम से स्टूडेंट पोर्टल या वेलनेस कार्यालय में जाकर गोपनीय थेरेपी सत्र बुक कर सकते हैं। परीक्षा से पहले स्ट्रेस-मैनेजमेंट कार्यशालाएँ आयोजित की जाती हैं। चिंता या भावनात्मक समस्याओं से जूझ रहे छात्रों के लिए सहकर्मी समर्थन समूह उपलब्ध हैं। कुछ हेल्पलाइन, ऑनलाइन काउंसलिंग और आपातकालीन सेवाएँ 24/7 उपलब्ध रहती हैं। दस्तावेज़ित मानसिक स्वास्थ्य स्थिति वाले छात्र अतिरिक्त समय, लचीली उपस्थिति या विशेष परीक्षा व्यवस्था जैसे शैक्षणिक आवास के लिए आवेदन कर सकते हैं।'
    },
    mr: {
      question: 'मी गोपनीय थेरपी सत्र कसे बुक करू, स्ट्रेस मॅनेजमेंट कार्यशाळांमध्ये कसे सहभागी होऊ, सहकारी समर्थन गटात कसे सहभागी होऊ, 24/7 मानसिक आरोग्य मदत कशी मिळवू आणि शैक्षणिक सोयी कशा मागू?',
      answer: 'विद्यार्थी कॉलेज काउन्सेलिंग सेंटरद्वारे स्टुडंट पोर्टल किंवा वेलनेस कार्यालयात भेट देऊन गोपनीय थेरपी सत्र बुक करू शकतात. परीक्षा हंगामापूर्वी स्ट्रेस मॅनेजमेंट कार्यशाळा आयोजित केल्या जातात. चिंता किंवा भावनिक अडचणी असलेल्या विद्यार्थ्यांसाठी सहकारी समर्थन गट उपलब्ध आहेत. काही हेल्पलाइन, ऑनलाइन काउन्सेलिंग आणि आपत्कालीन सेवा 24/7 उपलब्ध असतात. प्रमाणित मानसिक आरोग्य स्थिती असलेल्या विद्यार्थ्यांना अतिरिक्त वेळ, लवचिक उपस्थिती किंवा विशेष परीक्षा सोयीसाठी अर्ज करता येतो.'
    },
    kn: {
      question: 'ನಾನು ಗೌಪ್ಯ ಥೆರಪಿ ಸೆಷನ್ ಹೇಗೆ ಬುಕ್ ಮಾಡಬಹುದು, ಒತ್ತಡ ನಿರ್ವಹಣಾ ಕಾರ್ಯಾಗಾರಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು, ಸಹಪಾಠಿ ಬೆಂಬಲ ಗುಂಪಿಗೆ ಸೇರಬಹುದು, 24/7 ಮಾನಸಿಕ ಆರೋಗ್ಯ ನೆರವು ಪಡೆಯಬಹುದು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಕೇಳಬಹುದು?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಕಾಲೇಜು ಕೌನ್ಸೆಲಿಂಗ್ ಕೇಂದ್ರದ ಮೂಲಕ ಅಥವಾ ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಗೌಪ್ಯ ಥೆರಪಿ ಸೆಷನ್ ಬುಕ್ ಮಾಡಬಹುದು. ಪರೀಕ್ಷೆಗೂ ಮೊದಲು ಒತ್ತಡ ನಿರ್ವಹಣಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ಆತಂಕ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳನ್ನು ಎದುರಿಸುತ್ತಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಪಾಠಿ ಬೆಂಬಲ ಗುಂಪುಗಳಿವೆ. ಕೆಲವು ಸಹಾಯವಾಣಿ, ಆನ್‌ಲೈನ್ ಕೌನ್ಸೆಲಿಂಗ್ ಮತ್ತು ತುರ್ತು ಸೇವೆಗಳು 24/7 ಲಭ್ಯವಿವೆ. ದಾಖಲೆಗಳಿರುವ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸ್ಥಿತಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಹೆಚ್ಚುವರಿ ಸಮಯ ಅಥವಾ ವಿಶೇಷ ಪರೀಕ್ಷಾ ಸೌಲಭ್ಯಗಳನ್ನು ಕೇಳಬಹುದು.'
    },
    te: {
      question: 'నేను రహస్య థెరపీ సెషన్‌ను ఎలా బుక్ చేయాలి, ఒత్తిడి నిర్వహణ వర్క్‌షాప్‌లలో ఎలా పాల్గొనాలి, సహచర మద్దతు గ్రూపులో ఎలా చేరాలి, 24/7 మానసిక ఆరోగ్య సేవలు ఎలా పొందాలి మరియు అకడమిక్ సౌకర్యాలను ఎలా అభ్యర్థించాలి?',
      answer: 'విద్యార్థులు కాలేజ్ కౌన్సెలింగ్ సెంటర్ ద్వారా లేదా స్టూడెంట్ పోర్టల్‌లో రహస్య థెరపీ సెషన్ బుక్ చేసుకోవచ్చు. పరీక్షల ముందు ఒత్తిడి నిర్వహణ కార్యక్రమాలు నిర్వహించబడతాయి. ఆందోళన లేదా భావోద్వేగ సమస్యలతో ఉన్న విద్యార్థులకు సహచర మద్దతు గ్రూపులు అందుబాటులో ఉంటాయి. కొన్ని హెల్ప్‌లైన్‌లు, ఆన్‌లైన్ కౌన్సెలింగ్ మరియు అత్యవసర సేవలు 24/7 అందుబాటులో ఉంటాయి. డాక్యుమెంటేషన్ ఉన్న మానసిక ఆరోగ్య పరిస్థితుల కోసం విద్యార్థులు అదనపు సమయం లేదా ప్రత్యేక పరీక్షా సౌకర్యాల కోసం దరఖాస్తు చేయవచ్చు.'
    }
  }
},
{
  id: '100',
  intent: 'Career_Fair_Registration',
  category: 'Placements & Career Services',
  priority: 2,
  keywords: ['career fair registration', 'job expo', 'company list', 'resume review', 'networking event', 'dress code'],
  synonyms: ['placement fair', 'recruitment drive', 'career expo', 'resume session', 'recruiter meet'],
  translations: {
    en: {
      question: 'How do I register for the career fair, see attending companies, join resume review sessions, access networking event details, and know the dress code?',
      answer: 'Students can register for the career fair through the placement portal or by filling out the registration form shared by the Career Services Office. The list of participating companies is published on the official placement notice board or portal before the event. Resume review sessions and career preparation workshops are usually scheduled a few weeks prior to the fair. Networking event details, including recruiter interaction sessions, are shared via email and the placement calendar. The recommended dress code is formal or business attire to maintain professionalism during interactions with recruiters.'
    },
    hi: {
      question: 'करियर फेयर के लिए पंजीकरण, भाग लेने वाली कंपनियों की सूची, रिज़्यूमे रिव्यू सत्र, नेटवर्किंग कार्यक्रम और ड्रेस कोड की जानकारी कैसे प्राप्त करें?',
      answer: 'छात्र प्लेसमेंट पोर्टल या करियर सर्विस कार्यालय द्वारा साझा किए गए पंजीकरण फॉर्म के माध्यम से करियर फेयर के लिए रजिस्टर कर सकते हैं। भाग लेने वाली कंपनियों की सूची प्लेसमेंट नोटिस बोर्ड या पोर्टल पर प्रकाशित की जाती है। करियर फेयर से पहले रिज़्यूमे रिव्यू सत्र और तैयारी कार्यशालाएँ आयोजित की जाती हैं। नेटवर्किंग कार्यक्रमों की जानकारी ईमेल और प्लेसमेंट कैलेंडर के माध्यम से साझा की जाती है। ड्रेस कोड के लिए औपचारिक या व्यवसायिक पोशाक की सलाह दी जाती है।'
    },
    mr: {
      question: 'करिअर फेअरसाठी नोंदणी, सहभागी कंपन्यांची यादी, रेझ्युमे रिव्ह्यू सत्र, नेटवर्किंग कार्यक्रम आणि ड्रेस कोडची माहिती कशी मिळेल?',
      answer: 'विद्यार्थी प्लेसमेंट पोर्टल किंवा करिअर सर्विस कार्यालयाने दिलेल्या नोंदणी फॉर्मद्वारे करिअर फेअरसाठी नोंदणी करू शकतात. सहभागी कंपन्यांची यादी प्लेसमेंट नोटीस बोर्ड किंवा पोर्टलवर प्रसिद्ध केली जाते. करिअर फेअरपूर्वी रेझ्युमे रिव्ह्यू सत्र आणि तयारी कार्यशाळा आयोजित केल्या जातात. नेटवर्किंग कार्यक्रमांची माहिती ईमेल आणि प्लेसमेंट कॅलेंडरद्वारे दिली जाते. ड्रेस कोडसाठी औपचारिक किंवा व्यवसायिक पोशाख सुचविला जातो.'
    },
    kn: {
      question: 'ಕೆರಿಯರ್ ಮೇಳಕ್ಕೆ ನೋಂದಣಿ, ಭಾಗವಹಿಸುವ ಕಂಪನಿಗಳ ಪಟ್ಟಿ, ರೆಸ್ಯೂಮ್ ಪರಿಶೀಲನೆ, ನೆಟ್‌ವರ್ಕಿಂಗ್ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಉಡುಪು ಸಂಹಿತೆಯ ಮಾಹಿತಿ ಹೇಗೆ ಪಡೆಯಬೇಕು?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಪೋರ್ಟಲ್ ಅಥವಾ ಕರಿಯರ್ ಸೇವಾ ಕಚೇರಿ ನೀಡಿದ ನೋಂದಣಿ ಫಾರ್ಮ್ ಮೂಲಕ ನೋಂದಾಯಿಸಬಹುದು. ಭಾಗವಹಿಸುವ ಕಂಪನಿಗಳ ಪಟ್ಟಿ ಪ್ಲೇಸ್‌ಮೆಂಟ್ ನೋಟಿಸ್ ಬೋರ್ಡ್ ಅಥವಾ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ಮೇಳಕ್ಕೂ ಮೊದಲು ರೆಸ್ಯೂಮ್ ಪರಿಶೀಲನೆ ಮತ್ತು ತಯಾರಿ ಕಾರ್ಯಾಗಾರಗಳನ್ನು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ನೇಮಕಾತಿದಾರರೊಂದಿಗೆ ನೆಟ್‌ವರ್ಕಿಂಗ್ ಕಾರ್ಯಕ್ರಮಗಳ ಮಾಹಿತಿ ಇಮೇಲ್ ಮತ್ತು ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಕ್ಯಾಲೆಂಡರ್ ಮೂಲಕ ನೀಡಲಾಗುತ್ತದೆ. ಉಡುಪು ಸಂಹಿತೆಗಾಗಿ ಫಾರ್ಮಲ್ ಅಥವಾ ಬಿಸಿನೆಸ್ ಉಡುಪು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.'
    },
    te: {
      question: 'కెరీర్ ఫెయిర్‌కు నమోదు, పాల్గొనే కంపెనీల జాబితా, రెజ్యూమ్ సమీక్ష సెషన్‌లు, నెట్‌వర్కింగ్ ఈవెంట్‌లు మరియు డ్రెస్ కోడ్ వివరాలు ఎలా పొందాలి?',
      answer: 'విద్యార్థులు ప్లేస్‌మెంట్ పోర్టల్ లేదా కెరీర్ సర్వీసెస్ కార్యాలయం ఇచ్చిన నమోదు ఫారమ్ ద్వారా కెరీర్ ఫెయిర్‌కు నమోదు చేసుకోవచ్చు. పాల్గొనే కంపెనీల జాబితా ప్లేస్‌మెంట్ నోటీస్ బోర్డ్ లేదా పోర్టల్‌లో ప్రకటించబడుతుంది. ఫెయిర్‌కు ముందు రెజ్యూమ్ సమీక్ష మరియు తయారీ వర్క్‌షాప్‌లు నిర్వహించబడతాయి. రిక్రూటర్లతో నెట్‌వర్కింగ్ ఈవెంట్ వివరాలు ఇమెయిల్ మరియు ప్లేస్‌మెంట్ క్యాలెండర్ ద్వారా అందిస్తారు. డ్రెస్ కోడ్‌గా ఫార్మల్ లేదా బిజినెస్ దుస్తులు సూచించబడతాయి.'
    }
  }
},
{
  id: '101',
  intent: 'Laboratory_Equipment_Access',
  category: 'Laboratory & Research',
  priority: 2,
  keywords: ['lab booking', 'robotics lab', 'safety training', 'equipment loan', 'oscilloscope', 'microcontroller', 'lab rules'],
  synonyms: ['lab access', 'equipment usage', 'lab reservation', 'lab safety', 'borrow lab tools'],
  translations: {
    en: {
      question: 'How do I book lab time, complete safety training, borrow equipment like oscilloscopes or microcontrollers, understand penalties for damage, and access lab safety protocols?',
      answer: 'Students can book advanced laboratory facilities such as robotics labs through the departmental lab portal or by contacting the lab coordinator. Safety training is mandatory before using any equipment and must be completed at the beginning of the semester. Certain equipment like oscilloscopes, microcontrollers, and kits can be borrowed for academic projects after approval and security deposit. Any damage to lab equipment may result in penalties, repair charges, or restricted access. Lab safety protocols are available on the department website, notice boards, and lab manuals, and students must follow them strictly.'
    },
    hi: {
      question: 'लैब समय बुक करना, सुरक्षा प्रशिक्षण पूरा करना, ऑसिलोस्कोप या माइक्रोकंट्रोलर जैसे उपकरण उधार लेना, नुकसान के दंड और लैब सुरक्षा प्रोटोकॉल की जानकारी कैसे प्राप्त करें?',
      answer: 'छात्र विभागीय लैब पोर्टल या लैब समन्वयक से संपर्क करके एडवांस लैब जैसे रोबोटिक्स लैब के लिए समय बुक कर सकते हैं। किसी भी उपकरण का उपयोग करने से पहले सुरक्षा प्रशिक्षण अनिवार्य है और यह सेमेस्टर की शुरुआत में पूरा करना होता है। ऑसिलोस्कोप, माइक्रोकंट्रोलर और अन्य किट अकादमिक प्रोजेक्ट के लिए अनुमति और सुरक्षा जमा राशि के बाद उधार लिए जा सकते हैं। लैब उपकरण को नुकसान होने पर जुर्माना, मरम्मत शुल्क या लैब उपयोग पर प्रतिबंध लगाया जा सकता है। लैब सुरक्षा प्रोटोकॉल विभाग की वेबसाइट, नोटिस बोर्ड और लैब मैनुअल में उपलब्ध हैं।'
    },
    mr: {
      question: 'लॅब वेळ बुक करणे, सुरक्षा प्रशिक्षण पूर्ण करणे, ऑसिलोस्कोप किंवा मायक्रोकंट्रोलर उधार घेणे, नुकसान दंड आणि लॅब सुरक्षा नियमांची माहिती कशी मिळेल?',
      answer: 'विद्यार्थी विभागीय लॅब पोर्टल किंवा लॅब समन्वयकाशी संपर्क करून प्रगत लॅब जसे रोबोटिक्स लॅबसाठी वेळ बुक करू शकतात. कोणतेही उपकरण वापरण्यापूर्वी सुरक्षा प्रशिक्षण अनिवार्य आहे आणि सेमिस्टरच्या सुरुवातीला पूर्ण करणे आवश्यक आहे. ऑसिलोस्कोप, मायक्रोकंट्रोलर आणि इतर किट शैक्षणिक प्रकल्पांसाठी परवानगी आणि ठेव रक्कम भरल्यानंतर उधार घेता येतात. उपकरणांचे नुकसान झाल्यास दंड, दुरुस्ती शुल्क किंवा प्रवेश मर्यादा लागू होऊ शकते. लॅब सुरक्षा नियम विभागाच्या वेबसाइट, नोटीस बोर्ड आणि लॅब मॅन्युअलमध्ये उपलब्ध आहेत.'
    },
    kn: {
      question: 'ಲ್ಯಾಬ್ ಸಮಯ ಬುಕ್ಕಿಂಗ್, ಸುರಕ್ಷಾ ತರಬೇತಿ, ಆಸಿಲೋಸ್ಕೋಪ್ ಅಥವಾ ಮೈಕ್ರೋಕಂಟ್ರೋಲರ್ ಸಾಲದಲ್ಲಿ ಪಡೆಯುವುದು, ಹಾನಿಗೆ ದಂಡ ಮತ್ತು ಸುರಕ್ಷತಾ ನಿಯಮಗಳನ್ನು ಹೇಗೆ ತಿಳಿದುಕೊಳ್ಳುವುದು?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ವಿಭಾಗದ ಲ್ಯಾಬ್ ಪೋರ್ಟಲ್ ಅಥವಾ ಲ್ಯಾಬ್ ಸಂಯೋಜಕರ ಮೂಲಕ ಉನ್ನತ ಲ್ಯಾಬ್‌ಗಳಿಗೆ ಸಮಯವನ್ನು ಬುಕ್ ಮಾಡಬಹುದು. ಯಾವುದೇ ಉಪಕರಣ ಬಳಸುವ ಮೊದಲು ಸುರಕ್ಷಾ ತರಬೇತಿ ಕಡ್ಡಾಯವಾಗಿದೆ ಮತ್ತು ಸೆಮಿಸ್ಟರ್ ಆರಂಭದಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಬೇಕು. ಆಸಿಲೋಸ್ಕೋಪ್, ಮೈಕ್ರೋಕಂಟ್ರೋಲರ್ ಮತ್ತು ಇತರ ಉಪಕರಣಗಳನ್ನು ಶೈಕ್ಷಣಿಕ ಯೋಜನೆಗಳಿಗಾಗಿ ಅನುಮತಿ ಮತ್ತು ಠೇವಣಿ ನಂತರ ಪಡೆಯಬಹುದು. ಉಪಕರಣ ಹಾನಿಯಾದರೆ ದಂಡ ಅಥವಾ ಪ್ರವೇಶ ನಿರ್ಬಂಧ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಲ್ಯಾಬ್ ಸುರಕ್ಷಾ ನಿಯಮಗಳು ವೆಬ್‌ಸೈಟ್, ನೋಟಿಸ್ ಬೋರ್ಡ್ ಮತ್ತು ಲ್ಯಾಬ್ ಮಾರ್ಗಸೂಚಿಗಳಲ್ಲಿ ಲಭ್ಯವಿವೆ.'
    },
    te: {
      question: 'ల్యాబ్ సమయం బుకింగ్, భద్రతా శిక్షణ పూర్తి చేయడం, ఆసిలోస్కోప్ లేదా మైక్రోకంట్రోలర్‌లను తీసుకోవడం, నష్టానికి జరిమానాలు మరియు భద్రతా నియమాలు ఎలా తెలుసుకోవాలి?',
      answer: 'విద్యార్థులు విభాగం ల్యాబ్ పోర్టల్ లేదా ల్యాబ్ కోఆర్డినేటర్ ద్వారా అడ్వాన్స్‌డ్ ల్యాబ్‌ల కోసం సమయాన్ని బుక్ చేసుకోవచ్చు. ఏ పరికరాన్ని ఉపయోగించే ముందు భద్రతా శిక్షణ తప్పనిసరి మరియు సెమిస్టర్ ప్రారంభంలో పూర్తి చేయాలి. ఆసిలోస్కోప్‌లు, మైక్రోకంట్రోలర్‌లు మరియు ఇతర పరికరాలు అకాడమిక్ ప్రాజెక్ట్‌ల కోసం అనుమతి మరియు డిపాజిట్ తర్వాత రుణంగా పొందవచ్చు. పరికరాల నష్టం జరిగితే జరిమానాలు లేదా ల్యాబ్ యాక్సెస్ పరిమితులు విధించబడవచ్చు. ల్యాబ్ భద్రతా మార్గదర్శకాలు విభాగం వెబ్‌సైట్, నోటీస్ బోర్డ్ మరియు మాన్యువల్‌లో అందుబాటులో ఉంటాయి.'
    }
  }
},
{
  id: '102',
  intent: 'Sports_Team_Tryouts',
  category: 'Sports & Athletics',
  priority: 2,
  keywords: ['team tryouts', 'basketball trials', 'cricket selection', 'practice sessions', 'varsity commitment', 'sports eligibility'],
  synonyms: ['sports selection', 'athlete registration', 'team practice', 'sports criteria', 'college athletics'],
  translations: {
    en: {
      question: 'When are team tryouts, what are the selection criteria, are there practice sessions before selection, can part-time students join, and what commitment is required for varsity athletes?',
      answer: 'Team tryout dates are announced by the Sports Department at the beginning of each semester through notice boards and the college website. Selection is based on skill performance, fitness level, previous experience, and coach evaluation. Practice sessions and open training camps are usually conducted before final team selection. Part-time students may join subject to eligibility rules and schedule compatibility. Varsity athletes are expected to attend regular practice sessions, represent the college in tournaments, maintain discipline, and balance academic performance with sports commitments.'
    },
    hi: {
      question: 'टीम ट्रायल कब होते हैं, चयन मानदंड क्या हैं, चयन से पहले अभ्यास सत्र होते हैं या नहीं, क्या पार्ट-टाइम छात्र शामिल हो सकते हैं, और वार्सिटी खिलाड़ियों के लिए क्या प्रतिबद्धता आवश्यक है?',
      answer: 'टीम ट्रायल की तिथियाँ प्रत्येक सेमेस्टर की शुरुआत में खेल विभाग द्वारा नोटिस बोर्ड और कॉलेज वेबसाइट पर घोषित की जाती हैं। चयन कौशल, फिटनेस, अनुभव और कोच के मूल्यांकन के आधार पर होता है। अंतिम चयन से पहले अभ्यास सत्र और प्रशिक्षण शिविर आयोजित किए जाते हैं। पात्रता नियमों के अनुसार पार्ट-टाइम छात्र भी शामिल हो सकते हैं। वार्सिटी खिलाड़ियों को नियमित अभ्यास, टूर्नामेंट में प्रतिनिधित्व, अनुशासन बनाए रखना और अकादमिक प्रदर्शन संतुलित रखना आवश्यक होता है।'
    },
    mr: {
      question: 'संघाची ट्रायल कधी असते, निवड निकष काय आहेत, निवडीपूर्वी सराव सत्र असतात का, अर्धवेळ विद्यार्थी सहभागी होऊ शकतात का, आणि व्हर्सिटी खेळाडूंना कोणती बांधिलकी आवश्यक आहे?',
      answer: 'संघ ट्रायलच्या तारखा प्रत्येक सेमिस्टरच्या सुरुवातीला क्रीडा विभागाद्वारे जाहीर केल्या जातात. निवड कौशल्य, फिटनेस, अनुभव आणि प्रशिक्षकाच्या मूल्यमापनावर आधारित असते. अंतिम निवडीपूर्वी सराव सत्रे आणि प्रशिक्षण शिबिरे आयोजित केली जातात. पात्रतेनुसार अर्धवेळ विद्यार्थी सहभागी होऊ शकतात. व्हर्सिटी खेळाडूंनी नियमित सराव, स्पर्धांमध्ये प्रतिनिधित्व, शिस्त आणि शैक्षणिक कामगिरी संतुलित ठेवणे आवश्यक आहे.'
    },
    kn: {
      question: 'ತಂಡದ ಟ್ರಯಲ್ಸ್ ಯಾವಾಗ, ಆಯ್ಕೆ ಮಾನದಂಡಗಳು ಏನು, ಆಯ್ಕೆಗೆ ಮೊದಲು ಅಭ್ಯಾಸ ಸತ್ರಗಳಿವೆಯೇ, ಅರ್ಧಕಾಲಿಕ ವಿದ್ಯಾರ್ಥಿಗಳು ಸೇರಬಹುದೇ, ಮತ್ತು ವಾರ್ಸಿಟಿ ಅಥ್ಲೀಟ್‌ಗಳಿಗೆ ಯಾವ ಬದ್ಧತೆ ಅಗತ್ಯ?',
      answer: 'ತಂಡದ ಟ್ರಯಲ್ಸ್ ದಿನಾಂಕಗಳನ್ನು ಪ್ರತೀ ಸೆಮಿಸ್ಟರ್ ಆರಂಭದಲ್ಲಿ ಕ್ರೀಡಾ ವಿಭಾಗ ಪ್ರಕಟಿಸುತ್ತದೆ. ಆಯ್ಕೆ ಕೌಶಲ್ಯ, ಫಿಟ್ನೆಸ್, ಅನುಭವ ಮತ್ತು ತರಬೇತುದಾರರ ಮೌಲ್ಯಮಾಪನದ ಆಧಾರದ ಮೇಲೆ ನಡೆಯುತ್ತದೆ. ಅಂತಿಮ ಆಯ್ಕೆಗೆ ಮೊದಲು ಅಭ್ಯಾಸ ಮತ್ತು ತರಬೇತಿ ಶಿಬಿರಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ. ಅರ್ಹತೆಯ ಪ್ರಕಾರ ಅರ್ಧಕಾಲಿಕ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೂ ಅವಕಾಶ ಇದೆ. ವಾರ್ಸಿಟಿ ಅಥ್ಲೀಟ್‌ಗಳು ನಿಯಮಿತ ಅಭ್ಯಾಸ, ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವುದು, ಶಿಸ್ತು ಮತ್ತು ವಿದ್ಯಾಭ್ಯಾಸ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಬೇಕು.'
    },
    te: {
      question: 'జట్టు ట్రయౌట్‌లు ఎప్పుడు, ఎంపిక ప్రమాణాలు ఏమిటి, ఎంపికకు ముందు అభ్యాస సెషన్‌లు ఉంటాయా, పార్ట్-టైమ్ విద్యార్థులు చేరగలరా, మరియు వర్సిటీ అథ్లెట్లకు ఏ నిబద్ధత అవసరం?',
      answer: 'జట్టు ట్రయౌట్ తేదీలను ప్రతి సెమిస్టర్ ప్రారంభంలో క్రీడా విభాగం ప్రకటిస్తుంది. ఎంపిక నైపుణ్యం, ఫిట్‌నెస్, అనుభవం మరియు కోచ్ మూల్యాంకనం ఆధారంగా ఉంటుంది. తుది ఎంపికకు ముందు అభ్యాస సెషన్‌లు మరియు శిక్షణ శిబిరాలు నిర్వహిస్తారు. అర్హత ప్రకారం పార్ట్-టైమ్ విద్యార్థులు కూడా చేరవచ్చు. వర్సిటీ అథ్లెట్లు నియమిత అభ్యాసం, పోటీల్లో పాల్గొనడం, క్రమశిక్షణ మరియు విద్యా ప్రదర్శనను సమతుల్యం చేయాలి.'
    }
  }
},
{
  id: '103',
  intent: 'Student_Government_Elections',
  category: 'Student Governance',
  priority: 2,
  keywords: ['student elections', 'voting', 'student council', 'campaign rules', 'candidacy', 'election process'],
  synonyms: ['student government', 'student union elections', 'vote process', 'campaign spending', 'candidate eligibility'],
  translations: {
    en: {
      question: 'When are student elections, how do I run for office, what are the eligibility criteria, are there campaign spending limits, and how can I vote?',
      answer: 'Student government elections are typically held once a year and the schedule is announced through official college communication channels. To run for a position, students must submit a nomination form, meet academic and conduct requirements, and participate in the verification process. Candidates must maintain minimum attendance and academic performance. Campaign spending and promotional activities are regulated to ensure fairness. Students can vote online or at designated polling booths using their student ID.'
    },
    hi: {
      question: 'छात्र चुनाव कब होते हैं, पद के लिए कैसे नामांकन करें, पात्रता क्या है, प्रचार खर्च पर सीमा है या नहीं, और मतदान कैसे करें?',
      answer: 'छात्र सरकार चुनाव आमतौर पर वर्ष में एक बार होते हैं और इसकी जानकारी कॉलेज द्वारा जारी की जाती है। चुनाव लड़ने के लिए नामांकन फॉर्म भरना, शैक्षणिक और अनुशासन मानदंड पूरा करना आवश्यक है। उम्मीदवारों को न्यूनतम उपस्थिति और प्रदर्शन बनाए रखना होता है। प्रचार खर्च और गतिविधियों पर नियम लागू होते हैं। छात्र ऑनलाइन या मतदान केंद्र पर छात्र आईडी के साथ वोट कर सकते हैं।'
    },
    mr: {
      question: 'विद्यार्थी निवडणुका कधी होतात, उमेदवारी कशी करावी, पात्रता काय आहे, प्रचार खर्चावर मर्यादा आहे का, आणि मतदान कसे करावे?',
      answer: 'विद्यार्थी निवडणुका दरवर्षी घेतल्या जातात आणि माहिती कॉलेजकडून जाहीर केली जाते. उमेदवारीसाठी अर्ज, शैक्षणिक पात्रता आणि शिस्त निकष पूर्ण करणे आवश्यक आहे. उमेदवारांनी किमान उपस्थिती राखणे आवश्यक आहे. प्रचार खर्चावर नियम असतात. विद्यार्थी ऑनलाइन किंवा मतदान केंद्रावर ओळखपत्रासह मतदान करू शकतात.'
    },
    kn: {
      question: 'ವಿದ್ಯಾರ್ಥಿ ಚುನಾವಣೆಗಳು ಯಾವಾಗ, ಹೇಗೆ ಸ್ಪರ್ಧಿಸಬೇಕು, ಅರ್ಹತೆ ಏನು, ಪ್ರಚಾರ ವೆಚ್ಚದ ಮಿತಿಗಳಿವೆಯೇ, ಮತ್ತು ಮತ ಚಲಿಸುವುದು ಹೇಗೆ?',
      answer: 'ವಿದ್ಯಾರ್ಥಿ ಚುನಾವಣೆಗಳು ವರ್ಷಕ್ಕೊಮ್ಮೆ ನಡೆಯುತ್ತವೆ. ಸ್ಪರ್ಧಿಸಲು ನಾಮಪತ್ರ ಸಲ್ಲಿಸಿ, ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಶಿಸ್ತು ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸಬೇಕು. ಪ್ರಚಾರ ವೆಚ್ಚ ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗೆ ನಿಯಮಗಳಿವೆ. ವಿದ್ಯಾರ್ಥಿಗಳು ಆನ್‌ಲೈನ್ ಅಥವಾ ಮತಗಟ್ಟೆಯಲ್ಲಿ ಗುರುತಿನ ಚೀಟಿಯೊಂದಿಗೆ ಮತ ಚಲಿಸಬಹುದು.'
    },
    te: {
      question: 'విద్యార్థి ఎన్నికలు ఎప్పుడు, ఎలా పోటీ చేయాలి, అర్హత ఏమిటి, ప్రచార ఖర్చుల పరిమితులు ఉన్నాయా, మరియు ఓటు ఎలా వేయాలి?',
      answer: 'విద్యార్థి ఎన్నికలు ప్రతి సంవత్సరం జరుగుతాయి. పోటీ చేయడానికి నామినేషన్ ఫారం సమర్పించి, అకాడెమిక్ మరియు క్రమశిక్షణ ప్రమాణాలు పూర్తి చేయాలి. ప్రచార ఖర్చులపై నియమాలు ఉంటాయి. విద్యార్థులు ఆన్‌లైన్ లేదా పోలింగ్ కేంద్రాల్లో ఓటు వేయవచ్చు.'
    }
  }
},
{
  id: '104',
  intent: 'Disability_Support_Services',
  category: 'Student Support',
  priority: 1,
  keywords: ['disability support', 'accommodations', 'accessible classrooms', 'assistive technology', 'screen readers', 'interpreters'],
  synonyms: ['special needs', 'inclusive education', 'wheelchair access', 'learning disability', 'support office'],
  translations: {
    en: {
      question: 'What accommodations are available, how do I request accessibility support, are assistive technologies provided, and where is the disability support office?',
      answer: 'The college provides academic accommodations such as extra exam time, note-taking assistance, and accessible learning materials for students with disabilities. Requests can be submitted through the disability support office with proper documentation. Accessible classrooms, ramps, and wheelchair-friendly infrastructure are available. Assistive technologies like screen readers and hearing support are provided. Sign language interpreters may be arranged upon request. Students can visit the disability support office or website for further assistance.'
    },
    hi: {
      question: 'क्या सुविधाएँ उपलब्ध हैं, एक्सेसिबिलिटी सहायता कैसे मांगे, क्या सहायक तकनीक मिलती है, और डिसेबिलिटी सपोर्ट ऑफिस कहाँ है?',
      answer: 'कॉलेज विशेष जरूरत वाले छात्रों के लिए अतिरिक्त परीक्षा समय, नोट्स सहायता और सुलभ सामग्री प्रदान करता है। अनुरोध दस्तावेज़ के साथ सपोर्ट ऑफिस में जमा किया जा सकता है। रैंप और व्हीलचेयर सुविधा उपलब्ध है। स्क्रीन रीडर और अन्य तकनीक भी मिलती हैं। जरूरत अनुसार साइन लैंग्वेज इंटरप्रेटर उपलब्ध कराए जाते हैं।'
    },
    mr: {
      question: 'कोणत्या सोयी आहेत, प्रवेशयोग्यता कशी मागावी, सहाय्यक तंत्रज्ञान मिळते का, आणि सपोर्ट कार्यालय कुठे आहे?',
      answer: 'कॉलेज विशेष गरज असलेल्या विद्यार्थ्यांसाठी अतिरिक्त वेळ, नोट्स आणि सुलभ शिक्षण साहित्य देते. अर्ज आवश्यक कागदपत्रांसह करावा लागतो. रॅम्प आणि व्हीलचेअर सुविधा उपलब्ध आहेत. स्क्रीन रीडर आणि इतर तंत्रज्ञान दिले जाते. आवश्यक असल्यास साइन भाषा दुभाषा दिला जातो.'
    },
    kn: {
      question: 'ಯಾವ ಸೌಲಭ್ಯಗಳಿವೆ, ಪ್ರವೇಶ ಬೆಂಬಲ ಹೇಗೆ ಕೇಳಬೇಕು, ಸಹಾಯಕ ತಂತ್ರಜ್ಞಾನ ದೊರೆಯುತ್ತದೆಯೇ, ಮತ್ತು ಕಚೇರಿ ಎಲ್ಲಿದೆ?',
      answer: 'ಕಾಲೇಜು ವಿಶೇಷ ಅಗತ್ಯವಿರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹೆಚ್ಚುವರಿ ಸಮಯ, ಟಿಪ್ಪಣಿ ಸಹಾಯ ಮತ್ತು ಸುಲಭ ಕಲಿಕಾ ವಸ್ತುಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅರ್ಜಿಯನ್ನು ದಾಖಲೆಗಳೊಂದಿಗೆ ಸಲ್ಲಿಸಬೇಕು. ಪ್ರವೇಶಸೌಲಭ್ಯಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳು ಲಭ್ಯವಿವೆ.'
    },
    te: {
      question: 'ఏ సౌకర్యాలు ఉన్నాయి, యాక్సెసిబిలిటీ సహాయం ఎలా పొందాలి, సహాయక సాంకేతికత ఉందా, మరియు కార్యాలయం ఎక్కడ ఉంది?',
      answer: 'కళాశాల ప్రత్యేక అవసరాలున్న విద్యార్థులకు అదనపు పరీక్ష సమయం, నోట్ సహాయం మరియు సులభమైన పాఠ్య వనరులను అందిస్తుంది. దరఖాస్తును అవసరమైన పత్రాలతో సమర్పించాలి. యాక్సెసిబిలిటీ మరియు సహాయక సాంకేతికత అందుబాటులో ఉన్నాయి.'
    }
  }
},
{
  id: '105',
  intent: 'Alumni_Mentorship_Program',
  category: 'Alumni & Career Support',
  priority: 2,
  keywords: ['alumni mentorship', 'mentor matching', 'career guidance', 'alumni network', 'networking events', 'mentee meetings'],
  synonyms: ['alumni guidance', 'career mentoring', 'professional networking', 'graduate mentors', 'mentorship application'],
  translations: {
    en: {
      question: 'How do I apply for the alumni mentorship program, can I select a mentor based on career field, what are the benefits, are there virtual events, and how often do mentors meet mentees?',
      answer: 'Students can apply for the alumni mentorship program through the career services portal by submitting an application form outlining their interests and goals. Mentor matching is typically done based on career field, academic background, and professional aspirations. Benefits include career guidance, industry insights, internship referrals, and networking opportunities. Virtual networking sessions and alumni interaction events are conducted periodically. Mentors usually meet with mentees once or twice a month, depending on mutual availability and program guidelines.'
    },
    hi: {
      question: 'एलुमनी मेंटरशिप के लिए आवेदन कैसे करें, क्या करियर के आधार पर मेंटर चुन सकते हैं, क्या लाभ हैं, क्या वर्चुअल इवेंट्स हैं, और मेंटर कितनी बार मिलते हैं?',
      answer: 'छात्र करियर सर्विस पोर्टल के माध्यम से आवेदन कर सकते हैं। मेंटर का मिलान करियर क्षेत्र और रुचि के आधार पर किया जाता है। लाभों में करियर मार्गदर्शन, नेटवर्किंग और इंटर्नशिप अवसर शामिल हैं। वर्चुअल नेटवर्किंग इवेंट्स आयोजित किए जाते हैं। मेंटर आमतौर पर महीने में एक या दो बार मिलते हैं।'
    },
    mr: {
      question: 'अलुमनी मेंटरशिपसाठी अर्ज कसा करावा, करिअरनुसार मेंटर निवडता येतो का, फायदे काय आहेत, व्हर्च्युअल कार्यक्रम आहेत का, आणि मेंटर किती वेळा भेटतात?',
      answer: 'करिअर सेवा पोर्टलद्वारे अर्ज करता येतो. करिअर आणि आवडीच्या आधारे मेंटर निवड केला जातो. फायदे म्हणजे मार्गदर्शन, नेटवर्किंग आणि इंटर्नशिप संधी. व्हर्च्युअल कार्यक्रम आयोजित केले जातात. मेंटर महिन्यातून एक किंवा दोन वेळा भेटतात.'
    },
    kn: {
      question: 'ಮಾರ್ಗದರ್ಶನ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು, ವೃತ್ತಿಯ ಆಧಾರದ ಮೇಲೆ ಆಯ್ಕೆ ಮಾಡಬಹುದೇ, ಪ್ರಯೋಜನಗಳು ಏನು, ವರ್ಚುವಲ್ ಕಾರ್ಯಕ್ರಮಗಳಿವೆಯೇ, ಮತ್ತು ಎಷ್ಟು ಬಾರಿ ಭೇಟಿ?',
      answer: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಕರಿಯರ್ ಸೇವಾ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು. ವೃತ್ತಿ ಮತ್ತು ಆಸಕ್ತಿಯ ಆಧಾರದ ಮೇಲೆ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಹೊಂದಿಸಲಾಗುತ್ತದೆ. ಪ್ರಯೋಜನಗಳಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ನೆಟ್‌ವರ್ಕಿಂಗ್ ಸೇರಿವೆ. ವರ್ಚುವಲ್ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಸಾಮಾನ್ಯವಾಗಿ ತಿಂಗಳಿಗೆ ಒಂದು ಅಥವಾ ಎರಡು ಬಾರಿ ಭೇಟಿ ಮಾಡುತ್ತಾರೆ.'
    },
    te: {
      question: 'మెంటార్‌షిప్‌కు ఎలా దరఖాస్తు చేయాలి, కెరీర్ ఆధారంగా ఎంపిక చేసుకోవచ్చా, ప్రయోజనాలు ఏమిటి, వర్చువల్ ఈవెంట్లు ఉన్నాయా, మరియు ఎంత తరచుగా కలుస్తారు?',
      answer: 'కెరీర్ సర్వీసెస్ పోర్టల్ ద్వారా దరఖాస్తు చేయవచ్చు. కెరీర్ మరియు ఆసక్తుల ఆధారంగా మెంటార్‌ను జత చేస్తారు. ప్రయోజనాల్లో మార్గదర్శనం మరియు నెట్‌వర్కింగ్ ఉన్నాయి. వర్చువల్ ఈవెంట్లు నిర్వహిస్తారు. సాధారణంగా నెలకు ఒకటి లేదా రెండు సార్లు కలుస్తారు.'
    }
  }
},
{
  id: '106',
  intent: 'Campus_Safety_Reporting',
  category: 'Campus Safety',
  priority: 1,
  keywords: ['safety reporting', 'campus security', 'emergency contact', 'harassment report', 'anonymous complaint', 'safety app', 'blue light phones'],
  synonyms: ['incident report', 'security helpline', 'emergency number', 'complaint system', 'campus protection'],
  translations: {
    en: {
      question: 'How do I report a campus safety concern, what is the emergency contact number, is anonymous reporting available, is there a safety app, and where are blue light phones located?',
      answer: 'Students can report safety concerns through the campus security office, official website, or designated reporting portals. The emergency contact number is displayed on student ID cards and campus notice boards. Anonymous reporting options are available for harassment or sensitive complaints. Many colleges provide a mobile safety app with emergency alerts and location tracking features. Blue light emergency phones are installed at key locations across campus such as parking areas, hostels, and main walkways.'
    },
    hi: {
      question: 'सुरक्षा चिंता कैसे रिपोर्ट करें, आपातकालीन नंबर क्या है, क्या गुमनाम रिपोर्ट संभव है, क्या सुरक्षा ऐप है, और ब्लू लाइट फोन कहाँ हैं?',
      answer: 'सुरक्षा चिंता कैंपस सुरक्षा कार्यालय या वेबसाइट के माध्यम से दर्ज की जा सकती है। आपातकालीन नंबर छात्र आईडी और नोटिस बोर्ड पर उपलब्ध होता है। गुमनाम शिकायत की सुविधा उपलब्ध है। कई कॉलेज सुरक्षा मोबाइल ऐप प्रदान करते हैं। ब्लू लाइट फोन मुख्य स्थानों पर लगाए जाते हैं।'
    },
    mr: {
      question: 'सुरक्षा तक्रार कशी करावी, आपत्कालीन क्रमांक काय आहे, गुप्त तक्रार शक्य आहे का, सुरक्षा अॅप आहे का, आणि ब्लू लाइट फोन कुठे आहेत?',
      answer: 'सुरक्षा तक्रार सुरक्षा कार्यालय किंवा वेबसाइटद्वारे करता येते. आपत्कालीन क्रमांक ओळखपत्रावर दिलेला असतो. गुप्त तक्रारीची सुविधा उपलब्ध आहे. सुरक्षा अॅप दिले जाते. ब्लू लाइट फोन महत्त्वाच्या ठिकाणी असतात.'
    },
    kn: {
      question: 'ಸುರಕ್ಷಾ ವರದಿ ಹೇಗೆ ಮಾಡಬೇಕು, ತುರ್ತು ಸಂಖ್ಯೆ ಯಾವುದು, ಗುಪ್ತ ದೂರು ಸಾಧ್ಯವೇ, ಸುರಕ್ಷಾ ಆ್ಯಪ್ ಇದೆಯೇ, ಮತ್ತು ನೀಲಿ ಬೆಳಕಿನ ಫೋನ್‌ಗಳು ಎಲ್ಲಿ?',
      answer: 'ಸುರಕ್ಷಾ ಕಾಳಜಿಗಳನ್ನು ಸುರಕ್ಷಾ ಕಚೇರಿ ಅಥವಾ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ವರದಿ ಮಾಡಬಹುದು. ತುರ್ತು ಸಂಖ್ಯೆ ಗುರುತಿನ ಚೀಟಿಯಲ್ಲಿ ನೀಡಿರುತ್ತದೆ. ಗುಪ್ತ ದೂರು ವ್ಯವಸ್ಥೆ ಇದೆ. ಸುರಕ್ಷಾ ಆ್ಯಪ್ ಲಭ್ಯವಿದೆ. ನೀಲಿ ಬೆಳಕಿನ ಫೋನ್‌ಗಳು ಪ್ರಮುಖ ಸ್ಥಳಗಳಲ್ಲಿ ಇವೆ.'
    },
    te: {
      question: 'భద్రతా నివేదిక ఎలా ఇవ్వాలి, అత్యవసర నంబర్ ఏమిటి, అనామక ఫిర్యాదు సాధ్యమా, భద్రతా యాప్ ఉందా, మరియు నీలి లైట్ ఫోన్‌లు ఎక్కడ?',
      answer: 'భద్రతా ఆందోళనలను భద్రతా కార్యాలయం లేదా వెబ్‌సైట్ ద్వారా నివేదించవచ్చు. అత్యవసర నంబర్ ఐడి కార్డులో ఉంటుంది. అనామక ఫిర్యాదు సౌకర్యం ఉంది. భద్రతా యాప్ అందుబాటులో ఉంది. నీలి లైట్ ఫోన్‌లు ముఖ్య ప్రాంతాల్లో ఉన్నాయి.'
    }
  }
},






  
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