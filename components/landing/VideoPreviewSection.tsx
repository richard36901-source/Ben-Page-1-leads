import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import videoPreviewBg from "@/assets/video-preview-bg.jpg";

const videos = ["/videos/video-2.mp4"];

const VideoPreviewSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Pause other video if playing
    if (playingIndex !== null && playingIndex !== index) {
      videoRefs.current[playingIndex]?.pause();
    }

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <SectionWrapper bgImage={videoPreviewBg} dataSection="קבלו הצצה קטנה לאיך זה באמת עובד">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-14 leading-tight"
        >
          קבלו הצצה קטנה לאיך זה{" "}
          <span className="text-gradient-gold">באמת עובד</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {videos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-card border border-border rounded-2xl overflow-hidden aspect-video cursor-pointer group shadow-2xl"
              onClick={() => togglePlay(index)}
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={`${src}#t=0.5`}
                className="w-full h-full object-cover"
                playsInline
                preload="auto"
                onEnded={() => setPlayingIndex(null)}
                poster=""
              />
              {playingIndex !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="https://teachdigitalonline.ravpage.co.il/digitalnew1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-xl md:text-2xl rounded-xl py-5 px-10 transition-all duration-300 glow-gold hover:scale-[1.02]"
          >
            לכל ההדרכות החינמיות
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default VideoPreviewSection;
