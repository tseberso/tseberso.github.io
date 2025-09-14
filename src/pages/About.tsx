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
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Career</h3>
            <p className="text-slate-100 leading-relaxed mb-4">
              I am currently a <strong>Quantitative Researcher</strong> at Steady State Capital
              generating insights and strategies using machine learning, reinforcement learning, and LLM agent-based modeling.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-100 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-slate-100">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>Designed and validated an automated market-making strategy that achieved a Sharpe ratio of 4.97 in a four-month, walk-forward out-of-sample test on high-frequency data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>Researched and engineered custom-built sequential-learning models—transformers, LSTMs, and reinforcement-learning agents—to optimize inventory, quoting, and hedging decisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span> Authored high-performance Python libraries that ingest, cleanse, and store various data fields, cutting data-processing latency by 80% and enabling daily model retraining. </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-100 mb-2">Technical Leadership:</h4>
                <ul className="space-y-2 text-slate-100">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>Directed and mentored a two-engineer team that built the cloud-native execution stack on AWS (Python | Django REST | micro-services), reviewed PRs, and set code-quality and risk-control standards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
