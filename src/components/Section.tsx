import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LucideIcon, ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const Section = ({ id, number, title, icon: Icon, children, className = "", defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className={`py-8 px-6 scroll-mt-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <Card className={cn(
            "overflow-hidden shadow-card border-border transition-all duration-300",
            isOpen && "shadow-elegant"
          )}>
            <CollapsibleTrigger className="w-full p-6 hover:bg-muted/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm">
                  {number}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <Icon className="w-6 h-6 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold text-foreground text-left">
                    {title}
                  </h2>
                </div>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:text-primary",
                    isOpen && "rotate-180"
                  )}
                />
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div className="px-6 pb-6 pt-2">
                {children}
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </section>
  );
};

export default Section;
