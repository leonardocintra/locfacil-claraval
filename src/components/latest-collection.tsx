"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.";

const products = [
  {
    id: 1,
    name: "Betoneira 400L",
    price: "R$ 80/dia",
    rating: "4.9",
    reviews: 42,
    badge: "Popular",
    image: "/placeholder-betoneira.jpg",
  },
  {
    id: 2,
    name: "Martelete Perfurador 15kg",
    price: "R$ 60/dia",
    rating: "4.8",
    reviews: 34,
    badge: "Novo",
    image: "/placeholder-martelete.jpg",
  },
  {
    id: 3,
    name: "Compactador de Solo",
    price: "R$ 90/dia",
    rating: "4.9",
    reviews: 18,
    badge: "",
    image: "/placeholder-compactador.jpg",
  },
  {
    id: 4,
    name: "Andaime Tubular (Metro)",
    price: "R$ 35/dia",
    rating: "4.7",
    reviews: 56,
    badge: "Popular",
    image: "/placeholder-andaime.jpg",
  },
];

export function LatestCollection() {
  return (
    <section id="equipamentos" className="py-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] uppercase text-text-dark max-w-md leading-tight">
            Nossos Equipamentos em Destaque
          </h2>
          <p className="text-text-mid max-w-md font-sans text-[0.95rem] leading-relaxed">
            Do martelete à betoneira — tudo que sua obra precisa, pronto para alugar hoje.
          </p>
        </div>

        {/* Row de Produtos */}
        <div className="flex overflow-x-auto pt-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 snap-x hide-scrollbar">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] md:min-w-[300px] flex-1 bg-white border border-[#F0F0F0] rounded-2xl p-4 flex flex-col group hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-primary transition-all duration-300 snap-start relative"
            >
              {/* Image Area */}
              <div className="relative w-full h-[180px] bg-light-bg rounded-xl mb-4 flex items-center justify-center p-4">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[0.7rem] uppercase font-bold text-primary tracking-widest shadow-sm">
                    {product.badge}
                  </span>
                )}
                
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-light hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors shadow-sm"
                  aria-label="Alugar via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Imagem Placeholder até gerarmos as reais */}
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      // Fallback para um quadrado cinza se a imagem não existir
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('bg-gray-200');
                    }}
                  />
                </div>
              </div>

              {/* Informações */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-2 text-[0.8rem] text-text-light">
                  <span className="text-accent">⭐</span>
                  <span className="font-medium text-text-mid">{product.rating}</span>
                  <span>· {product.reviews} avaliações</span>
                </div>
                
                <h3 className="font-sans font-medium text-[0.95rem] text-text-dark mb-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <p className="font-heading text-[1.3rem] font-bold text-primary">
                    <span className="text-sm font-sans text-text-mid font-normal mr-1">A partir de</span>
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
