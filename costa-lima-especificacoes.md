# Costa Lima Advocacia — Especificações Completas do Site

> **Versão:** 1.0  
> **Data:** Fevereiro 2026   
> **Tecnologia:** HTML5 + CSS3 + JavaScript Vanilla — arquivo único, sem dependências externas (exceto Google Fonts)

---

## 1. IDENTIDADE E MARCA

### Nome do Escritório
**Costa Lima Advocacia**  
Fundadora: Dra. Sarah Lima Costa — OAB-MT · Cáceres, Mato Grosso

### Tagline
> "Segurança jurídica para proteger seu patrimônio imobiliário em Cáceres Mato Grosso"

### Áreas de Atuação
- Direito Imobiliário (principal)
- Usucapião e Registro de Imóveis
- Direito Previdenciário

---

## 2. SEO E META DADOS

```html
<title>Costa Lima Advocacia – Direito Imobiliário e Previdenciário em Cáceres</title>

<meta name="description"
  content="Escritório especializado em direito imobiliário e previdenciário  em Cáceres. Consultoria, regularização de imóveis, usucapião e planejamento
  previdenciário com atendimento humano e seguro."/>

<meta name="keywords"
  content="direito imobiliário, regularização de imóveis, usucapião,
  advogado em Cáceres, advocacia previdenciária, assessoria imobiliária,
  Cáceres MT"/>
```

### Palavras-chave Principais (incorporar em H1, H2 e primeiras linhas)
| Keyword | Uso |
|---|---|
| `direito imobiliário` | H1 hero, títulos de serviço, footer |
| `regularização de imóveis` | Hero sub, card serviço 1, blog |
| `usucapião` | Card serviço 2, blog, footer |
| `advogado em Cáceres` | Eyebrow hero, CTA final, footer |
| `assessoria imobiliária` | Subtítulo hero, serviços, alerta |
| `advocacia previdenciária` | Card serviço 4, FAQ |

---

## 3. PALETA DE CORES

```css
:root {
  --accent:       #874915;   /* Terracota — ação: botões, destaques, ícones ✦ */
  --accent-hover: #6B3A10;   /* Terracota escuro — hover de botões */
  --support:      #8D6E59;   /* Marrom médio — eyebrows, legendas, bordas */
  --bege:         #BDB5AB;   /* Bege médio — texto secundário, divisores */
  --areia:        #E1DDD4;   /* Areia clara — fundos alternados, cards */
  --grafite:      #373737;   /* Grafite escuro — texto principal, fundo alerta */
  --bg:           #D9D9D9;   /* Branco — fundo padrão light */
  --bg-soft:      #F5F2EE;   /* Off-white — fundos de seção alternada */
  --bg-alt:       #E1DDD4;   /* Areia — depoimentos, variação de fundo */
  --text:         #373737;   /* Texto principal */
  --text-mid:     #5A4A3A;   /* Texto intermediário */
  --text-muted:   #8D6E59;   /* Texto secundário/muted */
  --line:         rgba(141,110,89,0.2); /* Bordas e divisores */
}
```

### Hierarquia de uso
- **Fundo padrão:** `#D9D9D9` e `#F5F2EE` alternados por seção
- **Único fundo escuro:** Seção `#alerta` usa `var(--grafite)` para criar contraste de ritmo visual
- **CTA final:** Fundo `var(--accent)` — máximo destaque para conversão
- **Botão primário:** Sempre `var(--accent)` com cor branca no texto
- **Elementos decorativos ✦:** `var(--accent)` em tamanho reduzido (`0.42–0.55rem`)

---

## 4. TIPOGRAFIA

