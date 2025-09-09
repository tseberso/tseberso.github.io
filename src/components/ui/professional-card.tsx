import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ProfessionalCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function ProfessionalCard({ children, className, hover = true, ...props }: ProfessionalCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-lg border p-6 shadow-card",
        "transition-all duration-300 ease-smooth",
        hover && "hover:shadow-elegant hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}