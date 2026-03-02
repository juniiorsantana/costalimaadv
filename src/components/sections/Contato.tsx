import React, { useState } from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Contato() {
    const [btnState, setBtnState] = useState({ text: 'Enviar mensagem →', success: false });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnState({ text: '✓ Mensagem enviada!', success: true });
        const form = e.currentTarget;
        setTimeout(() => {
            setBtnState({ text: 'Enviar mensagem →', success: false });
            form.reset();
        }, 4000);
    };

    return (
        <section className="contato" id="contato">
            <div className="container">
                <div className="reveal">
                    <p className="eyebrow">Fale conosco</p>
                    <h2>Agende uma consulta sem compromisso</h2>
                    <p className="contato-desc">Atendimento presencial em Cáceres e remoto para clientes de outras regiões.</p>
                    <div className="contato-details">
                        <div className="contato-item">
                            <span className="contato-item-icon">📱</span>
                            <div>
                                <div className="contato-item-label">WhatsApp</div>
                                <div className="contato-item-value">(65) 1234-5678</div>
                            </div>
                        </div>
                        <div className="contato-item">
                            <span className="contato-item-icon">✉️</span>
                            <div>
                                <div className="contato-item-label">E-mail</div>
                                <div className="contato-item-value">contato@costalima.com.br</div>
                            </div>
                        </div>
                        <div className="contato-item">
                            <span className="contato-item-icon">📍</span>
                            <div>
                                <div className="contato-item-label">Endereço</div>
                                <div className="contato-item-value">Cáceres, Mato Grosso — MT</div>
                            </div>
                        </div>
                        <div className="contato-item">
                            <span className="contato-item-icon">🕐</span>
                            <div>
                                <div className="contato-item-label">Horário</div>
                                <div className="contato-item-value">Seg–Sex: 8h–18h · Sáb: 8h–12h</div>
                            </div>
                        </div>
                    </div>
                    <div className="contato-actions">
                        <HoverBorderGradient as="a" href="https://wa.me/556512345678" target="_blank" rel="noopener noreferrer" containerClassName="rounded-lg bg-[#874915] hover:bg-[#874915]" className="text-white uppercase text-[0.78rem] tracking-[0.1em] font-medium">WhatsApp</HoverBorderGradient>
                        <a href="mailto:contato@costalima.com.br" className="btn btn-outline">Enviar e-mail</a>
                    </div>
                    <div className="contato-social">
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>
                </div>

                <div className="reveal" style={{ transitionDelay: "0.15s" }}>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="nome">Nome *</label>
                                <input type="text" id="nome" name="nome" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefone">Telefone *</label>
                                <input type="tel" id="telefone" name="telefone" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail *</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="servico">Serviço de interesse</label>
                            <select id="servico" name="servico">
                                <option value="">Selecione...</option>
                                <option>Regularização de Imóveis</option>
                                <option>Usucapião</option>
                                <option>Compra e Venda</option>
                                <option>Inventário</option>
                                <option>Execução e Cobrança</option>
                                <option>Aposentadoria Rural ou Urbana</option>
                                <option>Benefícios Previdenciários (INSS)</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows={5}></textarea>
                        </div>
                        <button type="submit" className={`btn ${btnState.success ? 'btn-success' : 'btn-primary'}`} id="contact-submit">
                            {btnState.text}
                        </button>
                        <p className="form-submit-note">Respondemos em até 1 dia útil</p>
                        <p className="form-privacy">Seus dados são protegidos e utilizados apenas para retorno de contato.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
