import { Check, TrendingUp, BarChart3, Calculator, FileText, HeadphonesIcon, Receipt, Handshake, Percent } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Diagnóstico gratuito", desc: "Conversamos 30 minutos para entender a situação financeira do seu negócio. Você sai com uma análise documentada." },
  { num: "02", title: "Análise e plano", desc: "Identificamos os principais gargalos e o que precisa ser organizado primeiro." },
  { num: "03", title: "Assumimos a operação", desc: "Cuidamos do financeiro do dia a dia para você focar no que realmente importa." },
  { num: "04", title: "Você decide com clareza", desc: "Reuniões mensais com relatórios que viram decisão, não arquivo." },
];

const services = [
  { label: "Conciliação bancária", icon: Calculator },
  { label: "DRE gerencial mensal", icon: FileText },
  { label: "Fluxo de caixa realizado e projetado", icon: TrendingUp },
  { label: "Indicadores e análises financeiras", icon: BarChart3 },
  { label: "Boletos e notas fiscais", icon: Receipt },
  { label: "Negociação com bancos e fornecedores", icon: Handshake },
  { label: "Taxas e crédito mais competitivos", icon: Percent },
  { label: "Apoio contínuo nas decisões", icon: HeadphonesIcon },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-14">
            Do diagnóstico ao controle financeiro real
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-5">
                  <span className="text-3xl font-extrabold text-accent leading-none">{step.num}</span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="bg-dark rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-primary-foreground mb-8">O que assumimos por você</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4 hover:bg-primary-foreground/10 transition-colors">
                      <Icon size={20} className="text-accent mb-2.5" />
                      <span className="text-primary-foreground/80 text-sm leading-snug block">{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
