import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const trustMetrics = [
  { value: "48h", label: "para lanzar una version demo personalizada" },
  { value: "+32%", label: "de mejora visual percibida en auditorias internas" },
  { value: "100%", label: "editable para cualquier identidad profesional" },
];

export function HeroSection() {
  return (
    <SectionReveal className="hero section" as="section">
      <div className="container hero__grid" id="inicio">
        <div className="hero__content">
          <span className="eyebrow">Landing page premium de marca blanca</span>
          <h1>
            Una presencia digital elegante para profesionales que venden
            confianza antes de la primera llamada.
          </h1>
          <p className="hero__lede">
            Diseñada para abogados, odontologos, coaches y personal trainers
            que necesitan una web clara, refinada y lista para personalizar con
            su propia marca.
          </p>

          <div className="hero__actions">
            <motion.a
              className="button"
              href="#contacto"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar propuesta
            </motion.a>
            <motion.a
              className="button button--secondary"
              href="#historia"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar la experiencia
            </motion.a>
          </div>
        </div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero-card">
            <p className="hero-card__label">Edicion White Label</p>
            <h2>Minimalismo tecnico. Conversion premium.</h2>
            <p>
              Un layout limpio, secciones estrategicas y una narrativa adaptable
              para servicios de alto valor.
            </p>
            <div className="hero-card__list">
              {trustMetrics.map((metric) => (
                <div key={metric.value} className="metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
