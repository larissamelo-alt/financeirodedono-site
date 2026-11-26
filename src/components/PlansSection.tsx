import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const plans = [
  {
    name: "Rotina financeira",
    desc: "A operação do dia a dia organizada, para você saber o que entrou, o que saiu e o que sobrou.",
    features: ["Conciliação bancária", "Contas a pagar e a receber", "DRE gerencial", "Fluxo de caixa realizado", "Indicadores financeiros"],
    highlighted: false,
  },
  {
    name: "Planejamento",
    desc: "O caixa dos próximos meses desenhado antes de acontecer.",
    features: ["Fluxo de caixa projetado", "Orçamento anual pelo caixa", "Cenários para contratar, investir ou abrir unidade"],
    highlighted: true,
  },
  {
    name: "Decisão com o Jonny",
    desc: "Os números lidos com quem já foi CFO, para decidir com segurança.",
    features: ["Reuniões de leitura dos números", "Análise de preço e margem", "Apoio nas decisões de médio e longo prazo"],
    highlighted: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
              O que a gente pode assumir no seu financeiro
            </h2>
            <p className="text-muted-foreground">
              Escopo e investimento definidos com você no diagnóstico. Você contrata o que a sua empresa precisa, não um pacote.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className={`rounded-2xl p-8 border h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-dark text-primary-foreground border-accent/30 scale-[1.02] shadow-xl relative"
                    : "bg-card text-foreground border-border shadow-card-hover"
                }`}
              >
                <h3 className="text-xl font-extrabold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                      <span className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
<a
                
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-bold text-sm transition-all ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:brightness-110 shadow-accent-hover"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Quero saber se faz sentido pra mim
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Dá para combinar as frentes. O escopo de cada projeto sai do diagnóstico gratuito.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlansSection;
