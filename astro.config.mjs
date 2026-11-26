import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Domínio final do site. É usado para gerar sitemap, canonical e URLs absolutas (importante para SEO e para IAs).
  site: "https://www.financeirodedono.com.br",
  integrations: [
    react(),
    // applyBaseStyles: false porque o seu reset/base vem do global.css (shadcn). Evita conflito.
    tailwind({ applyBaseStyles: false }),
    // A aula gravada é servida por rewrite (vercel.json), então entra no sitemap à mão.
    sitemap({
      customPages: ["https://www.financeirodedono.com.br/conteudos/aula-planejamento-2027"],
    }),
  ],
});
