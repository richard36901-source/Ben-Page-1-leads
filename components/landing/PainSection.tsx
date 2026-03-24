import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cycleBg from "@/assets/cycle-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const PainSection = () => {
  return (
    <SectionWrapper bgImage={cycleBg} dataSection="אם כל חודש אתה מתחיל מאפס">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-foreground leading-relaxed"
        >
          אם כל חודש אתה מתחיל מאפס —
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-gradient-gold leading-tight"
        >
          אתה תמיד מחליף זמן בכסף
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-display leading-relaxed">
            השווקים בדיגיטל מאפשרים לנו
          </p>
          <p className="text-xl md:text-2xl font-display leading-relaxed">
            <span className="font-bold text-foreground">לצאת מהמעגל הזה</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-float mx-auto" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default PainSection;
