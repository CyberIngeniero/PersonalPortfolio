interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI' | 'Web' | 'Mobile' | 'Other';
}

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-level analytics platform using machine learning for predictive insights",
    longDescription: "A comprehensive analytics platform that leverages advanced machine learning algorithms to provide predictive insights for businesses. Features include real-time data processing, custom model training, and interactive visualizations.",
    image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1200&h=800",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    githubUrl: "https://github.com/cyberingeniero/ai-analytics",
    category: "AI"
  },
  {
    title: "Neural Network Visualization Tool",
    description: "Interactive tool for visualizing and understanding neural network architectures",
    longDescription: "An educational platform that helps users understand deep learning by visualizing neural network architectures in real-time. Users can create, modify, and experiment with different network configurations.",
    image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&q=80&w=1200&h=800",
    technologies: ["Three.js", "React", "TypeScript", "WebGL"],
    githubUrl: "https://github.com/cyberingeniero/neural-vis",
    liveUrl: "https://neural-vis.demo.com",
    category: "AI"
  },
  {
    title: "Smart City Management System",
    description: "IoT and AI-powered system for efficient city resource management",
    longDescription: "A comprehensive system that uses IoT sensors and AI algorithms to optimize city resources like traffic flow, energy consumption, and waste management. Features real-time monitoring and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=1200&h=800",
    technologies: ["Python", "TensorFlow", "React", "IoT", "MongoDB"],
    category: "AI"
  }
];