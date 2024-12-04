interface Education {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface Service {
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  image: string;
}

interface Content {
  education: Education[];
  experience: Experience[];
  services: Service[];
}

export const content: Content = {
  education: [
    {
      year: "2018 - 2022",
      title: "Master in Artificial Intelligence",
      organization: "Tech University",
      description: "Specialized in machine learning and neural networks with focus on practical applications in enterprise environments. Research focused on deep learning architectures for natural language processing."
    },
    {
      year: "2014 - 2018",
      title: "Bachelor in Computer Science",
      organization: "Science University",
      description: "Foundation in computer science, algorithms, and software engineering. Graduated with honors, specializing in AI and machine learning fundamentals."
    }
  ],
  experience: [
    {
      year: "2022 - Present",
      title: "Senior AI Solutions Architect",
      organization: "Tech Solutions Inc.",
      description: "Leading AI implementation projects and architecting scalable solutions for enterprise clients. Managing a team of ML engineers and data scientists."
    },
    {
      year: "2020 - 2022",
      title: "AI Developer",
      organization: "Innovation Labs",
      description: "Developed and deployed machine learning models for production environments. Implemented NLP solutions for customer service automation."
    },
    {
      year: "2018 - 2020",
      title: "Software Engineer",
      organization: "Digital Systems",
      description: "Full-stack development with focus on AI integration. Built scalable web applications with modern technologies."
    }
  ],
  services: [
    {
      icon: "brain",
      title: "AI Solutions Architecture",
      shortDesc: "Custom AI system design and implementation for your business needs.",
      longDesc: "Comprehensive AI solution design and implementation services tailored to your specific business requirements. We focus on creating scalable, efficient, and maintainable AI systems that deliver real value.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600",
      features: [
        "Custom AI model development",
        "System architecture design",
        "Integration planning and execution",
        "Performance optimization",
        "Scalability solutions"
      ]
    },
    {
      icon: "code",
      title: "Development",
      shortDesc: "Full-stack development with AI integration and modern technologies.",
      longDesc: "End-to-end development services combining modern web technologies with AI capabilities. We build robust, scalable applications that leverage the latest in AI and web development.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600",
      features: [
        "Full-stack web development",
        "AI integration",
        "API development",
        "Cloud architecture",
        "DevOps implementation"
      ]
    },
    {
      icon: "cpu",
      title: "AI Consulting",
      shortDesc: "Strategic guidance on AI implementation and optimization.",
      longDesc: "Expert consulting services to help you navigate the AI landscape. We provide strategic guidance on implementing and optimizing AI solutions for your business.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800&h=600",
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation roadmap",
        "Team training",
        "Best practices guidance"
      ]
    }
  ]
};