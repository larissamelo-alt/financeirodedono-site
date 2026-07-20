import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// Preencher este array quando o depoimento chegar. Formato:
// { quote: "...", name: "André Müller", role: "Sócio", company: "Nome da empresa" }
// Com 1 item, o card aparece centralizado. A partir de 2, vira grade.
const testimonials: { quote: string; name: string; role: string; company: string }[] = [];

const TestimonialsSection = () => {
  if (testimonials.length === 0) {
    // Estado vazio: a seção não aparece no ar até ter pelo menos 1 depoimento.
    // Mantém o componente no código pra já entrar no ar assim que preencher o array acima.
    return null;
  }

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 text-center">
            Quem já decide com clareza
          </h2>
        </ScrollReveal>

        <div
          className={`grid gap-6 mt-12 ${
            testimonials.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card-hover h-full flex flex-col">
                <Quote className="text-accent mb-4" size={28} strokeWidth={1.5} />
                <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
