import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 w-full relative pt-[68px] min-h-screen bg-white">
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
