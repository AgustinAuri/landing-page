import { SectionReveal } from "./SectionReveal";
import officeImage from "../../recursos/ChatGPT Image 28 abr 2026, 06_42_00 p.m..png";
import smileImage from "../../recursos/ChatGPT Image 28 abr 2026, 06_51_23 p.m..png";

export function StorySection() {
  return (
    <SectionReveal className="story section section--muted" as="section" delay={0.08}>
      <div className="container story__grid" id="historia">
        <div className="story__visuals">
          <figure className="story__frame story__frame--large">
            <img
              src={officeImage}
              alt="Consultorio moderno con equipamiento odontologico"
            />
          </figure>
          <figure className="story__frame story__frame--small">
            <img
              src={smileImage}
              alt="Sonrisa saludable enmarcada con las manos"
            />
          </figure>
        </div>

        <div className="story__content">
          <div className="section-heading">
            <span className="eyebrow">Nuestra historia</span>
            <h2>
              Creamos una base premium para que cada profesional proyecte
              orden, criterio y autoridad.
            </h2>
          </div>
          <p>
            Esta landing nace como un producto de marca blanca pensado para
            estudios juridicos, clinicas, consultorios y servicios
            independientes que no quieren una web generica.
          </p>
          <p>
            La arquitectura visual reduce ruido, prioriza el mensaje y mantiene
            una estetica sobria que puede adoptar el acento cromatico de cada
            cliente sin rehacer el sistema completo.
          </p>
          <div className="story__quote">
            <span />
            <p>
              Una presencia premium no depende de adornos. Depende de claridad,
              ritmo visual y confianza.
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
