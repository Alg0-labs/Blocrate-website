import { createClient } from "@supabase/supabase-js";

// Use exactly VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env (anon key from Project Settings → API).
// If you get 401, add an RLS policy that allows anon to INSERT (see README or Supabase dashboard).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
