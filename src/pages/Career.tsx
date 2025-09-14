import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Career = () => {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
          <span className="text-blue-400">💼</span>
          Career
        </h2>
      </div>
        
      <Separator className="my-4"/>

      <div>
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

      <Separator className="my-8"/>

      {/* Past Experience Section */}
      <section className="mb-12">
      <h3 className="text-xl font-semibold text-slate-100 mb-4">Past Experience</h3>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Quantitative Researcher at Lukka
              </CardTitle>
              <p className="text-slate-300">2021-2024</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Lukka is a B2B SaaS and data company in the cryptocurrency sector.  
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Developed quantitative crypto-data products and models: implied-rate term
                    structures, volatility surfaces, margin/risk models, derivative pricing,
                    on-chain market analytics, and more.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Co-invented a (patent pending) algorithm to aggregate fragmented funding/interest rates, allowing fair-value pricing and benchmarking.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Developed novel risk models for decentralized finance (DeFi) positions,
                    for which there is no traditional finance framework to lean on.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Owned the full product lifecycle of all projects involved with, from
                    ideation to production.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
               Quantitative Researcher at Creative Results
              </CardTitle>
              <p className="text-muted-foreground">2021</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Proprietary trading. Primarily focused on short term volatility estimation and prediction under a volatility trader.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Built a microstructure-noise-robust volatility estimator that converts
                    high-frequency data of 10-minutes length into reliable
                    annualized-volatility forecasts—shrinking latency from 60 min to &lt; 10 min
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Created pipelines for ingesting, cleaning, and storing data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Developed an interactive visualization interface for insight generation
                    using Bokeh.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
               Theoretical/Computational Physicist at Purdue University
              </CardTitle>
              <p className="text-muted-foreground">2018-2020</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Field of focus: Optomechanics, a subfield of Atomic, Molecular, and Optical (AMO) Physics
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Designed control and modeling strategies for cooling the motion of a
                    levitated nanoparticle to the quantum regime.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Developed original analytic and numerical models for stochastic, coupled
                    dynamical systems for predicting and controlling nanoscale motion.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Implemented high-performance Monte Carlo solvers in C/C++ to tackle
                    nonlinear, multivariate PDEs with stochasticity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Weekly team collaborations with experimentalists for journal club,
                    sharing insights and results.
                  </span>
                </li>
              </ul>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
               Experimental Physicist at Purdue University
              </CardTitle>
              <p className="text-muted-foreground">2015-2017</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Field of focus: Condensed Matter, Quantum Computing
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Designed and produced high-frequency, low temperature electronics for
                    quantum computing experiments.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Modeled, fabricated, and tested nanometer-scale superconducting circuits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>
                    Tested self-built superconducting circuits in dilution refrigerators and
                    He3 systems ranging from 10–100 mK.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Career;
