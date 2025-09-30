import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionProps {
  number: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
}

const Section = ({ number, title, icon: Icon, children, className = "" }: SectionProps) => {
  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
            {number}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          <Icon className="w-6 h-6 text-primary ml-auto" />
        </div>
        
        <Card className="p-8 shadow-card border-border bg-card">
          {children}
        </Card>
      </div>
    </section>
  );
};

export default Section;
