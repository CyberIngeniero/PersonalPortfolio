interface SuccessCase {
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  technologies: string[];
}

export const successCases: SuccessCase[] = [
  {
    title: "AI-Powered Customer Service Automation",
    client: "Global E-commerce Company",
    description: "Implemented an AI-driven customer service system that handles over 70% of customer inquiries automatically.",
    challenge: "The client was struggling with increasing customer service demands and long response times.",
    solution: "Developed a custom NLP model for understanding customer queries and automated response system integrated with existing platforms.",
    results: [
      "75% reduction in response time",
      "Cost savings of $2M annually",
      "Customer satisfaction increased by 35%"
    ],
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"]
  },
  {
    title: "Predictive Maintenance System",
    client: "Manufacturing Industry Leader",
    description: "Created a predictive maintenance system that forecasts equipment failures before they occur.",
    challenge: "Frequent unexpected machine downtime was causing significant production losses.",
    solution: "Implemented IoT sensors and machine learning models to predict maintenance needs.",
    results: [
      "90% reduction in unexpected downtime",
      "Maintenance costs reduced by 40%",
      "Equipment lifespan increased by 25%"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["Python", "PyTorch", "AWS", "Kubernetes"]
  },
  {
    title: "Real-time Market Analysis Platform",
    client: "Financial Services Provider",
    description: "Developed a real-time market analysis platform using AI for trading insights.",
    challenge: "Need for faster and more accurate market trend analysis for trading decisions.",
    solution: "Built a scalable platform that processes market data in real-time using AI algorithms.",
    results: [
      "Trading accuracy improved by 45%",
      "Analysis time reduced from hours to seconds",
      "ROI increased by 60%"
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    technologies: ["TypeScript", "React", "Node.js", "TensorFlow"]
  }
];