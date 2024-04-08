
import toast from "react-hot-toast";
import supabase from "./supabase"
export async function getNotifyMe(){
    
const { data, error } = await supabase
.from('NotifyMe')
.select('*')

    if(error){
        toast.error('Data couldnot be loaded')
    }

    return data;

}

export async function submitNotifyMe(value){
    
const { data, error } = await supabase
.from('NotifyMe')
.insert([value])
.select()
if(error){
    toast.error('Something went wrong')
}

return data;
}