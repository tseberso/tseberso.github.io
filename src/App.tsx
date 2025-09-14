import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900">
          <TopNavbar />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:block hidden">
              <Sidebar />
            </div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/career" element={<Career />} />
              <Route path="/projects" element={<Projects />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
