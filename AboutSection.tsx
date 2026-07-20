import logoWhite from "@/assets/logo-white.png?url";

const navLinks = [
  { label: "O problema", href: "#problema" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Nível de apoio", href: "#planos" },
  { label: "Conteúdo", href: "/conteudos" },
  { label: "FAQ", href: "#faq" },
  { label: "Instagram", href: "https://instagram.com/jonny.elias" },
];

const Footer = () => {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="mb-2">
              <img src={logoWhite} alt="Financeiro de Dono" className="h-8" />
            </div>
            <p className="text-sm text-primary-foreground/50">
              Clareza pra decidir. Não pra sobreviver.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-sm text-primary-foreground/40">
              © 2025 Financeiro de Dono
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
