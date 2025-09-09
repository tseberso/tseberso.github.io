import { ProfessionalCard } from "@/components/ui/professional-card";
import { Github, Linkedin, GraduationCap, ExternalLink, Star, GitFork, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfessionalLinks() {
  const links = [
    {
      title: "GitHub",
      description: "Open source projects and contributions",
      icon: Github,
      href: "https://github.com/yourusername",
      stats: [
        { icon: Star, label: "Stars", value: "120+" },
        { icon: GitFork, label: "Forks", value: "45+" },
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "LinkedIn", 
      description: "Professional network and experience",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      stats: [
        { icon: Users, label: "Connections", value: "500+" },
      ],
      gradient: "bg-gradient-accent"
    },
    {
      title: "Google Scholar",
      description: "Research publications and citations", 
      icon: GraduationCap,
      href: "https://scholar.google.com/citations?user=youruserid",
      stats: [
        { icon: GraduationCap, label: "Citations", value: "150+" },
      ],
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="professional-links" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Presence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with me across different platforms to explore my work, research, and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <ProfessionalCard 
              key={link.title}
              className="group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${link.gradient} shadow-lg`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{link.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {link.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {link.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2 text-sm">
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{stat.value}</span>
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild
                  className="w-full group/btn"
                  variant="outline"
                >
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit {link.title}
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Decorative background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <div className={`w-full h-full ${link.gradient}`} />
              </div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  );
}