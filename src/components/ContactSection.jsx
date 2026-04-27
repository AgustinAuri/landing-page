import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "./icons";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedinIcon /> },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <SectionReveal className="contact section section--contrast" as="section" delay={0.16}>
      <div className="container contact__grid" id="contacto">
        <div className="contact__intro">
          <span className="eyebrow">Contacto</span>
          <h2>
            Convierte esta plantilla en la proxima vitrina digital de tu
            cliente.
          </h2>
          <p>
            Personaliza nombre, acento visual, copies y enlaces. El resto ya
            esta preparado para presentar una experiencia profesional de alta
            gama.
          </p>

          <div className="social-links" aria-label="Redes sociales">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {social.icon}
                <span>{social.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            className="button button--whatsapp"
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappIcon />
            Hablar por WhatsApp
          </motion.a>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <label>
            Nombre
            <motion.input
              type="text"
              name="name"
              placeholder="Tu nombre"
              whileFocus={{ scale: 1.01 }}
            />
          </label>

          <label>
            Email
            <motion.input
              type="email"
              name="email"
              placeholder="hola@tuestudio.com"
              whileFocus={{ scale: 1.01 }}
            />
          </label>

          <label>
            Profesion
            <motion.input
              type="text"
              name="profession"
              placeholder="Abogado, odontologo, trainer..."
              whileFocus={{ scale: 1.01 }}
            />
          </label>

          <label>
            Objetivo del proyecto
            <motion.textarea
              name="message"
              rows="5"
              placeholder="Cuéntanos qué necesitas comunicar y qué estilo de marca buscas."
              whileFocus={{ scale: 1.01 }}
            />
          </label>

          <motion.button
            type="submit"
            className="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitted ? "Consulta lista para integrar" : "Enviar consulta"}
          </motion.button>
        </motion.form>
      </div>
    </SectionReveal>
  );
}
