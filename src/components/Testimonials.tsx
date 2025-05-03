import { Typography } from "../lib/ui-components.tsx";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  index: number;
}

const TestimonialCard = ({ quote, author, index }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="border border-white/10 bg-anthracite-950/40 backdrop-blur-sm p-8 hover:border-accent/50 transition-all duration-300"
  >
    <div className="mb-8 font-display text-4xl text-white/10">"</div>
    <Typography className="mb-6 font-normal text-white/80 italic relative">
      {quote}
    </Typography>
    <div className="flex items-center">
      <div className="w-8 h-px bg-accent mr-4"></div>
      <Typography className="font-mono text-white/50 text-sm uppercase tracking-wider">
        {author}
      </Typography>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Je recommande vivement les services de Rayen ! Le suivi de projet est fluide et limpide. Il a su apporter des idées de conceptions en accord avec les objectifs. Merci pour ton suivi, c'était très agréable de collaborer avec toi ! ",
      author: "Responsable produit, Agence de communication",
    },
    {
      quote:
        "L'expertise technique de Rayen est remarquable. Sa maîtrise des technologies modernes, combinée à sa rigueur et sa créativité, garantit des solutions de haute qualité. Sa capacité à résoudre des problèmes complexes tout en respectant les délais fait de lui un atout précieux.",
      author: "CTO, Startup Tech",
    },
    {
      quote:
        "En tant que formateur, Rayen maîtrise parfaitement la pédagogie. Il a su adapter le contenu à notre équipe et nous a guidés vers des pratiques de développement modernes et efficaces.",
      author: "Responsable formation, École du numérique",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-32 px-8 relative" // Suppression de bg-anthracite-900
    >
      {/* Lignes décoratives */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 opacity-5 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-r border-white/20"></div>
        ))}
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
            <span className="inline-block mr-2">&gt;</span>TÉMOIGNAGES
          </Typography>
          <Typography
            variant="h2"
            className="text-white font-display font-bold mb-6"
          >
            Ce qu'en disent mes clients
          </Typography>
          <div className="h-px w-24 bg-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
