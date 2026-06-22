import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png?url";

const WHATSAPP_LINK = "https://wa.me/5548996645113?text=Quero%20meu%20diagnóstico%20gratuito";

const navLinks = [
  { label: "O problema", href: "#problema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={logoWhite} alt="Financeiro de Dono" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 shadow-accent-hover transition-all"
          >
            Diagnóstico gratuito
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 px-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-bold"
          >
            Diagnóstico gratuito
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
