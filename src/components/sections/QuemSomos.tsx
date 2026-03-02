import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Handshake, Zap, GraduationCap, MessageCircleHeart } from "lucide-react";
const bgImage = '/Imagens/Seção 2 bg.avif';

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border border-[rgba(141,110,89,0.2)] p-2 md:rounded-3xl md:p-3 bg-transparent">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#F5F2EE] border border-[rgba(141,110,89,0.1)] shadow-sm z-10">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-[rgba(141,110,89,0.2)] p-2 text-[#874915] bg-[rgba(141,110,89,0.05)]">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-display text-xl pb-0.5 font-semibold text-[#373737]">
                                {title}
                            </h3>
                            <p className="font-body text-[0.85rem] leading-[1.6] text-[#5A4A3A]">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default function QuemSomos() {
    return (
        <section className="relative py-28 px-[5vw] bg-[#F5F2EE] overflow-hidden" id="quem">
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-40 md:opacity-100 bg-[50%_35%] bg-cover bg-no-repeat z-0 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url("${bgImage}")` }}
            ></div>

            <div className="container relative z-10 max-w-[800px] mx-auto">
                <div className="reveal">
                    <p className="font-body text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#8D6E59] mb-4">
                        Quem Somos
                    </p>
                    <h2 className="font-display text-[clamp(1.8rem,2.8vw,2.8rem)] text-[#373737] mb-6 leading-[1.15]">
                        O escritório que une especialização técnica e atendimento humano
                    </h2>
                    <p className="text-[0.92rem] text-[#5A4A3A] mb-10 leading-[1.85]">
                        O Costa Lima Advocacia nasceu para oferecer soluções jurídicas claras e seguras nas áreas
                        imobiliária e previdenciária. Liderado pela Dra. Sarah Lima Costa, o escritório alia especialização técnica e
                        atendimento humano para proteger o patrimônio e a tranquilidade de famílias e investidores.
                    </p>

                    {/* Aceternity UI Grid Setup */}
                    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 relative z-10">
                        <GridItem
                            area="md:[grid-area:1/1/2/8]"
                            icon={<Handshake className="h-5 w-5" />}
                            title="Transparência"
                            description="Comunicação clara em cada etapa, sem surpresas ou jargões."
                        />
                        <GridItem
                            area="md:[grid-area:1/8/2/13]"
                            icon={<Zap className="h-5 w-5" />}
                            title="Agilidade"
                            description="Prazos estimados e acompanhamento ativo até a conclusão."
                        />
                        <GridItem
                            area="md:[grid-area:2/1/3/6]"
                            icon={<GraduationCap className="h-5 w-5" />}
                            title="Especialização"
                            description="Pós-graduação e foco em Direito Imobiliário e Previdenciário."
                        />
                        <GridItem
                            area="md:[grid-area:2/6/3/13]"
                            icon={<MessageCircleHeart className="h-5 w-5" />}
                            title="Atendimento humano"
                            description="Escuta ativa, respostas objetivas e proximidade com o cliente."
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}
