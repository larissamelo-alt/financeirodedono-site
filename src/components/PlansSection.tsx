import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const plans = [
  {
    name: "Controle de Dono",
    desc: "Para quem precisa de organização financeira e visibilidade mensal do negócio.",
    features: ["Conciliação bancária", "DRE gerencial", "Fluxo de caixa realizado", "Indicadores financeiros", "Reunião mensal 30 min", "Atendimento via WhatsApp"],
    highlighted: false,
  },
  {
    name: "Estratégico de Dono",
    desc: "Para quem quer fluxo de caixa projetado e apoio contínuo nas decisões do negócio.",
    features: ["Tudo do Controle de Dono", "Fluxo de caixa projetado", "Contas a pagar/receber", "Planejamento financeiro", "Reunião mensal 60 min", "Contato direto com Jonny"],
    highlighted: true,
  },
  {
    name: "CFO de Dono",
    desc: "Para quem precisa de um CFO dedicado com visão estratégica de médio e longo prazo.",
    features: ["Tudo do Estratégico de Dono", "Planejamento de longo prazo", "Análise de riscos e cenários", "Estruturação do time financeiro", "Reunião semanal 60 min", "Acesso direto ao Jonny"],
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
              Escolha o nível de apoio certo para o seu momento
            </h2>
            <p className="text-muted-foreground">
              O escopo e o investimento são definidos com você, depois do diagnóstico. Cada negócio de serviço tem uma estrutura financeira diferente, e o apoio certo muda junto.
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
            Nenhum desses nomes é um pacote fechado. É o ponto de partida da conversa no diagnóstico.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlansSection;
