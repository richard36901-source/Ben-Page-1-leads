import { motion } from "framer-motion";
import { Users, LayoutTemplate, TrendingUp, Coins } from "lucide-react";
import painBg from "@/assets/pain-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    emoji: "1️⃣",
    title: "מדריך צמוד – לא נשאר לבד",
    text: "אתה לא מנחש. אתה עובד עם ליווי אישי שמכוון אותך צעד־אחר־צעד.",
    icon: Users,
  },
  {
    emoji: "2️⃣",
    title: "פאנל שיווקי בנוי מראש",
    text: "אתה לא בונה מאפס. אתה נכנס למנגנון שכבר יודע להמיר חשיפה לעמלה.",
    icon: LayoutTemplate,
  },
  {
    emoji: "3️⃣",
    title: "יחס המרה גבוה ומוכח",
    text: 'החשיפה מפייסבוק לא "מתבזבזת" — היא מתורגמת לפעולה ולרווח.',
    icon: TrendingUp,
  },
  {
    emoji: "4️⃣",
    title: "מינוף תקציב חכם",
    text: "בממוצע, השקעה של 150–250 ₪ יכולה לייצר כ־800 ₪ עמלה.",
    icon: Coins,
  },
];

const MethodSection = () => {
  return (
    <SectionWrapper bgImage={painBg} dataSection="איך השיטה עובדת?">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-gradient-gold mb-6"
        >
          איך השיטה עובדת?
        </motion.h2>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-secondary/60 backdrop-blur-sm rounded-lg p-6 border border-border"
          >
            <step.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <p className="text-lg font-display font-bold text-foreground mb-1">
                {step.title}
              </p>
              <p className="text-foreground/90 leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MethodSection;
