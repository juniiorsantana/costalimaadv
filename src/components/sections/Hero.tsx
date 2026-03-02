import React from 'react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export default function Hero() {
    return (
        <section
            className="relative min-h-[100svh] w-full overflow-hidden flex flex-col lg:flex-row items-center bg-[var(--bg)]"
            id="hero"
        >
            {/* Full-cover background image with parallax (Desktop) */}
            <img
                src="https://majorhub.com.br/wp-content/uploads/2026/03/Bg-hero-atualizado.avif"
                alt="Costa Lima Advocacia"
                className="hidden lg:block hero-bg absolute inset-0 w-full h-[115%] -top-[7%] object-cover object-[65%_50%] will-change-transform z-0"
                loading="eager"
                decoding="async"
            />

            {/* Full-cover background image (Mobile) */}
            <img
                src="https://majorhub.com.br/wp-content/uploads/2026/03/bg-mobile-large.avif"
                alt="Costa Lima Advocacia"
                className="block lg:hidden absolute inset-0 w-full h-[100svh] object-cover object-[center_top] z-0"
                loading="eager"
                decoding="async"
            />

            {/* AJUSTE DE DESIGN: Degradê quase invisível (Desktop) */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[var(--bg)]/10 via-[var(--bg)]/5 to-transparent pointer-events-none z-[1]" />

            {/* Hero Content */}
            {/* PARA AUMENTAR/DIMINUIR A SEÇÃO: Altere o 'pt-48' e 'pb-8' (Mobile) ou 'pb-44' (Desktop) abaixo */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-14 pt-1 lg:pt-36 pb-8 lg:pb-44 flex-shrink-0">
                <div className="hero-content max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <img
                        src="https://majorhub.com.br/wp-content/uploads/2026/03/logo-v-branca.svg"
                        alt="Costa Lima Advocacia"
                        className="block lg:hidden h-24 mb-6"
                    />

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

                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                        <HoverBorderGradient
                            as="a"
                            href="https://wa.me/556512345678"
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


            {/* Floating Trust Tags — right edge, only visible in hero */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
                <div className="backdrop-blur-xl bg-white/25 border border-white/40 shadow-lg rounded-full px-5 py-2.5 flex items-center gap-3">
                    <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold text-[#874915]">+8</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#5A4A3A] font-medium whitespace-nowrap">Anos de Exp.</span>
                </div>
                <div className="backdrop-blur-xl bg-white/25 border border-white/40 shadow-lg rounded-full px-5 py-2.5 flex items-center gap-3">
                    <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold text-[#874915]">2</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#5A4A3A] font-medium whitespace-nowrap">Pós-Graduações</span>
                </div>
                <div className="backdrop-blur-xl bg-white/25 border border-white/40 shadow-lg rounded-full px-5 py-2.5 flex items-center gap-3">
                    <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold text-[#874915]">100%</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.13em] text-[#5A4A3A] font-medium whitespace-nowrap">Foco em Resultado</span>
                </div>
            </div>
        </section>
    );
}
