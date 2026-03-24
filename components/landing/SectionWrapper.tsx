import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  bgImage?: string;
  className?: string;
  id?: string;
  dataSection?: string;
}

const SectionWrapper = ({ children, bgImage, className = "", id, dataSection }: SectionWrapperProps) => {
  return (
    <section id={id} data-section={dataSection} className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-dark-overlay-heavy" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
