import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-hero text-white py-16 px-6 shadow-elegant">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Cybersecurity Portfolio Project
            </h1>
            <p className="text-lg text-white/90">
              Project Charter • Managing IT Projects
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
