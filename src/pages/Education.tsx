import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
      <section className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-2">
            <span className="text-blue-400">🎓</span>
            Education
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Ph.D. in Physics
              </CardTitle>
              <p className="text-slate-300">Purdue University • 2015-2020</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Theoretical/Computational Physics with focus on Optomechanics, a subfield of Atomic, Molecular, and Optical (AMO) Physics
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Dissertation: Advanced control strategies for cooling levitated nanoparticles to the quantum regime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Published 5 peer-reviewed papers in high-impact physics journals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Developed novel computational models for stochastic dynamical systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                M.S. in Physics
              </CardTitle>
              <p className="text-slate-300">Purdue University • 2015-2017</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Experimental Physics with focus on Condensed Matter and Quantum Computing
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Designed and fabricated nanometer-scale superconducting circuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Expertise in low-temperature electronics and quantum device characterization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Education;
