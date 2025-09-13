import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import { MainContent } from "@/components/sections/main-content";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <TopNavbar />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:block hidden">
          <Sidebar />
        </div>
        <MainContent />
      </div>
    </div>
  );
};

export default Index;
