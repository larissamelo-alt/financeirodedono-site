import ScrollReveal from "./ScrollReveal";
import { HeartPulse, Ruler, Briefcase, Scale, Coffee, Building2 } from "lucide-react";

const segments = [
  { Icon: HeartPulse, title: "Clínicas de saúde", desc: "Agenda cheia mas caixa apertado. O ciclo longo de repasse de convênios desequilibra o capital de giro e trava o crescimento.", tags: ["Convênios", "Capital de giro", "Expansão"] },
  { Icon: Ruler, title: "Arquitetura e engenharia", desc: "Recebimento parcelado por etapa de projeto com despesas fixas que não esperam. Capital de giro zerado mesmo com contratos assinados.", tags: ["Ciclo longo", "Precificação", "Capital de giro"] },
  { Icon: Briefcase, title: "Consultorias", desc: "Receita variável que mascara meses ruins. Sem planejamento, é difícil saber se o negócio é lucrativo ou apenas movimentado.", tags: ["Receita variável", "Reserva", "Margem real"] },
  { Icon: Scale, title: "Escritórios jurídicos", desc: "Excelência no serviço ao cliente, mas o próprio financeiro fica para depois. Crescimento de equipe sem análise de impacto no caixa.", tags: ["Inadimplência", "Pró-labore", "Crescimento"] },
  { Icon: Coffee, title: "Cafeterias e foodservice", desc: "Margem apertada, insumo perecível e fluxo de caixa que muda todo dia. Sem controle diário, o mês fecha no vermelho sem ninguém perceber onde vazou.", tags: ["Margem", "Insumo", "Fluxo diário"] },
  { Icon: Building2, title: "Outros serviços", desc: "Agências, escolas, academias, imobiliárias e outros prestadores de serviço que cresceram mais rápido do que o controle financeiro.", tags: ["Serviços em geral", "PME"] },
];

const SegmentsSection = () => {
  return (
    <section id="segmentos" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
              Especialistas em financeiro para empresas de serviço
            </h2>
            <p className="text-muted-foreground">
              Cada segmento tem suas próprias dores financeiras. Conhecemos as suas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-2xl p-7 border border-border shadow-card-hover h-full hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.Icon className="text-primary" size={22} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-section-alt text-muted-foreground px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
