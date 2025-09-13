import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function MainContent() {
  return (
    <main className="flex-1 p-8 max-w-4xl">
      {/* About Me Section */}
      <section id="about" className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">📋</span>
            About Me
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
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Designed and validated an automated market-making strategy that achieved a Sharpe ratio of 4.97 in a four-month, walk-forward out-of-sample test on high-frequency data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Researched and engineered custom-built sequential-learning models—transformers, LSTMs, and reinforcement-learning agents—to optimize inventory, quoting, and hedging decisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                    <span> Authored high-performance Python libraries that ingest, cleanse, and store various data fields, cutting data-processing latency by 80% and enabling daily model retraining. </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-100 mb-2">Technical Leadership:</h4>
                <ul className="space-y-2 text-slate-100">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Directed and mentored a two-engineer team that built the cloud-native execution stack on AWS (Python | Django REST | micro-services), reviewed PRs, and set code-quality and risk-control standards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">🚀</span>
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                [Project Name 1]
                <Badge variant="secondary">Featured</Badge>
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Python</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                [Brief description of project, what it does, and what technologies were used. 
                Highlight key features and impact.]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg">
                [Project Name 2]
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Docker</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                [Brief description of  second project. Focus on unique aspects and results achieved.]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Paper
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg">
                [Project Name 3]
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Data Science</Badge>
                <Badge variant="outline">Visualization</Badge>
                <Badge variant="outline">D3.js</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                [Description of data visualization or analysis project. Mention insights discovered or impact made.]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Dashboard
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg">
                [Project Name 4]
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Open Source</Badge>
                <Badge variant="outline">API</Badge>
                <Badge variant="outline">Node.js</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                [Description of an open source contribution or API project. Highlight adoption or community impact.]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Publications Section */}
      <section id="publications" className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">📚</span>
            Publications and Preprints
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
              Five-Dimensional Cooling and Nonlinear Dynamics of an Optically Levitated Nanodumbbell
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2020</Badge>
                <Badge variant="outline">Physical Review Research</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-100 mb-2">Key Contributions:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Experimental demonstration of cooling the 3 translational and 2 rotational degrees of freedom of an optically levitated nanodumbbell.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Evidence of the rotational coupling and precession theorized by our work in 'Parametric Feedback Cooling of Rigid Body Nanodumbbells in Levitated Optomechanics' (see below).</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.043054" target="_blank" rel="noopener noreferrer">
                    See Publication and PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
              Parametric Feedback Cooling of Rigid Body Nanodumbbells in Levitated Optomechanics
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2019</Badge>
                <Badge variant="outline">Physical Review A</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-100 mb-2">Key Findings:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>For non-spherical particles such as nanodumbbells, one must consider the rotations as well as translations in the dynamics of a levitated particle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>This paper shows that, for nanodumbbells, attempting to cool the rotational degrees of freedom using parametric feedback cooling is only partially effective due to the third rotational degree of freedom being absent from the potential energy.</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" asChild>
                  <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.99.013821" target="_blank" rel="noopener noreferrer">
                    See Publication
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://arxiv.org/abs/1810.01797" target="_blank" rel="noopener noreferrer">
                    See PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
              Distribution of laser shot-noise energy delivered to a levitated nanoparticle
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2020</Badge>
                <Badge variant="outline">Physical Review A</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-100 mb-2">Research Focus:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>An inescapable source of noise and decoherence for an optically levitated particle is the shot-noise from the laser that constantly penetrates it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>This paper quantifies the amount of energy being distributed to the particle from a laser for point-like particles as well as larger radii particles where Mie Scattering is relevant.</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" asChild>
                  <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.033505" target="_blank" rel="noopener noreferrer">
                    See Publication
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://arxiv.org/pdf/1909.06469" target="_blank" rel="noopener noreferrer">
                    See PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
              Simulation of sympathetic cooling an optically levitated magnetic nanoparticle via coupling to a cold atomic gas
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2020</Badge>
                <Badge variant="outline">JOSA B</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-100 mb-2">Innovation:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>This paper outlines a neat strategy for cooling the motion of a spherical particle down to the quantum regime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>It involves optically trapping a magnetic particle, and then linearly coupling it with an already cooled gas of magnetically polarized and trapped atoms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>When the gas and particle's trapping frequencies are tuned to resononance, the particle effectively cools.</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" asChild>
                  <a href="https://opg.optica.org/josab/abstract.cfm?uri=josab-37-12-3714" target="_blank" rel="noopener noreferrer">
                    See Publication
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://arxiv.org/pdf/1910.05371" target="_blank" rel="noopener noreferrer">
                    See PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
              Stability and dynamics of optically levitated dielectric disks in a Gaussian standing wave beyond the harmonic approximation
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2020</Badge>
                <Badge variant="outline">Physical Review Research</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-100 mb-2">Research Scope:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>As part of a Sandia National Lab project, we investigated the dynamics of large optically trapped disks (2 microns, 200 nm).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Due to its larger size, the laser's electric field varies across the disk, introducing interesting rotational-translational couplings and therefore rich dynamics.</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" asChild>
                  <a href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033437" target="_blank" rel="noopener noreferrer">
                    See Publication and PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Resources Section */}
      {/* <section id="resources" className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">🔗</span>
            Helpful Resources
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resource Category 1</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    [Resource Link 1]
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    [Resource Link 2]
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resource Category 2</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    [Resource Link 3]
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    [Resource Link 4]
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">💼</span>
            Past Experience
          </h2>
        </div>

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
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Developed quantitative crypto-data products and models: implied-rate term
                    structures, volatility surfaces, margin/risk models, derivative pricing,
                    on-chain market analytics, and more.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Co-invented a (patent pending) algorithm to aggregate fragmented
                    funding/interest rates, allowing fair-value pricing and benchmarking.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Developed novel risk models for decentralized finance (DeFi) positions,
                    for which there is no traditional finance framework to lean on.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
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
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Built a microstructure-noise-robust volatility estimator that converts
                    high-frequency data of 10-minutes length into reliable
                    annualized-volatility forecasts—shrinking latency from 60 min to &lt; 10 min
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Created pipelines for ingesting, cleaning, and storing data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
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
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Designed and produced high-frequency, low temperature electronics for
                    quantum computing experiments.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Modeled, fabricated, and tested nanometer-scale superconducting circuits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
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
}