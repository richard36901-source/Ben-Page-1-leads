import { motion } from "framer-motion";
import { Wifi, Cpu, Radar, ArrowLeft } from "lucide-react";
import stepsBg from "@/assets/steps-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    icon: Wifi,
    number: "01",
    title: "חיבור להזדמנות קיימת",
    description: "מתחברים למערכת שכבר עובדת ומייצרת תוצאות",
  },
  {
    icon: Cpu,
    number: "02",
    title: "תהליך פשוט",
    description: "עוקבים אחרי מתודולוגיה ברורה — צעד אחר צעד",
  },
  {
    icon: Radar,
    number: "03",
    title: "חשיפה חכמה",
    description: "מפעילים חשיפה ממוקדת שמייצרת תוצאות אמיתיות",
  },
];

const StepsSection = () => {
  return (
    <SectionWrapper bgImage={stepsBg} dataSection="השיטה ב-3 שלבים פשוטים">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-4"
        >
          השיטה ב-<span className="text-gradient-gold">3 שלבים פשוטים</span>
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0 mb-14">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-8 text-center flex-1 min-w-[240px]"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-display font-black text-sm">{step.number}</span>
              <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
            {index < steps.length - 1 && (
              <ArrowLeft className="hidden md:block w-8 h-8 text-primary mx-2 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-xl md:text-2xl text-foreground font-display font-bold"
      >
        לא צריך לבנות משהו מאפס —{" "}
        <span className="text-primary font-semibold">פשוט מתחברים למודל קיים.</span>
      </motion.p>
    </SectionWrapper>
  );
};

export default StepsSection;
