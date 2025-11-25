import { createClient } from "@supabase/supabase-js";

// Get these values from your Supabase Project Settings -> API
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
