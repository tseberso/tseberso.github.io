import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, GraduationCap } from "lucide-react";

export function HeroSection() {
  const scrollToLinks = () => {
    document.getElementById('professional-links')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-16">
      <div className="container max-w-4xl text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Your Name
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer & Researcher
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions and contributing to cutting-edge research. 
              I create impactful software and share knowledge through open source contributions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect
            </Button>
          </div>

          <button
            onClick={scrollToLinks}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-16 group"
            aria-label="Scroll to professional links"
          >
            <span>Explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
}