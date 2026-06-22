import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden hero-grid">
      {/* Radial gradient orange */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_80%_50%,hsl(37_91%_55%/0.15),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/90 text-xs font-semibold px-4 py-1.5 rounded-full border border-primary-foreground/15 mb-6">
                BPO Financeiro & CFO sob demanda
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
                Sua empresa fatura.
                <br />
                Mas o caixa
                <br />
                sempre <span className="text-accent">aperta.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
                Ajudamos donos de empresas de serviço a organizar o financeiro, ganhar previsibilidade e tomar decisões sem quebrar o caixa.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm hover:brightness-110 shadow-accent-hover transition-all"
                >
                  <MessageCircle size={18} />
                  Quero meu diagnóstico gratuito
                </a>
                <a
                  href="#como-funciona"
                  className="text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  Como funciona ↓
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-6 text-primary-foreground/80">
                <div className="pr-6 border-r border-primary-foreground/15">
                  <div className="text-2xl font-extrabold text-primary-foreground">+10</div>
                  <div className="text-xs">anos em finanças corporativas</div>
                </div>
                <div className="pr-6 border-r border-primary-foreground/15">
                  <div className="text-2xl font-extrabold text-primary-foreground">R$1,5bi</div>
                  <div className="text-xs">em caixa gerenciado</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-primary-foreground">30 min</div>
                  <div className="text-xs">de diagnóstico gratuito</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Glass card */}
          <ScrollReveal delay={300} className="hidden lg:block">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary-foreground font-bold text-lg">Diagnóstico Financeiro</h3>
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Fluxo de caixa", status: "Atenção", color: "text-accent" },
                  { label: "Capital de giro", status: "Crítico", color: "text-red-400" },
                  { label: "Previsibilidade", status: "Sem dados", color: "text-muted-foreground" },
                  { label: "Margem líquida", status: "Não calculada", color: "text-muted-foreground" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-primary-foreground/10">
                    <span className="text-sm text-primary-foreground/70">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/15 border border-accent/25 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-primary-foreground/90 font-medium">
                  Diagnóstico disponível agora — <span className="text-accent font-bold">gratuito</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
