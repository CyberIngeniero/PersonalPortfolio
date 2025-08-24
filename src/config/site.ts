interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

interface ChatConfig {
  enabled: boolean;
  title: string;
  welcomeMessage: string;
  agentName: string;
  agentAvatar: string;
  position: 'right' | 'left';
  brevoKey: string;
}

interface Greeting {
  text: string;
  lang: string;
}

interface HeroConfig {
  greeting: string;
  greetings: Greeting[];
  subtitle: string;
  description: string;
  resumeUrl: string;
  calendarUrl: string;
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  githubUsername: string;
  hero: HeroConfig;
  contact: ContactInfo;
  socials: SocialLink[];
  resumeUrl: string;
  chat: ChatConfig;
}

export const siteConfig: SiteConfig = {
  name: "CyberIngeniero",
  title: "Solutions Architect & AI Engineer",
  description: "Transforming businesses through cutting-edge AI solutions and scalable architectures that drive innovation and growth",
  githubUsername: import.meta.env.VITE_GITHUB_USERNAME || "cyberingeniero",
  hero: {
    greeting: "Hola, Soy CyberIngeniero",
    greetings: [
      { text: "Hello, I'm CyberIngeniero", lang: "en" },
      { text: "Hola, Soy CyberIngeniero", lang: "es" },
      { text: "Bonjour, Je suis CyberIngeniero", lang: "fr" },
      { text: "Ciao, Sono CyberIngeniero", lang: "it" },
      { text: "Olá, Eu sou CyberIngeniero", lang: "pt" },
      { text: "こんにちは、CyberIngenieroです", lang: "ja" },
      { text: "你好，我是 CyberIngeniero", lang: "zh" },
      { text: "Привет, я CyberIngeniero", lang: "ru" },
      { text: "مرحبا، أنا CyberIngeniero", lang: "ar" },
      { text: "नमस्ते, मैं CyberIngeniero हूँ", lang: "hi" },
      { text: "안녕하세요, 저는 CyberIngeniero입니다", lang: "ko" },
      { text: "Hallo, ich bin CyberIngeniero", lang: "de" },
      { text: "Hej, jag är CyberIngeniero", lang: "sv" },
      { text: "Γεια σας, είμαι ο CyberIngeniero", lang: "el" }
    ],
    subtitle: "Solutions Architect & AI Engineer",
    description: "Transforming businesses through cutting-edge AI solutions and scalable architectures that drive innovation and growth.",
    resumeUrl: import.meta.env.VITE_RESUME_URL || "/assets/CyberIngeniero-CV.pdf",
    calendarUrl: import.meta.env.VITE_CALENDAR_URL || "https://calendar.app.google/EDfvn79MF464kjfb9"
  },
  contact: {
    email: "nibaldo.pino.araya@gmail.com",
    github: "github.com/cyberingeniero",
    linkedin: "linkedin.com/in/nibaldopinoaraya",
    twitter: "x.com/CyberMath4"
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/cyberingeniero",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/nibaldopinoaraya",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://x.com/CyberMath4",
      icon: "twitter"
    }
  ],
  resumeUrl: import.meta.env.VITE_RESUME_URL || "/assets/CyberIngeniero-CV.pdf",
  chat: {
    enabled: true,
    title: "Chat with me",
    welcomeMessage: "👋 Hi! How can I help you today?",
    agentName: "Nibaldo",
    agentAvatar: "https://github.com/cyberingeniero.png",
    position: "right",
    brevoKey: import.meta.env.VITE_BREVO_API_KEY || ""
  }
};
