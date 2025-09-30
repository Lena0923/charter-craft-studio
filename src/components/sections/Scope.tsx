import Section from "../Section";
import { Layers, CheckCircle2, Map, XCircle } from "lucide-react";

const Scope = () => {
  return (
    <Section id="scope" number="4" title="High-Level Scope" icon={Layers}>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-foreground">In Scope (Semester)</h3>
          </div>
          <ul className="space-y-2 pl-7">
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Research and prepare for CompTIA Security+.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Complete cybersecurity-focused course projects.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Organize work into a professional portfolio website.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Identify and apply for internships or hands-on training.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Create a portfolio summary of achievements and competencies.</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">Roadmap (≤ 6 Months)</h3>
          </div>
          <ul className="space-y-2 pl-7">
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Earn the CompTIA Security+ certification.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Add practical labs/simulations to the portfolio.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Pursue advanced, real-world security projects.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Add additional cybersecurity certifications.</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-destructive" />
            <h3 className="text-lg font-semibold text-foreground">Out of Scope</h3>
          </div>
          <ul className="space-y-2 pl-7">
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Building full production-grade cybersecurity software/tools.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Teaching or formally training others in cybersecurity.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Long-term research beyond the semester timeline.</span>
            </li>
            <li className="text-card-foreground leading-relaxed flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>Pursuing unrelated IT certifications.</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Scope;
