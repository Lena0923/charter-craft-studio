import { useState, useEffect } from "react";
import { 
  Target, Compass, Briefcase, Layers, Package, 
  FileText, DollarSign, Users, Settings, FileImage, 
  Image, ChevronRight, Menu, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  { id: "project-description", title: "Project Description", icon: Target },
  { id: "vision-mission", title: "Vision & Mission", icon: Compass },
  { id: "business-case", title: "Business Case", icon: Briefcase },
  { id: "scope", title: "Scope", icon: Layers },
  { id: "deliverables", title: "Deliverables", icon: Package },
  { id: "wbs", title: "Work Breakdown", icon: FileText },
  { id: "budget", title: "Budget", icon: DollarSign },
  { id: "stakeholders", title: "Stakeholders", icon: Users },
  { id: "methodology", title: "Methodology", icon: Settings },
  { id: "diagrams", title: "Diagrams", icon: FileImage },
  { id: "screenshots", title: "Screenshots", icon: Image },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden shadow-elegant"
        size="icon"
        variant="default"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Navigation Sidebar */}
      <nav
        className={cn(
          "fixed top-24 right-6 z-40 w-64 bg-card border border-border rounded-xl shadow-elegant p-4 transition-all duration-300",
          "hidden md:block",
          isOpen && "block"
        )}
      >
        <h3 className="text-sm font-bold text-foreground mb-4 px-2">Table of Contents</h3>
        <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                  "hover:bg-primary/10 hover:translate-x-1",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-4 h-4 flex-shrink-0", isActive && "animate-pulse")} />
                <span className="text-left flex-1">{section.title}</span>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-64 bg-card border-l border-border shadow-elegant p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-bold text-foreground mb-4">Table of Contents</h3>
            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-left">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