### Fontes (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:
ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&
family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
```

| Fonte | Papel | Peso usado |
|---|---|---|
| **Cormorant Garamond** | Títulos, H1, H2, logo, números decorativos, citações | 300, 400, 500, 600 — italic disponível |
| **Outfit** | Corpo, botões, labels, navegação, formulários | 300, 400, 500, 600 |

### Escala Tipográfica
| Elemento | Tamanho | Fonte | Notas |
|---|---|---|---|
| H1 Hero | `clamp(2.6rem, 4.2vw, 4.2rem)` | Cormorant | weight 400, line-height 1.1 |
| H2 Seção | `clamp(1.9rem, 3vw, 2.8rem)` | Cormorant | weight 400 |
| H2 Sobre | `clamp(1.8rem, 2.8vw, 2.8rem)` | Cormorant | weight 400 |
| H3 Card título | `1.35rem` | Cormorant | weight 600 |
| Eyebrow | `0.7rem` | Outfit | uppercase, letter-spacing 0.22em |
| Corpo texto | `0.92–0.95rem` | Outfit | line-height 1.85 |
| Botão | `0.78–0.84rem` | Outfit | uppercase, letter-spacing 0.1em |
| Label/caption | `0.7–0.76rem` | Outfit | uppercase, letter-spacing variado |
| Citação depoimento | `1.05rem` | Cormorant | italic |
| Números decorativos (passos) | `3rem` | Cormorant | weight 300, opacidade 10% |
| Monograma placeholder | `clamp(10rem, 16vw, 18rem)` | Cormorant | weight 300, opacidade 10% |

---

## 5. EFEITOS VISUAIS E ANIMAÇÕES

### 5.1 — Header Transparente + Glassmorphism no Scroll

**Estado inicial (topo da página):**
- Background: `transparent`
- Sem sombra, sem blur
- Logo e links visíveis sobre qualquer fundo

**Estado ao rolar (`.scrolled`):**
```css
nav.scrolled {
  background: rgba(255, 255, 255, 0.97);   /* branco semi-opaco */
  backdrop-filter: blur(12px);             /* glassmorphism */
  -webkit-backdrop-filter: blur(12px);     /* Safari support */
  box-shadow: 0 1px 0 rgba(141,110,89,0.2);
  padding: 0.9rem 5vw;                     /* comprime verticalmente */
}
```

**Trigger JavaScript:**
```js
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () =>
  nav.classList.toggle('scrolled', window.scrollY > 60)
);
```

**Transição:**
```css
nav {
  transition: background 0.4s ease, padding 0.3s ease, box-shadow 0.3s ease;
}
```

---

### 5.2 — Smooth Scroll Pesado (Parallax Lento)

**Implementação via CSS + JS:**

```css
html {
  scroll-behavior: smooth;
}
```

**Efeito pesado (inércia) nas primeiras 4 seções com imagem de fundo:**
```js
// Parallax nas seções com background-image
const parallaxSections = document.querySelectorAll('.has-parallax');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    const offset = rect.top + scrollY;
    const relY = (scrollY - offset) * 0.35; // fator de lentidão
    sec.style.backgroundPositionY = `calc(50% + ${relY}px)`;
  });
});
```

**CSS nas seções parallax:**
```css
.has-parallax {
  background-attachment: fixed;       /* parallax nativo CSS */
  background-size: cover;
  background-position: center 50%;
  will-change: background-position;  /* otimização GPU */
}
```

> **Nota mobile:** `background-attachment: fixed` não funciona em iOS. Usar fallback com JS para detectar e substituir por `scroll`.

---

### 5.3 — Cards com Animation on Scroll (Reveal)

**Classe base:**
```css
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Variações com delay (staggered cards):**
```html
<!-- Aplicar inline ou via classe -->
<div class="s-card reveal" style="transition-delay: 0s">...</div>
<div class="s-card reveal" style="transition-delay: 0.08s">...</div>
<div class="s-card reveal" style="transition-delay: 0.14s">...</div>
<div class="s-card reveal" style="transition-delay: 0.2s">...</div>
```

**IntersectionObserver:**
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

**Elementos que recebem `.reveal`:**
- Hero content (`.hero-left`)
- Seção Quem Somos — texto e visual independentes
- Header de seções (`.servicos-header`, `.processo-header`, `.blog-header`)
- Todos os cards de serviços
- Grid de passos do processo
- Seção Sobre
- Cards de depoimentos (com delay escalonado: 0s, 0.1s, 0.2s)
- Cards de blog (com delay escalonado)
- Newsletter box
- FAQ (coluna esquerda e coluna direita separadas)
- Contato (coluna info e formulário com delay 0.15s)
- CTA final

---

### 5.4 — Logo com SVG Animation

**Implementação recomendada:**
```html
<a href="#hero" class="logo" id="site-logo">
  <svg viewBox="0 0 120 32" class="logo-svg" aria-label="Costa Lima Advocacia">
    <!-- Letra C -->
    <path class="logo-path logo-c"
      d="M18 6C11.4 6 6 11.4 6 18s5.4 12 12 12c3.8 0 7.2-1.8 9.4-4.6"
      fill="none" stroke="#874915" stroke-width="2" stroke-linecap="round"/>
    <!-- Letra L -->
    <path class="logo-path logo-l"
      d="M32 6v24h16"
      fill="none" stroke="#374747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Texto wordmark -->
    <text x="56" y="22" class="logo-text-main"
      font-family="Cormorant Garamond, serif"
      font-size="13" fill="#874915" letter-spacing="2">COSTA</text>
    <text x="56" y="34" class="logo-text-sub"
      font-family="Cormorant Garamond, serif"
      font-size="13" fill="#373737" letter-spacing="2">LIMA</text>
  </svg>
</a>
```

