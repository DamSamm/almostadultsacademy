import { createClient } from "@supabase/supabase-js";

// Service role client — bypasses RLS, for server-side use ONLY.
// Never import this in client components.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default supabaseAdmin;
