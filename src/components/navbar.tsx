"use client";

import { useState, useEffect } from "react";
import { Search, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5516999775829?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/locfacil.png"
            alt="Loc Fácil Logo"
            width={140}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Equipamentos", "Como Funciona", "Sobre", "Contato"].map((item) => (
            <Link
              key={item}
              href={item === "Contato" ? "/contato" : `/#${item.toLowerCase().replace(" ", "-")}`}
              className="text-text-mid hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-text-dark hover:text-primary transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Pedir Orçamento</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
