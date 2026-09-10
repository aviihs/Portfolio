import type { ChatLink } from "../types/chat";
import { RESUME_PDF_PATH, SOCIAL_LINKS, UPWORK_PROFILE_URL } from "./site";

export type Language = "en" | "np" | "roman";

export const LANGUAGE_IDS: Language[] = ["en", "np", "roman"];

export const LANGUAGES: { id: Language; label: string; hint: string }[] = [
  { id: "en", label: "English", hint: "English" },
  { id: "np", label: "नेपाली", hint: "Nepali" },
  { id: "roman", label: "Roman English", hint: "Romanized Nepali" },
];

type Localized = Record<Language, string>;

export const CHAT_WELCOME = {
  emoji: "🙏",
  title: "NAMASTE",
  prompt: "Select a language to start the conversation.",
};

export const CHATBOT: {
  title: string;
  subtitle: Localized;
  placeholder: Localized;
  disclaimer: Localized;
  errorText: Localized;
  changeLanguage: string;
} = {
  title: "Portfolio assistant",
  subtitle: {
    en: "Ask about skills, projects, and availability",
    np: "सिप, प्रोजेक्ट र उपलब्धताबारे सोध्नुहोस्",
    roman: "Sip, project ra upalabdhata barema sodhnuhos",
  },
  placeholder: {
    en: "Type your question",
    np: "आफ्नो प्रश्न लेख्नुहोस्",
    roman: "Aafno prashna lekhnuhos",
  },
  disclaimer: {
    en: "Automated assistant. Answers are drawn from Shiva's portfolio.",
    np: "स्वचालित सहायक। जवाफहरू शिवको पोर्टफोलियोबाट लिइएका हुन्।",
    roman: "Automated assistant. Jawaf haru Shiva ko portfolio bata linieko.",
  },
  errorText: {
    en: "Something went wrong. Please try again.",
    np: "केही गडबड भयो। फेरि प्रयास गर्नुहोस्।",
    roman: "Kehi galat bhayo. Feri prayas garnuhos.",
  },
  changeLanguage: "Change language",
};

export const CHAT_INTRO: Localized = {
  en: "Namaste. Ask about Shiva's stack, projects, experience, or how to get in touch.",
  np: "नमस्ते। शिवको स्ट्याक, प्रोजेक्ट, अनुभव वा सम्पर्कबारे सोध्नुहोस्।",
  roman: "Namaste. Shiva ko stack, project, experience wa sampark barema sodhnuhos.",
};

export const GREETING_RESPONSE: Localized = {
  en: "Hi there. Ask me about Shiva's skills, projects, experience, or how to start a conversation.",
  np: "नमस्ते। शिवको सिप, प्रोजेक्ट, अनुभव वा कुराकानी कसरी सुरु गर्ने भन्ने सोध्नुहोस्।",
  roman: "Namaste. Shiva ko sip, project, experience wa kura kasari suru garne bhanne sodhnuhos.",
};

export const CHAT_FALLBACK: Localized = {
  en: "I can help with Shiva's skills, projects, experience, and contact details. Try one of the suggestions, or ask something specific.",
  np: "म शिवको सिप, प्रोजेक्ट, अनुभव र सम्पर्क विवरणमा सहयोग गर्न सक्छु। कुनै सुझाव रोज्नुहोस्, वा केही खास कुरा सोध्नुहोस्।",
  roman: "Ma Shiva ko sip, project, experience ra sampark details ma help garna sakchhu. Kunai suggestion rojnuhos, wa kehi khas kura sodhnuhos.",
};

export type Suggestion = { label: string; query: string };

