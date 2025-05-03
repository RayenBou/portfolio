import React from "react";
import { Typography, Button } from "../../lib/ui-components";
import { motion } from "framer-motion";

export function Error404Page() {
  return (
    <div className="min-h-screen w-full bg-anthracite-950 flex items-center justify-center px-4 relative">
      {/* Lignes décoratives */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-3xl"
      >
        <div className="mb-6 inline-flex items-center justify-center">
          <div className="relative w-20 h-20 bg-accent flex items-center justify-center font-mono text-white font-bold text-5xl">
            4
            <span className="absolute -top-1 -right-1 h-[2px] w-[6px] bg-white"></span>
            <span className="absolute -bottom-1 -left-1 h-[2px] w-[6px] bg-white"></span>
          </div>
          <div className="relative w-20 h-20 bg-anthracite-900 flex items-center justify-center font-mono text-white font-bold text-5xl mx-3">
            0
          </div>
          <div className="relative w-20 h-20 bg-accent flex items-center justify-center font-mono text-white font-bold text-5xl">
            4
            <span className="absolute -top-1 -right-1 h-[2px] w-[6px] bg-white"></span>
            <span className="absolute -bottom-1 -left-1 h-[2px] w-[6px] bg-white"></span>
          </div>
        </div>

        <Typography
          variant="h2"
          className="text-white font-display mb-4 text-4xl md:text-5xl"
        >
          Page introuvable
        </Typography>

        <div className="h-px w-24 bg-accent mx-auto mb-6"></div>

        <Typography
          variant="lead"
          className="text-white/70 mb-12 max-w-lg mx-auto"
        >
          La page que vous recherchez n'existe pas ou a été déplacée. Retournez
          à l'accueil pour continuer votre navigation.
        </Typography>

        <div className="flex justify-center">
          <a href="/" className="link-white no-underline">
            <button className="flex items-center uppercase tracking-wider font-bold font-mono text-sm group bg-accent hover:bg-accent-dark text-white py-3 px-6 border-0">
              <span className="group-hover:translate-x-1 transition-transform mr-2">
                &lt;
              </span>
              Retour à l'accueil
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Error404Page;
