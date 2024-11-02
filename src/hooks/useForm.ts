import { useState, ChangeEvent } from "react";


//export function useForm<T>(initialForm:T){
export const useForm = <T extends object> (initialForm:T) => {

    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange =({target}: ChangeEvent<HTMLInputElement> ) => {
        
        const {name, value, type} = target;
        if(type==='date'){
          setFormState({
            ...formState,
            [name]: value? new Date(value) : null,
        });
        }else {
          setFormState({
            ...formState,
            [name]: value
          });
        }
      }
      
    const onResetForm =()=>{
      setFormState(initialForm);
    } 
      
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}