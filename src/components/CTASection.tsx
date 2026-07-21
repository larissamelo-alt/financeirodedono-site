import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(37_91%_55%/0.12),transparent_70%)]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground mb-5 max-w-3xl mx-auto">
            Pronto pra decidir com clareza, não no escuro?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
            O diagnóstico é gratuito, leva 30 minutos e você já sai com uma análise do seu caixa. Sem compromisso.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-base hover:brightness-110 shadow-accent-hover transition-all"
          >
            <MessageCircle size={20} />
            Quero meu diagnóstico gratuito
          </a>
          <p className="text-primary-foreground/50 text-sm mt-5">
            Gratuito · 30 minutos · Sem compromisso
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
