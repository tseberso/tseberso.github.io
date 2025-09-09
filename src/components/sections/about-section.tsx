import { ProfessionalCard } from "@/components/ui/professional-card";
import { Code2, BookOpen, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  const expertise = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Full-stack development with modern technologies and best practices."
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Contributing to academic research and publishing in peer-reviewed journals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creating innovative solutions to complex technical challenges."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analytical approach to breaking down and solving complex problems."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer and researcher dedicated to creating meaningful impact 
            through technology. With experience spanning development and academic research, I enjoy 
            tackling complex challenges and sharing knowledge with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <ProfessionalCard 
              key={item.title}
              className="animate-in fade-in slide-in-from-left-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg shadow-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  );
}