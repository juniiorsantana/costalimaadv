import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export function CtaFinal() {
    return (
        <section className="cta-final" id="cta-final">
            <div className="container--narrow reveal">
                <p className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Advogado em Cáceres · Assessoria Imobiliária</p>
                <h2>Pronto para proteger o que é seu?</h2>
                <p className="cta-final-text">Atendimento personalizado, claro e especializado, com foco em proteção ao patrimônio, planejamento patrimonial, previdenciário, restituição de créditos e dívidas.</p>
                <div className="cta-final-btns">
                    <HoverBorderGradient
                        as="a"
                        href="https://wa.me/5565998061528"
                        target="_blank"
                        rel="noopener noreferrer"
                        containerClassName="rounded-lg bg-white hover:bg-white"
                        className="text-[#874915] uppercase text-[0.78rem] tracking-[0.1em] font-semibold"
                    >
                        Agende via WhatsApp →
                    </HoverBorderGradient>
                    <a href="mailto:sarahcccostalima@gmail.com" className="btn btn-ghost-dark">Enviar mensagem</a>
                </div>
                <p className="cta-final-info">Costa Lima Advocacia · Regularização de Imóveis · Usucapião · Cáceres-MT · OAB/MT 31882</p>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-brand">
                    <img src="Imagens/Logo v2.png" alt="Costa Lima Advocacia" />
                    <p className="footer-brand-desc">Segurança jurídica para proteger seu patrimônio imobiliário em Cáceres e todo o
                        Mato Grosso.</p>
                    <div className="footer-social">
                    </div>
                </div>
                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#quem">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#processo">Como Trabalhamos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Serviços</h4>
                    <ul>
                        <li><a href="#servicos">Regularização</a></li>
                        <li><a href="#servicos">Usucapião</a></li>
                        <li><a href="#servicos">Compra e Venda</a></li>
                        <li><a href="#servicos">Inventário</a></li>
                        <li><a href="#servicos">Execução</a></li>
                        <li><a href="#servicos">Previdenciário</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contato</h4>
                    <ul>
                        <li>65 99806-1528 // 67 99630-9209</li>
                        <li>sarahcccostalima@gmail.com</li>
                        <li>Rua 6 de Outubro, 199 - Centro, Cáceres/MT - CEP 78210-082</li>
                        <li>Seg–Sex: 8h–18h</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Costa Lima Advocacia. Todos os direitos reservados.</p>
                <p className="footer-bottom-keywords">OAB/MT 31882 · Cáceres-MT · Direito Imobiliário · Regularização de Imóveis · Usucapião
                </p>
            </div>
        </footer>
    );
}

export function WhatsappFloat() {
    return (
        <a href="https://wa.me/5565998061528" className="whatsapp-float" target="_blank" rel="noopener noreferrer"
            aria-label="Abrir WhatsApp">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.13 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.91 15.91 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.3 22.606c-.388 1.092-1.914 1.998-3.13 2.264-.834.178-1.924.32-5.594-1.202-4.692-1.946-7.71-6.708-7.944-7.016-.226-.308-1.89-2.52-1.89-4.806 0-2.288 1.196-3.412 1.62-3.876.388-.424.916-.612 1.22-.612.148 0 .28.008.4.014.424.018.636.042.916.71.348.834 1.196 2.912 1.3 3.124.106.212.212.49.084.782-.12.298-.226.432-.438.668-.212.236-.434.418-.646.674-.192.228-.41.472-.172.898.236.424 1.052 1.736 2.26 2.814 1.554 1.386 2.864 1.816 3.27 2.016.308.148.672.122.916-.148.308-.34.69-.908 1.078-1.468.276-.398.624-.448.964-.308.346.134 2.188 1.032 2.562 1.22.374.186.624.28.716.434.09.152.09.882-.298 1.974z" />
            </svg>
        </a>
    );
}
