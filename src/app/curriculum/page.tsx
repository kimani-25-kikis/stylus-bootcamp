'use client';

import { useState } from 'react';
import { curriculumModules } from '@/lib/data';
import CurriculumCard from '@/components/CurriculumCard';

export default function Curriculum() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bootcamp Curriculum</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {curriculumModules.map((module, index) => (
          <CurriculumCard
            key={module.id}
            module={module}
            isExpanded={expandedModule === index}
            onToggle={() => setExpandedModule(expandedModule === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}