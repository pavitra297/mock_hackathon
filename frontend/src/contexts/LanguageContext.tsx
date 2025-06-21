
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
    'cta.getStarted': 'Get Started',

    // Navigation
    'nav.home': 'Home',
    'nav.campaigns': 'Campaigns',
    'nav.about': 'About',
    'nav.dashboard': 'Dashboard',
    'nav.donate': 'Donate',
    'nav.track': 'Track',
    'nav.admin': 'Admin',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.language': 'Language',

    // About Page
    'about.title': 'About EmPad',
    'about.description': 'We believe every woman deserves access to safe, affordable menstrual hygiene products and the education to use them with confidence. Our mission is to break down barriers and empower women across India.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To eliminate period poverty in India by providing sustainable access to menstrual hygiene products, comprehensive education, and community support systems. We work hand-in-hand with local organizations to ensure culturally sensitive and effective solutions that respect local customs while promoting health and dignity.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'A world where menstruation is not a barrier to education, work, or social participation. We envision an India where every woman and girl has the knowledge, products, and support she needs to manage her menstrual health with confidence and dignity, contributing to stronger, more equitable communities.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide everything we do',
    'about.values.compassion.title': 'Compassion',
    'about.values.compassion.description': 'We approach every woman\'s story with empathy and understanding, ensuring dignity in all our interactions.',
    'about.values.community.title': 'Community',
    'about.values.community.description': 'Building strong partnerships with local NGOs, communities, and donors to create lasting change.',
    'about.values.impact.title': 'Impact',
    'about.values.impact.description': 'Focused on measurable outcomes that improve women\'s health, education, and economic opportunities.',
    'about.values.accessibility.title': 'Accessibility',
    'about.values.accessibility.description': 'Making menstrual hygiene products and education accessible to every woman, regardless of location or economic status.',
    'about.impact.title': 'Our Impact Story',
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'Passionate individuals working to create change',
    'about.join.title': 'Join Our Mission',
    'about.join.description': 'Whether you\'re a donor, volunteer, or organization looking to partner with us, there are many ways to get involved and make a difference.',
    'about.join.ready': 'Ready to empower women across India?',
    'about.join.partner': 'Become a Partner',

    // Campaigns Page
    'campaigns.title': 'Our Campaigns',
    'campaigns.description': 'Explore our ongoing and completed campaigns across India. Each campaign represents our commitment to empowering women through menstrual health awareness and support.',
    'campaigns.status.completed': 'Completed',
    'campaigns.status.ongoing': 'Ongoing',
    'campaigns.status.upcoming': 'Upcoming',
    'campaigns.beneficiaries': 'women supported',
    'campaigns.date': 'Campaign Date',
    'campaigns.impact.title': 'Campaign Impact',
    'campaigns.impact.totalWomen': 'Total Women Reached',
    'campaigns.impact.totalCampaigns': 'Total Campaigns',
    'campaigns.impact.completed': 'Completed',
    'campaigns.impact.statesCovered': 'States Covered',
    'campaigns.articles.title': 'Educational Articles',

    // Login Page
    'login.welcome': 'Welcome Back',
    'login.createAccount': 'Create Account',
    'login.signInDescription': 'Sign in to continue making a difference',
    'login.joinDescription': 'Join our mission to empower women',
    'login.fullName': 'Full Name',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.confirmPassword': 'Confirm Password',
    'login.signIn': 'Sign In',
    'login.createAccountBtn': 'Create Account',
    'login.continueWith': 'Or continue with',
    'login.continueWithGoogle': 'Continue with Google',
    'login.alreadyHaveAccount': 'Already have an account? Sign in',
    'login.dontHaveAccount': 'Don\'t have an account? Sign up',
    'login.demoAccounts': 'Demo Accounts:',
    'login.userDemo': 'User: user@demo.com / password123',
    'login.adminDemo': 'Admin: admin@demo.com / password123',

    // NotFound Page
    'notFound.title': '404',
    'notFound.description': 'Oops! Page not found',
    'notFound.returnHome': 'Return to Home'
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
    'cta.getStarted': 'शुरू करें',

    // Navigation
    'nav.home': 'होम',
    'nav.campaigns': 'अभियान',
    'nav.about': 'बारे में',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.donate': 'दान करें',
    'nav.track': 'ट्रैक करें',
    'nav.admin': 'एडमिन',
    'nav.login': 'लॉगिन',
    'nav.logout': 'लॉगआउट',
    'nav.language': 'भाषा',

    // About Page
    'about.title': 'EmPad के बारे में',
    'about.description': 'हम मानते हैं कि हर महिला को सुरक्षित, किफायती मासिक धर्म स्वच्छता उत्पादों तक पहुंच और उन्हें आत्मविश्वास के साथ उपयोग करने की शिक्षा का अधिकार है। हमारा मिशन बाधाओं को तोड़ना और भारत भर में महिलाओं को सशक्त बनाना है।',
    'about.mission.title': 'हमारा मिशन',
    'about.mission.description': 'मासिक धर्म स्वच्छता उत्पादों, व्यापक शिक्षा और सामुदायिक सहायता प्रणालियों तक स्थायी पहुंच प्रदान करके भारत में पीरियड गरीबी को खत्म करना।',
    'about.vision.title': 'हमारी दृष्टि',
    'about.vision.description': 'एक ऐसी दुनिया जहां मासिक धर्म शिक्षा, काम या सामाजिक भागीदारी में बाधा न हो।',
    'about.values.title': 'हमारे मूल्य',
    'about.values.subtitle': 'वे सिद्धांत जो हमारे सभी कार्यों का मार्गदर्शन करते हैं',
    'about.values.compassion.title': 'करुणा',
    'about.values.compassion.description': 'हम हर महिला की कहानी को सहानुभूति और समझ के साथ देखते हैं।',
    'about.values.community.title': 'समुदाय',
    'about.values.community.description': 'स्थायी परिवर्तन बनाने के लिए स्थानीय एनजीओ, समुदायों और दानदाताओं के साथ मजबूत साझेदारी।',
    'about.values.impact.title': 'प्रभाव',
    'about.values.impact.description': 'महिलाओं के स्वास्थ्य, शिक्षा और आर्थिक अवसरों में सुधार के मापने योग्य परिणामों पर केंद्रित।',
    'about.values.accessibility.title': 'पहुंच',
    'about.values.accessibility.description': 'स्थान या आर्थिक स्थिति की परवाह किए बिना हर महिला के लिए मासिक धर्म स्वच्छता उत्पाद और शिक्षा को सुलभ बनाना।',
    'about.impact.title': 'हमारी प्रभाव कहानी',
    'about.team.title': 'हमारी टीम से मिलें',
    'about.team.subtitle': 'परिवर्तन लाने के लिए काम करने वाले भावुक व्यक्ति',
    'about.join.title': 'हमारे मिशन में शामिल हों',
    'about.join.description': 'चाहे आप दानदाता हों, स्वयंसेवक हों, या हमारे साथ साझेदारी करने वाली संस्था हों, शामिल होने और फर्क करने के कई तरीके हैं।',
    'about.join.ready': 'भारत भर में महिलाओं को सशक्त बनाने के लिए तैयार हैं?',
    'about.join.partner': 'भागीदार बनें',

    // Campaigns Page
    'campaigns.title': 'हमारे अभियान',
    'campaigns.description': 'भारत भर में हमारे चालू और पूर्ण अभियानों का अन्वेषण करें। प्रत्येक अभियान मासिक धर्म स्वास्थ्य जागरूकता और समर्थन के माध्यम से महिलाओं को सशक्त बनाने की हमारी प्रतिबद्धता का प्रतिनिधित्व करता है।',
    'campaigns.status.completed': 'पूर्ण',
    'campaigns.status.ongoing': 'चालू',
    'campaigns.status.upcoming': 'आगामी',
    'campaigns.beneficiaries': 'महिलाओं का समर्थन',
    'campaigns.date': 'अभियान दिनांक',
    'campaigns.impact.title': 'अभियान प्रभाव',
    'campaigns.impact.totalWomen': 'कुल महिलाओं तक पहुंच',
    'campaigns.impact.totalCampaigns': 'कुल अभियान',
    'campaigns.impact.completed': 'पूर्ण',
    'campaigns.impact.statesCovered': 'कवर किए गए राज्य',
    'campaigns.articles.title': 'शैक्षिक लेख',

    // Login Page
    'login.welcome': 'वापस स्वागत है',
    'login.createAccount': 'खाता बनाएं',
    'login.signInDescription': 'फर्क करना जारी रखने के लिए साइन इन करें',
    'login.joinDescription': 'महिलाओं को सशक्त बनाने के हमारे मिशन में शामिल हों',
    'login.fullName': 'पूरा नाम',
    'login.email': 'ईमेल',
    'login.password': 'पासवर्ड',
    'login.confirmPassword': 'पासवर्ड की पुष्टि करें',
    'login.signIn': 'साइन इन',
    'login.createAccountBtn': 'खाता बनाएं',
    'login.continueWith': 'या इसके साथ जारी रखें',
    'login.continueWithGoogle': 'Google के साथ जारी रखें',
    'login.alreadyHaveAccount': 'पहले से खाता है? साइन इन करें',
    'login.dontHaveAccount': 'खाता नहीं है? साइन अप करें',
    'login.demoAccounts': 'डेमो खाते:',
    'login.userDemo': 'उपयोगकर्ता: user@demo.com / password123',
    'login.adminDemo': 'एडमिन: admin@demo.com / password123',

    // NotFound Page
    'notFound.title': '404',
    'notFound.description': 'ओह! पेज नहीं मिला',
    'notFound.returnHome': 'होम पर वापस जाएं'
  },
  te: {
    // Hero Section
    'hero.badge': '🌟 భారతదేశం అంతటా మహిళలను సాధికారత చేయడం',
    'hero.title': 'ప్రతి మహిళకు హక్కు ఉంది',
    'hero.subtitle': 'గౌరవం & ఆరోగ్యం',
    'hero.description': 'గ్రామీణ భారతదేశంలోని మహిళలకు ఋతుస్రావ పరిశుభ్రత ఉత్పత్తులు మరియు విద్యను అందించడానికి మా మిషన్‌లో చేరండి। కలిసి, మేము అడ్డంకులను తొలగించి సమాజాలను సాధికారత చేయవచ్చు.',
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
    'cta.subtitle': 'భారతదేశం అంతటా మహిళలను సాధికారత చేస్తున్న వేలాది దాతలలో చేరండి। ప్రతి దానం ముఖ్యం.',
    'cta.startDonating': 'దానం ప్రారంభించండి',
    'cta.getStarted': 'ప్రారంభించండి',

    // Navigation
    'nav.home': 'హోమ్',
    'nav.campaigns': 'ప్రచారాలు',
    'nav.about': 'గురించి',
    'nav.dashboard': 'డాష్‌బోర్డ్',
    'nav.donate': 'దానం చేయండి',
    'nav.track': 'ట్రాక్ చేయండి',
    'nav.admin': 'అడ్మిన్',
    'nav.login': 'లాగిన్',
    'nav.logout': 'లాగ్ అవుట్',
    'nav.language': 'భాష',

    // About Page
    'about.title': 'EmPad గురించి',
    'about.description': 'ప్రతి మహిళకు సురక్షితమైన, సరసమైన ఋతుస్రావ పరిశుభ్రత ఉత్పత్తులకు మరియు వాటిని విశ్వాసంతో ఉపయోగించే విద్యకు అవకాశం ఉందని మేము నమ్ముతాము। మా లక్ష్యం అడ్డంకులను తొలగించడం మరియు భారతదేశం అంతటా మహిళలను సాధికారత చేయడం.',
    'about.mission.title': 'మా మిషన్',
    'about.mission.description': 'ఋతుస్రావ పరిశుభ్రత ఉత్పత్తులు, సమగ్ర విద్య మరియు సమాజ మద్దతు వ్యవస్థలకు స్థిరమైన ప్రవేశాన్ని అందించడం ద్వారా భారతదేశంలో పీరియడ్ పేదరికాన్ని తొలగించడం.',
    'about.vision.title': 'మా దృష్టి',
    'about.vision.description': 'ఋతుస్రావ విద్య, పని లేదా సామాజిక భాగస్వామ్యానికి అడ్డంకిగా లేని ప్రపంచం.',
    'about.values.title': 'మా విలువలు',
    'about.values.subtitle': 'మేము చేసే ప్రతిదానిని మార్గనిర్దేశం చేసే సూత్రాలు',
    'about.values.compassion.title': 'కరుణ',
    'about.values.compassion.description': 'మేము ప్రతి మహిళ కథను కనికరం మరియు అవగాహనతో చూస్తాము.',
    'about.values.community.title': 'సమాజం',
    'about.values.community.description': 'స్థిరమైన మార్పును సృష్టించడానికి స్థానిక NGOలు, సమాజాలు మరియు దాతలతో బలమైన భాగస్వామ్యాలను నిర్మించడం.',
    'about.values.impact.title': 'ప్రభావం',
    'about.values.impact.description': 'మహిళల ఆరోగ్యం, విద్య మరియు ఆర్థిక అవకాశాలను మెరుగుపరిచే కొలవగల ఫలితాలపై దృష్టి పెట్టడం.',
    'about.values.accessibility.title': 'ప్రాప్యత',
    'about.values.accessibility.description': 'స్థానం లేదా ఆర్థిక స్థితితో సంబంధం లేకుండా ప్రతి మహిళకు ఋతుస్రావ పరిశుభ్రత ఉత్పత్తులు మరియు విద్యను అందుబాటులో ఉంచడం.',
    'about.impact.title': 'మా ప్రభావ కథ',
    'about.team.title': 'మా టీమ్‌ను కలవండి',
    'about.team.subtitle': 'మార్పును తీసుకురావడానికి పనిచేస్తున్న అభిరుచిగల వ్యక్తులు',
    'about.join.title': 'మా మిషన్‌లో చేరండి',
    'about.join.description': 'మీరు దాత, స్వచ్ఛంద సేవకుడు లేదా మాతో భాగస్వామ్యాన్ని కోరుకునే సంస్థ అయినా, పాల్గొనడానికి మరియు మార్పు తీసుకురావడానికి అనేక మార్గాలు ఉన్నాయి.',
    'about.join.ready': 'భారతదేశం అంతటా మహిళలను సాధికారత చేయడానికి సిద్ధంగా ఉన్నారా?',
    'about.join.partner': 'భాగస్వామి అవ్వండి',

    // Campaigns Page
    'campaigns.title': 'మా ప్రచారాలు',
    'campaigns.description': 'భారతదేశం అంతటా మా కొనసాగుతున్న మరియు పూర్తైన ప్రచారాలను అన్వేషించండి. ప్రతి ప్రచారం ఋతుస్రావ ఆరోగ్య అవగాహన మరియు మద్దతు ద్వారా మహిళలను సాధికారత చేయడానికి మా నిబద్ధతను సూచిస్తుంది.',
    'campaigns.status.completed': 'పూర్తయింది',
    'campaigns.status.ongoing': 'కొనసాగుత్లున్నది',
    'campaigns.status.upcoming': 'రాబోతున్నది',
    'campaigns.beneficiaries': 'మహిళలకు మద్దతు',
    'campaigns.date': 'ప్రచార తేదీ',
    'campaigns.impact.title': 'ప్రచార ప్రభావం',
    'campaigns.impact.totalWomen': 'మొత్తం మహిళలకు చేరువ',
    'campaigns.impact.totalCampaigns': 'మొత్తం ప్రచారాలు',
    'campaigns.impact.completed': 'పూర్తయింది',
    'campaigns.impact.statesCovered': 'కవర్ చేసిన రాష్ట్రాలు',
    'campaigns.articles.title': 'విద్యా వ్యాసాలు',

    // Login Page
    'login.welcome': 'తిరిగి స్వాగతం',
    'login.createAccount': 'ఖాతా సృష్టించండి',
    'login.signInDescription': 'మార్పు తీసుకురావడం కొనసాగించడానికి సైన్ ఇన్ చేయండి',
    'login.joinDescription': 'మహిళలను సాధికారత చేయడానికి మా మిషన్‌లో చేరండి',
    'login.fullName': 'పూర్తి పేరు',
    'login.email': 'ఇమెయిల్',
    'login.password': 'పాస్‌వర్డ్',
    'login.confirmPassword': 'పాస్‌వర్డ్ నిర్ధారించండి',
    'login.signIn': 'సైన్ ఇన్',
    'login.createAccountBtn': 'ఖాతా సృష్టించండి',
    'login.continueWith': 'లేదా దీనితో కొనసాగండి',
    'login.continueWithGoogle': 'Google తో కొనసాగండి',
    'login.alreadyHaveAccount': 'ఇప్పటికే ఖాతా ఉందా? సైన్ ఇన్ చేయండి',
    'login.dontHaveAccount': 'ఖాతా లేదా? సైన్ అప్ చేయండి',
    'login.demoAccounts': 'డెమో ఖాతాలు:',
    'login.userDemo': 'వినియోగదారు: user@demo.com / password123',
    'login.adminDemo': 'అడ్మిన్: admin@demo.com / password123',

    // NotFound Page
    'notFound.title': '404',
    'notFound.description': 'అయ్యో! పేజీ కనుగొనబడలేదు',
    'notFound.returnHome': 'హోమ్‌కు తిరిగి వెళ్లండి'
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
