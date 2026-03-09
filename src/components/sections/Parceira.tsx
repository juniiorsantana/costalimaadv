import React from 'react';
import { Check } from 'lucide-react';

export default function Parceira() {
    return (
        <section id="parceira" className="parceira relative py-24 md:py-32 overflow-hidden bg-white">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Visual Anchor - 40% */}
                    <div className="w-full md:w-[40%] reveal" data-delay="0.1">
                        <div className="relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-line opacity-30 pointer-events-none -z-10 transition-transform duration-700 group-hover:scale-105" />

                            <div className="overflow-hidden rounded-sm shadow-2xl">
                                <img
                                    src="https://majorhub.com.br/wp-content/uploads/2026/03/imagem_2026-03-09_120314957-e1773068672406.png"
                                    alt="Dra. Juceli Lents Luz"
                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Accent line */}
                            <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-accent transform -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Content Area - 60% */}
                    <div className="w-full md:w-[60%] flex flex-col justify-center">
                        <div className="reveal" data-delay="0.2">
                            <span className="eyebrow block mb-4">Advogada Parceira</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text mb-2 leading-tight">
                                Juceli Lents Luz
                            </h2>
                            <p className="font-body text-xs tracking-widest uppercase text-text-muted mb-8 opacity-80">
                                OAB/MT 36.210/O
                            </p>
                        </div>

                        <div className="reveal space-y-6" data-delay="0.3">
                            <div className="h-px w-20 bg-brand-accent opacity-30" />

                            <p className="text-lg md:text-xl text-text-mid font-display leading-relaxed">
                                "Especialista em Direito de Família com foco em mediação e conciliação, unindo sensibilidade e rigor técnico para soluções consensuais."
                            </p>

                            <div className="text-base text-text leading-relaxed space-y-4 max-w-xl">
                                <p>
                                    Com longa experiência em acordos estratégicos, a Dra. Juceli é licenciada pelo fórum para atuar como mediadora profissional.
                                </p>
                                <p className="font-semibold text-brand-accent">
                                    Atuação especializada em:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {['Guarda', 'Divórcio', 'Alimentos', 'Conciliação'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm">
                                            <Check className="w-4 h-4 text-brand-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8">
                                <a
                                    href="https://wa.me/5565992358828"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Solicitar Mediação
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

