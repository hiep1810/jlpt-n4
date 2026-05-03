import { cn } from '@/lib/utils';
import { sectionMeta, sectionLabels } from '@/lib/sectionMeta';
import type { LessonSection } from '@/types';

interface SectionNavProps {
  sections: LessonSection[];
  activeSectionId: string;
  onSelect: (sectionId: string) => void;
}

export function SectionNav({ sections, activeSectionId, onSelect }: SectionNavProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
      <div className="flex gap-1.5 min-w-max pb-1">
        {sections.map((section) => {
          const meta = sectionMeta[section.kind];
          const Icon = meta.icon;
          const isActive = section.id === activeSectionId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              )}
            >
              <Icon className={cn('h-3.5 w-3.5', meta.accent)} />
              <span>Phần {section.order}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
