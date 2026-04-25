"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.";

const categories = ["Todos", "Concreto", "Perfuração", "Estrutura", "Acabamento", "Geradores"];

const allProducts = [
  { id: 1, name: "Betoneira 400L", category: "Concreto", badge: "Popular", price: "R$ 80/dia", rating: "4.9", image: "/produtos/betoneira/betoneira.png" },
  { id: 2, name: "Martelete Perfurador", category: "Perfuração", badge: "Novo", price: "R$ 60/dia", rating: "4.8", image: "/produtos/martelete/martelete.png" },
  { id: 3, name: "Gerador de energia", category: "Geradores", badge: "", price: "R$ 145/dia", rating: "4.7", image: "/produtos/geradores/gerador.png" },
  { id: 4, name: "Andaime Tubular", category: "Estrutura", badge: "Popular", price: "R$ 35/dia", rating: "4.9", image: "/produtos/andaime/aindame.png" },
  { id: 5, name: "Compactador de Solo", category: "Acabamento", badge: "", price: "R$ 90/dia", rating: "4.8", image: "/produtos/compactadores/compactador-eletrico.png" },
  { id: 6, name: "Container", category: "Acabamento", badge: "Novo", price: "R$ 240/dia", rating: "4.6", image: "/produtos/container/container-vermelho.png" },
];

export function EquipmentCatalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="flex flex-col items-center mb-12">
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] uppercase text-text-dark mb-8 text-center">
            Todos os Equipamentos
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-text-mid border border-gray-200 hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#F0F0F0] rounded-2xl p-4 flex flex-col group hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-square bg-light-bg rounded-xl mb-5 overflow-hidden">
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain mix-blend-multiply p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-gray-200');
                      }}
                    />
                  </div>

                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.7rem] uppercase font-bold text-primary tracking-widest shadow-sm z-20 pointer-events-none">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Informações */}
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex items-center gap-1 mb-2 text-[0.8rem] text-text-light">
                    <span className="text-accent">⭐</span>
                    <span className="font-medium text-text-mid">{product.rating}</span>
                  </div>

                  <h3 className="font-sans font-medium text-lg text-text-dark mb-4">
                    {product.name}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="font-heading text-xl font-bold text-primary">
                      {product.price}
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-text-dark hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
