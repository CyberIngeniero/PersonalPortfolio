interface TechItem {
  name: string;
}

interface TechCategory {
  name: string;
  icon: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    icon: "💻",
    items: [
      { name: "React" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "SASS" }
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Java" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "MongoDB" }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    items: [
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" }
    ]
  },
  {
    name: "AI & ML",
    icon: "🧠",
    items: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "OpenAI" },
      { name: "Computer Vision" },
      { name: "NLP" }
    ]
  }
];