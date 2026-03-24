import { motion } from "framer-motion";
import newWorldBg from "@/assets/new-world-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const ExposureSection = () => {
  return (
    <SectionWrapper bgImage={newWorldBg} dataSection="העולם החדש לא מתגמל אנשים שעובדים קשה">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-3 leading-tight"
        >
          העולם החדש לא מתגמל אנשים שעובדים קשה.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground font-display font-bold mb-20"
        >
          הוא מתגמל אנשים שיודעים לייצר <span className="text-gradient-gold font-bold">חשיפה</span>.
        </motion.p>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 mb-20">
          {/* Old model - strikethrough */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border border-border/40 rounded-2xl py-8 px-10 bg-secondary/30 backdrop-blur-sm"
          >
            <div className="relative inline-flex items-center gap-4 text-2xl md:text-3xl font-display font-black text-foreground/70 x-strikethrough-group">
              <span>כסף</span>
              <span className="text-muted-foreground/30">→</span>
              <span>זמן</span>
            </div>
          </motion.div>

          {/* Chevron - down on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl text-primary font-bold"
          >
            <span className="block md:hidden">⌄</span>
            <span className="hidden md:block">‹</span>
          </motion.div>

          {/* New model - glowing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative border border-primary/30 rounded-2xl py-8 px-10 bg-secondary/30 backdrop-blur-sm glow-gold"
          >
            <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-150" />
            <div className="relative flex items-center gap-4 text-3xl md:text-5xl font-display font-black">
              <span className="text-gradient-gold">חשיפה</span>
              <span className="text-primary">←</span>
              <span className="text-foreground">הכנסות</span>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground"
        >
          בעידן של היום, לא צריך להמיר זמן בכסף. <span className="text-foreground font-bold">צריך להמיר חשיפה לכסף.</span>
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default ExposureSection;
