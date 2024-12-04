import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export interface ContactConfig {
  title: string;
  emailService: {
    apiUrl: string;
    apiKey: string;
    sender: {
      name: string;
      email: string;
    };
    recipient: {
      name: string;
      email: string;
    };
  };
  form: {
    fields: {
      name: {
        placeholder: string;
        required: boolean;
      };
      email: {
        placeholder: string;
        required: boolean;
      };
      message: {
        placeholder: string;
        required: boolean;
        rows: number;
      };
    };
    submitButton: {
      text: string;
      icon: string;
      successText: string;
      loadingDuration: number;
    };
  };
  socialLinks: {
    [key: string]: {
      icon: string;
      url: string;
      label: string;
    };
  };
  animations: {
    rocket: {
      distance: number;
      height: number;
      rotation: number;
      duration: number;
    };
    success: {
      duration: number;
    };
  };
}

export const contactConfig: ContactConfig = {
  title: "Let's Work Together",
  emailService: {
    apiUrl: import.meta.env.VITE_BREVO_API_URL || '',
    apiKey: import.meta.env.VITE_BREVO_API_KEY || '',
    sender: {
      name: "Portfolio Contact Form",
      email: "nibaldo.pino.araya@gmail.com"
    },
    recipient: {
      name: "Nibaldo Pino",
      email: "nibaldo.pino.araya@gmail.com"
    }
  },
  form: {
    fields: {
      name: {
        placeholder: "Your Name",
        required: true
      },
      email: {
        placeholder: "Your Email",
        required: true
      },
      message: {
        placeholder: "Your Message",
        required: true,
        rows: 4
      }
    },
    submitButton: {
      text: "Send Message",
      icon: "rocket",
      successText: "Sent!",
      loadingDuration: 3000
    }
  },
  socialLinks: {
    github: {
      icon: "github",
      url: "github.com/cyberingeniero",
      label: "GitHub"
    },
    linkedin: {
      icon: "linkedin",
      url: "linkedin.com/in/nibaldopinoaraya",
      label: "LinkedIn"
    },
    twitter: {
      icon: "twitter",
      url: "x.com/CyberMath4",
      label: "Twitter"
    },
    email: {
      icon: "mail",
      url: "nibaldo.pino.araya@gmail.com",
      label: "Email"
    }
  },
  animations: {
    rocket: {
      distance: 200,
      height: 50,
      rotation: 45,
      duration: 0.8
    },
    success: {
      duration: 0.3
    }
  }
};
