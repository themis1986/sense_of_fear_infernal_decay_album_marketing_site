import { createClient } from "@supabase/supabase-js";

// Get these values from your Supabase Project Settings -> API
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "Supabase credentials not configured. Music streaming will be unavailable.",
  );
}

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
