import React, { useState, useEffect } from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;
    // Hysteresis thresholds: prevent toggling in the transition zone
    const THRESHOLD_DOWN = 60;  // activates scrolled state going down
    const THRESHOLD_UP = 20;  // deactivates scrolled state coming back up

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(prev => {
          if (!prev && y > THRESHOLD_DOWN) return true;
          if (prev && y < THRESHOLD_UP) return false;
          return prev; // no state change = no re-render
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <nav className={`hidden lg:flex nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <a href="#hero" className="nav-logo nav-logo--crossfade" aria-label="Costa Lima Advocacia">
          {/* Light logo — visible when header is transparent */}
          <img
            src="https://majorhub.com.br/wp-content/uploads/2026/03/logo-branco-v2.svg"
            alt="Costa Lima Advocacia"
            width="160"
            height="45"
            className={`nav-logo-img nav-logo-light ${scrolled ? 'logo-hidden' : 'logo-visible'}`}
          />
          {/* Dark logo — visible when header is scrolled */}
          <img
            src="Imagens/Logo v2.png"
            alt=""
            aria-hidden="true"
            width="160"
            height="45"
            className={`nav-logo-img nav-logo-dark ${scrolled ? 'logo-visible' : 'logo-hidden'}`}
          />
        </a>
        <div className="nav-links">
          <a href="#quem">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como Trabalhamos</a>
          <a href="#contato">Contato</a>
        </div>
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          id="hamburger-btn"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <button className="mobile-close" id="mobile-close" aria-label="Fechar menu" onClick={() => setMobileMenuOpen(false)}>✕</button>
        <a href="#quem" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
        <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
        <a href="#processo" onClick={() => setMobileMenuOpen(false)}>Como Trabalhamos</a>
        <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
      </div>
    </>
  );
}
