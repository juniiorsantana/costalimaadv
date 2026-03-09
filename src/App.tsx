import React, { lazy, Suspense, useEffect, useRef, Component, type ReactNode } from 'react';
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

    // Hero — único que anima no mount pois já está no DOM
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

  const handleLazyLoaded = () => {
    // Timeout generoso para garantir que o DOM está completamente pintado
    setTimeout(() => {
      const revealElements = document.querySelectorAll<HTMLElement>(
        '.reveal, .s-card, .step-card, .value-card, h2, .eyebrow'
      );

      revealElements.forEach((element) => {
        // Garante que o elemento está visível por padrão antes de qualquer animação
        element.style.opacity = '1';
        element.style.transform = 'none';

        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true, // dispara apenas uma vez, nunca reverte
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          delay: element.dataset.delay ? parseFloat(element.dataset.delay) : 0,
          clearProps: "all", // limpa inline styles após animação completar
        });
      });

      ScrollTrigger.refresh();
    }, 500); // 500ms garante DOM completamente renderizado
  };

  return (
    <>
      <Navbar />
      <Hero />
      <ErrorBoundary>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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

function LazyWrapper({ children, onLoaded }: { children: ReactNode; onLoaded: () => void }) {
  useEffect(() => {
    onLoaded();
  }, []);

  return <>{children}</>;
}

export default App;