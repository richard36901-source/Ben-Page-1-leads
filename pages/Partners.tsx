import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Copy, Trash2, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://leverage-and-earn.lovable.app";

const Partners = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [supplierId, setSupplierId] = useState("");

  const { data: partners = [], isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const addPartner = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("partners")
        .insert({ name: name.trim(), supplier_id: supplierId.trim() });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["partners"] });
      setName("");
      setSupplierId("");
      toast({ title: "שותף נוסף בהצלחה! ✅" });
    },
    onError: () => {
      toast({ title: "שגיאה בהוספת שותף", variant: "destructive" });
    },
  });

  const deletePartner = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("partners").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["partners"] });
      toast({ title: "שותף נמחק" });
    },
  });

  const copyLink = (supplierId: string) => {
    const link = `${SITE_URL}/?lm_supplier=${supplierId}`;
    navigator.clipboard.writeText(link);
    toast({ title: "הלינק הועתק! 📋" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !supplierId.trim()) return;
    addPartner.mutate();
  };

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-display font-bold">ניהול שותפים</h1>
        </div>

        {/* Add Partner Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 mb-8 space-y-4"
        >
          <h2 className="text-xl font-display font-semibold mb-2">הוספת שותף חדש</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="שם השותף"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="text"
              placeholder="מספר ספק (lm_supplier)"
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
              required
              className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button type="submit" disabled={addPartner.isPending} className="gap-2">
            <Plus className="w-4 h-4" />
            הוסף שותף
          </Button>
        </form>

        {/* Partners List */}
        <div className="space-y-3">
          {isLoading ? (
            <p className="text-muted-foreground text-center py-8">טוען...</p>
          ) : partners.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">אין שותפים עדיין. הוסף את הראשון!</p>
          ) : (
            partners.map((partner: any) => {
              const link = `${SITE_URL}/?lm_supplier=${partner.supplier_id}`;
              return (
                <div
                  key={partner.id}
                  className="bg-card border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-lg">{partner.name}</p>
                    <p className="text-sm text-muted-foreground truncate">ספק: {partner.supplier_id}</p>
                    <p className="text-xs text-primary/70 truncate mt-1 font-mono" dir="ltr">
                      {link}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyLink(partner.supplier_id)}
                      className="gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      העתק לינק
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deletePartner.mutate(partner.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;
