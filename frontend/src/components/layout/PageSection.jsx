import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function PageSection({
  title,
  description,
  children,
  className,
  withSeparator = false,
}) {
  return (
    <section className={cn('space-y-6', className)}>
      {withSeparator && <Separator className="my-8" />}
      {(title || description) && (
        <div className="space-y-1.5">
          {title && <h2 className="text-xl font-semibold tracking-tight">{title}</h2>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
