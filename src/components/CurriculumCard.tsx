import { CurriculumModule } from '@/lib/data';

interface CurriculumCardProps {
  module: CurriculumModule;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CurriculumCard({ module, isExpanded, onToggle }: CurriculumCardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <h2 className="text-xl font-semibold">{module.title}</h2>
        <span>{isExpanded ? '−' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p><strong>Objectives:</strong> {module.objectives}</p>
          <p><strong>Resources:</strong></p>
          <ul className="list-disc pl-5">
            {module.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
          <p><strong>Exercises:</strong> {module.exercises}</p>
        </div>
      )}
    </div>
  );
}