import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://phtwcmqlmdxptmphvlqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBodHdjbXFsbWR4cHRtcGh2bHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNDU0MzksImV4cCI6MjA1MzYyMTQzOX0.Hfdw1Ul9VN9dihKd9h7Ra3lX38UM9Gm1MD_RmNPlVvE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
