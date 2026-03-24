import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import chainsBg from "@/assets/chains-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const MythSection = () => {
  return (
    <SectionWrapper bgImage={chainsBg} dataSection="בשביל להרוויח כסף צריך המון ידע">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-8 leading-tight">
            ״בשביל להרוויח כסף צריך
            <br />
            <span className="text-gradient-gold">המון ידע, המון זמן, והמון כסף״</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-10"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-destructive mb-4">
            זה לא האמת.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-bold leading-relaxed">
            המיתוס הזה — זה בדיוק מה שעוצר אותך ומפריד בינך לבין התוצאות.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-2xl md:text-3xl font-display font-bold text-primary">
            החסם נמצא במקום אחר לגמרי.
          </p>
          <div className="animate-float">
            <ChevronDown className="w-10 h-10 text-primary" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MythSection;
