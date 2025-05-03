import React, { useState } from "react";
import { Button, Typography, Input, Textarea } from "../lib/ui-components";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  EnvelopeIcon,
  CalendarIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaToken) {
      setResult("Veuillez compléter le captcha");
      setStatus("error");
      return;
    }

    setResult("Envoi en cours...");
    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    // Ajout du token captcha
    formData.append("h-captcha-response", captchaToken);

    // Clé d'accès Web3Forms
    formData.append("access_key", "af1bf348-ef95-43df-8ff4-585315310190");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès!");
        setStatus("success");
        (event.target as HTMLFormElement).reset();
        setCaptchaToken(null); // Réinitialiser le captcha
      } else {
        console.log("Erreur", data);
        setResult(data.message || "Une erreur s'est produite");
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur", error);
      setResult("Une erreur s'est produite lors de l'envoi");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-anthracite-950 relative">
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
            <span className="inline-block mr-2">&gt;</span>CONTACT
          </Typography>
          <Typography
            variant="h2"
            className="text-white font-display font-bold mb-6"
          >
            Discutons de votre projet
          </Typography>
          <div className="h-px w-24 bg-accent mx-auto mb-8"></div>
          <Typography className="text-white/70">
            Vous avez une idée à concrétiser ou une problématique technique à
            résoudre? Je peux vous aider à trouver la solution adaptée.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10 bg-anthracite-900 p-8 h-full">
              <Typography
                variant="h5"
                className="font-mono text-white uppercase tracking-wider mb-8"
              >
                Informations
              </Typography>

              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-6">
                    <CalendarIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="font-mono text-white mb-2 uppercase tracking-wider text-sm"
                    >
                      Disponibilité
                    </Typography>
                    <Typography className="text-white/70">
                      Projets courts uniquement (soir / week-end)
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-6">
                    <DocumentTextIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="font-mono text-white mb-2 uppercase tracking-wider text-sm"
                    >
                      Confidentialité
                    </Typography>
                    <Typography className="text-white/70">
                      Missions sous NDA possibles
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-6">
                    <EnvelopeIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="font-mono text-white mb-2 uppercase tracking-wider text-sm"
                    >
                      Email
                    </Typography>
                    <Typography className="text-white/70">
                      boumaza.rayen@outlook.fr
                    </Typography>
                  </div>
                </div>
              </div>

              {/* <a
                href="/cv.pdf"
                className="inline-flex items-center text-accent hover:text-highlight transition-colors duration-300 font-mono text-sm"
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Télécharger mon CV / Portfolio PDF
              </a> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10 bg-anthracite-900 p-8">
              <Typography
                variant="h5"
                className="font-mono text-white uppercase tracking-wider mb-8"
              >
                Envoyez-moi un message
              </Typography>
              <form onSubmit={onSubmit} className="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    color="primary"
                    label="Nom complet"
                    name="name"
                    required
                    size="lg"
                    className="border-white/20 !bg-anthracite-950 text-white placeholder-white/30"
                    style={{ backgroundColor: "#121212" }}
                    labelprops={{ className: "text-white" }}
                  />
                  <Input
                    color="primary"
                    label="Email"
                    name="email"
                    required
                    type="email"
                    size="lg"
                    className="border-white/20 !bg-anthracite-950 text-white placeholder-white/30"
                    style={{ backgroundColor: "#121212" }}
                    labelprops={{ className: "text-white" }}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    color="primary"
                    label="Sujet"
                    name="subject"
                    required
                    size="lg"
                    className="border-white/20 !bg-anthracite-950 text-white placeholder-white/30"
                    style={{ backgroundColor: "#121212" }}
                    labelprops={{ className: "text-white" }}
                  />
                </div>
                <div className="mb-8">
                  <Textarea
                    color="primary"
                    label="Votre message"
                    name="message"
                    required
                    rows={5}
                    className="border-white/20 !bg-anthracite-950 text-white placeholder-white/30 resize-none"
                    style={{ backgroundColor: "#121212" }}
                    labelprops={{ className: "text-white" }}
                  />
                </div>

                {/* Intégration du hCaptcha */}
                <div className="mb-6 flex justify-center">
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                    theme="dark"
                    size="normal"
                  />
                </div>

                {status !== "idle" && (
                  <div
                    className={`mb-6 p-3 border ${
                      status === "success"
                        ? "border-green-400/30 bg-green-400/10 text-green-400"
                        : status === "error"
                        ? "border-red-400/30 bg-red-400/10 text-red-400"
                        : "border-blue-400/30 bg-blue-400/10 text-blue-400"
                    } rounded`}
                  >
                    <div className="flex items-center">
                      {status === "success" ? (
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                      ) : status === "error" ? (
                        <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                      ) : null}
                      <span className="text-sm">{result}</span>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  disabled={status === "loading" || !captchaToken}
                  className="border-0 bg-accent hover:bg-accent/90 py-3 font-mono uppercase tracking-wider disabled:opacity-50"
                >
                  <span className="mr-2">&gt;</span>
                  {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
              <style>
                {`
                  .contact-form label {
                    color: white !important;
                  }
                `}
              </style>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
