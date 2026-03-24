import { motion } from "framer-motion";
import { Building2, Users, Wrench, CheckCircle } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";
import SectionWrapper from "./SectionWrapper";

const facts = [
  { icon: Building2, text: "תאגיד פעיל משנת 2017, המתמחה בבניית תהליכים שמציירים תוצאות מוכחות בשטח" },
  { icon: Users, text: "מאז הקמתו, התאגיד ליווה אלפי אנשים בתהליכים פרקטיים של בניית הכנסה, חיזוק שליטה פיננסית ויצירת נכסים דיגיטליים" },
  { icon: Wrench, text: "לא מנטורים שמוכרים חלומות- אנו עובדים לפי מודלים מוכחים שנבחנו לאורך שנים מתוך ניסיון אמיתי מול קהל לקוחות מגוון, ומראים תוצאות על בסיס חוכמת ההמונים" },
  { icon: CheckCircle, text: "שיטות פרקטיות שעובדות בשטח — לא תיאוריות" },
];

const AboutSection = () => {
  return (
    <section data-section="מי אנחנו?" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background photo */}
      <div className="absolute inset-0">
        <img
          src={ownerPhoto}
          alt=""
          className="w-full h-full object-cover object-top md:object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-[55vh] pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-lg text-primary font-semibold mb-1">מי אנחנו?</p>
          <h2 className="text-3xl md:text-4xl font-display font-black text-gradient-gold mb-2">
            אונליין דיגיטל
          </h2>
           <p className="text-2xl md:text-3xl text-foreground font-display font-bold mb-1">בן נחום</p>
          <p className="text-lg md:text-xl text-muted-foreground font-semibold mb-4">מייסד ובעלים</p>
          <a
            href="https://www.instagram.com/ben_nahum_1?igsh=a3hiZXNnc3RtZ2Vy&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="text-sm font-medium">@ben_nahum_1</span>
          </a>
        </motion.div>

        <div className="space-y-3">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground">{fact.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
