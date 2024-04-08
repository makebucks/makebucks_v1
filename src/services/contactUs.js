
import toast from "react-hot-toast";
import supabase from "./supabase"
export async function getContactUs(){
    

    let { data, error } = await supabase
    .from('contactUs')
    .select('*')
  
    if(error){
       toast.error('Data couldnot be loaded')
    }

    return data;

}

export async function submitForm(value){
    
let { data, error } = await supabase
.from('contactUs')
.insert([value])
.select()

if(error){
    toast.error('Data couldnot be loaded')
 }
return data;
}