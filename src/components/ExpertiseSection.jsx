import { SectionReveal } from "./SectionReveal";

const specialties = [
  {
    title: "Abogados",
    description:
      "Mensajes orientados a autoridad, reputacion y captacion de consultas calificadas.",
  },
  {
    title: "Odontologos",
    description:
      "Una presentacion limpia para transmitir precision, cuidado y experiencia clinica.",
  },
  {
    title: "Personal Trainers",
    description:
      "Narrativa energica con enfoque en resultados, cercania y conversion directa.",
  },
];

const differentiators = [
  "Sistema visual adaptable a cualquier marca personal o corporativa.",
  "Animaciones suaves para elevar la percepcion sin distraer del contenido.",
  "Formulario y CTA pensados para generar conversaciones de alto valor.",
];

export function ExpertiseSection() {
  return (
    <SectionReveal className="expertise section" as="section" delay={0.12}>
      <div className="container" id="especialidades">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Sectores objetivo</span>
            <h2>Lista para venderse a multiples nichos profesionales.</h2>
          </div>
          <p>
            La propuesta esta construida para que el cliente final solo cambie
            texto, imagenes y color de acento sin tocar la estructura principal.
          </p>
        </div>

        <div className="card-grid">
          {specialties.map((specialty, index) => (
            <article key={specialty.title} className="info-card">
              <span className="info-card__index">0{index + 1}</span>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </article>
          ))}
        </div>

        <div className="expertise__banner">
          {differentiators.map((item) => (
            <div key={item} className="pill-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
