import { createClient } from "@supabase/supabase-js";

// Anon client — respects RLS, safe for client-side use.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabase;
