import ScrollReveal from "./ScrollReveal";
import jonnyPhoto from "@/assets/jonny-elias.png?url";

const credentials = [
  "Gestão de fluxo de caixa anual superior a R$ 1,5 bilhão, com operações em moeda estrangeira e captação via BNDES",
  "Mais de 7 anos como CFO e COO, liderando a estruturação financeira de uma das maiores operações de crédito consignado do banco parceiro",
  "Professor universitário de finanças aplicadas a negócios com foco em tomada de decisão prática",
  "MBA em Gestão Financeira e Controladoria — Estácio | Administração com foco em Finanças — UFSC | Análise de Empresas - FIPECAF | CPA-20",
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
              <img src={jonnyPhoto} alt="Jonny Elias - Fundador do Financeiro de Dono" className="relative w-full aspect-[3/4] rounded-2xl object-cover object-top" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block bg-primary-foreground/10 text-primary-foreground/70 text-xs font-semibold px-4 py-1.5 rounded-full border border-primary-foreground/10 mb-4">
                Quem está por trás
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-6">
                Experiência real. Não teoria.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Jonny Elias tem mais de 10 anos de experiência em finanças corporativas. Passou por gestão de patrimônio de alta renda, tesouraria corporativa, consultoria financeira e foi professor universitário de finanças antes de fundar o Financeiro de Dono.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ul className="space-y-4 mb-8">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/70 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
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
