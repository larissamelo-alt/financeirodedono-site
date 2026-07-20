import ScrollReveal from "./ScrollReveal";
import { Wallet, AlertTriangle, Hourglass } from "lucide-react";

const problems = [
  {
    Icon: Wallet,
    title: "Fatura, mas o caixa não fecha",
    desc: "No fim do mês o dinheiro some e ninguém sabe explicar para onde foi. Isso não é falta de faturamento. É falta de decisão com dado.",
  },
  {
    Icon: AlertTriangle,
    title: "Decide no impulso, sem dados",
    desc: "Contrata, investe ou retira sem saber se o caixa aguenta. A decisão parece certa até o extrato provar o contrário.",
  },
  {
    Icon: Hourglass,
    title: "O financeiro consome o seu tempo",
    desc: "Você é o especialista do seu negócio. Não devia ser também quem decide sozinho sobre o caixa, sem apoio.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Toda semana você decide algo sobre o caixa. A pergunta é: com que base?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground leading-relaxed lg:pt-2">
              A maioria dos donos de empresa de serviço toma essas decisões no impulso. Só descobre que errou quando o caixa já travou.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card-hover h-full">
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                  <p.Icon className="text-accent" size={22} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="bg-dark rounded-2xl p-8 flex gap-5">
            <div className="w-1 min-h-full bg-accent rounded-full flex-shrink-0" />
            <p className="text-primary-foreground/90 leading-relaxed">
              <strong className="text-primary-foreground">O risco mais comum que vemos:</strong> empresa faturando, caixa a poucos dias de travar, e o sócio decidindo sem saber disso. Em 90 dias, isso muda.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
