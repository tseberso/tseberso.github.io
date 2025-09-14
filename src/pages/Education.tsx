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
                Ph.D. in Theoretical/Computational Physics
              </CardTitle>
              <p className="text-slate-300">Purdue University • 2014-2020</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300"> <u>2018-2020</u></p>
              <p className="text-slate-100 mb-3">
                Field of focus: Optomechanics, a subfield of Atomic, Molecular, and Optical (AMO) Physics. <br></br> 
                I had the honor and pleasure of working under Prof. Francis Robicheaux and co-advisor Prof. Tongcang Li.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Dissertation: Heating and Cooling Mechanisms for the Thermal Motion of an Optically Levitated Nanoparticle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Published 5 peer-reviewed papers in high-impact physics journals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Developed novel analytic and computational models for stochastic dynamical systems</span>
                </li>
              </ul>
              <br></br>
              <p className="text-slate-300"> <u>2015-2017</u></p>
              <p className="text-slate-100 mb-3">
                 Experimental Physics with focus on Condensed Matter and Quantum Computing under the pleasure of Prof. Leonid Rokhinson.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Designed and fabricated nanometer-scale superconducting circuits for quantum computing experiments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Expertise in low-temperature electronics and quantum device characterization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span>Tested self-built superconducting circuits in dilution refrigerators and He3 systems ranging from 10-100 mK.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                B.A. in Physics
              </CardTitle>
              <p className="text-slate-300">Gustavus Adolphus College • 2010-2014</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100 mb-3">
                Internships:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span> <u>National Institute of Standards and Technology (NIST):</u> Undergraduate Fellow  <br></br>
                    Successfully characterized, optimized, and modeled the magnetic fields of a neutron electric dipole moment experiment testing the standard model of physics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span> <u>Gustavus Adolphus College:</u> Undergraduate Researcher  <br></br>
                    Built and programmed a solar tracker from scratch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 text-lg leading-snug">•</span>
                  <span> <u>Idaho State University:</u> Undergraduate Researcher  <br></br>
                  Concentrated on extracting large amounts of radioactive isotopes of copper from a sample; reduced procedure time from two months to two days.</span>
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
