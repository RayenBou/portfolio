import React, { useEffect, useRef, useCallback } from "react";
import { Typography } from "../lib/ui-components";
import { motion } from "framer-motion";
import { CommandLineIcon } from "@heroicons/react/24/outline";

interface CommandProps {
  command: string;
  response: React.ReactNode;
  delay: number;
}

// Composant de terminal optimisé
const TerminalCommand = ({ command, response, delay }: CommandProps) => {
  const commandRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ cancel: boolean }>({ cancel: false });

  // Animation optimisée avec useCallback pour éviter des re-rendus
  const animateTyping = useCallback(
    async (text: string, element: HTMLElement, speed = 60) => {
      if (!element || animationRef.current.cancel) return;

      // Vider le texte
      element.textContent = "";

      // Saisie caractère par caractère
      for (let i = 0; i < text.length; i++) {
        if (animationRef.current.cancel) return;
        element.textContent += text.charAt(i);

        // Délai variable pour un effet plus naturel
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * (speed - 20) + 20)
        );
      }
    },
    []
  );

  useEffect(() => {
    if (!commandRef.current || !responseRef.current) return;

    // Référence pour le nettoyage
    const currentAnimationRef = animationRef.current;
    const currentCommandRef = commandRef.current;
    const currentResponseRef = responseRef.current;

    // Masquer la réponse
    currentResponseRef.style.opacity = "0";

    // Séquence d'animation
    const runAnimation = async () => {
      try {
        // Délai initial (réduit)
        await new Promise((resolve) => setTimeout(resolve, delay * 600));
        if (currentAnimationRef.cancel) return;

        // Animation de la saisie
        await animateTyping(command, currentCommandRef);
        if (currentAnimationRef.cancel) return;

        // Ajouter le curseur temporaire
        const cursor = document.createElement("span");
        cursor.className = "animate-pulse ml-1";
        cursor.textContent = "_";
        currentCommandRef.appendChild(cursor);

        // Afficher la réponse
        await new Promise((resolve) => setTimeout(resolve, 150));
        if (currentAnimationRef.cancel) return;

        currentResponseRef.style.transition = "opacity 300ms";
        currentResponseRef.style.opacity = "1";

        // Supprimer le curseur après un délai
        setTimeout(() => {
          if (!currentAnimationRef.cancel && cursor.parentNode) {
            cursor.remove();
          }
        }, 800);
      } catch (err) {
        console.error("Animation error:", err);
      }
    };

    runAnimation();

    // Cleanup
    return () => {
      currentAnimationRef.cancel = true;
    };
  }, [command, delay, animateTyping]);

  return (
    <div className="mb-4">
      <div className="flex items-start">
        <span className="text-accent mr-2 font-bold">$</span>
        <div ref={commandRef} className="font-mono text-green-400"></div>
      </div>
      <div ref={responseRef} className="pl-5 mt-1 text-white/80">
        {response}
      </div>
    </div>
  );
};

