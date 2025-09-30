import Section from "../Section";
import { Target } from "lucide-react";

const ProjectDescription = () => {
  return (
    <Section id="project-description" number="1" title="Project Title & Description" icon={Target} defaultOpen={true}>
      <div className="space-y-6">
        <div className="p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            Goal
          </h3>
          <p className="text-card-foreground leading-relaxed">
            Develop a professional cybersecurity portfolio that highlights skills, certifications, 
            and hands-on experience to support landing an entry-level role.
          </p>
        </div>
        
        <div className="text-card-foreground leading-relaxed space-y-4">
          <p>
            The portfolio will feature completed course projects, preparation for the CompTIA Security+ 
            certification, and documentation of hands-on training or internship experiences. By presenting 
            a clear record of technical knowledge and industry-relevant accomplishments, it will showcase 
            job readiness to potential employers and internship providers.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDescription;
