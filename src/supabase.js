import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jxsoibwllthtqtyjvhsy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4c29pYndsbHRodHF0eWp2aHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0ODE3NDQsImV4cCI6MjA1NDA1Nzc0NH0.rQiDVrki81hMKzaJM6vdfMNDylJQbxY_gMGlXCPhge0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
