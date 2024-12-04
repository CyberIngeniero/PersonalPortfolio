interface FooterLink {
  label: string;
  url: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterConfig {
  sections: FooterSection[];
  bottomLinks: FooterLink[];
  copyright: string;
}

export const footerConfig: FooterConfig = {
  sections: [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", url: "#services" },
        { label: "Development", url: "#services" },
        { label: "Consulting", url: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", url: "#about" },
        { label: "Projects", url: "#projects" },
        { label: "Contact", url: "#contact" }
      ]
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", url: "https://github.com/cyberingeniero", external: true },
        { label: "LinkedIn", url: "https://linkedin.com/in/nibaldopinoaraya", external: true },
        { label: "Twitter", url: "https://x.com/CyberMath4", external: true }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Terms of Service", url: "/terms" },
        { label: "Cookie Policy", url: "/cookies" }
      ]
    }
  ],
  bottomLinks: [
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Service", url: "/terms" },
    { label: "Cookie Policy", url: "/cookies" }
  ],
  copyright: "CyberIngeniero. All rights reserved."
};
