import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "LearnHub a été désigné comme le cours en ligne ou le programme de certification le plus populaire pour apprendre à coder, selon l'enquête 2023 de StackOverflow auprès des développeurs.",
    author: "StackOverflow",
    role: "Enquête Développeurs 2023",
    avatar: "📊",
    rating: 5,
  },
  {
    id: 2,
    quote: "LearnHub a réellement changé la donne et a été un vrai guide pour moi dans la création de Dimensional.",
    author: "Marie Dupont",
    role: "Fondatrice de Dimensional",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    id: 3,
    quote: "LearnHub vous donne la possibilité d'être persévérant. J'ai appris exactement ce que j'avais besoin de savoir dans la vraie vie.",
    author: "Thomas Martin",
    role: "Développeur Full Stack",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    id: 4,
    quote: "La plateforme m'a aidé à me mettre en valeur pour trouver un nouveau poste.",
    author: "Sophie Bernard",
    role: "UX Designer",
    avatar: "👩‍🎨",
    rating: 5,
  },
  {
    id: 5,
    quote: "Grâce à LearnHub Business, les employés ont réussi à associer compétences technologiques et compétences comportementales en tant que consultants, ce qui leur a permis d'évoluer dans leur carrière.",
    author: "Pierre Lefèvre",
    role: "Directeur RH, TechCorp",
    avatar: "👔",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ils ont transformé leur vie grâce à l'apprentissage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos apprenants ont atteint leurs objectifs et changé leur carrière.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-linear-to-r from-primary to-accent rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</p>
              <p className="text-primary-foreground/80 text-sm">Apprenants satisfaits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">4.8/5</p>
              <p className="text-primary-foreground/80 text-sm">Note moyenne</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">92%</p>
              <p className="text-primary-foreground/80 text-sm">Taux de réussite</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">45+</p>
              <p className="text-primary-foreground/80 text-sm">Cours disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;