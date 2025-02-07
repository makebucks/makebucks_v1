import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("User").select("*");
  if (error) {
    console.log(error);
  }
  return data;
}
