import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Alerta() {
    return (
        <section className="alerta" id="alerta">
            <div className="container--narrow reveal">
                <img src="Imagens/logo v branca.svg" alt="Costa Lima Advocacia" className="alerta-logo" />
                <h2>Você sabia que imóveis irregulares podem ser contestados, bloqueados ou perdidos — mesmo com "documento em
                    mãos"?</h2>
                <p className="alerta-text">Documentos desatualizados, escrituras sem registro e imóveis sem matrícula são muito mais
                    comuns do que parece no interior do Mato Grosso. <strong>Sem análise jurídica adequada, você corre riscos que
                        não consegue ver.</strong></p>
                <p className="alerta-text">A atuação preventiva e especializada em Direito Imobiliário é o que transforma uma falsa
                    sensação de segurança em proteção real para o seu patrimônio.</p>
                <p className="alerta-source">Realidade verificada na prática de advocacia imobiliária em Cáceres-MT e região.</p>
                <div className="flex justify-center w-full mt-10">
                    <HoverBorderGradient as="a" href="https://wa.me/5565998061528" target="_blank" rel="noopener noreferrer" containerClassName="rounded-lg bg-[var(--areia)] hover:bg-[var(--areia)]" className="text-[var(--text)] uppercase text-[0.78rem] tracking-[0.1em] font-medium">Quero analisar meu imóvel →</HoverBorderGradient>
                </div>
            </div>
        </section>
    );
}
