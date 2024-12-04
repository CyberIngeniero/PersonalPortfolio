import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Card from './shared/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  onClick: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { githubUrl, liveUrl, ...rest } = props;
  
  return (
    <Card {...rest} tags={props.technologies}>
      <div className="flex gap-4">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:text-purple-200 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </motion.a>
        )}
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:text-purple-200 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
    </Card>
  );
}