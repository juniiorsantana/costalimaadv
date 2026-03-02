import React, { useState } from 'react';

export default function Blog() {
    const [btnText, setBtnText] = useState('Assinar →');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnText('✓ Inscrito!');
        setIsSuccess(true);
        const form = e.currentTarget;
        setTimeout(() => {
            setBtnText('Assinar →');
            setIsSuccess(false);
            form.reset();
        }, 3500);
    };

    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="blog-header reveal">
                    <div>
                        <p className="eyebrow">Blog Jurídico</p>
                        <h2>Conteúdo para decisões mais seguras</h2>
                    </div>
                    <p className="blog-intro">Conteúdos práticos sobre regularização de imóveis, usucapião, planejamento patrimonial e
                        dúvidas previdenciárias.</p>
                </div>
                <div className="blog-grid">
                    <div className="blog-card reveal">
                        <div className="blog-card-body">
                            <div className="blog-tag">Direito Imobiliário</div>
                            <h3>Imóvel sem matrícula em Cáceres-MT: o que fazer e como regularizar</h3>
                        </div>
                    </div>
                    <div className="blog-card reveal" style={{ transitionDelay: "0.08s" }}>
                        <div className="blog-card-body">
                            <div className="blog-tag">Usucapião</div>
                            <h3>Usucapião extrajudicial: quando usar e como funciona no MT</h3>
                        </div>
                    </div>
                    <div className="blog-card reveal" style={{ transitionDelay: "0.14s" }}>
                        <div className="blog-card-body">
                            <div className="blog-tag">Previdenciário</div>
                            <h3>Aposentadoria rural: quem tem direito e como comprovar</h3>
                        </div>
                    </div>
                </div>
                <div className="newsletter reveal">
                    <h3>Receba artigos e orientações jurídicas no seu e-mail</h3>
                    <p className="newsletter-desc">Publicamos conteúdo prático sobre regularização de imóveis, assessoria imobiliária e
                        direitos previdenciários. Sem spam — apenas conteúdo útil.</p>
                    <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Seu nome" required aria-label="Nome" />
                        <input type="email" placeholder="Seu e-mail" required aria-label="E-mail" />
                        <button type="submit" className={`btn ${isSuccess ? 'btn-success' : 'btn-primary'}`}>
                            {btnText}
                        </button>
                    </form>
                    <p className="newsletter-privacy">Seus dados são tratados com privacidade. Cancele a qualquer momento.</p>
                </div>
            </div>
        </section>
    );
}
