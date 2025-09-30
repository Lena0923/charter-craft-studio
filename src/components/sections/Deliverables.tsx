import Section from "../Section";
import { Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const Deliverables = () => {
  const deliverables = [
    {
      name: "Cybersecurity Portfolio Website",
      type: "Tangible",
      smart: "Publish a professional portfolio website with clear navigation and at least three documented projects by Nov 15.",
      done: "Site is live at a public URL, responsive on mobile and desktop, includes at least three project pages with descriptions and visuals, and provides links to the resume and contact."
    },
    {
      name: "Professional Resume & LinkedIn Profile",
      type: "Tangible",
      smart: "Create a one-page resume (PDF and web) and optimize the LinkedIn profile to match the resume, add certifications and skills, and link to the portfolio by Oct 25.",
      done: "Resume is uploaded to the portfolio and downloadable as a PDF with no spelling or formatting errors. LinkedIn is updated (headline, About, experience, skills) and includes the portfolio link."
    },
    {
      name: "Documented Cybersecurity Projects",
      type: "Intangible",
      smart: "Write case studies for at least three projects by Oct 30, including objectives, tools used (for example, Wireshark and Nmap), approach, results, and reflection.",
      done: "Each project page includes goals, tools, steps, outcomes, screenshots or code snippets, and a short reflection."
    },
    {
      name: "Skills and Certifications Showcase",
      type: "Outcome",
      smart: "List and present at least eight relevant skills and document current or earned certifications (for example, Security+) by Nov 5.",
      done: "Skills section is visible with at least eight clearly defined skills. Certifications are shown with badges or proof, and items in progress are marked clearly."
    },
    {
      name: "Portfolio Review and Refinement",
      type: "Intangible",
      smart: "Gather feedback from at least two peers or mentors by Nov 10, incorporate revisions, and complete final proofreading by Nov 20.",
      done: "Feedback is documented, revisions are tracked in a short change log, and the final portfolio is polished and ready to share."
    }
  ];

  return (
    <Section number="5" title="Deliverables & Done" icon={Package}>
      <div className="space-y-6">
        {deliverables.map((deliverable, index) => (
          <Card key={index} className="p-6 border-l-4 border-primary bg-card/50">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-foreground">{deliverable.name}</h3>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium">
                  {deliverable.type}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">SMART Description</p>
                  <p className="text-card-foreground leading-relaxed">{deliverable.smart}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Definition of Done</p>
                  <p className="text-card-foreground leading-relaxed">{deliverable.done}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Deliverables;