**CSS da animação SVG:**
```css
/* Animação de desenho do traço (stroke draw) */
.logo-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-logo 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.logo-c { animation-delay: 0s; }
.logo-l { animation-delay: 0.3s; }

@keyframes draw-logo {
  from { stroke-dashoffset: 200; opacity: 0.4; }
  to   { stroke-dashoffset: 0;   opacity: 1; }
}

/* Fade-in do texto wordmark */
.logo-text-main,
.logo-text-sub {
  opacity: 0;
  animation: fade-in-text 0.6s ease forwards;
}

.logo-text-main { animation-delay: 0.9s; }
.logo-text-sub  { animation-delay: 1.1s; }

@keyframes fade-in-text {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hover: pulso sutil */
.site-logo:hover .logo-path {
  filter: drop-shadow(0 0 6px rgba(135,73,21,0.4));
  transition: filter 0.3s ease;
}
```

> **Alternativa simples (sem SVG customizado):** Usar o logo textual atual com uma animação de clip-path ou opacity no load de página.

---

## 6. ESTRUTURA DE SEÇÕES

### Ordem da Página
```
01. NAV (fixo, transparente → glassmorphism)
02. HERO (imagem de fundo #1)
03. QUEM SOMOS (imagem de fundo #2)
04. ALERTA / DADO CHOCANTE (imagem de fundo #3 — fundo escuro/grafite)
05. SERVIÇOS (imagem de fundo #4)
06. PROCESSO — 4 passos
07. SOBRE / EQUIPE (split: foto esquerda, conteúdo direita)
08. PARCEIRA (card horizontal)
09. DEPOIMENTOS
10. BLOG + NEWSLETTER
11. FAQ
12. CONTATO (info + formulário)
13. CTA FINAL
14. FOOTER
15. BOTÃO WHATSAPP FLUTUANTE
```

---

## 7. DETALHAMENTO DAS SEÇÕES

---

### 7.1 — NAV

**Estrutura:**
- Logo (texto ou SVG animado) — esquerda
- Links de navegação — centro
- Botão CTA "Agendar Consulta" — direita
- Ícone hambúrguer — mobile only

**Links de navegação:**
- Sobre → `#quem`
- Serviços → `#servicos`
- Como Trabalhamos → `#processo`
- Blog → `#blog`
- Contato → `#contato`

**CTA Nav:** "Agendar Consulta" → WhatsApp

**Mobile:** Menu fullscreen com links em Cormorant Garamond 1.8rem, botão fechar `✕` no canto superior direito.

---

### 7.2 — HERO (Imagem de Fundo #1)

**Layout:** Grid 2 colunas — conteúdo esquerda + foto direita

**Copy:**
- **Eyebrow:** `Advogado em Cáceres · Direito Imobiliário e Previdenciário`
- **H1:** `Segurança jurídica para proteger seu patrimônio imobiliário`
- **H1 em itálico (destaque):** `patrimônio imobiliário`
- **Subtítulo:** `Especialistas em regularização de imóveis, compra e venda e planejamento previdenciário — atendimento personalizado e transparente.`
- **CTA primário:** `Agende uma consulta via WhatsApp →`
- **CTA secundário:** `Conheça nossos serviços`

**Trust bar (números abaixo dos CTAs):**
| Número | Label |
|---|---|
| +8 | Anos de experiência |
| 2 | Pós-graduações |
| 100% | Foco em resultado |
| MT | Cáceres e região |

**Foto direita:** Placeholder `CL` em Cormorant 300 weight, opacidade 10% terracota. Substituir por `<img src="sarah.jpg" class="hero-photo-img">`.

**Badge flutuante sobre foto:**
```
Especialidade
Pós-graduada em Direito Imobiliário e Notarial — ESA · OAB-MT
```
Posição: `bottom: 2.5rem; left: 2rem`

**Imagem de fundo sugerida:** Fotografia de escritório jurídico claro, escrivaninha com documentos, luz natural. Gradiente overlay da esquerda para direita para não comprometer legibilidade do texto.

---

### 7.3 — QUEM SOMOS (Imagem de Fundo #2)

