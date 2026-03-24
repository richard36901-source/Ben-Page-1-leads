import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonialsBg from "@/assets/testimonials-bg.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [testimonial1, testimonial2, testimonial3];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const mobileDirections = [30, -30, 30];
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <SectionWrapper bgImage={testimonialsBg} dataSection="נתנו לאנשים שכבר הצליחו לדבר במקומנו">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-foreground mb-4"
          >
            נתנו לאנשים שכבר הצליחו{" "}
            <span className="text-gradient-gold">לדבר במקומנו</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-foreground font-bold"
          >
            אלה לא גורואים.
            <br />
            אלה אנשים רגילים.
          </motion.p>
        </div>

        {isMobile ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{ loop: true, direction: "rtl" }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                      <img
                        src={src}
                        alt={`תמונת הצלחה ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: mobileDirections[index] }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <img
                  src={src}
                  alt={`תמונת הצלחה ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mt-10"
        >
          וזה רק חלק קטן מהסיפורים...
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
