CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  supplier_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read of partners"
  ON public.partners FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public insert of partners"
  ON public.partners FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public delete of partners"
  ON public.partners FOR DELETE
  TO anon, authenticated
  USING (true);