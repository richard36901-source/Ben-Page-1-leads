import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SectionWrapper from "./SectionWrapper";

const CTASection = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
  });
  const [marketingConsent, setMarketingConsent] = useState(true);

  // Get supplier ID from URL param, fallback to default
  const supplierFromUrl = searchParams.get("lm_supplier") || "894496";
  const routingIdFromUrl = searchParams.get("fld_105911") || "דף נחיתה משפך 1";

  const hiddenFields = {
    supplier_id: supplierFromUrl,
    lead_source: "lovable_landing",
    landing_name: "guide_offer_page",
    campaign_name: "march_leads_campaign",
  };

  const leadManagerConfig = {
    lm_form: "89497",
    lm_key: "df156711436b48a289258b852fd0a22f",
    lm_supplier: supplierFromUrl,
    lm_bc: "דף נחיתה משפך ראשון",
  };

  const isValidPhone = (phone: string) => /^0[2-9]\d{7,8}$/.test(phone.replace(/[-\s]/g, ""));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhone(formData.phone)) {
      toast({
        title: "מספר טלפון לא תקין",
        description: "יש להזין מספר טלפון ישראלי תקין (לדוגמה: 0501234567)",
        variant: "destructive",
      });
      return;
    }

    const payload = { ...formData, ...hiddenFields };

    // Build LeadManager URL with query params including personal details
    const lmParams = new URLSearchParams({
      lm_form: leadManagerConfig.lm_form,
      lm_key: leadManagerConfig.lm_key,
      lm_supplier: leadManagerConfig.lm_supplier,
      lm_bc: leadManagerConfig.lm_bc,
      full_name: formData.full_name,
      phone: formData.phone,
      email: formData.email,
    });
    const leadManagerUrl = `https://api.leadmanager.co.il/handlers/lm/submit.cms?${lmParams.toString()}`;

    try {
      // Send to both Make.com webhook and LeadManager (via edge function) in parallel
      await Promise.all([
        fetch("https://hook.eu1.make.com/ce227dsa07j7e86f8ddabxh3ejmfkpwb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "no-cors",
        }),
        supabase.functions.invoke("submit-lead", {
          body: {
            full_name: formData.full_name,
            phone: formData.phone,
            email: formData.email,
            lm_supplier: supplierFromUrl,
            fld_105911: routingIdFromUrl,
            marketing_consent: marketingConsent,
          },
        }),
      ]);
      toast({
        title: "הפרטים נשלחו בהצלחה! 🎉",
        description: "ההדרכה בדרך אליך.",
      });
      setFormData({ full_name: "", phone: "", email: "" });
    } catch (error) {
      console.error("Webhook error:", error);
      toast({
        title: "שגיאה בשליחה",
        description: "נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
      return;
    }

    setTimeout(() => {
      window.location.href = "https://teachdigitalonline.ravpage.co.il/digitalnew1";
    }, 3000);
  };

  return (
    <SectionWrapper id="lead-form" dataSection="מה שראית כאן זה רק קצה">
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground/70 font-display mb-6"
        >
          מה שראית כאן זה רק קצה.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-black text-foreground mb-4 leading-tight"
        >
          <span className="text-gradient-gold">בלחיצה אחת</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground font-display font-bold mb-2 leading-relaxed"
        >
          מחכה לך הדרכה פרקטית
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-foreground/80 font-display mb-4 leading-relaxed"
        >
          שמראה לך בדיוק איך המנגנון בנוי — שלב אחרי שלב.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-foreground/60 font-display mb-10"
        >
          בלי תאוריה.{" "}
          <span className="font-bold text-foreground">רק תכלס.</span>
        </motion.p>

        <motion.form
          data-lead-form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="שם מלא"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
            className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
          <input
            type="tel"
            name="phone"
            placeholder="טלפון"
            dir="rtl"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-lg font-body text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground text-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />

          <div className="flex items-center gap-3 justify-start">
            <Checkbox
              id="marketing-consent"
              checked={marketingConsent}
              onCheckedChange={(checked) => setMarketingConsent(checked === true)}
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label
              htmlFor="marketing-consent"
              className="text-sm text-muted-foreground font-body cursor-pointer select-none leading-snug"
            >
              אני מאשר/ת קבלת תוכן שיווקי ועדכונים לכתובת המייל שלי
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-xl md:text-2xl rounded-xl py-5 transition-all duration-300 glow-gold hover:scale-[1.02]"
          >
            תן לי את ההדרכה
          </button>

          <p className="text-sm text-muted-foreground font-body">
            ללא התחייבות. ללא ספאם.
          </p>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default CTASection;
