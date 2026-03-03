import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Processo() {
    return (
        <section className="processo" id="processo">
            <div className="container processo-wrapper">
                <div className="processo-sticky reveal">
                    <p className="eyebrow">Como trabalhamos</p>
                    <h2>Nosso processo em 4 passos</h2>
                    <p className="processo-intro" style={{ color: "var(--text-mid)", fontSize: "0.92rem", marginTop: "1.5rem", maxWidth: "90%" }}>
                        Análise personalizada · Plano de ação claro · Acompanhamento integral · Comunicação direta
                    </p>
                    <div className="processo-cta" style={{ marginTop: "2.5rem" }}>
                        <HoverBorderGradient
                            as="a"
                            href="https://wa.me/5565998061528"
                            target="_blank"
                            rel="noopener noreferrer"
                            containerClassName="rounded-lg bg-[#874915] hover:bg-[#874915]"
                            className="text-white uppercase text-[0.78rem] tracking-[0.1em] font-medium"
                        >
                            Solicitar avaliação gratuita →
                        </HoverBorderGradient>
                    </div>
                </div>
                <div className="processo-grid">
                    <div className="step-card reveal">
                        <span className="step-number">01</span>
                        <h3>Consulta inicial e coleta de documentos</h3>
                        <p>Entendemos o caso, recebemos a documentação disponível e identificamos as primeiras questões relevantes.</p>
                    </div>
                    <div className="step-card reveal" data-delay="0.1">
                        <span className="step-number">02</span>
                        <h3>Diagnóstico e plano de ação</h3>
                        <p>Análise técnica completa, identificação de riscos e pendências. Proposta de atuação clara com prazos e estimativa de custos.</p>
                    </div>
                    <div className="step-card reveal" data-delay="0.15">
                        <span className="step-number">03</span>
                        <h3>Acompanhamento processual</h3>
                        <p>Condução junto a cartórios, tribunais e órgãos competentes. Atualizações regulares e canal direto de comunicação.</p>
                    </div>
                    <div className="step-card reveal" data-delay="0.2">
                        <span className="step-number">04</span>
                        <h3>Entrega e orientações finais</h3>
                        <p>Conclusão do processo com entrega dos documentos e orientações preventivas para proteger seu patrimônio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
