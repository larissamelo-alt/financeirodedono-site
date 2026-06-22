import { defineCollection, z } from "astro:content";

// Define a "coleção" de conteúdos. Cada artigo é um arquivo .md dentro de
// src/content/conteudos/. Os campos abaixo são o cabeçalho (frontmatter) que
// você preenche no topo de cada artigo. Se faltar um campo obrigatório, o
// build avisa — isso evita publicar artigo quebrado sem querer.
const conteudos = defineCollection({
  type: "content",
  schema: z.object({
    // Título do artigo. Vira o <h1> e o <title> da aba (o que aparece no Google).
    titulo: z.string(),
    // Resumo de 1–2 frases. Vira a meta description (o textinho cinza no Google)
    // e ajuda a IA a entender do que trata a página. Capriche: 120–160 caracteres.
    descricao: z.string(),
    // Data de publicação.
    data: z.coerce.date(),
    // Data da última atualização (opcional). Bom para SEO em conteúdo evergreen.
    atualizadoEm: z.coerce.date().optional(),
    // Autor. Por padrão Jonny, mas dá pra trocar por artigo.
    autor: z.string().default("Jonny Elias"),
    // Categoria principal (ex.: "Fluxo de Caixa", "Gestão", "DRE").
    categoria: z.string().default("Gestão Financeira"),
    // Palavras-chave / temas. Ajuda organização interna e dados estruturados.
    tags: z.array(z.string()).default([]),
    // Imagem de capa (opcional). Caminho a partir de /public, ex.: "/capas/fluxo.png".
    capa: z.string().optional(),
    // Marque true enquanto está escrevendo. Rascunho não aparece no site publicado.
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { conteudos };
