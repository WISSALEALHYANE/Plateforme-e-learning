import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Globe, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden border-b border-border/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.15),transparent_60%)]" />
                    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-base">Notre Mission</Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Démocratiser le Savoir <br /> Numérique
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                            Nous construisons le futur de l'éducation en ligne. Accessible, interactif et conçu pour votre réussite professionnelle.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="rounded-full text-lg px-8">Rejoindre l'aventure</Button>
                            <Button variant="outline" size="lg" className="rounded-full text-lg px-8">Nos Offres</Button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Étudiants", value: "50k+", icon: Users },
                                { label: "Cours", value: "200+", icon: Award },
                                { label: "Instructeurs", value: "50+", icon: Sparkles },
                                { label: "Pays", value: "120+", icon: Globe },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm">
                                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                    Une approche pédagogique <span className="text-accent">unique</span>
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Contrairement aux plateformes traditionnelles, nous nous concentrons sur la pratique. Chaque cours est conçu pour vous faire construire des projets réels, pas juste regarder des vidéos.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Mentorat personnalisé par des experts",
                                        "Projets concrets pour votre portfolio",
                                        "Communauté active et bienveillante",
                                        "Certificats reconnus par l'industrie"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-accent" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                                    <div className="aspect-video bg-muted rounded-2xl overflow-hidden mb-6 relative">
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                            <span className="text-muted-foreground font-medium">Image de cours interactif</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-muted rounded w-3/4" />
                                        <div className="h-4 bg-muted rounded w-1/2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-card/50">
                    <div className="container mx-auto px-4 text-center">
                        <Badge variant="secondary" className="mb-6">L'Équipe</Badge>
                        <h2 className="text-3xl font-bold mb-12">Rencontrez les fondateurs</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { name: "Sophie Martin", role: "CEO & Co-founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
                                { name: "Thomas Dubois", role: "CTO & Co-founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
                                { name: "Marie Laurent", role: "Head of Content", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
                            ].map((member, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-3xl bg-background border border-border/50">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-muted-foreground text-sm">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
