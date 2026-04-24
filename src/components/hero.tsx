"use client";

import { motion } from "framer-motion";
import { MessageCircle, Truck, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.92, x: -20 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-light-bg pt-[120px] pb-20 overflow-hidden flex flex-col items-center">
      {/* Container Principal */}
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Texto Central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl z-20 mt-8"
        >
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.1] text-text-dark mb-6">
            Alugue Equipamentos de Construção com <span className="text-primary italic">Facilidade</span>
          </h1>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-heading uppercase tracking-wider text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            <MessageCircle className="w-5 h-5 animate-bounce" />
            Solicitar no WhatsApp
          </a>
        </motion.div>

        {/* Área Visual (Badges e Imagem) */}
        <div className="relative w-full mt-16 flex flex-col md:flex-row justify-between items-end min-h-[400px]">

          {/* Badges Flutuantes à esquerda */}
          <div className="hidden md:flex flex-col gap-5 absolute left-8 lg:left-[15%] bottom-16 lg:bottom-24 z-20">
            {[
              { icon: <Truck className="w-5 h-5 text-primary" />, text: "Entrega Rápida" },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Sem Burocracia" },
              { icon: <Star className="w-5 h-5 text-accent" />, text: "+500 Obras Atendidas" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                className="glassmorphism flex items-center gap-4 px-6 py-4 rounded-full text-base font-bold text-text-dark shadow-md hover:scale-105 transition-transform"
              >
                {badge.icon}
                {badge.text}
              </motion.div>
            ))}
          </div>

          {/* Imagem do Produto (Hero Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[800px] mx-auto md:absolute md:-bottom-20 md:right-[-5%]"
          >
            <motion.div
              animate={{ y: [-8, 8] }}
              transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Image
                src="/hero-equipment.png"
                alt="Betoneira e equipamentos de construção"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl rounded-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Social Proof top-right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-0 right-0 md:top-[-100px] z-20 glassmorphism p-4 rounded-2xl flex items-center gap-4 hidden lg:flex"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" width={40} height={40} />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-accent text-sm">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-text-dark mt-1">Avaliação 4.9</p>
              <p className="text-[10px] text-text-mid">clientes satisfeitos</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
