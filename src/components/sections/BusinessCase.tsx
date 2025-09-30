import Section from "../Section";
import { Briefcase, Heart, GraduationCap } from "lucide-react";

const BusinessCase = () => {
  return (
    <Section number="3" title="Business Case & Justification" icon={Briefcase}>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Professional Value</h3>
          </div>
          <p className="text-card-foreground leading-relaxed pl-11">
            This project strengthens my profile through Security+ preparation, practical work, and a polished 
            portfolio to share with employers and internship providers. It also supports networking and real-world 
            experience through hands-on projects.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Personal Value</h3>
          </div>
          <p className="text-card-foreground leading-relaxed pl-11">
            It builds problem-solving and critical-thinking skills, grows confidence applying cybersecurity 
            concepts, and provides a sense of achievement by hitting clear milestones on a timeline.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <GraduationCap className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Learning Outcomes</h3>
          </div>
          <ul className="space-y-2 pl-11">
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Develop technical proficiency in cybersecurity concepts and tools.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Practice project management by planning and tracking portfolio progress.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Improve networking and understand industry standards and expectations.</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default BusinessCase;
