import { motion } from "framer-motion";
import { X as XIcon } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import modelBg from "@/assets/model-bg.jpg";

const ModelSection = () => {
  return (
    <SectionWrapper bgImage={modelBg} dataSection="המודל — פשוט ועובד">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-14"
        >
          המודל — <span className="text-gradient-gold">פשוט ועובד</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card/70 backdrop-blur-sm border border-border rounded-3xl p-12 md:p-20 mb-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-3xl md:text-5xl font-display font-black">
            <span className="text-foreground">4 לידים רוכשים</span>
            <XIcon className="w-8 h-8 text-primary" />
            <span className="text-foreground">₪800</span>
            <span className="text-primary">=</span>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="mt-12 relative"
          >
            <div className="inline-block relative">
              <span className="text-5xl md:text-7xl font-display font-black text-gradient-gold">
                ₪3,200
              </span>
              {/* Hand-drawn circle effect */}
              <svg
                className="absolute -inset-4 md:-inset-6 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] h-[calc(100%+2rem)] md:h-[calc(100%+3rem)]"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="100"
                  cy="40"
                  rx="95"
                  ry="35"
                  stroke="hsl(38 92% 55%)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  transform="rotate(-2 100 40)"
                  opacity="0.8"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ModelSection;
