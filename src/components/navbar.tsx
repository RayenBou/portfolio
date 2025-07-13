import React, { useState, useEffect } from "react";
import { Button, Typography } from "../lib/ui-components";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Types explicites pour tous les composants
interface NavbarProps {
  className?: string;
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ className = "", children }) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 bg-anthracite-950/90 backdrop-blur py-6 px-4 ${className}`}
  >
    {children}
  </nav>
);

interface CollapseProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({
  open,
  className = "",
  children,
}) => (
  <div
    className={`${
      open ? "max-h-screen" : "max-h-0"
    } overflow-hidden transition-all duration-500 ease-in-out ${className}`}
  >
    {children}
  </div>
);

// Navigation links pour une application monopage
const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Projets", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

function NavList() {
  return (
    <ul className="relative flex flex-col lg:flex-row gap-8 mt-8 lg:mt-0">
      {navItems.map(({ label, href }, index) => (
        <motion.li
          key={label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          className="relative"
        >
          <a
            href={href}
            className="link-accent group text-white/80 hover:text-white transition-all duration-300"
          >
            <span className="flex items-center">
              <span className="font-mono text-xs text-accent mr-2 font-bold">
                0{index + 1}
              </span>
              <span className="uppercase tracking-wider text-sm font-medium">
                {label}
              </span>
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [shouldShowBorder, setShouldShowBorder] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const handleScroll = () => {
      setShouldShowBorder(window.scrollY > 50);

      // Calculer la progression du scroll pour la barre de progression
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`transition-all duration-300 ${
        shouldShowBorder ? "border-b border-white/5" : ""
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            as="a"
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="font-display text-xl flex items-center no-underline group cursor-pointer"
          >
            <span className="relative w-8 h-8 bg-accent mr-2 inline-flex items-center justify-center group-hover:bg-accent-dark transition-colors duration-300">
              <span className="relative z-10">R</span>
              <span className="absolute -top-1 -right-1 h-[2px] w-[6px] bg-white"></span>
              <span className="absolute -bottom-1 -left-1 h-[2px] w-[6px] bg-white"></span>
            </span>
            <span className="font-bold group-hover:text-accent transition-colors duration-300">
              RAYEN.PRO
            </span>
          </Typography>
        </motion.div>
        <div className="hidden lg:flex">
          <NavList />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 border border-white/20 hover:border-accent text-white lg:hidden"
            onClick={toggleIsNavOpen}
          >
            <Bars2Icon className="h-5 w-5 text-white" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#contact" className="link-white no-underline">
              <button className="hidden lg:flex items-center px-6 py-2 font-mono uppercase tracking-wider bg-accent hover:bg-accent-dark text-white border-0">
                <span className="text-xs mr-2">&gt;</span>Me contacter
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      <Collapse open={isNavOpen} className="lg:hidden">
        <div className="container mx-auto py-4 border-t border-white/5 mt-4">
          <NavList />
          <div className="mt-8">
            <a href="#contact" className="link-white no-underline">
              <button className="w-full flex items-center justify-center py-3 font-mono uppercase tracking-wider bg-accent hover:bg-accent-dark text-white border-0">
                <span className="text-xs mr-2">&gt;</span>Me contacter
              </button>
            </a>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
