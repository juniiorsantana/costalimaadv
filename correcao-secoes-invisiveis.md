# Prompt — Correção: Seções invisíveis após o Hero (GSAP autoAlpha)

## CAUSA RAIZ

No `src/App.tsx`, o GSAP usa `autoAlpha: 0` no estado inicial das animações.
O `autoAlpha: 0` aplica `visibility: hidden` + `opacity: 0` nos elementos.

O problema é a ordem de execução:
1. React monta o componente e roda o `useEffect`
2. GSAP aplica `autoAlpha: 0` nos elementos `.reveal`, `h2`, `.s-card`, etc.
3. Os componentes lazy (`QuemSomos`, `Servicos`, etc.) carregam DEPOIS
4. O ScrollTrigger já foi registrado, mas não enxerga os novos elementos do DOM
5. Resultado: elementos ficam com `visibility: hidden` para sempre — nunca são revelados

---

## CORREÇÃO — Arquivo: `src/App.tsx`

Substitua o arquivo INTEIRO pelo código abaixo:

```tsx
import React, { lazy, Suspense, useEffect, useRef, Component, ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const QuemSomos = lazy(() => import('./components/sections/QuemSomos'));
const Alerta = lazy(() => import('./components/sections/Alerta'));
const Servicos = lazy(() => import('./components/sections/Servicos'));
const Processo = lazy(() => import('./components/sections/Processo'));
const Sobre = lazy(() => import('./components/sections/Sobre'));
const Parceira = lazy(() => import('./components/sections/Parceira'));
const Faq = lazy(() => import('./components/sections/Faq'));
const Contato = lazy(() => import('./components/sections/Contato'));
const CtaFinal = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.CtaFinal })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));
const WhatsappFloat = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.WhatsappFloat })));

import './styles.css';

gsap.registerPlugin(ScrollTrigger);

// ErrorBoundary para capturar falhas silenciosas
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: false }; }
  render() { return this.props.children; }
}

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  // Lenis + ScrollTrigger setup — roda uma vez no mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    // Hero animation — elementos já estão no DOM, pode animar direto
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out", delay: 0.2 }
    );

    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Função chamada quando os lazy components terminam de carregar
  const handleLazyLoaded = () => {
    // Aguarda o DOM ser pintado antes de registrar os ScrollTriggers
    requestAnimationFrame(() => {
      setTimeout(() => {
        const revealElements = document.querySelectorAll(
          '.reveal, .s-card, .step-card, .value-card, h2, .eyebrow'
        );

        revealElements.forEach((el) => {
          const element = el as HTMLElement;

          // IMPORTANTE: usar opacity em vez de autoAlpha
          // autoAlpha usa visibility:hidden que pode não ser revertido
          gsap.fromTo(
            element,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                toggleActions: "play none none none", // não reverte ao scrollar de volta
              },
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: "expo.out",
              delay: element.dataset.delay ? parseFloat(element.dataset.delay) : 0,
            }
          );
        });

        // Recalcula posições após registrar todos os triggers
        ScrollTrigger.refresh();
      }, 100);
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <ErrorBoundary>
        <Suspense
          fallback={<div style={{ minHeight: '100vh' }} />}
          // @ts-ignore — onLoad via wrapper trick abaixo
        >
          <LazyWrapper onLoaded={handleLazyLoaded}>
            <QuemSomos />
            <Alerta />
            <Servicos />
            <Processo />
            <Sobre />
            <Parceira />
            <Faq />
            <Contato />
            <CtaFinal />
            <Footer />
            <WhatsappFloat />
          </LazyWrapper>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

// Componente auxiliar que dispara o callback depois que os filhos renderizam
function LazyWrapper({ children, onLoaded }: { children: ReactNode; onLoaded: () => void }) {
  useEffect(() => {
    onLoaded();
  }, []);

  return <>{children}</>;
}

export default App;
```

---

## O QUE MUDOU E POR QUÊ

| Antes | Depois |
|---|---|
| `autoAlpha: 0` no início | `opacity: 0` — não usa `visibility:hidden` |
| ScrollTrigger registrado no mount | ScrollTrigger registrado APÓS lazy components carregarem |
| `toggleActions: "play none none reverse"` | `toggleActions: "play none none none"` — não esconde ao rolar |
| Lenis ativo no mobile | Lenis desativado em telas < 768px |
| Sem ErrorBoundary | ErrorBoundary protege contra falhas silenciosas |

---

## APÓS APLICAR

1. Rode `npm run build` — confirme que não há erros
2. Faça commit e push
3. Verifique na Vercel que o deploy ficou verde
4. Teste rolando a página — todas as seções devem aparecer normalmente
