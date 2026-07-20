import { CircleDot, LayoutGrid, Compass, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const passos = [
  {
    letra: "D",
    verbo: "Decidir",
    desc: "Decidir agir. Parar de tocar o financeiro no impulso e assumir que isso precisa de estrutura.",
    pergunta: "Você já decidiu parar de tocar o caixa no impulso?",
    Icon: CircleDot,
  },
  {
    letra: "O",
    verbo: "Organizar",
    desc: "Organizar o caixa: o que entra, o que sai, pra onde vai.",
    pergunta: "Você sabe pra onde vai o seu dinheiro todo mês?",
    Icon: LayoutGrid,
  },
  {
    letra: "N",
    verbo: "Nortear",
    desc: "Usar o que foi organizado pra apontar a direção certa de cada decisão futura.",
    pergunta: "Você decide contratar, investir ou retirar com dado ou no impulso?",
    Icon: Compass,
  },
  {
    letra: "O",
    verbo: "Otimizar",
    desc: "Crescer com margem, não só com faturamento.",
    pergunta: "Seu negócio cresce com margem ou só com faturamento?",
    Icon: TrendingUp,
  },
];

const DonoMethodSection = () => {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full border border-accent/20 mb-4">
            O Método D.O.N.O.
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3 max-w-2xl">
            Decidir, organizar, nortear, otimizar.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            É assim que a gente transforma faturamento em decisão.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {passos.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-6 border border-border h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <p.Icon className="text-accent" size={20} strokeWidth={2} />
                  </div>
                  <span className="text-2xl font-extrabold text-accent/40 leading-none">{p.letra}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{p.verbo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <p className="text-sm font-medium text-foreground/80 leading-relaxed mt-auto pt-4 border-t border-border">
                  {p.pergunta}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center text-muted-foreground">
            Se você não sabe responder alguma dessas, é aí que a gente entra.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DonoMethodSection;
