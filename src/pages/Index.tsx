import { Sidebar } from "@/components/layout/sidebar";
import { MainContent } from "@/components/sections/main-content";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-slate-900">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Index;
