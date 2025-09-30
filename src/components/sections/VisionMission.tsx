import Section from "../Section";
import { Compass } from "lucide-react";

const VisionMission = () => {
  return (
    <Section id="vision-mission" number="2" title="Vision, Mission & Strategy Alignment" icon={Compass}>
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Personal Mission Connection</h3>
          <p className="text-card-foreground leading-relaxed">
            To demonstrate job-ready cybersecurity skills through completed projects, hands-on training, 
            and industry certifications—presented in a professional portfolio that proves capability and 
            appeals to prospective employers and internship providers.
          </p>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Vision Alignment</h3>
          <p className="text-card-foreground leading-relaxed">
            Completing this project moves me toward my long-term vision of becoming a skilled cybersecurity 
            professional with a strong portfolio that demonstrates practical experience and recognized certifications.
          </p>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Strategic Goal Support</h3>
          <p className="text-card-foreground leading-relaxed">
            This project advances my strategic goals of gaining industry-relevant credentials, developing 
            hands-on experience, and positioning myself competitively for internships and future opportunities 
            in cybersecurity.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default VisionMission;
