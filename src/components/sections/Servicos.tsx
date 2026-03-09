import React, { useState } from 'react';

export default function Servicos() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
        // setTimeout(() => ScrollTrigger.refresh(), 450); // Handled in global GSAP setup if needed
    };

    return (
        <section className="servicos" id="servicos">
            <div className="servicos-bg"></div>
            <div className="container">
                <div className="servicos-header reveal">
                    <div>
                        <p className="eyebrow">Nossas áreas de atuação</p>
                        <h2>Soluções jurídicas com foco em resultados práticos</h2>
                    </div>
                    <p className="servicos-intro">Atuamos com foco em resultados práticos: avaliamos documentos, traçamos estratégias e
                        acompanhamos todo o processo até a solução.</p>
                </div>
                <div className="servicos-grid">
                    {/* Card 1 — Destaque */}
                    <div className={`s-card featured reveal ${expandedCard === 0 ? 'expanded' : ''}`}>
                        <div className="s-card-tag">Serviço em destaque</div>
                        <div className="s-card-icon">🏠</div>
                        <h3>Regularização e assessoria imobiliária</h3>
                        <p className="s-card-desc">Compra e venda (urbano e rural), análise documental, due diligence, regularização por
                            usucapião, doação e inventário. Garantimos segurança jurídica para seus negócios e investimentos em todo Mato Grosso e Brasil
                            e todo o MT.</p>
                        <button className="s-card-toggle" aria-expanded={expandedCard === 0} onClick={() => toggleCard(0)}>
                            Ver mais <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="s-card-panel">
                            <ul>
                                <li>Análise documental</li>
                                <li>Assessoria compra e venda</li>
                                <li>Regularização de escrituras e matrículas</li>
                                <li>Usucapião extrajudicial e judicial</li>
                                <li>Doação e transmissão em vida</li>
                                <li>Inventário judicial e extrajudicial</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`s-card reveal ${expandedCard === 1 ? 'expanded' : ''}`} data-delay="0.08">
                        <div className="s-card-icon">📜</div>
                        <h3>Usucapião e registro de imóveis</h3>
                        <p className="s-card-desc">Acompanhamento completo do procedimento extrajudicial e judicial para regularização de
                            imóveis, com foco em agilidade e redução de custos.</p>
                        <button className="s-card-toggle" aria-expanded={expandedCard === 1} onClick={() => toggleCard(1)}>
                            Ver mais <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="s-card-panel">
                            <ul>
                                <li>Usucapião extrajudicial (cartório)</li>
                                <li>Usucapião judicial</li>
                                <li>Levantamento documental</li>
                                <li>Regularização fundiária rural e urbana</li>
                                <li>Averbação e atualização de matrícula</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`s-card reveal ${expandedCard === 2 ? 'expanded' : ''}`} data-delay="0.14">
                        <div className="s-card-icon">⚖️</div>
                        <h3>Execução e cobrança de dívidas</h3>
                        <p className="s-card-desc">Soluções jurídicas voltadas à recuperação eficiente de créditos, com atuação em execuções judiciais e extrajudiciais, negociação estratégica e métodos consensuais de resolução de conflitos, priorizando agilidade, segurança jurídica e resultados concretos.</p>
                        <button className="s-card-toggle" aria-expanded={expandedCard === 2} onClick={() => toggleCard(2)}>
                            Ver mais <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="s-card-panel">
                            <ul>
                                <li>Execução de título extrajudicial</li>
                                <li>Ações de cobrança judicial</li>
                                <li>Mediação e conciliação</li>
                                <li>Estratégias de recuperação de crédito</li>
                                <li>Acompanhamento até recebimento</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className={`s-card reveal ${expandedCard === 3 ? 'expanded' : ''}`} data-delay="0.2">
                        <div className="s-card-icon">📋</div>
                        <h3>Previdenciário: aposentadorias e benefícios</h3>
                        <p className="s-card-desc">Aposentadorias rural e urbana, auxílio-doença, benefícios assistenciais e planejamento
                            previdenciário. Orientação prática e defesa dos seus direitos no INSS.</p>
                        <button className="s-card-toggle" aria-expanded={expandedCard === 3} onClick={() => toggleCard(3)}>
                            Ver mais <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="s-card-panel">
                            <ul>
                                <li>Aposentadoria rural e comprovação</li>
                                <li>Aposentadoria por tempo de contribuição</li>
                                <li>Auxílio-doença e incapacidade</li>
                                <li>Benefício assistencial LOAS/BPC</li>
                                <li>Planejamento previdenciário personalizado</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
