# Dra. Thelma Ortega — Site institucional

Site da Dra. Thelma Ortega, Fisioterapia Pós-Operatória | Oncológica | Pós-Parto, em São Bernardo do Campo - SP.

Feito com Next.js 16 (App Router), React 19, TypeScript e CSS Modules. A página é gerada como HTML estático; só o menu, a galeria, o botão de copiar telefone, o botão flutuante do WhatsApp e as animações de entrada rodam no navegador.

## Rodando localmente

Requer Node.js 20.9 ou mais recente.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build
npm run lint
npm run typecheck
```

## Estrutura

```
src/
  app/          layout (fontes, metadata, JSON-LD), página, estilos globais,
                sitemap, robots, ícones e imagem de compartilhamento (Open Graph)
  sections/     uma seção da página por arquivo, cada uma com seu .module.css
  components/   Header, GalleryGrid (galeria + lightbox), WhatsAppFloat,
                CopyPhoneButton, RevealObserver, ButtonLink, Icon, PhotoPlaceholder
  data/         site.ts (telefone, endereço, links) e content.ts (textos e listas)
  lib/          links.ts (URLs de WhatsApp e Maps) e seo.ts (URL do site e Schema.org)
  assets/images imagens usadas no site
```

Telefone, endereço e Instagram ficam só em `src/data/site.ts`. Textos de especialidades, etapas, FAQ e galeria ficam em `src/data/content.ts`.

## Galeria: fotos, capas e v?deos

A galeria exibe tr?s fotos e tr?s v?deos locais. As fotos s?o exibidas diretamente na galeria; os v?deos carregam somente ao clicar na capa.

As fotos novas e as tr?s capas j? est?o em `src/assets/images/gallery/`.
Salve os v?deos MP4 em `public/videos/`, com estes nomes exatos:

| V?deo | Arquivo |
| --- | --- |
| Cirurgia pl?stica | `cirurgia-plastica.mp4` |
| Acompanhamento hospitalar | `acompanhamento-hospitalar.mp4` |
| Benef?cio do laser terap?utico | `laser-terapeutico.mp4` |

Os caminhos j? est?o configurados em `src/data/content.ts`. N?o ? necess?rio alterar c?digo ap?s adicionar os v?deos. Use MP4 com v?deo H.264 e ?udio AAC para compatibilidade com navegadores.

## Publicação na Vercel

O projeto roda como uma aplicação Next.js padrão, sem `vercel.json` e sem export estático.

**Configuração do projeto na Vercel** (Add New → Project → importar `Jlagoa10/Dra.ThelmaOrtega`):

| Campo | Valor |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `./` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | padrão (não preencher) |
| Production Branch | `main` |

Com o repositório conectado, cada push em `main` gera um deploy de produção (endereço `*.vercel.app` do projeto) e cada push em outro branch ou pull request gera um deploy de preview.

**Previews protegidos:** por padrão, a Vercel pode exigir login nos deploys de preview (Settings → Deployment Protection → Vercel Authentication). Para enviar um link de preview à cliente, desative essa proteção para previews ou use o endereço de produção `*.vercel.app`, que é público.

## Variáveis de ambiente

Nenhuma variável é obrigatória. A Vercel já fornece `VERCEL_ENV`, `VERCEL_URL`, `VERCEL_BRANCH_URL` e `VERCEL_PROJECT_PRODUCTION_URL`, usadas para montar canonical, Open Graph, sitemap e Schema.org com o endereço do próprio deploy.

| Variável | Obrigatória | Para que serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Não | Domínio definitivo, com `https://` e sem barra no final. Quando definida, passa a ser a URL oficial do site **e libera a indexação pelos buscadores**. |

Enquanto `NEXT_PUBLIC_SITE_URL` não existir, o site é tratado como preview: envia `noindex` e o `robots.txt` bloqueia rastreadores, para o endereço provisório não competir no Google com o domínio final. Ao configurar o domínio definitivo, cadastre a variável em Settings → Environment Variables (ambiente Production) e faça um novo deploy.
