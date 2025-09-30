import { Card } from "@/components/ui/card";
import { User, BookOpen, Calendar } from "lucide-react";

const StudentInfo = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 bg-primary rounded-full">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Student Information</h2>
        </div>
        
        <Card className="p-8 shadow-card border-border bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <User className="w-4 h-4" />
                <span>Student Name</span>
              </div>
              <p className="text-lg font-semibold text-card-foreground">Fatima Zahra Anammi</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Course</span>
              </div>
              <p className="text-lg font-semibold text-card-foreground">Managing IT Projects</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Semester</span>
              </div>
              <p className="text-lg font-semibold text-card-foreground">Fall 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StudentInfo;
