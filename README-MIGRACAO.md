# Financeiro de Dono — site no Astro (pronto)

Seu site inteiro, reconstruído em Astro, com a área de conteúdos incluída. Já
montei tudo com os seus componentes reais, suas cores de marca e suas imagens —
e testei o build aqui. As 4 páginas geram certo, o texto sai no HTML (Google e
IAs leem) e a home ficou idêntica à de hoje.

## O que mudou (e por que vale)

- **Home:** mesma cara de hoje, mesmos 12 blocos. A diferença invisível: agora o
  texto de cada bloco está no HTML cru. Antes, o robô recebia uma página vazia.
- **Artigos (`/conteudos`):** páginas 100% estáticas, praticamente sem JavaScript
  — o ideal para ranquear e ser citado por IA.
- **SEO/GEO de fábrica:** sitemap automático, `robots.txt`, canonical, Open Graph
  e dados estruturados (schema.org de Organização e Artigo) em todas as páginas.

## O que já está incluído e testado

- Seus 12 blocos da home (`src/components/`), com cores, fontes e imagens reais
- Área de conteúdos: lista em `/conteudos` + molde de artigo + 1 artigo de exemplo
- Suas imagens (foto do Jonny, logo, posts do Instagram) em `src/assets/`
- Suas cores de marca (azul/laranja) em `src/styles/global.css`
- Fonte Inter, favicon e og-image

> Detalhe técnico que já resolvi: no Astro, importar imagem devolve um objeto em
> vez do endereço. Por isso os imports de imagem levam `?url` no final. Não mexa
> nisso — é o que faz a foto e o logo aparecerem.

---

## Passo 1 — Subir no GitHub e publicar no Vercel

1. Crie um repositório novo no GitHub (ou use o atual, substituindo os arquivos).
   Para subir sem terminal: aperte `.` em cima do repositório e abre o editor web
   (github.dev). Arraste os arquivos deste projeto pra lá e dê "commit".
2. No Vercel, conecte esse repositório. Configurações:
   - Framework Preset: Astro
   - Build Command: `astro build`
   - Output Directory: `dist`
3. O Vercel instala e publica sozinho. Depois, aponte o domínio
   financeirodedono.com.br para esse projeto.

> O domínio segue no Registro.br; só muda para qual projeto do Vercel ele aponta.

---

## Passo 2 — Publicar um conteúdo novo (a rotina)

1. Crie um arquivo dentro de `src/content/conteudos/`, ex.: `precificar-procedimento.md`
   (o nome do arquivo vira o endereço: /conteudos/precificar-procedimento)
2. No topo, preencha o cabeçalho (copie do artigo de exemplo
   `fluxo-de-caixa-para-clinicas.md`):

   ---
   titulo: "Seu título"
   descricao: "Resumo de 1-2 frases. Aparece no Google. 120-160 caracteres."
   data: 2026-06-22
   categoria: "Fluxo de Caixa"
   tags: ["precificação", "clínicas"]
   rascunho: false
   ---

3. Escreva abaixo do cabeçalho. `##` faz título de seção, `**texto**` faz negrito.
4. Commit no GitHub. O Vercel publica em segundos.

Enquanto escreve, deixe `rascunho: true` (não aparece no site). Ao terminar,
troque para `false`. Pode escrever o artigo comigo e só colar o arquivo pronto.

---

## Dica para ser achado e citado

- Pense o `titulo` e a `descricao` como a pergunta real que o dono de clínica
  digitaria. Conteúdo que responde pergunta é o que IA cita.
- Material rico (planilha, e-book) deve vir com uma página de texto explicando,
  não só o arquivo pra download. O texto é o que ranqueia.

## Estrutura do projeto

    src/
    ├── components/        seus 12 blocos da home (.tsx)
    ├── assets/            suas imagens
    ├── content/conteudos/ seus artigos (.md) ← você cria aqui
    ├── layouts/           cabeçalho, SEO e schema
    ├── pages/
    │   ├── index.astro            a home
    │   ├── conteudos/index.astro  a lista de conteúdos
    │   └── conteudos/[slug].astro o molde de cada artigo
    └── styles/global.css  suas cores de marca
