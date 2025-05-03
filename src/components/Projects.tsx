import React from "react";
import { Typography } from "../lib/ui-components.tsx";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Définir une interface pour les props du composant ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  index: number;
  link?: string;
}

function ProjectCard({
  title,
  description,
  tech,
  index,
  link,
}: ProjectCardProps) {
  const cardContent = (
    <div className="border border-white/10 bg-anthracite-900 hover:border-accent/70 p-8 transition-all duration-300 h-full">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-4 font-mono text-accent text-sm">
            <span className="mr-2">PROJET</span>{" "}
            {index < 9 ? `0${index + 1}` : index + 1}
          </div>
          <Typography
            variant="h4"
            className="font-display text-white group-hover:text-highlight transition-colors duration-300"
          >
            {title}
          </Typography>
        </div>
        {link && (
          <div className="border border-white/10 p-2 bg-anthracite-950 group-hover:border-accent/50 transition-all duration-300">
            <ArrowUpRightIcon className="h-6 w-6 text-white/50 group-hover:text-accent transition-colors duration-300" />
          </div>
        )}
      </div>
      <Typography className="font-normal text-white/70 mb-8">
        {description}
      </Typography>
      <div className="pt-6 border-t border-white/10">
        <Typography variant="small" className="font-mono text-white/50">
          <span className="text-accent">TECHNOLOGIES:</span> {tech}
        </Typography>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export default function Projects() {
  // Liste des projets
  const projects = [
    {
      title: "Jenius - Chatbot multi-modèle sécurisé",
      description:
        "Refonte complète de l'architecture logicielle et base de données d'un chatbot permettant le traitement en circuit fermé de sources multiples (API, fichiers, DB, scraping). Lead technique d'une équipe de 7 personnes, responsable des onboardings, définition technique, documentation interne, interfaces d'administration, sécurité et déploiement continu.",
      tech: "Python, FastAPI, LLM, DevOps, CI/CD, Sécurité, Architecture logicielle",
      link: "https://jenius.soma-smart.cloud/",
    },
    {
      title: "DevLens - The search engine that helps you find code patterns.",
      description:
        "Un moteur de recherche puissant qui analyse les bases de code pour identifier des motifs, évaluer la qualité du code et trouver des implémentations spécifiques, avec des capacités pour récupérer des variables depuis Dataiku Lake et des secrets Kubernetes, et effectuer des remplacements ciblés dans les fichiers.",
      tech: "Python, CLI, dataiku, ANTLR4, Kubernetes, Github Actions",
      link: "https://soma-smart.github.io/doc-devlens/",
    },
    {
      title: "Framefox - Swift, smart, and a bit foxy",
      description:
        "Framework Python orienté objet avec architecture MVC claire, conçu pour simplifier le développement d'applications web robustes. Inclut un terminal interactif, un système de routage puissant, une gestion de configuration avancée, et des modules pré-configurés d'authentification et d'ORM.",
      tech: "Python, MVC, ORM, CLI, Système de routage",
      link: "https://github.com/soma-smart/framefox",
    },
    {
      title: "Ethernighty - Système de gestion de bracelets connectés",
      description:
        "Plateforme complète pour événements musicaux avec interactions en temps réel entre public, organisateurs et artistes. Système sécurisé d'encodage NFC, redondance offline/online, interface mobile utilisateur, back-office administratif et système d'urgence pour les spectateurs. Performances testées jusqu'à 2000 scans de bracelets par seconde.",
      tech: "NodeJS/React, PHP/Symfony, SQLite/MySQL, RFID NTAG213, ACR122U",
    },
    {
      title: "Rayenbou - Dashboard Bundle",
      description:
        "Intégration Symfony permettant de gérer un système de tickets entre différentes applications. Utilise APIplatform pour exposer une API sécurisée par JWT, permettant de récupérer et gérer des tickets depuis n'importe quelle application. La partie Dashboard s'installe sur l'application principale, tandis que le TicketBundle s'installe sur les applications clientes.",
      tech: "PHP/Symfony, APIplatform, JWT, Twig, Bootstrap",
      link: "https://github.com/RayenBou/RayenbouDashboardBundle",
    },
    {
      title: "Système de diffusion vidéo autonome",
      description:
        "Gestion d'affichage multi-écrans pour un restaurant via Raspberry Pi avec scripts bash et contrôleur Matrice video. Démarrage automatique.",
      tech: "Raspberry Pi OS, bash, Matrox",
    },
    {
      title: "Geko-Marketplace",
      description:
        "Plateforme permettant aux magasins indépendants de vendre leurs produits en ligne, avec un système de gestion de stock et de commandes. Intégration d'un module de paiement sécurisé.",
      tech: "Symfony, Docker, FrankenPHP, RabbitMQ, PostgreSQL, GitLab CI/CD, PHPUnit, Sentry",
    },
  ];
  return (
    <section id="projects" className="py-32 px-8 bg-anthracite-900 relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Typography
            variant="small"
            className="font-mono text-accent tracking-widest mb-4"
          >
            <span className="inline-block mr-2">&gt;</span>RÉALISATIONS
          </Typography>
          <Typography variant="h2" className="font-display text-white mb-6">
            Projets récents
          </Typography>
          <div className="h-px w-24 bg-accent mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              index={index}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
