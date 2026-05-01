import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Clients confiants", href: "#ils-nous-font-confiance" },
  { label: "Notre Processus", href: "#notre-processus" },
  { label: "Nos Avantages", href: "#nos-avantages" },
  { label: "Résultats", href: "#resultats" },
  { label: "Commencer maintenant", href: "#commencer-maintenant" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 font-sans backdrop-blur-md">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-4">
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.webp"
            alt="CoinCarrière"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://coincarriere.com/register?type=company"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center justify-center rounded-xl bg-[#22C173] px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1DA85F] sm:inline-flex"
          >
            Publier une annonce
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-foreground transition-all hover:bg-gray-100 md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-gray-50 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://coincarriere.com/register?type=company"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#22C173] px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1DA85F] sm:hidden"
          >
            Publier une annonce
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
