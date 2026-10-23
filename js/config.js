/* ==========================================================================
   SUPABASE CONFIG — backend for the "Right Now" notes
   Fill these two values in after creating a free project at supabase.com:
   Project Settings → API → Project URL, and the "anon public" key.
   Until both are filled in, the site falls back to showing only the
   default notes hard-coded in data.js (no live publishing).
   ========================================================================== */
const SUPABASE_URL = "https://xsbxhfpnixubtrjwjtob.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzYnhoZnBuaXh1YnRyandqdG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMjYxNzIsImV4cCI6MjA5OTYwMjE3Mn0.O5rj07r_2pit29wiZTKnoYt34xTfN_6fmo9AvA_pZZk";

const supabaseClient =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
