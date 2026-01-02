import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Heart, Sparkles, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous nous engageons à offrir des cours de la plus haute qualité, créés par des experts reconnus dans leur domaine.",
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "L'éducation de qualité doit être accessible à tous, partout dans le monde, à tout moment.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodologies pédagogiques pour une expérience d'apprentissage optimale.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Notre équipe est passionnée par l'éducation et croit fermement au pouvoir transformateur de l'apprentissage.",
    },
  ];

  const stats = [
    { value: "500K+", label: "Apprenants" },
    { value: "45+", label: "Cours disponibles" },
    { value: "98%", label: "Satisfaction" },
    { value: "50+", label: "Instructeurs experts" },
  ];

  const team = [
    {
      name: "Marie Laurent",
      role: "CEO & Fondatrice",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Pédagogique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Sophie Martin",
      role: "Directrice Technique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Pierre Lefevre",
      role: "Responsable Contenu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.2),transparent_60%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Notre histoire</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                À propos de <span className="text-accent">LearnHub</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Nous croyons que l'éducation est la clé pour transformer les vies. 
                Depuis 2020, nous aidons des milliers d'apprenants à développer 
                leurs compétences et à atteindre leurs objectifs professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Notre <span className="text-accent">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Chez LearnHub, nous avons pour mission de démocratiser l'accès à 
                  une éducation de qualité. Nous croyons que chaque personne mérite 
                  l'opportunité de développer ses compétences et de réaliser son plein potentiel.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous collaborons avec les meilleurs experts de chaque domaine pour 
                  créer des cours engageants, pratiques et à jour avec les dernières 
                  tendances de l'industrie.
                </p>
                <div className="flex items-center gap-3 text-accent">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Disponible dans plus de 50 pays</span>
                </div>
              </div>
              <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Équipe LearnHub"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">2020</div>
                  <div className="text-sm">Année de création</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos <span className="text-accent">Valeurs</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ces valeurs guident chacune de nos décisions et façonnent notre culture d'entreprise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/50 transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre <span className="text-accent">Équipe</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une équipe passionnée et dévouée à votre réussite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4 group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 mx-auto rounded-2xl object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;