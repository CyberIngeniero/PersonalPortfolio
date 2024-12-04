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

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  githubUsername: string;
  contact: ContactInfo;
  socials: SocialLink[];
  resumeUrl: string;
  chat: ChatConfig;
}

export const siteConfig: SiteConfig = {
  name: "CyberIngeniero",
  title: "AI Solutions Architect & Developer",
  description: "Specialized in AI solutions and modern web development",
  githubUsername: "cyberingeniero",
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
  resumeUrl: "/assets/resume.pdf", // Replace with your actual resume URL
  chat: {
    enabled: true,
    title: "Chat with me",
    welcomeMessage: "👋 Hi! How can I help you today?",
    agentName: "Nibaldo",
    agentAvatar: "https://github.com/cyberingeniero.png",
    position: "right",
    brevoKey: "YOUR_BREVO_API_KEY"
  }
};
