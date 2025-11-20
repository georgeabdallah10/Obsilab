"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { queueScrollTarget, scrollToHash } from "@/lib/scroll";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why Obsilab", href: "#why-obsilab" },

  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      setIsMobileMenuOpen(false);
      return;
    }

    if (href.startsWith("#")) {
      if (pathname === "/") {
        scrollToHash(href);
      } else {
        queueScrollTarget(href);
        router.push(`/${href}`);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    router.push(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian-void/80 backdrop-blur-xl border-b border-gold-imperial/20 shadow-gold-glow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="text-2xl font-bold text-ivory-quartz tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Obsi<span className="text-gold-24k">lab</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                }}
                className="text-antique-pearl hover:text-gold-24k transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavigation("#pricing")}
              className="bg-gold-24k hover:bg-gold-gilded text-obsidian-void font-semibold transition-all duration-200 hover:shadow-gold-glow"
            >
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ivory-quartz p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gold-imperial/20"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="text-antique-pearl hover:text-gold-24k transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  onClick={() => handleNavigation("#pricing")}
                  className="bg-gold-24k hover:bg-gold-gilded text-obsidian-void font-semibold w-full"
                >
                  Start Free
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
