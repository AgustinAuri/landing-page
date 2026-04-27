import { SectionReveal } from "./SectionReveal";

export function StorySection() {
  return (
    <SectionReveal className="story section section--muted" as="section" delay={0.08}>
      <div className="container story__grid" id="historia">
        <div className="section-heading">
          <span className="eyebrow">Nuestra historia</span>
          <h2>
            Creamos una base premium para que cada profesional proyecte orden,
            criterio y autoridad.
          </h2>
        </div>

        <div className="story__content">
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
