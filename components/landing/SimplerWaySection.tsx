import { motion } from "framer-motion";
import knotBg from "@/assets/knot-unravel-bg.jpg";

const SimplerWaySection = () => {
  return (
    <section data-section="במקום לרדוף אחרי לקוחות" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat md:bg-[position:40%_45%] md:bg-[size:110%_auto] bg-[size:100%_auto] bg-[position:center_35%]"
        style={{
          backgroundImage: `url(${knotBg})`,
        }}
      />
      <div className="absolute inset-0 bg-dark-overlay-heavy" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24"
      >
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-foreground leading-tight"
          >
            במקום לרדוף אחרי לקוחות,
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-display text-foreground/80 leading-relaxed"
          >
            אתה מפנה תנועה להצעה{" "}
            <span className="text-gradient-gold font-bold">שכבר ממירה.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-display font-bold text-foreground leading-relaxed"
          >
            מודל מדויק עם תוצאות בשטח.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SimplerWaySection;
