import { motion } from "framer-motion";

const defaultTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  as = "section",
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}
