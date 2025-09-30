import Section from "../Section";
import { Image } from "lucide-react";

const Screenshots = () => {
  const screenshots = [
    {
      url: "https://raw.githubusercontent.com/lena0923/Charter-Template29/main/screenshots/epics.png",
      title: "Epics — List View",
      description: "List view with status and updates"
    },
    {
      url: "https://raw.githubusercontent.com/lena0923/Charter-Template29/main/screenshots/sprint.png",
      title: "Sprint Timeline",
      description: "Schedule across months"
    },
    {
      url: "https://raw.githubusercontent.com/lena0923/Charter-Template29/main/screenshots/status.png",
      title: "Status Overview",
      description: "Progress donut (To Do / In Progress / Done)"
    }
  ];

  return (
    <Section id="screenshots" number="10" title="Screenshots — Project Tool in Use" icon={Image}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="space-y-3">
            <div className="rounded-lg border-2 border-border overflow-hidden bg-muted/30 shadow-card hover:shadow-elegant transition-shadow">
              <img 
                src={screenshot.url} 
                alt={screenshot.title}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-foreground">{screenshot.title}</h4>
              <p className="text-sm text-muted-foreground">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Screenshots;
