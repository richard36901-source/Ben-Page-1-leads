import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { full_name, phone, email, lm_supplier, fld_105911, marketing_consent } = await req.json();

    // All params in query string - LeadManager expects everything as URL params
    const lmParams = new URLSearchParams({
      lm_form: "89497",
      lm_key: "df156711436b48a289258b852fd0a22f",
      subscribers_name: full_name,
      subscribers_phone: phone,
      subscribers_email: email,
      "fields[REF]": "lovable_landing",
      fld_105911: fld_105911 || "דף נחיתה משפך 1",
      fld_107862: "דף נחיתה משפך ראשון",
      fld_144377: marketing_consent === false ? "0" : "1",
      lm_supplier: lm_supplier || "894496",
      lm_bc: "דף נחיתה משפך ראשון",
    });

    const leadManagerUrl = `https://api.leadmanager.co.il/handlers/lm/submit.cms?${lmParams.toString()}`;

    console.log("Sending to LeadManager URL:", leadManagerUrl);

    // Try GET request - many Israeli lead systems use GET
    const response = await fetch(leadManagerUrl, { method: "GET" });

    const responseText = await response.text();
    console.log("LeadManager response:", response.status, responseText);

    return new Response(
      JSON.stringify({ success: true, status: response.status }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("LeadManager error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
