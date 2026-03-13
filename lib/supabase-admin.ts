import { createClient } from "@supabase/supabase-js";

// Service role client — bypasses RLS, for server-side use ONLY.
// Never import this in client components.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    global: {
      // Abort any Supabase call that takes longer than 5 s so a slow DB
      // response doesn't exhaust the Vercel function timeout and cause
      // Stripe to retry against a half-processed state.
      fetch: (input, init) =>
        fetch(input, { ...init, signal: AbortSignal.timeout(5000) }),
    },
  }
);

export default supabaseAdmin;
