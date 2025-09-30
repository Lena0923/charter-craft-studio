import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const WBS = () => {
  return (
    <section id="wbs" className="py-12 px-6 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Work Breakdown Structure</h3>
        </div>
        
        <Card className="p-6 shadow-card border-border bg-card overflow-x-auto">
          <div className="min-w-[800px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">WBS ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Task / Work Package Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Dependencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-primary/5">
                  <td className="py-3 px-4 font-medium">1</td>
                  <td className="py-3 px-4">Deliverable</td>
                  <td className="py-3 px-4 font-semibold">Cybersecurity Portfolio Website</td>
                  <td className="py-3 px-4">--</td>
                  <td className="py-3 px-4">--</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">1.1</td>
                  <td className="py-3 px-4">Deliverable</td>
                  <td className="py-3 px-4 pl-8">Portfolio Planning & Setup</td>
                  <td className="py-3 px-4">13</td>
                  <td className="py-3 px-4">--</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">1.1.1</td>
                  <td className="py-3 px-4">Work Package</td>
                  <td className="py-3 px-4 pl-12">Requirements & Planning</td>
                  <td className="py-3 px-4">7</td>
                  <td className="py-3 px-4">--</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="py-3 px-4 text-muted-foreground">1.1.1.1</td>
                  <td className="py-3 px-4 text-muted-foreground">Task</td>
                  <td className="py-3 px-4 pl-16 text-muted-foreground">Define portfolio objectives</td>
                  <td className="py-3 px-4 text-muted-foreground">1</td>
                  <td className="py-3 px-4 text-muted-foreground">--</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="py-3 px-4 text-muted-foreground">1.1.1.2</td>
                  <td className="py-3 px-4 text-muted-foreground">Task</td>
                  <td className="py-3 px-4 pl-16 text-muted-foreground">Research cybersecurity portfolio best practices</td>
                  <td className="py-3 px-4 text-muted-foreground">2</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">1.1.1.1</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-sm text-muted-foreground italic">
              Note: Full WBS contains additional tasks and work packages for all deliverables
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WBS;