**Layout:** Grid 2 colunas — texto esquerda + imagem direita

**H2:** `O escritório que une especialização técnica e atendimento humano`

**Texto corpo:**
> O Costa Lima Advocacia nasceu para oferecer soluções jurídicas claras e seguras nas áreas imobiliária e previdenciária. Liderado pela Dra. Sarah Lima Costa, o escritório alia especialização técnica e atendimento humano para proteger o patrimônio e a tranquilidade de famílias e investidores.

**Grid de valores (2×2):**
| Ícone | Label | Descrição |
|---|---|---|
| 🤝 | Transparência | Comunicação clara em cada etapa, sem surpresas ou jargões. |
| ⚡ | Agilidade | Prazos estimados e acompanhamento ativo até a conclusão. |
| 🎓 | Especialização | Pós-graduação e foco em Direito Imobiliário e Previdenciário. |
| 💬 | Atendimento humano | Escuta ativa, respostas objetivas e proximidade com o cliente. |

**Imagem direita (aspect-ratio 4/5):** Placeholder `CL`. Substituir por foto do escritório ou da advogada.

**Badge stat (terracota, canto inferior direito da imagem):**
```
Cáceres
Mato Grosso · OAB-MT
```

**Imagem de fundo da seção:** Textura sutil neutra (pergaminho, mármore branco, papel artesanal). Opacity baixa para não disputar com o conteúdo.

---

### 7.4 — ALERTA (Imagem de Fundo #3)

**Background:** `var(--grafite)` `#373737` — único fundo escuro antes do CTA final
**Efeito radial:** `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(135,73,21,0.18) 0%, transparent 70%)`

**Copy:**
- **H2:** `Você sabia que imóveis irregulares podem ser contestados, bloqueados ou perdidos — mesmo com "documento em mãos"?`
- **Texto 1:** `Documentos desatualizados, escrituras sem registro e imóveis sem matrícula são muito mais comuns do que parece no interior do Mato Grosso. Sem análise jurídica adequada, você corre riscos que não consegue ver.`
- **Texto 2:** `A assessoria imobiliária especializada transforma uma falsa sensação de segurança em proteção real e documentada para o seu patrimônio.`
- **Fonte:** `Realidade verificada na prática de advocacia imobiliária em Cáceres-MT e região.`
- **CTA:** `Quero analisar meu imóvel →` (botão areia `#E1DDD4`)

**Imagem de fundo:** Textura de documentação jurídica, mapa de propriedade, ou fotografia aérea de propriedade rural — com overlay escuro `rgba(55,55,55,0.88)` para manter o fundo grafite.

---

### 7.5 — SERVIÇOS (Imagem de Fundo #4)

**Background base:** `var(--bg-soft)` `#F5F2EE`

**Header da seção (grid 2 col):**
- **Eyebrow:** `Nossas áreas de atuação`
- **H2:** `Soluções jurídicas com foco em resultados práticos`
- **Intro:** `Atuamos com foco em resultados práticos: avaliamos documentos, traçamos estratégias e acompanhamos todo o processo até a solução.`

**Grid de cards (2×2):**

#### Card 1 — Destaque (borda superior terracota 3px)
- **Tag:** `Serviço em destaque`
- **Ícone:** 🏠
- **Título:** `Regularização e assessoria imobiliária`
- **Texto:** Compra e venda (urbano e rural), análise documental, due diligence, regularização por usucapião, doação e inventário. Garantimos segurança jurídica para seus negócios e investimentos em Cáceres e todo o MT.
- **Subtópicos (expandíveis):** Análise documental · Assessoria compra e venda · Regularização de escrituras e matrículas · Usucapião extrajudicial e judicial · Doação e transmissão em vida · Inventário judicial e extrajudicial

#### Card 2
- **Ícone:** 📜
- **Título:** `Usucapião e registro de imóveis`
- **Texto:** Acompanhamento completo do procedimento extrajudicial e judicial para regularização de imóveis, com foco em agilidade e redução de custos. Especialistas em usucapião no Mato Grosso.
- **Subtópicos:** Usucapião extrajudicial (cartório) · Usucapião judicial · Levantamento documental · Regularização fundiária rural e urbana · Averbação e atualização de matrícula

#### Card 3
- **Ícone:** ⚖️
- **Título:** `Execução e cobrança de dívidas`
- **Texto:** Ações de execução de títulos extrajudiciais e judiciais, negociações, mediação e conciliação para recuperação de créditos e resolução eficiente de conflitos imobiliários.
- **Subtópicos:** Execução de título extrajudicial · Ações de cobrança judicial · Mediação e conciliação · Estratégias de recuperação de crédito · Acompanhamento até recebimento

