import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Nouvelle plateforme d'apprentissage</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Apprenez les compétences de{" "}
              <span className="text-gradient">demain</span>, aujourd'hui
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Découvrez des cours de qualité dispensés par des experts. 
              Développez vos compétences et donnez un nouvel élan à votre carrière.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explorer les cours
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Play className="h-5 w-5 mr-2" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Étudiants actifs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Cours disponibles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Note moyenne</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 shadow-hover border border-border/50 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Étudiants en apprentissage"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Play className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Cours en direct</p>
                      <p className="text-sm text-muted-foreground">Débutant maintenant</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-glow animate-float" style={{ animationDelay: "0.5s" }}>
                🎓 Certification incluse
              </div>

              {/* Small floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">M</div>
                    <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">J</div>
                    <div className="h-8 w-8 rounded-full bg-success text-success-foreground flex items-center justify-center text-xs font-bold">S</div>
                  </div>
                  <p className="text-sm font-medium text-foreground">+1.2K cette semaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;