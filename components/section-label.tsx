import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      <span className="h-px w-8 bg-primary/60" aria-hidden />
      {children}
    </div>
  )
}
