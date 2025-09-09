import { Button } from "@/components/ui/button";
import { ProfessionalCard } from "@/components/ui/professional-card";
import { Mail, MapPin, Calendar } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Open to collaboration, research opportunities, and interesting conversations.
          </p>
        </div>

        <ProfessionalCard className="text-center">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-accent rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Your City, Country
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:your.email@example.com" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </ProfessionalCard>
      </div>
    </section>
  );
}