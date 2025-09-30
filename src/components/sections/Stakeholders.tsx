import Section from "../Section";
import { Users } from "lucide-react";

const Stakeholders = () => {
  const stakeholders = [
    { name: "Student (Me)", category: "Internal", power: "High", interest: "High", strategy: "Actively manage progress and continuously improve to meet goals." },
    { name: "Academic Advisor", category: "Internal", power: "Medium", interest: "High", strategy: "Share progress; request advice and guidance." },
    { name: "Career Services Office", category: "Internal", power: "Medium", interest: "High", strategy: "Resume reviews, portfolio workshops, career counseling." },
    { name: "Potential Employers", category: "External", power: "High", interest: "High", strategy: "Tailor portfolio content to expectations; share relevant work samples." },
    { name: "Peers/Colleagues", category: "Internal", power: "Low", interest: "Medium", strategy: "Share progress; request peer feedback on clarity/design." },
    { name: "Faculty Members", category: "Internal", power: "Medium", interest: "High", strategy: "Seek mentorship and constructive feedback on quality and alignment." },
    { name: "Alumni Network", category: "External", power: "Medium", interest: "Medium", strategy: "Network periodically; request feedback from CIS alumni." },
    { name: "Professional Associations", category: "External", power: "Medium", interest: "Medium", strategy: "Monitor standards, trends, and showcases." },
    { name: "Regulatory/Accreditation Body", category: "Regulatory", power: "High", interest: "Low", strategy: "Ensure compliance with standards; monitor requirements." },
    { name: "Family/Support System", category: "External", power: "Low", interest: "High", strategy: "Update on milestones; request support and encouragement." },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Internal": return "bg-primary/10 text-primary";
      case "External": return "bg-accent/10 text-accent";
      case "Regulatory": return "bg-secondary/30 text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPowerColor = (power: string) => {
    switch (power) {
      case "High": return "text-green-600 font-semibold";
      case "Medium": return "text-amber-600 font-semibold";
      case "Low": return "text-blue-600 font-semibold";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Section id="stakeholders" number="7" title="Stakeholder Register" icon={Users}>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Stakeholder</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Power</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Interest</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Engagement Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stakeholders.map((stakeholder, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium text-card-foreground">{stakeholder.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(stakeholder.category)}`}>
                      {stakeholder.category}
                    </span>
                  </td>
                  <td className={`py-3 px-4 ${getPowerColor(stakeholder.power)}`}>{stakeholder.power}</td>
                  <td className={`py-3 px-4 ${getPowerColor(stakeholder.interest)}`}>{stakeholder.interest}</td>
                  <td className="py-3 px-4 text-card-foreground text-sm">{stakeholder.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Stakeholders;
