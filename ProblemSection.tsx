import { MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const faqs = [
  { q: "O Financeiro de Dono substitui o contador?", a: "Não. São serviços complementares. O contador cuida das obrigações fiscais e tributárias. Nós cuidamos da gestão financeira gerencial: fluxo de caixa, indicadores, planejamento e apoio nas decisões do dia a dia. Na prática, quem tem o Financeiro de Dono costuma ter um relacionamento melhor com o próprio contador, porque as informações chegam mais organizadas." },
  { q: "Quanto custa o Financeiro de Dono?", a: "Não trabalhamos com plano fixo. O escopo é definido depois do diagnóstico gratuito, de acordo com o tamanho e a complexidade da sua operação. Cada empresa de serviço tem uma estrutura financeira diferente, e o investimento reflete isso." },
  { q: "O que é BPO Financeiro?", a: "É a terceirização da rotina financeira da empresa: conciliação bancária, contas a pagar e a receber, fluxo de caixa, relatórios. Em vez de você ou alguém do seu time cuidar disso no meio de outras funções, uma equipe especializada assume e devolve os dados prontos pra decisão." },
  { q: "Quem vai cuidar do financeiro da minha empresa?", a: "Você terá um Gerente de Sucesso dedicado para acompanhar sua empresa diariamente. Jonny Elias participa diretamente dos planos Estratégico e CFO de Dono." },
  { q: "Como funciona o diagnóstico gratuito?", a: "É uma conversa de 30 minutos por vídeo com um dos nossos especialistas. Analisamos caixa, capital de giro e a situação financeira atual do seu negócio. Você sai com uma análise documentada, sem custo e sem compromisso de contratação." },
  { q: "Vocês fazem pagamentos pela empresa?", a: "Nós operacionalizamos todos os lançamentos com um usuário operador, assim cuidamos do trabalho massivo para que a empresa possa conferir e aprovar as operações. Todos os pagamentos acontecem apenas com a aprovação prévia do dono ou responsável da empresa. As decisões e autorizações finais sempre ficam com você." },
  { q: "Em quanto tempo começo a ver resultado?", a: "A organização básica costuma acontecer nos primeiros 30 dias. Previsibilidade real e tomada de decisão com dados geralmente aparecem entre o segundo e o terceiro mês, dependendo da complexidade da operação." },
  { q: "Funciona para empresa pequena?", a: "Sim. Atendemos empresas de serviço de pequeno e médio porte. Quanto antes o financeiro for organizado, menor o risco de crescer sobre uma base frágil." },
  { q: "Como sei se o Financeiro de Dono é pra mim?", a: "Se você fatura todo mês mas não sabe exatamente pra onde o dinheiro vai, se toma decisão de contratar ou investir no impulso, ou se o financeiro consome um tempo que devia ser seu negócio, então sim, é pra você. O diagnóstico gratuito confirma isso em 30 minutos, sem compromisso." },
];

// Dados estruturados de FAQ (schema.org). Ajuda o Google e IAs a citar a
// resposta certa direto na busca, sem precisar abrir o site.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-section-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3 text-center">
            Perguntas frequentes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <p className="text-muted-foreground mb-10 leading-relaxed text-center">
            Ainda tem dúvidas? Fale diretamente com a nossa equipe. Sem compromisso.
          </p>
        </ScrollReveal>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-bold text-sm hover:brightness-110 shadow-accent-hover transition-all"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
