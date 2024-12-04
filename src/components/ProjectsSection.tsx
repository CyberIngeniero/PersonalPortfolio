import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './shared/Card';
import Modal from './shared/Modal';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../config/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category.toLowerCase() === filter
  );

  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))];

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-purple-500/20 dark:text-purple-200 dark:hover:bg-purple-500/30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex gap-4">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
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
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
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
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-600 dark:text-purple-200 mb-6">
              {selectedProject.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {selectedProject.githubUrl && (
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-purple-500/20 dark:text-purple-200 dark:hover:bg-purple-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  View Source
                </motion.a>
              )}
              {selectedProject.liveUrl && (
                <motion.a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-purple-500/20 dark:text-purple-200 dark:hover:bg-purple-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}