#### Card 4
- **Ícone:** 📋
- **Título:** `Previdenciário: aposentadorias e benefícios`
- **Texto:** Aposentadorias rural e urbana, auxílio-doença, benefícios assistenciais e planejamento previdenciário. Orientação prática e defesa dos seus direitos no INSS.
- **Subtópicos:** Aposentadoria rural e comprovação · Aposentadoria por tempo de contribuição · Auxílio-doença e incapacidade · Benefício assistencial LOAS/BPC · Planejamento previdenciário personalizado

**Comportamento dos cards:**
- Hover: `translateY(-3px)` + `box-shadow: 0 12px 40px rgba(135,73,21,0.1)`
- Botão "Ver mais" → expande painel com subtópicos via `max-height` transition (0 → 400px)
- Seta rota 180° quando expandido
- Apenas 1 card expandido por vez

**Imagem de fundo:** Textura arquitetônica, papel levemente texturizado, ou vista aérea de Cáceres com overlay claro `rgba(245,242,238,0.94)`.

---

### 7.6 — PROCESSO — 4 Passos

**Background:** `#FFFFFF`
**Layout:** Header 2 colunas + grid horizontal 4 colunas em card com bordas

**H2:** `Nosso processo em 4 passos`

**Passos:**
| Nº | Título | Descrição |
|---|---|---|
| 01 | Consulta inicial e coleta de documentos | Entendemos o caso, recebemos a documentação disponível e identificamos as primeiras questões relevantes. |
| 02 | Diagnóstico e plano de ação | Análise técnica completa, identificação de riscos e pendências. Proposta de atuação clara com prazos e estimativa de custos. |
| 03 | Acompanhamento processual | Condução junto a cartórios, tribunais e órgãos competentes. Atualizações regulares e canal direto de comunicação. |
| 04 | Entrega e orientações finais | Conclusão do processo com entrega dos documentos e orientações preventivas para proteger seu patrimônio. |

**Nota inferior (borda esquerda terracota):**
> Análise personalizada · Plano de ação claro · Acompanhamento integral · Comunicação direta

**CTA:** `Solicitar avaliação gratuita →` (centralizado)

---

### 7.7 — SOBRE / EQUIPE

**Layout:** Split fullscreen — foto esquerda (50%) + conteúdo direita (50%)
**Min-height:** `80vh`

**Copy:**
- **Eyebrow:** `Nossa equipe`
- **H2:** `Fundadora e especialista — Dra. Sarah Lima Costa`
- **Texto 1:** Advogada especialista em Direito Imobiliário e Notarial, com foco em regularização de imóveis, assessoria imobiliária e planejamento patrimonial em Cáceres e todo o Mato Grosso.
- **Texto 2:** Pós-graduada em Direito Imobiliário e Contratos, fundou o escritório Costa Lima com o propósito de oferecer atendimento técnico e humano, orientando clientes com clareza e agilidade.

**Diferenciais (✦):**
1. Especialização profunda em Direito Imobiliário e Notarial pela ESA
2. Atendimento personalizado, sem jargões — cada etapa explicada com clareza
3. Acompanhamento contínuo, do diagnóstico até a solução final

**Formação (✦):**
- Pós-graduada em Direito Imobiliário e Notarial — ESA
- Especialização em Contratos — foco em Direito Imobiliário
- OAB-MT · Cáceres, Mato Grosso

**CTA:** `Ver perfil completo →` (btn-outline)

**Foto:** Placeholder `CL`. Substituir por:
```html
<img src="sarah.jpg" class="sobre-photo-img"
  alt="Dra. Sarah Lima Costa — advogada imobiliária Cáceres">
```

---

### 7.8 — PARCEIRA

**Background:** `#FFFFFF`
**Layout:** Card horizontal (avatar + nome + especialidade)

**Card:**
- Avatar circular inicial `P`
- Nome: `Parceira do Escritório`
- Cargo: `Especialidade · Advocacia`
- Nota: *(dados a confirmar — enviar logo, nome e especialidade)*

> ⚠️ **Pendente:** Enviar dados completos da parceira (nome, OAB, especialidade, foto/logo).

---

### 7.9 — DEPOIMENTOS

**Background:** `var(--bg-alt)` `#E1DDD4`
**Layout:** Grid 3 colunas

**H2:** `O que nossos clientes dizem`

