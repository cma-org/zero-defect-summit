import { Card } from "@/components/ui/card";
import { Award, Globe, Users, BookOpen } from "lucide-react";
import speakerImage from "@/assets/speaker-fred-rowley.jpg";

const Speaker = () => {
  return (
    <section id="speaker" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your <span className="text-accent">Expert Trainer</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from a global leader in solid dosage manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-accent rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={speakerImage}
                  alt="Fred A. Rowley"
                  className="relative rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Fred A. Rowley</h3>
              <p className="text-xl text-accent mb-6 font-semibold">
                President, Solid Dosage Training Inc., USA
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                An internationally recognized expert in solid dosage manufacturing, Fred A. Rowley brings 
                unparalleled expertise in tablet compression and coating technologies. As President of 
                Solid Dosage Training Inc., he has trained thousands of pharmaceutical professionals 
                worldwide, helping companies achieve zero-defect manufacturing excellence.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-2 hover:border-accent transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">40+</div>
                      <div className="text-xs text-muted-foreground">Countries Trained</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 hover:border-accent transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">5000+</div>
                      <div className="text-xs text-muted-foreground">Professionals Trained</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 hover:border-accent transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">30+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 hover:border-accent transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">100+</div>
                      <div className="text-xs text-muted-foreground">Training Programs</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
