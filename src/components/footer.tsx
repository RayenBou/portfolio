import { Typography } from "../lib/ui-components.tsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation items dans le même ordre que la navbar
  const navItems = [
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Projets", href: "#projects" },
    { label: "Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="px-8 py-16 bg-anthracite-900 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Typography variant="h6" className="font-display text-white mb-6">
              <span className="relative w-8 h-8 bg-accent mr-2 inline-flex items-center justify-center">
                <span className="relative z-10">R</span>
                <span className="absolute -top-1 -right-1 h-[2px] w-[6px] bg-white"></span>
                <span className="absolute -bottom-1 -left-1 h-[2px] w-[6px] bg-white"></span>
              </span>
              <span className="font-bold">RAYEN.DEV</span>
            </Typography>
            <Typography className="text-white/60 font-normal mb-6">
              Développeur web & logiciels Back-end.
              <br />
              Solutions techniques sur mesure pour entreprises exigeantes.
            </Typography>
          </div>

          <div>
            <Typography
              variant="small"
              className="font-mono text-accent tracking-widest mb-4"
            >
              <span className="inline-block mr-2">&gt;</span>MENU
            </Typography>
            <div className="space-y-3 mt-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="link-accent block text-white/60 hover:text-white transition-colors duration-300 font-mono text-sm"
                >
                  <span className="text-accent font-bold mr-2">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <Typography
              variant="small"
              className="font-mono text-accent tracking-widest mb-4"
            >
              <span className="inline-block mr-2">&gt;</span>CONTACT
            </Typography>
            <div className="mt-6">
              <a
                href="mailto:boumaza.rayen@outlook.fr"
                className="link-white flex items-center text-white/60 hover:text-white transition-colors duration-300 mb-3 font-mono text-sm"
              >
                <span className="mr-2 text-accent">@</span>
                boumaza.rayen@outlook.fr
              </a>

              <a
                href="#contact"
                className="link-white flex items-center mb-6 text-white/60 hover:text-white transition-colors duration-300 font-mono text-sm"
              >
                <span className="mr-2 text-accent">#</span>
                Formulaire de contact
              </a>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com/RayenBou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-accent transition-colors p-2 border border-white/10 hover:border-accent"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rayen-boumaza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-accent transition-colors p-2 border border-white/10 hover:border-accent"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between">
          <Typography variant="small" className="font-mono text-white/40">
            &copy; {currentYear} RAYEN.DEV — ALL RIGHTS RESERVED
          </Typography>
          <a
            href="#"
            className="link-accent font-mono text-white/40 hover:text-white transition-colors text-sm flex items-center mt-4 md:mt-0"
          >
            <span className="mr-2">^</span>
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}
