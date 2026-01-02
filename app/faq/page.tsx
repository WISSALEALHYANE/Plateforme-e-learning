"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Search, Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
  const faqs = [
    {
      question: "Comment accéder aux cours ?",
      answer: "Une fois inscrit, vous avez accès illimité à tous les cours achetés depuis votre tableau de bord. Vous pouvez y accéder 24h/24 et 7j/7 depuis n'importe quel appareil."
    },
    {
      question: "Les cours sont-ils certifiants ?",
      answer: "Oui, chaque cours complété à 100% vous donne droit à un certificat de réussite nominatif que vous pouvez ajouter à votre CV ou partager sur LinkedIn."
    },
    {
      question: "Puis-je me faire rembourser ?",
      answer: "Absolument. Nous offrons une garantie 'satisfait ou remboursé' de 30 jours sans poser de questions. Si le cours ne vous convient pas, contactez simplement le support."
    },
    {
      question: "Y a-t-il des prérequis pour suivre les cours ?",
      answer: "Cela dépend du niveau du cours. Les prérequis sont toujours indiqués clairement sur la page de description du cours. Pour les débutants, aucun prérequis n'est nécessaire."
    },
    {
      question: "Combien de temps ai-je accès au contenu ?",
      answer: "L'accès est à vie ! Une fois le cours acheté, il vous appartient pour toujours, y compris les futures mises à jour."
    },
    {
      question: "Proposez-vous des tarifs pour les entreprises ?",
      answer: "Oui, nous avons des offres spéciales pour les équipes et les entreprises. Contactez notre service commercial pour obtenir un devis personnalisé."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <div className="inline-flex items-center justify-center p-3 bg-background rounded-2xl shadow-sm mb-6">
              <HelpCircle className="h-6 w-6 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Centre d'aide</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Trouvez les réponses à vos questions.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher une question..."
                className="pl-10 h-12 bg-background border-border/50 shadow-sm rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-3xl">
          <div className="grid gap-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-accent transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Vous n'avez pas trouvé de réponse ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border/50 shadow-sm flex-1 max-w-xs mx-auto">
                <MessageCircle className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Chat en direct</h3>
                <p className="text-sm text-muted-foreground mb-4">Du Lundi au Vendredi, 9h-18h</p>
                <span className="text-accent font-medium cursor-pointer hover:underline">Démarrer le chat</span>
              </div>
              <div className="bg-background p-6 rounded-2xl border border-border/50 shadow-sm flex-1 max-w-xs mx-auto">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">Réponse sous 24h</p>
                <a href="mailto:support@learnhub.com" className="text-primary font-medium hover:underline">support@learnhub.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
