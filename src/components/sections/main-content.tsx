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
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">📋</span>
            About Me
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Summary</h3>
            <p className="text-foreground leading-relaxed">
              [Your professional summary here - replace with your background, experience, and current focus. 
              For example: Ph.D. in Computer Science with X years of experience in machine learning and data science. 
              Currently working on innovative solutions in AI/ML with a focus on real-world applications.]
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Career</h3>
            <p className="text-foreground leading-relaxed mb-4">
              I am currently a <strong>Senior Software Engineer</strong> at{" "}
              <a href="#" className="text-primary hover:underline">
                [Your Company]
              </a>{" "}
              working on [brief description of your current role and responsibilities].
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>[Achievement 1 - e.g., Led development of ML model that improved accuracy by X%]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>[Achievement 2 - e.g., Built scalable data pipeline processing Y records daily]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>[Achievement 3 - e.g., Published Z papers in top-tier conferences]</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Technical Leadership:</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>[Leadership example 1]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>[Leadership example 2]</span>
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
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">🚀</span>
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
              <p className="text-muted-foreground mb-4">
                [Brief description of your project, what it does, and what technologies were used. 
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
              <p className="text-muted-foreground mb-4">
                [Brief description of your second project. Focus on unique aspects and results achieved.]
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
              <p className="text-muted-foreground mb-4">
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
              <p className="text-muted-foreground mb-4">
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
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">📚</span>
            Publications and Preprints
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                [Paper Title 1]
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2024</Badge>
                <Badge variant="outline">Conference/Journal Name</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                [Brief description of the paper and its contributions]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    PDF
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

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                [Paper Title 2]
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">2023</Badge>
                <Badge variant="outline">Conference/Journal Name</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                [Brief description of the paper and its contributions]
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    PDF
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
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">🔗</span>
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
                  <a href="#" className="text-primary hover:underline">
                    [Resource Link 1]
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">
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
                  <a href="#" className="text-primary hover:underline">
                    [Resource Link 3]
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">
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
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">💼</span>
            Past Experience
          </h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                [Position Title] at [Company Name]
              </CardTitle>
              <p className="text-muted-foreground">[Duration, e.g., 2020-2023]</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-3">
                [Brief description of role and responsibilities]
              </p>
              <ul className="space-y-1 text-muted-foreground">
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
              <p className="text-foreground mb-3">
                [Brief description of role and responsibilities]
              </p>
              <ul className="space-y-1 text-muted-foreground">
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