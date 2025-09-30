import Section from "../Section";
import { Settings } from "lucide-react";

const Methodology = () => {
  return (
    <Section number="8" title="Project Methodology & Tools" icon={Settings}>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-primary rounded-lg">
              <span className="text-sm font-bold text-primary-foreground">Scrum</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Methodology</h3>
          </div>
          <p className="text-card-foreground leading-relaxed">
            Work is organized in sprints with a Jira backlog and sprint board. The approach breaks the 
            project into small increments, tracks progress, and enables continuous improvement and adaptation.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-accent rounded-lg">
              <span className="text-sm font-bold text-accent-foreground">Jira</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Tool Selection</h3>
          </div>
          <p className="text-card-foreground leading-relaxed">
            Jira supports Scrum and Kanban boards, backlog management, and dependency tracking. Using an 
            industry tool builds good habits and prepares for real-world project work.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Methodology;
