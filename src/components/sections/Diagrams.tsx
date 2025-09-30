import Section from "../Section";
import { FileImage } from "lucide-react";

const Diagrams = () => {
  return (
    <Section id="diagrams" number="9" title="Diagram & Evidence" icon={FileImage}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Project Methodology Diagram
          </h3>
          <div className="rounded-lg border-2 border-border overflow-hidden bg-muted/30">
            <img 
              src="https://raw.githubusercontent.com/lena0923/Charter-Template29/main/screenshots/methodology.png" 
              alt="Cybersecurity Portfolio Project Methodology Diagram"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Diagrams;
