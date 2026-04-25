"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";

export function WhyLocFacil() {
  return (
    <section id="sobre" className="py-24 bg-secondary-dark relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Lado Esquerdo: Imagens Empilhadas */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex items-center justify-center"
        >
          {/* Imagem de Fundo (Maior) */}
          <div className="absolute left-0 bottom-0 w-[80%] h-[75%] rounded-3xl overflow-hidden border-4 border-secondary-dark shadow-2xl z-10">
            <Image
              src="/cortador.png"
              alt="Obra em andamento"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-secondary-light');
              }}
            />
          </div>

          {/* Imagem da Frente (Menor) */}
          <div className="absolute right-0 top-10 w-[60%] h-[60%] rounded-3xl overflow-hidden border-4 border-secondary-dark shadow-xl z-20">
            <Image
              src="/equipamento-revisado.png"
              alt="Trabalhador usando equipamento"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-primary-light');
              }}
            />
          </div>

          {/* Badge Glassmorphism */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-heading tracking-wide uppercase text-sm">Equipamento Revisado</p>
              <p className="text-white/70 text-xs">Pronto para o uso</p>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] uppercase text-white leading-[1.1] mb-6">
            Equipamentos que Você Vai Querer Sempre
          </h2>
          <p className="text-[#94A3B8] font-sans text-lg mb-12 max-w-lg leading-relaxed">
            Qualidade e confiabilidade em cada locação. Nosso foco é garantir que sua obra não pare por falta de bons equipamentos.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-white font-sans font-medium text-xl mb-1">Entrega na Região</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Levamos até sua obra em Cássia, Ibiraci, Claraval e Franca.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-white font-sans font-medium text-xl mb-1">Preços Acessíveis</h3>
                <p className="text-[#94A3B8] text-sm">Valores justos, sem taxa escondida.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
