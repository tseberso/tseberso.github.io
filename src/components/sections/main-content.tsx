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
              Ph.D in Theoretical/Computationl Physics with over 10 years of experience in programming, modeling, and research.
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
                    <span>Designed and validated an automated market-making strategy that achieved a 3.5 Sharpe ratio in a four-month, walk-forward out-of-sample test on high-frequency data.</span>
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
      <section id="projects" className="mb-12">
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
      </section>

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
              <p className="text-slate-300 mb-3">
                Experimental demonstration of cooling the 3 translational and 2 rotational degrees of freedom of an optically levitated nanodumbbell.
                Evidence of the rotational coupling and precession theorized by our work in 'Parametric Feedback Cooling of Rigid Body Nanodumbbells in Levitated Optomechanics' (see below).

              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.043054" target="_blank" rel="noopener noreferrer">
                    See Publication and PDF
                  </a>
                </Button>
                {/* <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button> */}
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
              <p className="text-slate-300 mb-3">
                For non-spherical particles such as nanodumbbells, one must consider the rotations as well as translations in the dynamics of a levitated particle. 
                This paper shows that, for nanodumbbells, attempting to cool the rotational degrees of freedom using parametric feedback cooling is only partially effective due to the third rotational degree of freedom being absent from the potential energy.
              </p>
              <div className="flex gap-2">
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
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="mb-12">
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
      </section>

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
                [Position Title] at [Company Name]
              </CardTitle>
              <p className="text-slate-300">[Duration, e.g., 2020-2023]</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                [Brief description of role and responsibilities]
              </p>
              <ul className="space-y-1 text-slate-300">
                <li>• [Key responsibility or achievement 1]</li>
                <li>• [Key responsibility or achievement 2]</li>
                <li>• [Key responsibility or achievement 3]</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                [Position Title] at [Company Name]
              </CardTitle>
              <p className="text-muted-foreground">[Duration, e.g., 2018-2020]</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                [Brief description of role and responsibilities]
              </p>
              <ul className="space-y-1 text-slate-300">
                <li>• [Key responsibility or achievement 1]</li>
                <li>• [Key responsibility or achievement 2]</li>
                <li>• [Key responsibility or achievement 3]</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}