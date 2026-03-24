import { motion } from "framer-motion";
import digitalDemandBg from "@/assets/digital-demand-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const BeliefSection = () => {
  return (
    <SectionWrapper bgImage={digitalDemandBg} dataSection="הדיגיטל כבר מלא בקהל">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-foreground leading-relaxed"
        >
          הדיגיטל כבר מלא ב<span className="text-gradient-gold font-black">קהל.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-foreground leading-relaxed"
        >
          מלא ב<span className="text-gradient-gold font-black">ביקוש.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-gradient-gold leading-tight"
        >
          מלא בכסף.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default BeliefSection;
