import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const mudancas = [
  "Você sabe, todo mês, pra onde foi cada real",
  "Contrata, investe ou retira sabendo se o caixa aguenta",
  "Sai da operação do dia a dia e volta a ser o especialista do seu negócio",
  "Toma decisão com dado, não com medo",
];

const TransformationSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-primary-foreground mb-8 text-center">
            O que muda quando você decide com clareza
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {mudancas.map((m, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-start gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4">
                <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/85 leading-relaxed">{m}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
