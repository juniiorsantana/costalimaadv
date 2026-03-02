import React, { lazy, Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Critical path — loaded synchronously
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

// Below-the-fold — lazy chunks
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

function App() {
  useEffect(() => {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Use gsap.context to handle React 18 StrictMode double-firing
    let ctx = gsap.context(() => {
      // GSAP Nav animations removed to favor React 'scrolled' class in Navbar.tsx

      // 3. Advanced GSAP Reveal Animations
      const revealElements = document.querySelectorAll('.reveal, .s-card, .step-card, .value-card, h2, .eyebrow');

      revealElements.forEach((el) => {
        const element = el as HTMLElement;
        gsap.fromTo(element,
          {
            y: 50,
            opacity: 0,
            scale: 0.98,
            autoAlpha: 0 // handles visibility and opacity together
          },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            scale: 1,
            autoAlpha: 1, // handles visibility and opacity together
            duration: 1.2,
            ease: "expo.out",
            delay: element.dataset.delay ? parseFloat(element.dataset.delay) : 0
          }
        );
      });

      // Hero Text Setup
      gsap.fromTo(".hero-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out", delay: 0.2 }
      );

      // Parallax in Hero
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      lenis.destroy();
      ctx.revert(); // This cleans up all animations and inline styles from this context
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}

export default App;
