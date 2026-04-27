import { motion } from "framer-motion";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <motion.header
      className="topbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        Atelier White
      </a>

      <nav className="topbar__nav" aria-label="Navegacion principal">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button--ghost" href="#contacto">
        Agenda una demo
      </a>
    </motion.header>
  );
}
