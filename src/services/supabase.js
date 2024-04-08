
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://flzbqsvvenwxjclmgutz.supabase.co"
const supabase = createClient(SUPABASE_URL, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsemJxc3Z2ZW53eGpjbG1ndXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NDIyODgsImV4cCI6MjAyMDUxODI4OH0.awoqXB2kSlQYFkA5KuEymjBo2Yzdlj41Y75bB__BHqI");

export default supabase;