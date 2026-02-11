import { cn } from '@/lib/utils';

export default function PageHeader({ title, description, actions, className }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8',
        className
      )}
    >
      <div className="space-y-2 flex-1 animate-slide-up">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-gradient-primary">
          {title}
        </h1>
        {description && (
          <p className="text-base text-muted-foreground max-w-3xl text-balance leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 flex-shrink-0 animate-slide-up stagger-1">
          {actions}
        </div>
      )}
    </div>
  );
}
