import React from "react";
import { Typography } from "../lib/ui-components";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon,
  AcademicCapIcon,
  CogIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
  index: number;
}

function ServiceCard({
  icon,
  title,
  children,
  delay = 0,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group border border-white/10 relative"
    >
      <div className="p-8 h-full transition-colors duration-300 hover:bg-anthracite-900">
        <div className="mb-6 flex items-center">
          <div className="w-10 h-10 mr-4 border-2 border-accent flex items-center justify-center text-white">
            {icon}
          </div>
          <Typography
            variant="h5"
            className="font-mono uppercase tracking-wider text-white group-hover:text-accent transition-colors duration-300"
          >
            {title}
          </Typography>
        </div>

        <div className="absolute top-8 right-8 font-mono text-6xl font-bold text-white/5 select-none">
          0{index + 1}
        </div>

        <Typography className="font-normal text-white/70 z-10 relative">
          {children}
        </Typography>

        <div className="mt-8 h-px w-full bg-white/10 group-hover:bg-accent/30 transition-colors duration-300"></div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <ServerIcon className="w-6 h-6" />,
      title: "Architecture & Back-End",
      description:
        "Conception de systèmes robustes et évolutifs adaptés à vos besoins métier. Développement d'applications performantes avec des interfaces efficaces et une structure de code maintenable sur le long terme.",
    },
    {
      icon: <CogIcon className="w-6 h-6" />,
      title: "DevOps & CI/CD",
      description:
        "Mise en place d'environnements de déploiement automatisés et sécurisés. Amélioration des processus de livraison pour garantir des mises en production fluides et sans interruption de service.",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Sécurité & Monitoring",
      description:
        "Protection de vos données sensibles et surveillance proactive des applications. Développement de solutions fiables avec systèmes de sauvegarde et plans de continuité d'activité en cas d'incidents.",
    },
    {
      icon: <CommandLineIcon className="w-6 h-6" />,
      title: "Outils & Automatisation",
      description:
        "Création de solutions sur mesure pour optimiser vos processus métier. Automatisation des tâches répétitives et mise en place d'outils adaptés à vos besoins spécifiques pour gagner en productivité.",
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Lead Technique",
      description:
        "Pilotage d'équipes de développement avec méthodologies agiles. Définition des bonnes pratiques, accompagnement des développeurs et garantie de la cohérence technique des projets à fort enjeu.",
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      title: "Formation",
      description:
        "Transmission de compétences techniques et méthodologiques avec une approche pragmatique. Animation d'ateliers et élaboration de supports pédagogiques adaptés à différents niveaux d'expertise.",
    },
  ];

  return (
    <section id="services" className="py-32 px-8 bg-anthracite-950">
      <div className="container mx-auto">
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
            <span className="inline-block mr-2">&gt;</span>CE QUE JE PROPOSE
          </Typography>
          <Typography
            variant="h2"
            className="text-white font-display font-bold mb-6"
          >
            Services & Expertises
          </Typography>
          <div className="h-px w-24 bg-accent mx-auto mb-8"></div>
          <Typography className="text-white/70">
            Développeur back-end et formateur avec 5 ans d'expérience,
            spécialisé dans la conception d'architectures robustes et la
            direction technique d'équipes de développement.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              delay={0.1 * index}
              index={index}
            >
              {service.description}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