**Depoimentos:**
1. *"O Costa Lima regularizou meu imóvel com rapidez e clareza. Atendimento humano e muito profissional."* — João S., investidor · Cáceres-MT
2. *"Achei que meu imóvel estava regularizado. A Dra. Sarah encontrou uma pendência que teria inviabilizado minha venda. Me salvou de um prejuízo enorme."* — Empresário · Cáceres-MT
3. *"Fui orientada a organizar meu patrimônio. Hoje tenho paz de saber que meus filhos não terão dor de cabeça no futuro."* — Proprietária · região de Cáceres

**CTA envio:** `Foi cliente? Envie seu depoimento →` (link para e-mail)

---

### 7.10 — BLOG

**Background:** `#FFFFFF`
**Layout:** Header 2 col + Grid 3 cards + Newsletter

**H2:** `Conteúdo para decisões mais seguras`
**Intro:** Conteúdos práticos sobre regularização de imóveis, usucapião, planejamento patrimonial e dúvidas previdenciárias.

**Artigos (placeholders):**
| Tag | Título |
|---|---|
| Direito Imobiliário | Imóvel sem matrícula em Cáceres-MT: o que fazer e como regularizar |
| Usucapião | Usucapião extrajudicial: quando usar e como funciona no MT |
| Previdenciário | Aposentadoria rural: quem tem direito e como comprovar |

**Newsletter:**
- **H3:** `Receba artigos e orientações jurídicas no seu e-mail`
- **Texto:** Publicamos conteúdo prático sobre regularização de imóveis, assessoria imobiliária e direitos previdenciários. Sem spam — apenas conteúdo útil.
- **Campos:** Nome + E-mail
- **Botão:** `Assinar newsletter →`
- **Privacidade:** `Seus dados são tratados com privacidade. Cancele a qualquer momento.`

---

### 7.11 — FAQ

**Background:** `var(--bg-soft)` `#F5F2EE`
**Layout:** Grid 2 colunas — intro esquerda (1fr) + acordeão direita (1.5fr)

**H2:** `Dúvidas que todo cliente tem.`

**Perguntas e respostas:**
| Pergunta | Resposta resumida |
|---|---|
| Como começo a regularizar meu imóvel? | Envie a documentação. Diagnóstico inicial gratuito, plano com prazos e custos estimados. |
| Ter escritura garante que o imóvel está regular? | Não. Escrituras antigas podem estar desatualizadas ou sem registro. Apenas análise completa garante segurança. |
| É caro regularizar um imóvel? | Custo é fração do que pode ser perdido. Estimativas claras após análise — sem compromisso. |
| Posso contratar antes de fechar um negócio? | Sim — momento ideal. Análise prévia evita adquirir problemas junto com o bem. |
| Atendem imóveis rurais no Mato Grosso? | Sim. Urbanos e rurais em Cáceres e região — propriedades agrícolas, pastagens, loteamentos. |
| Como funciona o pedido de aposentadoria rural? | Exige comprovação de atividade rural. Análise da documentação e condução junto ao INSS. |

**Comportamento acordeão:**
- Ícone `+` rota 45° para virar `×` quando aberto
- Apenas 1 item aberto por vez
- `max-height` transition: 0 → 280px

---

### 7.12 — CONTATO

**Background:** `#FFFFFF`
**Layout:** Grid 2 colunas — info esquerda + formulário direita

**H2:** `Agende uma consulta sem compromisso`
**Texto:** Atendimento presencial em Cáceres e remoto para clientes de outras regiões.

**Detalhes de contato:**
| Ícone | Label | Valor |
|---|---|---|
| 📱 | WhatsApp | (65) 1234-5678 |
| ✉️ | E-mail | contato@costalima.com.br |
| 📍 | Endereço | Cáceres, Mato Grosso — MT *(endereço a confirmar)* |
| 🕐 | Horário | Seg–Sex: 8h–18h · Sáb: 8h–12h |

**Botões de ação:** WhatsApp (primário) + Enviar e-mail (outline)

**Redes Sociais:** Instagram · LinkedIn · YouTube *(URLs a confirmar)*

**Formulário:**
- Nome * (required)
- Telefone * (required)
- E-mail * (required)
- Serviço de interesse (select): Regularização de Imóveis · Usucapião · Compra e Venda · Inventário · Execução e Cobrança · Aposentadoria Rural ou Urbana · Benefícios Previdenciários (INSS) · Outro
- Mensagem (textarea)
- **Botão:** `Enviar mensagem →`
- **Nota:** `Respondemos em até 1 dia útil`
- **Privacidade:** `Seus dados são protegidos e utilizados apenas para retorno de contato.`

