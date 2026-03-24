import { motion } from "framer-motion";
import mechanismBg from "@/assets/mechanism-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const MechanismSection = () => {
  return (
    <SectionWrapper bgImage={mechanismBg} dataSection="ברגע שיש לך מנגנון באוויר">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-foreground leading-relaxed"
        >
          ברגע שיש לך <span className="text-gradient-gold font-black">מנגנון באוויר</span> —
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-3xl md:text-5xl font-display font-black text-gradient-gold leading-tight">
            הדברים מתחילים לקרות.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-xl md:text-3xl font-display font-bold text-foreground leading-relaxed">
            החשיפה זזה.
          </p>
          <p className="text-xl md:text-3xl font-display font-bold text-foreground leading-relaxed">
            אנשים נכנסים.
          </p>
          <p className="text-xl md:text-3xl font-display font-bold text-gradient-gold leading-relaxed">
            עמלות נסגרות.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-4 space-y-2"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-display leading-relaxed">
            לא כי אתה עובד יותר.
          </p>
          <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed">
            כי <span className="text-gradient-gold font-black">בנית משהו שעובד.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <button
            onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-xl md:text-2xl rounded-xl px-10 py-5 transition-all duration-300 glow-gold hover:scale-[1.02]"
          >
            אני רוצה לבנות מנגנון כזה
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MechanismSection;
