import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function TopNavbar() {
  const [activeSection, setActiveSection] = useState("about");

  const navigationItems = [
    { href: "#about", label: "About Me", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#publications", label: "Publications", id: "publications" },
    { href: "#resources", label: "Resources", id: "resources" },
    { href: "#experience", label: "Experience", id: "experience" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      let currentSection = "about";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-slate-100">Troy Seberson</h2>
            <span className="text-slate-400 ml-2">(Ph.D.)</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                className={`${
                  activeSection === item.id
                    ? "text-blue-400 bg-slate-700" 
                    : "text-slate-300 hover:text-slate-100 hover:bg-slate-700"
                }`}
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                className={`justify-start ${
                  activeSection === item.id
                    ? "text-blue-400 bg-slate-700" 
                    : "text-slate-300 hover:text-slate-100 hover:bg-slate-700"
                }`}
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
