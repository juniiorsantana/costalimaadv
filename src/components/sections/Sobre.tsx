import React from 'react';

export default function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="sobre-photo reveal">
                <span className="sobre-photo-placeholder">CL</span>
            </div>
            <div className="sobre-content reveal" style={{ transitionDelay: "0.15s" }}>
                <p className="eyebrow">Nossa equipe</p>
                <h2>Fundadora e especialista — Dra. Sarah Lima Costa</h2>
                <p className="sobre-text">Advogada especialista em Direito Imobiliário e Notarial, com foco em regularização de
                    imóveis, assessoria imobiliária e planejamento patrimonial em Cáceres e todo o Mato Grosso.</p>
                <p className="sobre-text">Pós-graduada em Direito Imobiliário e Contratos, fundou o escritório Costa Lima com o
                    propósito de oferecer atendimento técnico e humano, orientando clientes com clareza e agilidade.</p>
                <h4
                    style={{
                        fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.15em",
                        color: "var(--text-muted)", margin: "1.5rem 0 0.8rem", fontWeight: 600
                    }}>
                    Diferenciais</h4>
                <ul className="sobre-list">
                    <li>Especialização profunda em Direito Imobiliário e Notarial pela ESA</li>
                    <li>Atendimento personalizado, sem jargões — cada etapa explicada com clareza</li>
                    <li>Acompanhamento contínuo, do diagnóstico até a solução final</li>
                </ul>
                <h4
                    style={{
                        fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.15em",
                        color: "var(--text-muted)", margin: "1rem 0 0.8rem", fontWeight: 600
                    }}>
                    Formação</h4>
                <ul className="sobre-list">
                    <li>Pós-graduada em Direito Imobiliário e Notarial — ESA</li>
                    <li>Especialização em Contratos — foco em Direito Imobiliário</li>
                    <li>OAB-MT · Cáceres, Mato Grosso</li>
                </ul>
                <a href="#contato" className="btn btn-outline">Ver perfil completo →</a>
            </div>
        </section>
    );
}
