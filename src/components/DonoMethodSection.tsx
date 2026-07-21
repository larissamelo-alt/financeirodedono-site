import ScrollReveal from "./ScrollReveal";

const passos = [
  {
    letra: "D",
    verbo: "Decidir",
    desc: "Decidir agir. Parar de tocar o financeiro no impulso e assumir que isso precisa de estrutura.",
    pergunta: "Você já decidiu parar de tocar o caixa no impulso?",
  },
  {
    letra: "O",
    verbo: "Organizar",
    desc: "Organizar o caixa: o que entra, o que sai, pra onde vai.",
    pergunta: "Você sabe pra onde vai o seu dinheiro todo mês?",
  },
  {
    letra: "N",
    verbo: "Nortear",
    desc: "Usar o que foi organizado pra apontar a direção certa de cada decisão futura.",
    pergunta: "Você decide contratar, investir ou retirar com dado ou no impulso?",
  },
  {
    letra: "O",
    verbo: "Otimizar",
    desc: "Crescer com margem, não só com faturamento.",
    pergunta: "Seu negócio cresce com margem ou só com faturamento?",
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-12 max-w-2xl">
            A estrutura por trás de cada decisão.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {passos.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-6 border border-border h-full flex flex-col">
                <span className="text-7xl font-extrabold text-accent leading-none mb-3 block">
                  {p.letra}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.verbo}</h3>
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
