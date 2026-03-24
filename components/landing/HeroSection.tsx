import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import SectionWrapper from "./SectionWrapper";

const HeroSection = () => {
  return (
    <section data-section="הדרך להשיג את התוצאה שאתה מחפש" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsla(220, 25%, 3%, 0.78) 0%, hsla(220, 25%, 3%, 0.88) 100%)' }} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24"
      >
      <div className="text-center flex flex-col items-center justify-center min-h-[70vh]">
        <motion.img
          src={logo}
          alt="דיגיטל אונליין"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-72 md:w-[28rem] lg:w-[32rem] mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-8"
        >
          <span className="text-foreground">הדרך להשיג את התוצאה שאתה מחפש</span>
          <br />
          <span className="text-gradient-gold">הרבה יותר פשוטה ממה שסיפרו לך</span>
        </motion.h1>
        

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-base text-foreground font-semibold mb-12"
        >
          (5 דקות קריאה שיפתחו לך דרך חדשה לגמרי להבין מה זה פרנסה מהשווקים המודרניים)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="animate-float"
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
