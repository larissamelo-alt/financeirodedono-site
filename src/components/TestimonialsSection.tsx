import { useState, useEffect } from "react";
import { Quote, X, Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import nkmbLogo from "@/assets/nkmb-coffee-logo.png?url";

// Preencher este array com cada depoimento novo. Formato:
// { quote: "versão curta pro card", quoteCompleta: "versão longa pro popup", name, role, company, logo?, instagram? }
// logo e instagram são opcionais — sem eles, o card mostra só nome e cargo/empresa.
// Com 1 item, o card aparece centralizado. A partir de 2, vira grade.
const testimonials: {
  quote: string;
  quoteCompleta: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
  instagram?: string;
}[] = [
  {
    quote:
      "Eu estava sobrecarregado, fazendo um financeiro puramente operacional e sem a visão de negócio ou de resultados. Era quase zero.\n\nHoje sei quanto tenho em caixa, por quanto tempo esse dinheiro dura e o que posso investir. Em poucos meses, trocamos as máquinas de cartão, o que já gerou uma redução de custos significativa. Tenho clareza sobre o faturamento geral, margens e o CMV.\n\nIsso me tirou 95% da operação bruta. Recomendo 100%.",
    quoteCompleta:
      "A decisão de buscar esse apoio veio porque, como empresário sozinho — sem sócios e completando dez anos de empresa —, eu estava sobrecarregado, fazendo um financeiro puramente operacional e sem a visão de negócio ou de resultados. As contas sempre foram pagas, nunca tive atrasos, mas havia uma necessidade de organização e, principalmente, de ter alguém fazendo isso para me trazer informação, resultados e o DRE. Minha expectativa era sair do operacional, que demandava muito tempo e não me trazia resultados, pois eu não conseguia montar relatórios. Eu mantinha tudo organizado, mas não tinha gestão financeira nas mãos. Era quase zero.\n\nHoje, já consigo ter uma análise trimestral e semestral. O Johnny faz o acompanhamento de vários itens e me auxiliou até em informações de precificação. Essa mudança me trouxe a situação real da minha empresa; eu estava praticamente cego. Hoje sei quanto tenho em caixa, por quanto tempo esse dinheiro dura e o que posso investir. Em poucos meses, trocamos as máquinas de cartão, o que já gerou uma redução de custos significativa, que se refletirá ainda mais no futuro. Também mudamos a conta bancária para uma instituição maior, o que me dá mais opções de crédito e investimento. Além disso, tenho clareza sobre o faturamento geral, margens e, principalmente, o CMV. Ter essa visão me ajuda na tomada de decisão.\n\nPercebi que tenho um modelo de negócio bom e replicável, só faltava organização. Mudou totalmente a visão do meu negócio: hoje sei que ele é rentável porque tenho essa visão através do Financeiro de Dono. Minhas decisões agora são um pouco mais estratégicas e menos arriscadas.\n\nMeu recado para quem é empreendedor sozinho e não tem visão de planejamento financeiro para tomar decisões é: eu recomendo 100%. Isso me tirou 95% da operação bruta. Fica a dica: trazer um BPO financeiro para a operação é muito bom, principalmente para te livrar do operacional e te entregar a informação necessária para a tomada de decisão. Recomendo 100%.",
    name: "André Müller",
    role: "Proprietário",
    company: "NKMB Coffee Co",
    logo: nkmbLogo,
    instagram: "https://www.instagram.com/nkmbcoffeeco/",
  },
];

const TestimonialsSection = () => {
  const [aberto, setAberto] = useState<number | null>(null);

  // Trava o scroll do fundo enquanto o popup está aberto, e fecha com Esc.
  useEffect(() => {
    if (aberto === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  if (testimonials.length === 0) {
    // Estado vazio: a seção não aparece no ar até ter pelo menos 1 depoimento.
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
              <button
                type="button"
                onClick={() => setAberto(i)}
                className="text-left w-full bg-card rounded-2xl p-8 border border-border shadow-card-hover h-full flex flex-col transition-all hover:border-accent/40 hover:-translate-y-1 cursor-pointer"
              >
                <Quote className="text-accent mb-4" size={28} strokeWidth={1.5} />
                <p className="text-foreground leading-relaxed mb-4 flex-1 whitespace-pre-line">
                  "{t.quote}"
                </p>
                <span className="text-xs font-semibold text-accent mb-4">
                  Ler depoimento completo →
                </span>
                <div className="flex items-center gap-3">
                  {t.logo && (
                    <img
                      src={t.logo}
                      alt={`Logo ${t.company}`}
                      className="w-11 h-11 rounded-full object-cover border border-border flex-shrink-0"
                    />
                  )}
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs flex items-center gap-1">
                      {t.role} · {t.company}
                      {t.instagram && <Instagram size={12} className="text-muted-foreground" />}
                    </p>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Popup com o depoimento completo */}
      {aberto !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
            onClick={() => setAberto(null)}
          />
          <div className="relative bg-card rounded-2xl border border-border shadow-xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-8">
            <button
              type="button"
              onClick={() => setAberto(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={22} />
            </button>

            <Quote className="text-accent mb-4" size={32} strokeWidth={1.5} />
            <p className="text-foreground leading-relaxed whitespace-pre-line mb-6">
              "{testimonials[aberto].quoteCompleta}"
            </p>
            <div className="border-t border-border pt-4 flex items-center gap-3">
              {testimonials[aberto].logo && (
                <img
                  src={testimonials[aberto].logo}
                  alt={`Logo ${testimonials[aberto].company}`}
                  className="w-12 h-12 rounded-full object-cover border border-border flex-shrink-0"
                />
              )}
              <div>
                <p className="font-bold text-foreground text-sm">{testimonials[aberto].name}</p>
                <p className="text-muted-foreground text-xs">
                  {testimonials[aberto].role} · {testimonials[aberto].company}
                  {testimonials[aberto].instagram && (
                    <>
                      {" · "}
                      <a
                        href={testimonials[aberto].instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <Instagram size={12} />
                        Instagram
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
