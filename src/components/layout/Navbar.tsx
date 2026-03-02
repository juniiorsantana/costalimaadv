import React, { useState, useEffect } from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`hidden lg:flex nav ${scrolled ? 'scrolled' : ''}`} id="main-nav">
        <a href="#hero" className="nav-logo" aria-label="Costa Lima Advocacia">
          <img src="Imagens/Logo v2.png" alt="Costa Lima Advocacia" className="nav-logo-img" />
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
