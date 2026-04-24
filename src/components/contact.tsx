"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-white border-t border-light-bg">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Lado Esquerdo: Informações */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              Fale Conosco
            </span>
            <h2 className="font-heading text-[clamp(2.5rem,4vw,3.5rem)] uppercase text-text-dark leading-[1.1] mb-6">
              Entre em Contato
            </h2>
            <p className="text-text-mid font-sans text-lg mb-8 leading-relaxed">
              Aluguel de ferramentas para construção civil. <br />
              <span className="flex items-center gap-2 mt-4 font-medium text-text-dark">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                Atendemos Franca, Claraval, Ibiraci, Cássia e região.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/5534999328780?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+aluguel+de+equipamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-4 p-4 rounded-2xl border border-[#F0F0F0] hover:border-[#25D366] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-text-light font-bold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-lg font-heading font-bold text-text-dark">(34) 99932-8780</p>
                </div>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+aluguel+de+equipamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-4 p-4 rounded-2xl border border-[#F0F0F0] hover:border-[#25D366] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-text-light font-bold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-lg font-heading font-bold text-text-dark">(16) 99977-5829</p>
                </div>
              </a>
            </div>

            <div>
              <a
                href="https://instagram.com/locfacilclaraval"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-mid hover:text-primary transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                @locfacilclaraval
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[350px] sm:h-[450px] bg-light-bg rounded-4xl flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Decoração de fundo */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none"></div>

            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 relative z-10 animate-bounce">
              <MessageCircle className="w-12 h-12 text-[#25D366]" />
            </div>

            <div className="text-center relative z-10 px-6">
              <h3 className="font-heading text-3xl uppercase text-text-dark font-bold mb-2">Chama no Zap!</h3>
              <p className="text-text-mid">Orçamento rápido e sem compromisso para a sua obra.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
