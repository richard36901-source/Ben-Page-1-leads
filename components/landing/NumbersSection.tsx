import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import moneyBg from "@/assets/money-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const NumbersSection = () => {
  return (
    <SectionWrapper bgImage={moneyBg} dataSection="איך זה נראה במספרים?">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-6"
        >
          איך זה נראה <span className="text-gradient-gold">במספרים?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-3xl p-10 md:p-16 glow-gold"
        >
          <div className="mb-8">
            <p className="text-muted-foreground text-lg mb-2">עמלה על כל ליד רוכש</p>
            <p className="text-6xl md:text-8xl font-display font-black text-gradient-gold">
              ₪800
            </p>
          </div>

          <div className="h-px bg-border my-8" />

          <div className="space-y-4 text-xl text-foreground/90">
            <p><span className="text-primary">✔</span> העמלה מכסה את הוצאות הפרסום</p>
            <p><span className="text-primary">✔</span> ונותנת <span className="text-primary font-bold">רווח נוסף מעבר</span></p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl text-primary font-display font-bold mt-10 flex items-center justify-center gap-3"
        >
          <TrendingUp className="w-7 h-7" />
          הכסף שמרוויחים — מדבר בעד עצמו
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default NumbersSection;
