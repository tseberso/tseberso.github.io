import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Publications = () => {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
      <section className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">📚</span>
            Publications
          </h2>
        </div>

        <div>
          <p className="text-slate-100 leading-relaxed">
          Read below or alternatively check out{" "}  
            <a href="https://scholar.google.com/citations?user=KTt02z0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <u><strong>Google Scholar</strong></u>
          </a>
          </p>
        </div>

        <Separator className="my-4"/>

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
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>Experimental demonstration of cooling the 3 translational and 2 rotational degrees of freedom of an optically levitated nanodumbbell.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
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
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>For non-spherical particles such as nanodumbbells, one must consider the rotations as well as translations in the dynamics of a levitated particle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
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
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>An inescapable source of noise and decoherence for an optically levitated particle is the shot-noise from the laser that constantly penetrates it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
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
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>This paper outlines a neat strategy for cooling the motion of a spherical particle down to the quantum regime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>It involves optically trapping a magnetic particle, and then linearly coupling it with an already cooled gas of magnetically polarized and trapped atoms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
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
                    <span className="text-blue-400 text-lg leading-snug">•</span>
                    <span>As part of a Sandia National Lab project, we investigated the dynamics of large optically trapped disks (2 microns, 200 nm).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 text-lg leading-snug">•</span>
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
    </main>
  );
};

export default Publications;
