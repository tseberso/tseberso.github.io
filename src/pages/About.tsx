import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
      <section className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">📋</span>
            About
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Summary</h3>
            <p className="text-slate-100 leading-relaxed">
              Ph.D in Theoretical/Computational Physics with over 10 years of experience in programming, modeling, and research.
              Five years of hands-on industry experience in finance, fintech, and cryptocurrency developing and shipping quantitative products and trading strategies backed by extensive data science and engineering. 
              In my current role I am focused on building advanced, custom machine learning models for prediction and trading. 
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Everyday Interests</h3>
            <p className="text-slate-100 leading-relaxed mb-4">
              <strong>Learning</strong> - Non-stop learner of all things via non-fiction, textbooks, publications, articles, documentaries, and social media primarily in the tech, finance, science, and business sectors.   
            </p>  
            <p className="text-slate-100 leading-relaxed mb-4">
              <strong>Sports</strong> - I love to play hockey, pickleball, and any impromptu pick-up games. I also enjoy lifting, snowboarding, and running.
            </p>  
            <p className="text-slate-100 leading-relaxed mb-4">
              <strong>Activities</strong> - Board games, personal finance, coding, hanging with family and friends, enjoying nature, logic and math puzzles, DIY home projects, and learning new things.
            </p>

            
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