export default function About() {
  const commands = [
    {
      command: "whoami",
      response: "rayen - Développeur Back-end Python & PHP",
      delay: 0.3,
    },
    {
      command: "python --version",
      response: "Python 3.13.3",
      delay: 1.5,
    },
    {
      command: "php -v",
      response: "PHP 8.4.6",
      delay: 2.5,
    },
    {
      command: "cat expertise.txt",
      response: (
        <div className="space-y-1">
          <a
            href="#tech-stack"
            className="block hover:bg-anthracite-700 hover:text-white transition-colors duration-200 rounded-sm p-1 -ml-1"
          >
            <div className="flex items-center text-highlight mb-1">
              <span className="mr-2">→</span>
              <span className="font-bold">
                Voir ma stack technique complète
              </span>
            </div>
            <p className="flex">
              <span className="text-highlight w-20">Backend:</span>
              <span>FastAPI, Symfony</span>
            </p>
            <p className="flex">
              <span className="text-highlight w-20">DevOps:</span>
              <span>Docker, K8s, CI/CD</span>
            </p>
            <p className="flex">
              <span className="text-highlight w-20">Cloud:</span>
              <span>AWS, GCP, Azure</span>
            </p>
            <p className="flex">
              <span className="text-highlight w-20">Databases:</span>
              <span>PostgreSQL, MongoDB, Redis</span>
            </p>
          </a>
        </div>
      ),
      delay: 3.5,
    },
    {
      command: "ls projects/",
      response: (
        <a
          href="#projects"
          className="block hover:bg-anthracite-700 hover:text-white transition-colors duration-200 rounded-sm p-1 -ml-1"
        >
          <div className="flex items-center text-highlight mb-1">
            <span className="mr-2">→</span>
            <span className="font-bold">Explorer tous mes projets</span>
          </div>
          <div>
            <span className="text-highlight mr-3">api-gateway/</span>
            <span className="text-white/80 mr-3">microservices/</span>
            <span className="text-accent mr-3">webapp-backend/</span>
            <span className="text-white/80 mr-3">automation/</span>
            <span className="text-highlight mr-3">data-pipeline/</span>
          </div>
        </a>
      ),
      delay: 5,
    },
    {
      command: "_",
      response: null,
      delay: 6.5,
    },
  ];

  return (
    <section id="about" className="py-32 px-8 bg-anthracite-900 relative">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
      </div>

      <div className="container mx-auto grid items-center lg:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-full"
        >
          <div className="bg-anthracite-800 border border-white/10 p-6 h-full flex flex-col">
            <div className="terminal-header flex items-center mb-6 border-b border-white/10 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-white/60 text-xs font-mono flex-grow">
                rayen@dev:~/portfolio
              </span>
              <CommandLineIcon className="h-4 w-4 text-white/30" />
            </div>

            <div className="terminal-content font-mono text-sm flex-grow space-y-4 overflow-y-auto">
              {commands.map((cmd, index) => (
                <TerminalCommand
                  key={index}
                  command={cmd.command}
                  response={cmd.response}
                  delay={cmd.delay}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-first lg:order-last relative"
        >
          <div className="absolute -top-12 right-0 w-24 h-24 border border-white/20 bg-accent flex items-center justify-center font-mono text-white z-10">
            <div className="text-center">
              <div className="text-sm opacity-70">EXP</div>
              <div className="text-2xl font-bold">5+</div>
            </div>
          </div>

          <Typography
            variant="small"
            className="font-mono text-accent tracking-widest mb-4"
          >
            <span className="inline-block mr-2">&gt;</span>QUI SUIS-JE
          </Typography>
          <Typography
            variant="h2"
            className="text-white font-display font-bold mb-6"
          >
            À propos
          </Typography>
          <div className="h-px w-24 bg-accent mb-8"></div>

          <div className="space-y-6 text-white/70">
            <Typography>
              Je m'appelle{" "}
              <span className="text-highlight font-semibold">Rayen</span>,
              développeur Back-end spécialisé en{" "}
              <span className="text-accent">Python</span>,{" "}
              <span className="text-accent">PHP</span> et{" "}
              <span className="text-accent">en DevOps</span>.
            </Typography>

            <Typography>
              Je travaille dans une entreprise IT en tant que lead dev, et je
              propose également mes compétences en Back-end, sur des projets{" "}
              <span className="text-white font-semibold">
                ciblés et encadrés
              </span>{" "}
              : outils métier, automatisation, APIs, interfaces web...
            </Typography>

            <Typography>
              Je prends en charge vos besoins techniques de manière{" "}
              <span className="text-white font-semibold">autonome</span>, du
              cahier des charges jusqu'à la livraison. Ma promesse :{" "}
              <span className="text-highlight font-semibold">
                vous faire gagner du temps et éviter les galères techniques.
              </span>
            </Typography>

            <Typography>
              J'interviens uniquement sur des missions Back-end{" "}
              <span className="text-white font-semibold">
                claires, ponctuelles ou à court terme
              </span>
              , en toute transparence.
            </Typography>
          </div>

          <div className="mt-12 font-mono text-sm flex flex-wrap gap-4">
            {["FASTAPI", "SYMFONY", "DOCKER", "K8S"].map((tech) => (
              <span
                key={tech}
                className="bg-anthracite-950 px-3 py-1 rounded-sm border border-white/10 hover:border-accent transition-colors duration-300"
              >
                <span className="text-accent"># </span>
                <span className="text-white/70">{tech}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
