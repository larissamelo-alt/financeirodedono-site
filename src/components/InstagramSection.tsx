import { Instagram } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import insta1 from "@/assets/insta-1.jpg?url";
import insta2 from "@/assets/insta-2.jpg?url";
import insta3 from "@/assets/insta-3.jpg?url";
import insta4 from "@/assets/insta-4.jpg?url";

const INSTAGRAM_URL = "https://instagram.com/jonny.elias";

const posts = [insta1, insta2, insta3, insta4];

const InstagramSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2">
            Financeiro aplicado na prática
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-gradient-instagram inline-block mb-10"
          >
            @jonny.elias
          </a>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {posts.map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden shadow-card-hover hover:scale-105 transition-transform"
              >
                <img
                  src={src}
                  alt={`Conteúdo Instagram Jonny Elias ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Instagram size={18} />
            Ver todos os conteúdos no Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramSection;
