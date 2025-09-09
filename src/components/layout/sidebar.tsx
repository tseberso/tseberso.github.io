import { Mail, MapPin, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  const keywords = [
    "Machine Learning",
    "Deep Learning", 
    "Reinforcement Learning",
    "Data Science",
    "Quantitative Research",
    "Statistics",
    "Simulations",
    "Python"
  ];

  const programmingSkills = [
    "Python",
    "TensorFlow/Keras",
    "Scikit-learn",
    "Pandas/NumPy",
    "SQL",
    "Git/GitHub",
    "and more..."
  ];

  return (
    <aside className="w-80 bg-sidebar border-r border-sidebar-border p-6 flex flex-col">
      {/* Profile Photo */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">YN</span>
            </div>
            <p className="text-sm">Add your photo</p>
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Your Name</h1>
        <p className="text-muted-foreground mb-1">(Ph.D.)</p>
        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span>Your City</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-primary">
          <Mail className="w-4 h-4" />
          <a href="mailto:your.email@gmail.com" className="hover:underline">
            your.email@gmail.com
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-2 mb-6">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Projects
          </a>
        </Button>
      </div>

      <Separator className="mb-6" />

      {/* Sections Navigation */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Sections</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start text-primary" asChild>
            <a href="#about">About Me</a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#publications">Publications</a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#resources">Resources</a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#experience">Experience</a>
          </Button>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Keywords */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Keywords</h3>
        <div className="space-y-1">
          {keywords.map((keyword) => (
            <div key={keyword} className="text-sm text-muted-foreground">
              {keyword}
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Programming Experience */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Programming Experience</h3>
        <div className="space-y-1">
          {programmingSkills.map((skill) => (
            <div key={skill} className="text-sm text-muted-foreground">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}