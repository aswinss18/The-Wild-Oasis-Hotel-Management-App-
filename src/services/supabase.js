import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://woefkhbanddhfhgcutiw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZWZraGJhbmRkaGZoZ2N1dGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5Mjg3MzYsImV4cCI6MjA0MzUwNDczNn0.7OwVkyvR9ABeFtnI142vmDv3IgUtguzsn7X1uKAlenE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
