import React from 'react';
import { Brain, Code, Cpu } from 'lucide-react';
import Card from './shared/Card';
import { Service } from '../types';
import { useServiceModal } from '../hooks/useServiceModal';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap = {
  brain: Brain,
  code: Code,
  cpu: Cpu,
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { openModal } = useServiceModal();
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  if (!Icon) return null;

  return (
    <Card
      image={service.image}
      title={service.title}
      description={service.shortDesc}
      onClick={() => openModal(service)}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
    </Card>
  );
}