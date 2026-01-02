import Link from "next/link";
import Header from "@/components/Header";
import { ArrowRight, BookOpen, Trophy, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import Testimonials from "@/components/Testimonials";
const Index = () => {
  const featuredCourses = courses.slice(0, 3);

  const features = [
    {
      icon: BookOpen,
      title: "Cours de qualité",
      description: "Contenus créés par des experts de l'industrie avec des mises à jour régulières.",
    },
    {
      icon: Trophy,
      title: "Certifications",
      description: "Obtenez des certificats reconnus pour valoriser vos nouvelles compétences.",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Rejoignez une communauté d'apprenants et partagez vos expériences.",
    },
    {
      icon: Zap,
      title: "Apprentissage flexible",
      description: "Apprenez à votre rythme, où que vous soyez, sur tous vos appareils.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi choisir LearnHub ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une plateforme conçue pour votre réussite avec des fonctionnalités pensées pour optimiser votre apprentissage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card p-6 rounded-2xl border border-border/50 card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Cours populaires
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Découvrez nos cours les plus suivis et commencez votre parcours d'apprentissage.
                </p>
              </div>
              <Link href="/courses" className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="outline" className="group">
                  Voir tous les cours
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.2),transparent_70%)]" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à commencer votre voyage d'apprentissage ?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Rejoignez des milliers d'étudiants qui ont déjà transformé leur carrière grâce à LearnHub.
              </p>
              <Link href="/courses">
                <Button variant="hero" size="xl">
                  Commencer gratuitement
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;