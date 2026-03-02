import React, { useState } from 'react';

export default function Faq() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "Como começo a regularizar meu imóvel?",
            a: "Envie a documentação disponível para uma análise inicial gratuita. A partir disso, elaboramos um diagnóstico com prazos e custos estimados — sem compromisso."
        },
        {
            q: "Ter escritura garante que o imóvel está regular?",
            a: "Não. Escrituras antigas podem estar desatualizadas ou sem registro atualizado. Apenas uma análise documental completa garante a segurança jurídica da propriedade."
        },
        {
            q: "É caro regularizar um imóvel?",
            a: "O custo da regularização é uma fração do prejuízo que pode ocorrer sem ela. Apresentamos estimativas claras após análise — sem compromisso inicial."
        },
        {
            q: "Posso contratar antes de fechar um negócio?",
            a: "Sim — esse é o momento ideal. A análise prévia evita que você adquira problemas junto com o imóvel. Recomendamos a due diligence antes de qualquer assinatura."
        },
        {
            q: "Atendem imóveis rurais no Mato Grosso?",
            a: "Sim. Atendemos imóveis urbanos e rurais em Cáceres e região — propriedades agrícolas, pastagens, loteamentos e áreas de expansão."
        },
        {
            q: "Como funciona o pedido de aposentadoria rural?",
            a: "A aposentadoria rural exige comprovação de atividade rural por período mínimo. Fazemos a análise completa da documentação e conduzimos todo o processo junto ao INSS."
        }
    ];

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="reveal">
                    <p className="eyebrow">Perguntas frequentes</p>
                    <h2>Dúvidas que todo cliente tem.</h2>
                    <p className="faq-intro-text">Reunimos as perguntas mais comuns sobre regularização de imóveis, usucapião e
                        assessoria jurídica.</p>
                </div>
                <div className="reveal" style={{ transitionDelay: "0.1s" }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.q} <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
