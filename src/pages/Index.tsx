import Header from "@/components/Header";
import StudentInfo from "@/components/StudentInfo";
import ProjectDescription from "@/components/sections/ProjectDescription";
import VisionMission from "@/components/sections/VisionMission";
import BusinessCase from "@/components/sections/BusinessCase";
import Scope from "@/components/sections/Scope";
import Deliverables from "@/components/sections/Deliverables";
import WBS from "@/components/sections/WBS";
import Budget from "@/components/sections/Budget";
import Stakeholders from "@/components/sections/Stakeholders";
import Methodology from "@/components/sections/Methodology";
import Diagrams from "@/components/sections/Diagrams";
import Screenshots from "@/components/sections/Screenshots";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <StudentInfo />
        <ProjectDescription />
        <VisionMission />
        <BusinessCase />
        <Scope />
        <Deliverables />
        <WBS />
        <Budget />
        <Stakeholders />
        <Methodology />
        <Diagrams />
        <Screenshots />
      </main>
      <footer className="bg-card border-t border-border py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>Cybersecurity Portfolio Project Charter • Fall 2025</p>
          <p className="mt-2">Fatima Zahra Anammi • Managing IT Projects</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
