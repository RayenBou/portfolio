import React, { useEffect, useRef } from "react";
import { Button, Typography } from "../lib/ui-components";
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typewriterElements = document.querySelectorAll(".typewriter");
    typewriterElements.forEach((element) => {
      const text = element.textContent || "";
      element.textContent = "";
      let i = 0;
      const type = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, Math.random() * 100 + 50);
        }
      };
      setTimeout(() => type(), 500);
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative min-h-screen w-full px-4 py-32 flex items-center "
    >
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/3 opacity-5 pointer-events-none select-none">
        CODE
      </div>

      <div className="container mx-auto grid items-center lg:grid-cols-2 gap-16 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <div className="mb-6 inline-flex items-center">
            <Typography
              variant="small"
              className="font-mono text-accent tracking-widest py-1 px-0 border-b-2 border-accent"
            >
              <span className="inline-block mr-2">&gt;</span>DÉVELOPPEUR
              BACK-END
            </Typography>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8">
            <span className="block text-white mb-2">Développeur</span>
            <span className="text-accent block">
              <span className="typewriter">Web & Logiciels</span>
            </span>
          </h1>

          <div className="h-px w-24 bg-accent mb-8"></div>

          <Typography
            variant="lead"
            className="text-white/70 max-w-lg mb-12 text-xl"
          >
            Applications, sites web, automatisations —
            <span className="text-highlight font-semibold">
              {" "}
              Solutions techniques sur mesure
            </span>{" "}
            pour entreprises exigeantes.
          </Typography>

          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="link-white no-underline">
              <button className="flex items-center uppercase tracking-wider font-bold font-mono text-sm group bg-accent hover:bg-accent-dark text-white py-3 px-4 border-0">
                <span className="group-hover:translate-x-1 transition-transform mr-2">
                  &gt;
                </span>
                Discuter de votre projet
              </button>
            </a>
            <a
              href="#services"
              className="link-accent flex items-center py-3 px-2 text-white/60 hover:text-white font-mono text-sm transition-colors duration-300 border-b border-transparent hover:border-accent"
            >
              <span className="mr-2 text-accent">02.</span>
              Explorer mes services
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
