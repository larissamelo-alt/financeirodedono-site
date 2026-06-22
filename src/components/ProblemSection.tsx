import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: "💸",
    title: "Fatura bem, mas o caixa não fecha",
    desc: "No final do mês o dinheiro some e você não consegue explicar para onde foi.",
  },
  {
    icon: "📉",
    title: "Decide no impulso, sem dados",
    desc: "Contrata, investe ou retira sem saber se o caixa aguenta. O risco é invisível até virar problema.",
  },
  {
    icon: "⏳",
    title: "O financeiro consome o seu tempo",
    desc: "Você é o especialista do seu negócio. Mas acaba sendo o gestor financeiro também.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Você se reconhece em algum desses cenários?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground leading-relaxed lg:pt-2">
              A maioria dos donos de empresas de serviço enfrenta pelo menos um desses problemas. E geralmente só percebe quando o caixa já apertou.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card-hover h-full">
                <div className="text-4xl mb-5">{p.icon}</div>
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
              <strong className="text-primary-foreground">O risco mais comum que vemos:</strong> empresas faturando bem com caixa prestes a travar em poucos dias — e o sócio sem saber. Com um plano de 90 dias, a situação muda.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
