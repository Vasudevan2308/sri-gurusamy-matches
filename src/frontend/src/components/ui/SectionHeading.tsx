import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  accent = false,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", centered && "text-center", className)}>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          accent ? "text-accent-glow" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
      <div
        className={cn(
          "mt-4 h-0.5 w-16 bg-accent rounded-full",
          centered && "mx-auto",
        )}
      />
    </div>
  );
}
