import React from 'react';

export default function Depoimentos() {
    return (
        <section className="depoimentos" id="depoimentos">
            <div className="container">
                <h2 className="reveal">O que nossos clientes dizem</h2>
                <div className="depoimentos-grid">
                    <div className="dep-card reveal">
                        <p className="dep-quote">"O Costa Lima regularizou meu imóvel com rapidez e clareza. Atendimento humano e muito
                            profissional."</p>
                        <p className="dep-author">— João S., investidor · Cáceres-MT</p>
                    </div>
                    <div className="dep-card reveal" style={{ transitionDelay: "0.1s" }}>
                        <p className="dep-quote">"Achei que meu imóvel estava regularizado. A Dra. Sarah encontrou uma pendência que teria
                            inviabilizado minha venda. Me salvou de um prejuízo enorme."</p>
                        <p className="dep-author">— Empresário · Cáceres-MT</p>
                    </div>
                    <div className="dep-card reveal" style={{ transitionDelay: "0.2s" }}>
                        <p className="dep-quote">"Fui orientada a organizar meu patrimônio. Hoje tenho paz de saber que meus filhos não
                            terão dor de cabeça no futuro."</p>
                        <p className="dep-author">— Proprietária · região de Cáceres</p>
                    </div>
                </div>
                <div className="depoimentos-cta reveal">
                    <a href="mailto:sarahcccostalima@gmail.com?subject=Depoimento">Foi cliente? Envie seu depoimento →</a>
                </div>
            </div>
        </section>
    );
}
