import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const locationData = {
  label: "Ubicacion",
  title: "Muestra tu direccion con un mapa listo para personalizar.",
  description:
    "Esta seccion permite que cada cliente exhiba su consultorio, estudio o espacio de atencion con una referencia visual clara y un acceso rapido a indicaciones.",
  address: "Av. Santa Fe 2450, Palermo, Buenos Aires",
  schedule: "Lunes a Viernes, de 9:00 a 19:00",
  ctaLabel: "Abrir en Google Maps",
  ctaHref: "https://maps.google.com/?q=Av.+Santa+Fe+2450,+Palermo,+Buenos+Aires",
  embedTitle: "Mapa de ubicacion del consultorio",
  embedSrc:
    "https://www.google.com/maps?q=Av.+Santa+Fe+2450,+Palermo,+Buenos+Aires&z=15&output=embed",
};

export function LocationSection() {
  return (
    <SectionReveal className="location section" as="section" delay={0.18}>
      <div className="container location__grid">
        <div className="location__content">
          <span className="eyebrow">{locationData.label}</span>
          <h2>{locationData.title}</h2>
          <p>{locationData.description}</p>

          <div className="location__details">
            <div className="location-card">
              <span>Direccion</span>
              <strong>{locationData.address}</strong>
            </div>
            <div className="location-card">
              <span>Horario</span>
              <strong>{locationData.schedule}</strong>
            </div>
          </div>

          <motion.a
            className="button"
            href={locationData.ctaHref}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {locationData.ctaLabel}
          </motion.a>
        </div>

        <motion.div
          className="location__map-frame"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            title={locationData.embedTitle}
            src={locationData.embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </SectionReveal>
  );
}
