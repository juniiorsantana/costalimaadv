import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Hero() {
    return (
        <>
            {/* ─── MOBILE HERO ─── */}
            <section
                className="lg:hidden flex flex-col w-full bg-[#6f4821]"
                id="hero"
            >
                {/* Content block — fundo sólido da marca */}
                <div className="flex flex-col items-center text-center px-6 pt-10 pb-8 bg-[#6f4821]">
                    <img
                        src="https://majorhub.com.br/wp-content/uploads/2026/03/logo-v-branca.svg"
                        alt="Costa Lima Advocacia"
                        className="h-20 mb-6"
                    />

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#874915]/20 border border-[#874915]/40 mb-5">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#E5BF8E]">
                            Dra. Sarah Lima - OAB/MT 31882
                        </p>
                    </div>

                    <h1 className="text-[clamp(2.4rem,9vw,3.2rem)] leading-[1] font-normal text-[#d9d9d9] mb-3 tracking-[-0.02em]">
                        Segurança jurídica para proteger seu{' '}
                        <em className="italic text-[var(--accent)] font-normal">
                            patrimônio imobiliário
                        </em>
                    </h1>

                    <p className="text-[0.9rem] text-[#d9d9d9]/80 mb-6 max-w-[340px] leading-[1.75]">
                        Especialistas em regularização de imóveis, compra e venda e planejamento previdenciário — atendimento personalizado e transparente.
                    </p>

                    <div className="flex flex-col gap-3 w-full max-w-[280px]">
                        <HoverBorderGradient
                            as="a"
                            href="https://wa.me/5565998061528"
                            target="_blank"
                            rel="noopener noreferrer"
                            containerClassName="rounded-lg bg-[#874915] hover:bg-[#874915] w-full"
                            className="text-white uppercase text-[0.73rem] tracking-[0.15em] font-medium w-full justify-center"
                        >
                            Agendar Consulta →
                        </HoverBorderGradient>

                        <a
                            href="#servicos"
                            className="flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[#d9d9d9] hover:text-white uppercase text-[0.73rem] tracking-[0.15em] font-medium transition-colors duration-300"
                        >
                            Ver Serviços
                        </a>
                    </div>
                </div>

                {/* Imagem completa — sem corte */}
                <img
                    src="https://majorhub.com.br/wp-content/uploads/2026/03/bg-mobile-new.avif"
                    alt="Dra. Sarah Lima - Costa Lima Advocacia"
                    className="w-full h-auto block"
                    loading="eager"
                    decoding="async"
                />
            </section>

            {/* ─── DESKTOP HERO ─── */}
            <section
                className="hidden lg:flex relative min-h-[100svh] w-full overflow-hidden flex-row items-center bg-[var(--bg)]"
                id="hero-desktop"
            >
                {/* Full-cover background image with parallax */}
                <img
                    src="https://majorhub.com.br/wp-content/uploads/2026/03/Bg-hero-new.avif"
                    alt="Costa Lima Advocacia"
                    className="hero-bg absolute inset-0 w-full h-full object-cover object-[65%_50%] z-0"
                    loading="eager"
                    decoding="async"
                />

                {/* Degradê sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/10 via-[var(--bg)]/5 to-transparent pointer-events-none z-[1]" />

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-[90rem] mx-auto px-14 pt-36 pb-44 flex-shrink-0">
                    <div className="hero-content max-w-[650px] text-left flex flex-col items-start">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#874915]/20 border border-[#874915]/40 mb-6">
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#E5BF8E]">
                                Dra. Sarah Lima - OAB/MT 31882
                            </p>
                        </div>

                        <h1 className="text-[clamp(2.8rem,5.2vw,5.5rem)] leading-[0.95] font-normal text-[#d9d9d9] mb-3 tracking-[-0.02em]">
                            Segurança jurídica para proteger seu{' '}
                            <em className="italic text-[var(--accent)] font-normal">
                                patrimônio imobiliário
                            </em>
                        </h1>

                        <p className="text-[0.96rem] text-[#d9d9d9] mb-5 max-w-[440px] leading-[1.8]">
                            Especialistas em regularização de imóveis, compra e venda e planejamento previdenciário — atendimento personalizado e transparente.
                        </p>

                        <div className="flex flex-row gap-3 items-start">
                            <HoverBorderGradient
                                as="a"
                                href="https://wa.me/5565998061528"
                                target="_blank"
                                rel="noopener noreferrer"
                                containerClassName="rounded-lg bg-[#874915] hover:bg-[#874915]"
                                className="text-white uppercase text-[0.73rem] tracking-[0.15em] font-medium"
                            >
                                Agendar Consulta →
                            </HoverBorderGradient>

                            <a
                                href="#servicos"
                                className="flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[#d9d9d9] hover:text-white uppercase text-[0.73rem] tracking-[0.15em] font-medium transition-colors duration-300"
                            >
                                Ver Serviços
                            </a>
                        </div>
                    </div>
                </div>

                {/* Floating Trust Tags */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                    <div className="backdrop-blur-md bg-white/90 border border-white/50 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3">
                        <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-bold text-[#874915]">+8</span>
                        <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#373737] font-semibold whitespace-nowrap">Anos de Exp.</span>
                    </div>
                    <div className="backdrop-blur-md bg-white/90 border border-white/50 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3">
                        <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-bold text-[#874915]">2</span>
                        <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#373737] font-semibold whitespace-nowrap">Pós-Graduações</span>
                    </div>
                    <div className="backdrop-blur-md bg-white/90 border border-white/50 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-3">
                        <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-bold text-[#874915]">100%</span>
                        <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#373737] font-semibold whitespace-nowrap">Foco em Resultado</span>
                    </div>
                </div>
            </section>
        </>
    );
}
