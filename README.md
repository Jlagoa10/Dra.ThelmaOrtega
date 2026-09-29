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

## Trocando os espaços reservados por fotos

A Galeria e a seção Ambiente mostram "Foto em breve" onde ainda não há imagem.

1. Coloque a foto em `src/assets/images/` (JPG, PNG ou WebP; o Next gera AVIF/WebP otimizados sozinho).
2. Em `src/data/content.ts`, importe o arquivo no topo:
   ```ts
   import consultorio from '@/assets/images/consultorio.jpg'
   ```
3. No item correspondente de `gallery` ou `environment`, preencha `image` e `alt`:
   ```ts
   { caption: 'Consultório', image: consultorio, alt: 'Sala de atendimento com maca e plantas' },
   ```
   `position` (opcional) ajusta o enquadramento, por exemplo `'50% 20%'`.

A galeria foi desenhada para 6 fotos. Com mais de 6, as extras entram numa faixa regular abaixo.

## Domínio e SEO

Canonical, sitemap, robots e Open Graph usam a URL pública do site, definida **no momento do build**:

- Na **Vercel**, o domínio de produção do projeto é usado automaticamente.
- Em qualquer outra hospedagem, defina `NEXT_PUBLIC_SITE_URL` antes do build:
  ```bash
  NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br npm run build
  ```

## Publicação

**Vercel (recomendado):** importe o repositório em vercel.com, sem configuração extra.

**Hospedagem estática** (Hostinger, GitHub Pages etc.): adicione `output: 'export'` e `images: { unoptimized: true }` em `next.config.ts` e rode `npm run build`; a pasta `out/` é o site pronto. Nesse modo o Next não otimiza as imagens em tempo real, então vale exportá-las já em WebP.