---

### 7.13 — CTA FINAL

**Background:** `var(--accent)` `#874915`
**Efeito radial:** `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,0,0,0.1) 0%, transparent 70%)`

**Copy:**
- **Eyebrow:** `Advogado em Cáceres · Assessoria Imobiliária`
- **H2:** `Pronto para proteger o que é seu?`
- **Texto:** Atendimento humano, transparente e especializado em direito imobiliário e previdenciário. Sem juridiquês, sem enrolação. O primeiro passo é mais simples do que parece.
- **CTA primário:** `Agende via WhatsApp →` (botão branco, texto terracota)
- **CTA secundário:** `Enviar mensagem` (ghost border branco)
- **Info rodapé:** `Costa Lima Advocacia · Regularização de Imóveis · Usucapião · Cáceres-MT · OAB-MT`

---

### 7.14 — FOOTER

**Background:** `var(--grafite)` `#373737`

**Grid 4 colunas:**

| Coluna | Conteúdo |
|---|---|
| Marca | Logo + Descrição + Redes sociais |
| Navegação | Início · Sobre · Serviços · Como Trabalhamos · Blog · Contato |
| Serviços | Regularização · Usucapião · Compra e Venda · Inventário · Execução · Previdenciário |
| Contato | Telefone · E-mail · Endereço · Horário |

**Rodapé:**
- `© 2026 Costa Lima Advocacia. Todos os direitos reservados.`
- `OAB-MT · Cáceres-MT · Direito Imobiliário · Regularização de Imóveis · Usucapião`

---

### 7.15 — BOTÃO WHATSAPP FLUTUANTE

**Posição:** `fixed; bottom: 2rem; right: 2rem; z-index: 600`
**Cor:** `#25D366` (verde WhatsApp)
**Tamanho:** `3.2rem × 3.2rem`, border-radius `50%`
**Sombra:** `box-shadow: 0 4px 20px rgba(37,211,102,0.4)`
**Hover:** `scale(1.1)` + sombra mais intensa
**Ícone:** SVG oficial do WhatsApp (fill white)
**Link:** `https://wa.me/556512345678`

---

## 8. ESPECIFICAÇÕES DE LAYOUT

### Breakpoints Responsivos
| Ponto | Largura | Mudanças |
|---|---|---|
| Desktop | > 960px | Layout completo |
| Tablet/Mobile | ≤ 960px | Nav hambúrguer, grids 1 coluna, hero empilhado |
| Mobile S | ≤ 600px | Passos 1 coluna, footer 1 coluna, newsletter vertical |

### Espaçamentos de Seção
- **Padding vertical padrão:** `7rem 5vw`
- **Padding CTA final:** `8rem 5vw`
- **Padding processo/parceira:** `7rem 5vw` / `4rem 5vw`

### Max-widths
- **Conteúdo de seção:** `max-width: 72rem; margin: 0 auto`
- **CTA final / alerta:** `max-width: 52rem` (mais estreito, centrado)
- **CTA (texto):** `max-width: 44rem`

### Bordas e Separadores
- **Divisor de seção:** `border-top: 1px solid rgba(141,110,89,0.2)`
- **Card hover shadow:** `box-shadow: 0 10–12px 40px rgba(135,73,21,0.1)`
- **Border-radius cards:** `4–6px`
- **Border-radius botões:** `2px` (quase reto, estética clássica)

---

## 9. COMPONENTES INTERATIVOS

### 9.1 Botões

| Variante | Background | Texto | Uso |
|---|---|---|---|
| `.btn-primary` | `#874915` | `#fff` | CTAs principais |
| `.btn-outline` | Transparente | `#373737` | CTAs secundários |
| `.btn-areia` | `#E1DDD4` | `#373737` | CTAs em fundo escuro |
| `.btn-ghost-dark` | Transparente | `#fff` | CTAs no CTA final |
| `.cta-btn-white` | `#fff` | `#874915` | CTA final (principal) |

### 9.2 Cards de Serviços (Expandíveis)
```
Estado normal: header + footer com "Ver mais ∨"
Estado expandido: + painel com bullets, seta ∨ rota 180°
Apenas 1 expandido por vez (fechar o anterior ao abrir novo)
```

### 9.3 Acordeão FAQ
```
Ícone + → × (rotação 45°)
max-height: 0 → 280px (transition 0.4s ease)
1 item aberto por vez
```

