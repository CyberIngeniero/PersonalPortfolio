import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import { content } from '../config/content';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  isEducation?: boolean;
  index: number;
}

function TimelineItem({ year, title, organization, description, isEducation, index }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex gap-4 relative"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
          {isEducation ? <GraduationCap size={24} className="text-white" /> : <Briefcase size={24} className="text-white" />}
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-purple-600 to-indigo-600 opacity-30" />
      </div>
      <div className="pb-12">
        <span className="text-purple-600 dark:text-purple-400 font-medium">{year}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{title}</h3>
        <p className="text-gray-900 dark:text-purple-200 font-medium">{organization}</p>
        <p className="text-gray-700 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
        <div className="space-y-6">
          {content.education.map((item, index) => (
            <TimelineItem key={index} {...item} isEducation index={index} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h3>
        <div className="space-y-6">
          {content.experience.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}