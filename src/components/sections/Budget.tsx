import Section from "../Section";
import { DollarSign } from "lucide-react";

const Budget = () => {
  const budgetData = [
    { category: "LABOR COSTS", items: [
      { name: "Developer", qty: "80", rate: "35", total: "2800", notes: "Portfolio site setup, coding, deployment" },
      { name: "Designer", qty: "50", rate: "30", total: "1500", notes: "UI/UX, themes, layouts" },
      { name: "Project Manager", qty: "60", rate: "25", total: "1500", notes: "Planning, reviews, coordination" },
      { name: "Analyst/Writer", qty: "40", rate: "28", total: "1120", notes: "Documenting tools, training, reflections" },
    ], subtotal: "6920" },
    { category: "EQUIPMENT/SOFTWARE", items: [
      { name: "Domain & Hosting (1 yr)", qty: "1", rate: "120", total: "48", notes: "Portfolio hosting + domain" },
      { name: "GitHub Pro", qty: "1", rate: "48", total: "48", notes: "Version control & repo management" },
      { name: "Office/Docs License", qty: "1", rate: "60", total: "60", notes: "Docs & collaboration tools" },
    ], subtotal: "228" },
    { category: "MATERIALS", items: [
      { name: "Stock Images/Icons", qty: "1", rate: "50", total: "30", notes: "Graphics & portfolio visuals" },
      { name: "Training/Lab Resources", qty: "1", rate: "800", total: "800", notes: "Practice cybersecurity labs" },
      { name: "Documentation Assets", qty: "1", rate: "30", total: "30", notes: "Templates & documentation" },
    ], subtotal: "880" },
    { category: "SERVICES", items: [
      { name: "Cloud Hosting", qty: "1", rate: "75", total: "150", notes: "Semester cloud hosting (AWS/Netlify)" },
      { name: "Third-party APIs", qty: "1", rate: "40", total: "40", notes: "Optional API integration" },
      { name: "Security Assessment", qty: "1", rate: "150", total: "150", notes: "External security testing" },
    ], subtotal: "265" },
  ];

  return (
    <Section id="budget" number="6" title="Budget Estimate" icon={DollarSign}>
      <div className="space-y-8 overflow-x-auto">
        {budgetData.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground bg-primary/10 px-4 py-2 rounded">
              {section.category}
            </h3>
            <div className="min-w-[800px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-medium text-muted-foreground">Cost Item</th>
                    <th className="text-left py-2 px-3 font-medium text-muted-foreground">Qty/Hrs</th>
                    <th className="text-left py-2 px-3 font-medium text-muted-foreground">Rate/Price</th>
                    <th className="text-left py-2 px-3 font-medium text-muted-foreground">Total</th>
                    <th className="text-left py-2 px-3 font-medium text-muted-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {section.items.map((item, i) => (
                    <tr key={i}>
                      <td className="py-2 px-3 text-card-foreground">{item.name}</td>
                      <td className="py-2 px-3 text-card-foreground">{item.qty}</td>
                      <td className="py-2 px-3 text-card-foreground">${item.rate}</td>
                      <td className="py-2 px-3 font-semibold text-card-foreground">${item.total}</td>
                      <td className="py-2 px-3 text-muted-foreground text-xs">{item.notes}</td>
                    </tr>
                  ))}
                  <tr className="bg-secondary/20">
                    <td className="py-2 px-3 font-semibold text-foreground" colSpan={3}>
                      {section.category} SUBTOTAL
                    </td>
                    <td className="py-2 px-3 font-bold text-primary" colSpan={2}>
                      ${section.subtotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
        
        <div className="border-t-2 border-primary pt-6 space-y-2">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-foreground">Subtotal Direct Costs</span>
            <span className="font-bold text-card-foreground">$8,293</span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-foreground">Contingency (20%)</span>
            <span className="font-bold text-card-foreground">$1,658.60</span>
          </div>
          <div className="flex justify-between items-center text-2xl pt-4 border-t border-border">
            <span className="font-bold text-foreground">TOTAL PROJECT BUDGET</span>
            <span className="font-bold text-primary">$9,951.60</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Budget;
