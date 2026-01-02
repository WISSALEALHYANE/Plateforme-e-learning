import { ArrowLeft, BookOpen, Clock, Play, Star, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCourseById } from "@/data/courses";
import Quiz from "@/components/Quiz";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Cours non trouvé</h1>
          <p className="text-muted-foreground mb-8">
            Ce cours n'existe pas ou a été supprimé.
          </p>
          <Link href="/courses">
            <Button variant="accent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux cours
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const levelColor = {
    Débutant: "bg-success/10 text-success border-success/20",
    Intermédiaire: "bg-accent/10 text-accent border-accent/20",
    Avancé: "bg-primary/10 text-primary border-primary/20",
  };

  const syllabus = [
    "Introduction et prise en main",
    "Concepts fondamentaux",
    "Pratique guidée avec exercices",
    "Projet pratique complet",
    "Techniques avancées",
    "Optimisation et bonnes pratiques",
    "Projet final et certification",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.2),transparent_60%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux cours
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Course Info */}
              <div className="lg:col-span-2 space-y-6 animate-fade-up">
                <div className="flex flex-wrap gap-3">
                  <Badge className={`${levelColor[course.level]} border`}>
                    {course.level}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                    {course.category}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {course.title}
                </h1>

                <p className="text-lg text-primary-foreground/80 max-w-2xl">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-bold text-lg">{course.rating}</span>
                    <span className="text-primary-foreground/60">({course.students.toLocaleString()} avis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{course.students.toLocaleString()} étudiants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration} de contenu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{course.lessons} leçons</span>
                  </div>
                </div>

                <p className="text-primary-foreground/80">
                  Créé par <span className="font-semibold text-primary-foreground">{course.instructor}</span>
                </p>
              </div>

              {/* Pricing Card */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-hover sticky top-24">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{course.price.toFixed(2)}€</span>
                    </div>

                    <div className="space-y-3">
                      <Button variant="hero" size="lg" className="w-full">
                        <Play className="h-5 w-5 mr-2" />
                        S'inscrire maintenant
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        Ajouter au panier
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      Garantie satisfait ou remboursé 30 jours
                    </p>

                    <div className="pt-4 border-t border-border space-y-3">
                      <p className="font-semibold text-foreground">Ce cours inclut :</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          {course.duration} de vidéo à la demande
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          {course.lessons} leçons
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Accès à vie
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Certificat de complétion
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* What you'll learn */}
                <div className="animate-fade-up">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Ce que vous apprendrez
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.tags.map((tag, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Maîtrisez {tag} et ses concepts avancés
                        </span>
                      </div>
                    ))}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Créez des projets professionnels de A à Z
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Appliquez les meilleures pratiques de l'industrie
                      </span>
                    </div>
                  </div>
                </div>

                {/* Syllabus */}
                <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Programme du cours
                  </h2>
                  <div className="space-y-4">
                    {(course.lessonList || []).length > 0 ? (
                      <Accordion type="single" collapsible className="w-full">
                        {(course.lessonList || []).map((lesson, index) => (
                          <AccordionItem key={lesson.id} value={lesson.id} className="border border-border/50 rounded-xl px-4">
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex items-center gap-4 text-left">
                                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-foreground">{lesson.title}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {lesson.description} • {lesson.duration}
                                  </p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                              <div className="ml-14 space-y-8">

                                {/* 1. Cadrage */}
                                {(lesson.objectives || lesson.prerequisites || lesson.publicCible) && (
                                  <div className="grid md:grid-cols-2 gap-4 bg-accent/5 p-4 rounded-xl border border-accent/10">
                                    {lesson.objectives && (
                                      <div className="space-y-2">
                                        <h4 className="flex items-center gap-2 font-semibold text-accent">
                                          <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-xs">🎯</div>
                                          Objectifs
                                        </h4>
                                        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                                          {lesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                                        </ul>
                                      </div>
                                    )}
                                    <div className="space-y-4 text-sm">
                                      {lesson.publicCible && (
                                        <div>
                                          <span className="font-semibold text-foreground">👤 Public: </span>
                                          <span className="text-muted-foreground">{lesson.publicCible}</span>
                                        </div>
                                      )}
                                      {lesson.prerequisites && (
                                        <div>
                                          <span className="font-semibold text-foreground">📌 Prérequis: </span>
                                          <span className="text-muted-foreground">{lesson.prerequisites.join(", ")}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* 2. Théorie (Knowledge) */}
                                {lesson.theory && (
                                  <div className="space-y-4">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">
                                      📘 Concepts Clés
                                    </h4>
                                    <div className="prose prose-sm dark:prose-invert max-w-none bg-card p-4 rounded-xl border border-border">
                                      <p className="font-medium text-foreground mb-4">{lesson.theory.summary}</p>
                                      <div className="grid gap-4 sm:grid-cols-2">
                                        {lesson.theory.concepts.map((concept, i) => (
                                          <div key={i} className="bg-muted/50 p-3 rounded-lg">
                                            <h5 className="font-bold text-accent mb-1">{concept.title}</h5>
                                            <p className="text-xs text-muted-foreground">{concept.description}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* 3. Vidéo Pédagogique */}
                                {lesson.type === 'youtube' && lesson.youtubeId && (
                                  <div className="space-y-2">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">
                                      🎥 Explication
                                    </h4>
                                    <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
                                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${lesson.youtubeId}`} title={lesson.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                  </div>
                                )}

                                {lesson.type === 'video' && lesson.videoUrl && (
                                  <div className="space-y-2">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">🎥 Explication</h4>
                                    <video controls className="w-full rounded-xl border border-border"><source src={lesson.videoUrl} type="video/mp4" /></video>
                                  </div>
                                )}

                                {/* 4. Exemples Pratiques */}
                                {lesson.practical && (
                                  <div className="space-y-4">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">💻 Pratique</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-destructive text-sm font-bold"><div className="h-2 w-2 rounded-full bg-destructive"></div>À éviter</div>
                                        <pre className="bg-destructive/10 text-destructive-foreground p-3 rounded-lg text-xs font-mono overflow-x-auto border border-destructive/20">{lesson.practical.badCode}</pre>
                                      </div>
                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-success text-sm font-bold"><div className="h-2 w-2 rounded-full bg-success"></div>Bonne pratique</div>
                                        <pre className="bg-success/10 text-success-foreground p-3 rounded-lg text-xs font-mono overflow-x-auto border border-success/20">{lesson.practical.goodCode}</pre>
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-3">{lesson.practical.explanation}</p>
                                  </div>
                                )}

                                {/* 5. Activité Interactive */}
                                {lesson.interactive && (
                                  <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-xl border border-accent/20 space-y-4">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xl">🚀</div>
                                      <div>
                                        <h4 className="font-bold text-foreground">{lesson.interactive.title}</h4>
                                        <Badge variant="outline" className="text-[10px]">{lesson.interactive.type}</Badge>
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{lesson.interactive.description}</p>
                                    <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Démarrer l'activité</Button>
                                  </div>
                                )}

                                {/* 6. Quiz / Évaluation */}
                                {lesson.type === 'quiz' && lesson.quizQuestions && (
                                  <div className="space-y-2">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">⚡ Quiz Rapide</h4>
                                    <Quiz questions={lesson.quizQuestions} />
                                  </div>
                                )}

                                {lesson.quizQuestions && lesson.type !== 'quiz' && (
                                  <div className="space-y-2">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">⚡ Quiz de validation</h4>
                                    <Quiz questions={lesson.quizQuestions} />
                                  </div>
                                )}


                                {/* 7. Étude de Cas */}
                                {lesson.caseStudy && (
                                  <div className="space-y-4 border border-border rounded-xl p-5">
                                    <h4 className="text-lg font-semibold flex items-center gap-2">📂 Étude de Cas</h4>
                                    <p className="text-sm font-medium">{lesson.caseStudy.scenario}</p>
                                    <div className="space-y-2">
                                      {lesson.caseStudy.options.map((opt, i) => (
                                        <div key={i} className="p-3 bg-muted rounded-lg text-sm hover:bg-muted/80 cursor-pointer transition-colors">
                                          {opt.text}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* 8. Ressources */}
                                {lesson.resources && (
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Ressources</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {lesson.resources.map((res, i) => (
                                        <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-xs hover:bg-accent hover:text-accent-foreground transition-colors">
                                          🔗 {res.label}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* 9. Auto-évaluation & 10. Conclusion */}
                                {(lesson.reflectionQuestions || lesson.conclusion) && (
                                  <div className="bg-secondary/20 p-4 rounded-xl space-y-4">
                                    {lesson.reflectionQuestions && (
                                      <div className="space-y-2">
                                        <h5 className="font-semibold text-sm">❓ Auto-évaluation</h5>
                                        <div className="grid gap-2">
                                          {lesson.reflectionQuestions.map((q, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                              <div className="h-4 w-4 rounded border border-muted-foreground/30"></div>
                                              {q}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    {lesson.conclusion && (
                                      <div className="pt-4 border-t border-border/10">
                                        <p className="text-sm italic text-muted-foreground">"{lesson.conclusion}"</p>
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Fallback for old content */}
                                {lesson.content && !lesson.theory && (
                                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {lesson.content}
                                  </div>
                                )}

                                {lesson.type === 'link' && lesson.externalUrl && (
                                  <div className="mb-4 p-4 bg-muted/50 rounded-lg border border-border flex items-center gap-3 hover:bg-muted transition-colors">
                                    <BookOpen className="h-6 w-6 text-accent" />
                                    <div className="flex-1">
                                      <h4 className="font-medium">Documentation externe</h4>
                                      <a href={lesson.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                                        Accéder à la ressource
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      syllabus.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
                        >
                          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{item}</h3>
                            <p className="text-sm text-muted-foreground">
                              Module {index + 1} • ~{Math.floor(Math.random() * 3) + 2}h de contenu
                            </p>
                          </div>
                          <Play className="h-5 w-5 text-muted-foreground" />
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Instructor */}
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Votre instructeur
                  </h2>
                  <div className="bg-card rounded-2xl p-6 border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {course.instructor}
                        </h3>
                        <p className="text-accent font-medium mb-2">
                          Expert en {course.category}
                        </p>
                        <p className="text-muted-foreground">
                          Plus de 10 ans d'expérience dans l'industrie. Passionné par l'enseignement
                          et le partage de connaissances. A formé plus de 50 000 étudiants à travers le monde.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Technologies couvertes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
