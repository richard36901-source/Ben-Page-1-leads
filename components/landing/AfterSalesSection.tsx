import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import afterSalesBg from "@/assets/after-sales-bg.jpg";
import SectionWrapper from "./SectionWrapper";

const AfterSalesSection = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-20%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <SectionWrapper bgImage={afterSalesBg} dataSection="מה קורה אחרי 4 מכירות?">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-foreground mb-4"
          >
            מה קורה אחרי <span className="text-gradient-gold">4 מכירות?</span>
          </motion.h2>
        </div>

        {/* Chart container */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-4 md:p-12 mb-10 overflow-hidden relative"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10">
            {/* SVG Chart */}
            <div className="relative w-full" style={{ paddingBottom: '65%' }}>
              <svg
                viewBox="0 0 600 330"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="riskFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(0, 70%, 50%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(0, 70%, 50%)" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="profitFill" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="hsl(145, 70%, 45%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(145, 70%, 45%)" stopOpacity="0.02" />
                  </linearGradient>
                  <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(38, 92%, 55%)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={`h-${i}`} x1="60" y1={40 + i * 60} x2="560" y2={40 + i * 60} stroke="hsl(var(--border))" strokeOpacity="0.3" strokeWidth="0.5" />
                ))}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line key={`v-${i}`} x1={60 + i * 100} y1="40" x2={60 + i * 100} y2="280" stroke="hsl(var(--border))" strokeOpacity="0.15" strokeWidth="0.5" />
                ))}

                {/* Risk filled area */}
                <motion.path
                  d="M60,60 C160,70 260,140 360,180 C430,200 500,240 560,260 L560,40 L60,40 Z"
                  fill="url(#riskFill)"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Profit filled area */}
                <motion.path
                  d="M60,260 C160,250 260,200 360,180 C430,165 500,110 560,60 L560,280 L60,280 Z"
                  fill="url(#profitFill)"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Risk line (red) */}
                <motion.path
                  d="M60,60 C160,70 260,140 360,180 C430,200 500,240 560,260"
                  fill="none"
                  stroke="hsl(0, 70%, 55%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ willChange: 'stroke-dashoffset' }}
                  initial={{ pathLength: 0 }}
                  animate={controls}
                  variants={{ visible: { pathLength: 1 } }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                />

                {/* Profit line (green) */}
                <motion.path
                  d="M60,260 C160,250 260,200 360,180 C430,165 500,110 560,60"
                  fill="none"
                  stroke="hsl(145, 70%, 50%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ willChange: 'stroke-dashoffset' }}
                  initial={{ pathLength: 0 }}
                  animate={controls}
                  variants={{ visible: { pathLength: 1 } }}
                  transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
                />

                {/* Intersection glow */}
                <motion.circle
                  cx="360" cy="180" r="14"
                  fill="url(#glowGrad)"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 0.4, delay: 1 }}
                />
                {/* Intersection point */}
                <motion.circle
                  cx="360" cy="180" r="6"
                  fill="hsl(var(--background))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 0.4, delay: 1 }}
                />

                {/* Labels */}
                <text x="75" y="52" fill="hsl(0, 70%, 60%)" fontSize="18" fontWeight="bold" fontFamily="Rubik">Risk</text>
                <text x="75" y="275" fill="hsl(145, 70%, 50%)" fontSize="18" fontWeight="bold" fontFamily="Rubik">Profit</text>
                <text x="530" y="52" fill="hsl(145, 70%, 50%)" fontSize="18" fontWeight="bold" fontFamily="Rubik" textAnchor="end">רווח</text>

                {/* X-axis labels */}
                {["0", "מכירה 1", "מכירה 2", "מכירה 3", "מכירה 4", "מכירה 5+"].map((label, i) => (
                  <text key={i} x={60 + i * 100} y="305" fill="hsl(var(--muted-foreground))" fontSize="14" textAnchor="middle" fontFamily="Rubik">
                    {label}
                  </text>
                ))}

                {/* Annotation */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <path d="M440,140 C420,150 400,165 370,175" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeOpacity="0.7" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--foreground))" fillOpacity="0.7" />
                    </marker>
                  </defs>
                  <text x="420" y="120" fill="hsl(var(--foreground))" fontSize="13" fontFamily="Rubik" textAnchor="start" fontWeight="600">
                    <tspan x="420" dy="0">כיסית את עלות ההכשרה</tspan>
                    <tspan x="420" dy="16">+ נשארת עם רווח.</tspan>
                  </text>
                </motion.g>

                {/* "4 מכירות" label */}
                <motion.text
                  x="360" y="165"
                  fill="hsl(var(--foreground))"
                  fontSize="16" fontFamily="Rubik" fontWeight="bold" textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{ visible: { opacity: 1 } }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  4 מכירות
                </motion.text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Risk Zero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, hsl(145 70% 20% / 0.3), hsl(var(--card)) 50%, hsl(38 92% 40% / 0.2))',
            border: '1px solid hsl(145 50% 40% / 0.3)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-display font-black text-foreground mb-3">
              הסיכון יורד ל<span className="text-primary">אפס</span>.
            </p>
            <p className="text-xl md:text-2xl text-primary font-bold">
              ההכשרה הופכת לחינם.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AfterSalesSection;
