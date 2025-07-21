import React from "react";
import { Typography } from "../lib/ui-components.tsx";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

interface StackCategoryProps {
  title: string;
  items: string[];
  index: number;
  isHighlighted?: boolean;
}

function StackCategory({
  title,
  items,
  index,
  isHighlighted = false,
}: StackCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="mb-3 flex items-center">
        <span
          className={`font-mono ${
            isHighlighted ? "text-orange" : "text-accent"
          } mr-2 text-sm opacity-70`}
        >
          {index < 10 ? `0${index + 1}` : index + 1}
        </span>
        <Typography
          variant="h6"
          className="font-display text-white uppercase tracking-wider"
        >
          {title}
        </Typography>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mt-4">
        {items.map((item, idx) => (
          <div
            key={item}
            className={`border border-white/10 bg-anthracite-900 px-4 py-2 text-sm font-mono text-white/70 hover:border-${
              isHighlighted ? "orange" : "accent"
            }/50 hover:text-${
              isHighlighted ? "orange" : "highlight"
            } transition-colors duration-200`}
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Nouveau composant pour les blocs principaux
interface StackBlockProps {
  title: string;
  icon: React.ReactNode;
  categories: { title: string; items: string[] }[];
  blockIndex: number;
  isHighlighted?: boolean;
}

function StackBlock({
  title,
  icon,
  categories,
  blockIndex,
  isHighlighted = false,
}: StackBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: blockIndex * 0.2 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="mb-8 flex items-center">
        <div
          className={`w-10 h-10 mr-4 border-2 ${
            isHighlighted ? "border-orange" : "border-accent"
          } flex items-center justify-center text-white`}
        >
          {icon}
        </div>
        <Typography
          variant="h4"
          className={`font-display text-white ${
            isHighlighted ? "text-orange" : ""
          }`}
        >
          {title}
        </Typography>
      </div>

      <div
        className={`border-l-2 ${
          isHighlighted ? "border-orange/30" : "border-accent/30"
        } pl-6 py-2`}
      >
        {categories.map((category, idx) => (
          <StackCategory
            key={category.title}
            title={category.title}
            items={category.items}
            index={idx}
            isHighlighted={isHighlighted}
          />
        ))}
      </div>
    </motion.div>
  );
}
export default function TechStack() {
  // Réorganisation des blocs avec Python en premier
  const techBlocks = [
    {
      title: "Python",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      categories: [
        {
          title: "Front-end",
          items: ["streamlit"],
        },
        {
          title: "Back-end",
          items: ["Python", "FastAPI"],
        },
        {
          title: "Spécialités",
          items: ["MinIO", "Llama index", "Pydantic", "Raspberry Pi"],
        },
      ],
    },
    {
      title: "PHP",
      icon: <ServerIcon className="w-6 h-6" />,

      categories: [
        {
          title: "Front-end",
          items: ["Twig", "Symfony UX", "Bootstrap", "Tailwind"],
        },
        {
          title: "Back-end",
          items: ["PHP", "Symfony", "ApiPlatform"],
        },
        {
          title: "Qualité & Tests",
          items: ["PHP-CS-Fixer", "PHPStan", "SonarQube", "PHPUnit", "Sentry"],
        },
      ],
    },
    {
      title: "DevOps",
      icon: <CogIcon className="w-6 h-6" />,
      categories: [
        {
          title: "Conteneurisation & Orchestration",
          items: ["Docker", "Kubernetes", "Docker Compose"],
        },
        {
          title: "CI/CD & Déploiement",
          items: ["GitLab CI/CD", "GitHub Actions", "Azure", "ScaleWay"],
        },
        {
          title: "Monitoring & Observabilité",
          items: ["Prometheus", "Grafana", "Sentry", "SonarQube"],
        },
      ],
    },
    {
      title: "Autre",
      icon: <CommandLineIcon className="w-6 h-6" />,
      categories: [
        {
          title: "Bases de données",
          items: [
            "MySQL",
            "SQLite",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Qdrant",
            "Minio",
          ],
        },
        {
          title: "Architecture & Méthodologies",
          items: ["SOLID", "Lean Development", "Hexagonal Architecture"],
        },
        {
          title: "Outils de développement",
          items: ["VSCode", "Git", "Composer", "npm", "pip"],
        },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-32 px-8 bg-anthracite-950 relative">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-10 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
      </div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12vw] font-display font-black text-white/3 opacity-5 pointer-events-none select-none tracking-tighter">
        STACK
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <Typography
            variant="small"
            className="font-mono text-accent tracking-widest mb-4"
          >
            <span className="inline-block mr-2">&gt;</span>TECHNOLOGIES
          </Typography>
          <Typography
            variant="h2"
            className="text-white font-display font-bold mb-6"
          >
            Ma stack technique
          </Typography>
          <div className="h-px w-24 bg-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {techBlocks.map((block, index) => (
            <StackBlock
              key={block.title}
              title={block.title}
              icon={block.icon}
              categories={block.categories}
              blockIndex={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Typography
            variant="small"
            className="font-mono text-orange tracking-widest mb-4"
          >
            <span className="inline-block mr-2">&gt;</span>FORMATEUR
          </Typography>
          <Typography variant="h5" className="text-white font-display mb-4">
            Compétences enseignées
          </Typography>
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
            {[
              "HTML/CSS",
              "PHP/Symfony",
              "GIT",
              "MySQL/NoSQL/MongoDB",
              "Tests unitaires",
              "Hébergement/Environnement",
              "UI/UX",
              "Gestion de projet",
            ].map((skill, idx) => (
              <div
                key={skill}
                className="border border-orange/30 bg-anthracite-900 px-4 py-2 text-sm font-mono text-white/70"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
