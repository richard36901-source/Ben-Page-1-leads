import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Accessibility, ZoomIn, ZoomOut, Type, MousePointer, Eye, Contrast, RotateCcw, Link2, Pause, BookOpen } from "lucide-react";

interface AccessibilityState {
  fontSize: number;
  contrast: "normal" | "high" | "inverted";
  grayscale: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  readableFont: boolean;
  pauseAnimations: boolean;
  lineHeight: number;
  letterSpacing: number;
  textAlign: "default" | "left" | "center" | "right";
}

const defaultState: AccessibilityState = {
  fontSize: 100,
  contrast: "normal",
  grayscale: false,
  highlightLinks: false,
  bigCursor: false,
  readableFont: false,
  pauseAnimations: false,
  lineHeight: 100,
  letterSpacing: 0,
  textAlign: "default",
};

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<AccessibilityState>(() => {
    try {
      const saved = localStorage.getItem("accessibility");
      return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
    } catch {
      return defaultState;
    }
  });

  const applyStyles = useCallback((s: AccessibilityState) => {
    const html = document.documentElement;
    html.style.fontSize = s.fontSize + "%";

    // Contrast
    html.classList.toggle("accessibility-high-contrast", s.contrast === "high");
    html.classList.toggle("accessibility-inverted", s.contrast === "inverted");

    // Grayscale
    html.classList.toggle("accessibility-grayscale", s.grayscale);

    // Highlight links
    html.classList.toggle("accessibility-highlight-links", s.highlightLinks);

    // Big cursor
    html.classList.toggle("accessibility-big-cursor", s.bigCursor);

    // Readable font
    html.classList.toggle("accessibility-readable-font", s.readableFont);

    // Pause animations
    html.classList.toggle("accessibility-pause-animations", s.pauseAnimations);

    // Line height
    html.style.setProperty("--a11y-line-height", s.lineHeight === 100 ? "" : (s.lineHeight / 100 * 1.6).toString());

    // Letter spacing
    html.style.setProperty("--a11y-letter-spacing", s.letterSpacing === 0 ? "" : s.letterSpacing + "px");

    // Text align
    html.classList.remove("accessibility-align-left", "accessibility-align-center", "accessibility-align-right");
    if (s.textAlign !== "default") {
      html.classList.add(`accessibility-align-${s.textAlign}`);
    }
  }, []);

  useEffect(() => {
    applyStyles(state);
    localStorage.setItem("accessibility", JSON.stringify(state));
  }, [state, applyStyles]);

  const update = (partial: Partial<AccessibilityState>) => {
    setState(prev => ({ ...prev, ...partial }));
  };

  const reset = () => {
    setState(defaultState);
  };

  const options = [
    {
      label: "הגדלת טקסט",
      icon: ZoomIn,
      action: () => update({ fontSize: Math.min(state.fontSize + 10, 200) }),
      active: state.fontSize > 100,
    },
    {
      label: "הקטנת טקסט",
      icon: ZoomOut,
      action: () => update({ fontSize: Math.max(state.fontSize - 10, 80) }),
      active: state.fontSize < 100,
    },
    {
      label: "ניגודיות גבוהה",
      icon: Contrast,
      action: () => update({ contrast: state.contrast === "high" ? "normal" : "high" }),
      active: state.contrast === "high",
    },
    {
      label: "צבעים הפוכים",
      icon: Eye,
      action: () => update({ contrast: state.contrast === "inverted" ? "normal" : "inverted" }),
      active: state.contrast === "inverted",
    },
    {
      label: "גווני אפור",
      icon: Eye,
      action: () => update({ grayscale: !state.grayscale }),
      active: state.grayscale,
    },
    {
      label: "הדגשת קישורים",
      icon: Link2,
      action: () => update({ highlightLinks: !state.highlightLinks }),
      active: state.highlightLinks,
    },
    {
      label: "סמן גדול",
      icon: MousePointer,
      action: () => update({ bigCursor: !state.bigCursor }),
      active: state.bigCursor,
    },
    {
      label: "גופן קריא",
      icon: Type,
      action: () => update({ readableFont: !state.readableFont }),
      active: state.readableFont,
    },
    {
      label: "עצירת אנימציות",
      icon: Pause,
      action: () => update({ pauseAnimations: !state.pauseAnimations }),
      active: state.pauseAnimations,
    },
    {
      label: "מרווח שורות",
      icon: BookOpen,
      action: () => update({ lineHeight: state.lineHeight >= 200 ? 100 : state.lineHeight + 25 }),
      active: state.lineHeight > 100,
    },
    {
      label: "מרווח אותיות",
      icon: Type,
      action: () => update({ letterSpacing: state.letterSpacing >= 5 ? 0 : state.letterSpacing + 1 }),
      active: state.letterSpacing > 0,
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="הגדרות נגישות"
        className="fixed left-4 bottom-4 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          background: "linear-gradient(135deg, hsl(38 92% 55%), hsl(45 100% 70%))",
          color: "hsl(220 25% 5%)",
        }}
      >
        <Accessibility className="w-7 h-7" />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-[9999] w-80 max-w-[90vw] overflow-y-auto"
              style={{
                background: "hsl(220 20% 9%)",
                borderRight: "1px solid hsl(220 15% 18%)",
              }}
              dir="rtl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "hsl(220 15% 18%)" }}>
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5" style={{ color: "hsl(38 92% 55%)" }} />
                  <h2 className="text-lg font-bold" style={{ color: "hsl(40 15% 92%)" }}>
                    הגדרות נגישות
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="סגור תפריט נגישות"
                  className="p-1 rounded-md transition-colors hover:bg-white/10"
                  style={{ color: "hsl(40 15% 92%)" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Options grid */}
              <div className="grid grid-cols-2 gap-3 p-4">
                {options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={opt.action}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all border"
                    style={{
                      background: opt.active ? "hsla(38, 92%, 55%, 0.15)" : "hsl(220 15% 14%)",
                      borderColor: opt.active ? "hsl(38 92% 55%)" : "hsl(220 15% 18%)",
                      color: opt.active ? "hsl(38 92% 55%)" : "hsl(40 15% 85%)",
                    }}
                  >
                    <opt.icon className="w-6 h-6" />
                    <span className="text-xs font-medium leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>

              {/* Reset button */}
              <div className="p-4 pt-0">
                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    background: "hsl(220 15% 14%)",
                    color: "hsl(40 15% 85%)",
                    border: "1px solid hsl(220 15% 18%)",
                  }}
                >
                  <RotateCcw className="w-4 h-4" />
                  איפוס הגדרות
                </button>
              </div>

              {/* Footer */}
              <div className="p-4 text-center" style={{ color: "hsl(220 10% 55%)" }}>
                <p className="text-xs">
                  אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
