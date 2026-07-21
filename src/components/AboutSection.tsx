import ScrollReveal from "./ScrollReveal";
import jonnyPhoto from "@/assets/jonny-elias.jpg?url";

const resultados = [
  { valor: "R$ 800 mil/ano", label: "economizados em adquirência" },
  { valor: "R$ 2 mi/ano", label: "em recebíveis vs. crédito" },
  { valor: "R$ 1 a 1,2 mi/ano", label: "em operações financeiras" },
  { valor: "R$ 2 a 2,5 mi/ano", label: "em tributo evitado" },
];

const credenciais = [
  "Ex-CFO e COO",
  "Gestão de R$ 1,5 bi/ano",
  "Professor universitário de finanças",
  "MBA em Gestão Financeira",
  "CPA-20",
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <ScrollReveal>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/40" />
              <img src={jonnyPhoto} alt="Jonny Elias, fundador do Financeiro de Dono" className="relative w-full aspect-[3/4] rounded-2xl object-cover object-top" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/70 text-xs font-semibold px-4 py-1.5 rounded-full border border-primary-foreground/10 mb-4">
                Quem lidera
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3">
                Experiência real. Não teoria.
              </h2>
              <p className="text-accent font-semibold mb-6">
                De cuidar do dinheiro de uma pessoa a construir o financeiro de uma empresa. E agora, da sua.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Já organizei o dinheiro de atletas e médicos. Controlei R$ 1,5 bilhão por ano num comércio. Construí dois negócios de crédito do zero: com mais R$ 150 milhões em vendas. Hoje aplico essa experiência inteira dentro de pequenas e médias empresas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="text-primary-foreground/50 text-xs font-bold tracking-wide uppercase mb-4">
                Resultados que já entreguei
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {resultados.map((r, i) => (
                  <div key={i} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4">
                    <div className="text-lg font-extrabold text-accent leading-tight">{r.valor}</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex flex-wrap gap-2 mb-8">
                {credenciais.map((c, i) => (
                  <span key={i} className="text-xs font-medium text-primary-foreground/70 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-primary-foreground/90 italic leading-relaxed">
                  "Meu foco não é fazer relatório. É transformar faturamento em previsibilidade, controle e margem para que o empresário consiga decidir com clareza."
                </p>
                <p className="text-accent font-bold text-sm mt-3">— Jonny Elias</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