### 9.4 Formulário de Contato
```
Feedback visual: botão vira "✓ Mensagem enviada!" em verde
Reset automático após 4 segundos
Sem backend neste protótipo — conectar ao serviço de formulário (FormSubmit, Formspree, etc.)
```

### 9.5 Newsletter
```
Feedback visual: botão vira "✓ Inscrito com sucesso!"
Reset após 3.5 segundos
Conectar a Mailchimp, ConvertKit, ou serviço de e-mail marketing
```

---

## 10. IMAGENS DE FUNDO — ESPECIFICAÇÕES

### As 4 Seções com Imagem de Fundo

| Seção | ID | Sugestão de imagem | Overlay |
|---|---|---|---|
| Hero | `#hero` | Escritório jurídico com luz natural, escrivaninha, documentos | Gradiente esquerda→direita: `rgba(255,255,255,0.9)` → transparente |
| Quem Somos | `#quem` | Textura de mármore branco ou papel artesanal | Overlay sutil: `rgba(245,242,238,0.85)` |
| Alerta | `#alerta` | Documentação jurídica, mapa de propriedade rural, vista aérea MT | Overlay denso: `rgba(55,55,55,0.88)` |
| Serviços | `#servicos` | Textura arquitetônica ou fachada clássica | Overlay claro: `rgba(245,242,238,0.94)` |

### CSS para Implementação com Parallax
```css
.has-parallax {
  background-image: url('nome-da-imagem.jpg');
  background-attachment: fixed;    /* parallax CSS nativo */
  background-size: cover;
  background-position: center center;
  will-change: background-position;
}

/* Fallback iOS — detectar via JS e remover fixed */
@supports (-webkit-overflow-scrolling: touch) {
  .has-parallax {
    background-attachment: scroll;
  }
}
```

### Fontes de Imagens Sugeridas (gratuitas)
- **Unsplash:** `unsplash.com` — buscar "law office", "legal documents", "property", "aerial Mato Grosso"
- **Pexels:** `pexels.com` — mesmas buscas
- **Freepik:** Texturas de mármore, papel envelhecido

---

## 11. PENDÊNCIAS E DADOS A CONFIRMAR

| Item | Status |
|---|---|
| Foto da Dra. Sarah Lima Costa | ⏳ Aguardando envio |
| Foto do escritório | ⏳ Aguardando envio |
| Número de WhatsApp definitivo | ⏳ Confirmar `(65) XXXX-XXXX` |
| E-mail definitivo | ⏳ `contato@costalima.com.br` ou `contato@costalima.adv.br` |
| Endereço físico completo | ⏳ Aguardando |
| Dados da parceira (nome, especialidade, foto) | ⏳ Aguardando |
| URLs das redes sociais | ⏳ Instagram, LinkedIn, YouTube |
| Domínio definitivo | ⏳ `costalima.com.br` ou `costalima.adv.br` |
| Imagens de fundo das 4 seções | ⏳ Selecionar e enviar |
| SVG da logo | ⏳ Definir traçado final do monograma CL |
| Artigos do blog (conteúdo real) | ⏳ Dra. Sarah mencionou ter 1 artigo escrito |
| Serviço de formulário (FormSubmit/Formspree) | ⏳ Configurar action do form |
| Plataforma de newsletter | ⏳ Definir (Mailchimp, RD Station, etc.) |
| Google Analytics / Search Console | ⏳ Configurar após publicação |

---

## 12. CHECKLIST DE PUBLICAÇÃO

```
[ ] Substituir todos os placeholders de foto
[ ] Atualizar número de WhatsApp em todos os links (wa.me/55...)
[ ] Atualizar e-mail de contato
[ ] Inserir endereço físico
[ ] Adicionar dados da parceira
[ ] Configurar imagens de fundo com parallax
[ ] Implementar SVG animation do logo
[ ] Conectar formulário a serviço real (Formspree ou similar)
[ ] Conectar newsletter a plataforma de e-mail marketing
[ ] Inserir URLs reais das redes sociais
[ ] Testar responsividade em mobile (iOS + Android)
[ ] Testar glassmorphism nav em Safari (webkit prefix)
[ ] Validar parallax em iOS (remover background-attachment:fixed)
[ ] Configurar Google Analytics
[ ] Submeter ao Google Search Console
[ ] Verificar meta description e keywords
[ ] Teste de velocidade (PageSpeed Insights)
[ ] Publicar no domínio definitivo
```

---

*Documento gerado em fevereiro de 2026 — Costa Lima Advocacia.*