export const CHAT_SUGGESTIONS: Record<Language, Suggestion[]> = {
  en: [
    { label: "What is Shiva's tech stack?", query: "tech stack skills" },
    { label: "Show me recent projects", query: "recent projects work" },
    { label: "Is Shiva available for work?", query: "available for work hire" },
    { label: "How can I reach Shiva?", query: "contact reach email" },
  ],
  np: [
    { label: "शिवको टेक स्ट्याक के हो?", query: "tech stack skills" },
    { label: "हालैका प्रोजेक्ट देखाउनुहोस्", query: "recent projects work" },
    { label: "के शिव कामका लागि उपलब्ध छन्?", query: "available for work hire" },
    { label: "शिवलाई कसरी सम्पर्क गर्ने?", query: "contact reach email" },
  ],
  roman: [
    { label: "Shiva ko tech stack ke ho?", query: "tech stack skills" },
    { label: "Halai ka project dekhaunuhos", query: "recent projects work" },
    { label: "Ke Shiva kaam ka lagi available chhan?", query: "available for work hire" },
    { label: "Shiva lai kasari sampark garne?", query: "contact reach email" },
  ],
};

const LINKEDIN_URL =
  SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/in/shiva-bhusal-9409152a6/";

const CONTACT_LINKS: ChatLink[] = [
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Upwork", href: UPWORK_PROFILE_URL },
];

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  response: Localized;
  links?: ChatLink[];
};

