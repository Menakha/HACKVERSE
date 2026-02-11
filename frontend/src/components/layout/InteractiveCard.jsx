import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const InteractiveCard = forwardRef(
  ({ className, onClick, glassEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border text-card-foreground shadow-soft transition-all duration-300',
          glassEffect ? 'glass' : 'bg-card',
          onClick && 'interactive-card cursor-pointer',
          className
        )}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InteractiveCard.displayName = 'InteractiveCard';

export default InteractiveCard;
