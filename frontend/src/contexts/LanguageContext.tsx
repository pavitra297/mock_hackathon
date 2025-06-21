
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.badge': '🌟 Empowering Women Across India',
    'hero.title': 'Every Woman Deserves',
    'hero.subtitle': 'Dignity & Health',
    'hero.description': 'Join our mission to provide menstrual hygiene products and education to women in rural India. Together, we can break barriers and empower communities.',
    'hero.donateNow': 'Donate Now',
    'hero.startDonating': 'Start Donating',
    'hero.learnMore': 'Learn More',
    
    // Impact Section
    'impact.title': 'Our Impact',
    'impact.subtitle': 'Real numbers, real change',
    'impact.womenSupported': 'Women Supported',
    'impact.kitsDistributed': 'Kits Distributed',
    'impact.ngoPartners': 'NGO Partners',
    'impact.statesReached': 'States Reached',
    
    // Charts
    'charts.monthlyDonations': 'Monthly Donations Trend',
    'charts.kitDistribution': 'Kit Distribution',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Simple steps to make a big impact',
    'howItWorks.step1Title': 'Choose Your Kit',
    'howItWorks.step1Desc': 'Select from our range of hygiene kits designed for different needs and budgets.',
    'howItWorks.step2Title': 'Make a Donation',
    'howItWorks.step2Desc': 'Secure payment through our platform. Every rupee goes directly to helping women.',
    'howItWorks.step3Title': 'Track Impact',
    'howItWorks.step3Desc': 'Follow your donation journey and see the real impact on beneficiaries.',
    
    // Testimonials
    'testimonials.title': 'Stories of Impact',
    'testimonials.subtitle': 'Hear from the women we\'ve supported',
    
    // CTA
    'cta.title': 'Ready to Make a Difference?',
    'cta.subtitle': 'Join thousands of donors who are empowering women across India. Every donation counts.',
    'cta.startDonating': 'Start Donating',
    'cta.getStarted': 'Get Started'
  },
  hi: {
    // Hero Section
    'hero.badge': '🌟 भारत भर में महिलाओं को सशक्त बनाना',
    'hero.title': 'हर महिला का हक है',
    'hero.subtitle': 'गरिमा और स्वास्थ्य',
    'hero.description': 'ग्रामीण भारत की महिलाओं को मासिक धर्म स्वच्छता उत्पाद और शिक्षा प्रदान करने के हमारे मिशन में शामिल हों। साथ मिलकर, हम बाधाओं को तोड़ सकते हैं और समुदायों को सशक्त बना सकते हैं।',
    'hero.donateNow': 'अभी दान करें',
    'hero.startDonating': 'दान शुरू करें',
    'hero.learnMore': 'और जानें',
    
    // Impact Section
    'impact.title': 'हमारा प्रभाव',
    'impact.subtitle': 'वास्तविक संख्या, वास्तविक परिवर्तन',
    'impact.womenSupported': 'महिलाओं का समर्थन',
    'impact.kitsDistributed': 'किट वितरित',
    'impact.ngoPartners': 'एनजीओ साझेदार',
    'impact.statesReached': 'राज्यों तक पहुँच',
    
    // Charts
    'charts.monthlyDonations': 'मासिक दान रुझान',
    'charts.kitDistribution': 'किट वितरण',
    
    // How It Works
    'howItWorks.title': 'यह कैसे काम करता है',
    'howItWorks.subtitle': 'बड़े प्रभाव के लिए सरल कदम',
    'howItWorks.step1Title': 'अपना किट चुनें',
    'howItWorks.step1Desc': 'विभिन्न आवश्यकताओं और बजट के लिए डिज़ाइन किए गए हमारे स्वच्छता किट की श्रृंखला से चुनें।',
    'howItWorks.step2Title': 'दान करें',
    'howItWorks.step2Desc': 'हमारे प्लेटफॉर्म के माध्यम से सुरक्षित भुगतान। हर रुपया सीधे महिलाओं की मदद करने में जाता है।',
    'howItWorks.step3Title': 'प्रभाव ट्रैक करें',
    'howItWorks.step3Desc': 'अपनी दान यात्रा का पालन करें और लाभार्थियों पर वास्तविक प्रभाव देखें।',
    
    // Testimonials
    'testimonials.title': 'प्रभाव की कहानियां',
    'testimonials.subtitle': 'उन महिलाओं से सुनें जिनका हमने समर्थन किया है',
    
    // CTA
    'cta.title': 'अंतर बनाने के लिए तैयार हैं?',
    'cta.subtitle': 'हजारों दानदाताओं में शामिल हों जो भारत भर में महिलाओं को सशक्त बना रहे हैं। हर दान मायने रखता है।',
    'cta.startDonating': 'दान शुरू करें',
    'cta.getStarted': 'शुरू करें'
  },
  te: {
    // Hero Section
    'hero.badge': '🌟 భారతదేశం అంతటా మహిళలను సాధికారత చేయడం',
    'hero.title': 'ప్రతి మహిళకు హక్కు ఉంది',
    'hero.subtitle': 'గౌరవం & ఆరోగ్యం',
    'hero.description': 'గ్రామీణ భారతదేశంలోని మహిళలకు ఋతుస్రావ పరిశుభ్రత ఉత్పత్తులు మరియు విద్యను అందించడానికి మా మిషన్‌లో చేరండి. కలిసి, మేము అడ్డంకులను తొలగించి సమాజాలను సాధికారత చేయవచ్చు.',
    'hero.donateNow': 'ఇప్పుడే దానం చేయండి',
    'hero.startDonating': 'దానం ప్రారంభించండి',
    'hero.learnMore': 'మరింత తెలుసుకోండి',
    
    // Impact Section
    'impact.title': 'మా ప్రభావం',
    'impact.subtitle': 'నిజమైన సంఖ్యలు, నిజమైన మార్పు',
    'impact.womenSupported': 'మహిళలకు మద్దతు',
    'impact.kitsDistributed': 'కిట్లు పంపిణీ',
    'impact.ngoPartners': 'NGO భాగస్వాములు',
    'impact.statesReached': 'రాష్ట్రాలకు చేరువ',
    
    // Charts
    'charts.monthlyDonations': 'మాసిక దానాల ధోరణి',
    'charts.kitDistribution': 'కిట్ పంపిణీ',
    
    // How It Works
    'howItWorks.title': 'ఇది ఎలా పని చేస్తుంది',
    'howItWorks.subtitle': 'పెద్ద ప్రభావం కోసం సరళమైన దశలు',
    'howItWorks.step1Title': 'మీ కిట్‌ను ఎంచుకోండి',
    'howItWorks.step1Desc': 'వివిధ అవసరాలు మరియు బడ్జెట్ల కోసం రూపొందించిన మా పరిశుభ్రత కిట్ల శ్రేణి నుండి ఎంచుకోండి.',
    'howItWorks.step2Title': 'దానం చేయండి',
    'howItWorks.step2Desc': 'మా ప్లాట్‌ఫారమ్ ద్వారా సురక్షిత చెల్లింపు. ప్రతి రూపాయి నేరుగా మహిళలకు సహాయం చేయడానికి వెళ్తుంది.',
    'howItWorks.step3Title': 'ప్రభావాన్ని ట్రాక్ చేయండి',
    'howItWorks.step3Desc': 'మీ దాన ప్రయాణాన్ని అనుసరించండి మరియు లబ్ధిదారులపై నిజమైన ప్రభావాన్ని చూడండి.',
    
    // Testimonials
    'testimonials.title': 'ప్రభావ కథలు',
    'testimonials.subtitle': 'మేము మద్దతు ఇచ్చిన మహిళల నుండి వినండి',
    
    // CTA
    'cta.title': 'మార్పు తీసుకురావడానికి సిద్ధంగా ఉన్నారా?',
    'cta.subtitle': 'భారతదేశం అంతటా మహిళలను సాధికారత చేస్తున్న వేలాది దాతలలో చేరండి. ప్రతి దానం ముఖ్యం.',
    'cta.startDonating': 'దానం ప్రారంభించండి',
    'cta.getStarted': 'ప్రారంభించండి'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
