import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
}
