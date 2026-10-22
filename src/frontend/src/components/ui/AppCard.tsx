import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  hover?: boolean;
}

function Card({ className, children, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg overflow-hidden",
        hover &&
          "transition-smooth hover:shadow-elevated hover:-translate-y-1 cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardImage({
  src,
  alt,
  className,
}: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-smooth hover:scale-105"
      />
    </div>
  );
}

function CardBody({
  className,
  children,
}: { className?: string; children: ReactNode }) {
  return <div className={cn("p-5", className)}>{children}</div>;
}

function CardTitle({
  className,
  children,
}: { className?: string; children: ReactNode }) {
  return (
    <h3
      className={cn(
        "font-display text-lg font-semibold text-foreground leading-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

function CardDescription({
  className,
  children,
}: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm leading-relaxed mt-1.5",
        className,
      )}
    >
      {children}
    </p>
  );
}

export { Card, CardImage, CardBody, CardTitle, CardDescription };