export const CHAT_KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "about",
    keywords: ["about", "who", "bio", "background", "yourself", "shiva", "बारे", "परिचय", "parichaya", "ko ho"],
    response: {
      en: "Shiva Bhusal is a full-stack and mobile developer based in Kathmandu, Nepal. He builds fast, useful digital products across web, mobile, and product design.",
      np: "शिव भुसाल काठमाडौँ, नेपालका फुल-स्ट्याक तथा मोबाइल डेभलपर हुन्। उनी वेब, मोबाइल र प्रोडक्ट डिजाइनमा छिटो र उपयोगी डिजिटल प्रोडक्ट बनाउँछन्।",
      roman: "Shiva Bhusal Kathmandu, Nepal ka full-stack ra mobile developer hun. Wahaan web, mobile ra product design ma chhito ra kaam lagne digital product banaunchhan.",
    },
    links: [{ label: "About", href: "/about" }],
  },
  {
    id: "skills",
    keywords: [
      "skill", "stack", "tech", "technology", "language", "framework", "tools", "expertise",
      "सिप", "स्ट्याक", "प्रविधि", "sip", "sipa",
    ],
    response: {
      en: "His core stack is React, Next.js, and the MERN ecosystem with TypeScript throughout. He also ships mobile apps with Flutter and React Native, works with PHP and WordPress, and designs in Figma.",
      np: "उनको मुख्य स्ट्याक React, Next.js र MERN इकोसिस्टम हो, सँगै पूरै TypeScript। उनी Flutter र React Native मा मोबाइल एप पनि बनाउँछन्, PHP र WordPress मा काम गर्छन्, र Figma मा डिजाइन गर्छन्।",
      roman: "Wahaan ko main stack React, Next.js ra MERN ecosystem ho, sangai TypeScript. Wahaan Flutter ra React Native ma mobile app pani banaunchhan, PHP ra WordPress ma kaam garchhan, ra Figma ma design garchhan.",
    },
    links: [{ label: "Skillset", href: "/about" }],
  },
  {
    id: "projects",
    keywords: [
      "project", "work", "portfolio", "built", "case study", "app", "apps",
      "प्रोजेक्ट", "काम", "परियोजना", "pariyojana", "kaam",
    ],
    response: {
      en: "Recent work spans a NestJS task-management backend, Flutter apps for restaurants and healthcare, a Next.js storefront, and several web tools. The projects page has the full list.",
      np: "हालैका कामहरूमा NestJS टास्क-म्यानेजमेन्ट ब्याकेन्ड, रेस्टुरेन्ट र स्वास्थ्यसेवाका Flutter एप, Next.js स्टोरफ्रन्ट, र थुप्रै वेब टुलहरू पर्छन्। प्रोजेक्ट पेजमा पूरा सूची छ।",
      roman: "Halai ka kaam haru ma NestJS task-management backend, restaurant ra health service ka Flutter app, Next.js storefront, ra dherai web tool haru chhan. Project page ma pura list chha.",
    },
    links: [{ label: "Projects", href: "/project" }],
  },
  {
    id: "resume",
    keywords: [
      "resume", "cv", "experience", "career", "history",
      "रिजुमे", "अनुभव", "anubhav",
    ],
    response: {
      en: "You can view and download Shiva's full resume, covering full-stack development, React Native, PHP, WordPress, and SEO work.",
      np: "तपाईं शिवको पूरा रिजुमे हेर्न र डाउनलोड गर्न सक्नुहुन्छ, जसमा फुल-स्ट्याक डेभलपमेन्ट, React Native, PHP, WordPress र SEO को काम समेटिएको छ।",
      roman: "Tapain Shiva ko pura resume herna ra download garna saknuhunchha, jasma full-stack development, React Native, PHP, WordPress ra SEO ko kaam chha.",
    },
    links: [
      { label: "Resume", href: "/resume" },
      { label: "Download PDF", href: RESUME_PDF_PATH },
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact", "reach", "email", "hire", "available", "availability", "freelance", "collaborate", "talk",
      "सम्पर्क", "इमेल", "sampark",
    ],
    response: {
      en: "Shiva is open to freelance and product work. The best ways to reach him are LinkedIn and Upwork.",
      np: "शिव फ्रिल्यान्स र प्रोडक्ट कामका लागि उपलब्ध छन्। सम्पर्कका लागि उत्तम माध्यम LinkedIn र Upwork हुन्।",
      roman: "Shiva freelance ra product kaam ka lagi available chhan. Sampark ka lagi sabai bhanda ramro madhyam LinkedIn ra Upwork ho.",
    },
    links: CONTACT_LINKS,
  },
  {
    id: "services",
    keywords: ["service", "help", "offer", "do you", "provide", "build for", "सेवा", "sewa"],
    response: {
      en: "Shiva helps with full-stack web apps, mobile apps, WordPress builds, API development, SEO, and UI design.",
      np: "शिवले फुल-स्ट्याक वेब एप, मोबाइल एप, WordPress बिल्ड, API डेभलपमेन्ट, SEO र UI डिजाइनमा सहयोग गर्छन्।",
      roman: "Shiva le full-stack web app, mobile app, WordPress build, API development, SEO ra UI design ma help garchhan.",
    },
    links: [{ label: "Projects", href: "/project" }],
  },
  {
    id: "blogs",
    keywords: ["blog", "blogs", "article", "writing", "post", "notes", "ब्लग", "लेख"],
    response: {
      en: "Shiva writes about development, design, SEO, React, Next.js, and WordPress on the blog.",
      np: "शिव ब्लगमा डेभलपमेन्ट, डिजाइन, SEO, React, Next.js र WordPress बारे लेख्छन्।",
      roman: "Shiva blog ma development, design, SEO, React, Next.js ra WordPress barema lekhchhan.",
    },
    links: [{ label: "Blogs", href: "/blogs" }],
  },
  {
    id: "location",
    keywords: ["location", "where", "based", "country", "nepal", "kathmandu", "remote", "कहाँ", "kaha"],
    response: {
      en: "Shiva is based in Kathmandu, Nepal, and works with clients remotely.",
      np: "शिव काठमाडौँ, नेपालमा आधारित छन् र क्लाइन्टहरूसँग रिमोट काम गर्छन्।",
      roman: "Shiva Kathmandu, Nepal ma based chhan ra client haru sanga remote kaam garchhan.",
    },
  },
  {
    id: "interests",
    keywords: ["music", "hobby", "hobbies", "interest", "outside", "free time", "fun", "सङ्गीत", "sangeet"],
    response: {
      en: "Outside of engineering, Shiva produces music, does photo and video editing, and plays chess and badminton.",
      np: "इन्जिनियरिङ बाहेक, शिव सङ्गीत बनाउँछन्, फोटो र भिडियो एडिटिङ गर्छन्, र चेस तथा ब्याडमिन्टन खेल्छन्।",
      roman: "Engineering bahek, Shiva music banaunchhan, photo ra video editing garchhan, ra chess ani badminton khelchhan.",
    },
  },
];
