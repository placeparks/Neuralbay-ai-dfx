import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://phindabzkywezstlftog.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaW5kYWJ6a3l3ZXpzdGxmdG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MzY1MzEsImV4cCI6MjA0NjIxMjUzMX0.7qPkqE5PnWxDkaM9R_yKjMD3wepr5Nhzp52Z6uzoUNE";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables: Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
