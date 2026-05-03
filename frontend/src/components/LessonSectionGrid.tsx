import { cn } from '@/lib/utils';
import { sectionMeta } from '@/lib/sectionMeta';
import { LessonSection } from '@/types';

interface LessonSectionGridProps {
  sections: LessonSection[];
  activeSectionId: string;
  onSelect: (sectionId: string) => void;
}

export function LessonSectionGrid({ sections, activeSectionId, onSelect }: LessonSectionGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
              'rounded-xl border bg-card p-4 text-left transition-colors',
              'hover:border-primary/50 hover:bg-accent/30',
              isActive && 'border-primary bg-primary/5 shadow-sm'
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Phần {section.order}</p>
                <h3 className="mt-1 font-semibold">{section.title}</h3>
              </div>
              <Icon className={cn('h-6 w-6 shrink-0', meta.accent)} />
            </div>
            {section.description && (
              <p className="mt-3 text-sm text-muted-foreground">{section.description}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}
