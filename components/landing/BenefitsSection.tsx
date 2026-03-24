import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Rocket } from "lucide-react";

import benefitsBg from "@/assets/benefits-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const benefits = [
  {
    icon: GraduationCap,
    title: "5 הדרכות דיגיטליות",
    description: "שיפתחו לך עולם חדש – בחינם.",
  },
  {
    icon: HeartHandshake,
    title: "ליווי אישי ואנושי",
    description: "לא רובוטים. בן אדם אמיתי שמלווה אותך.",
  },
  {
    icon: Rocket,
    title: "כלים אמיתיים",
    description: "שהמשווקים הכי גדולים משתמשים בהם.",
  },
];

const BenefitsSection = () => {
  return (
    <SectionWrapper bgImage={benefitsBg} dataSection="מה אתם מקבלים?">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-16"
        >
          מה אתם <span className="text-gradient-gold">מקבלים?</span>
        </motion.h2>

        <div className="grid gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 text-right"
            >
              <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, hsl(38 92% 55% / 0.25), hsl(38 92% 35% / 0.1))',
                  boxShadow: '0 0 25px hsl(38 92% 55% / 0.15), inset 0 1px 1px hsl(38 92% 70% / 0.2)',
                  border: '1px solid hsl(38 92% 55% / 0.3)',
                }}
              >
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-primary drop-shadow-[0_0_8px_hsl(38_92%_55%_/_0.4)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BenefitsSection;
