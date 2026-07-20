import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Artigo {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: string;
  dataFormatada: string;
  capa?: string;
}

interface Props {
  artigos: Artigo[];
}

const ContentPreviewSection = ({ artigos }: Props) => {
  if (artigos.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2">
                Financeiro aplicado, sem enrolação
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Conteúdo real sobre decisão financeira para dono de empresa de serviço. Sem fórmula mágica, sem venda disfarçada.
              </p>
            </div>
            <a
              href="/conteudos"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all flex-shrink-0"
            >
              Ver todos os conteúdos
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {artigos.map((a, i) => (
            <ScrollReveal key={a.slug} delay={i * 100}>
              <a
                href={`/conteudos/${a.slug}`}
                className="flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-card-hover transition-all"
              >
                <div className="aspect-video w-full bg-dark flex items-center justify-center">
                  {a.capa ? (
                    <img src={a.capa} alt={a.titulo} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/50">
                      {a.categoria}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{a.categoria}</p>
                  <h3 className="font-bold text-foreground leading-snug mb-2">{a.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.descricao}</p>
                  <p className="text-xs text-muted-foreground mt-4">{a.dataFormatada}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPreviewSection;
