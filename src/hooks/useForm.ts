import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { EducationFormInterface, FormValidations, ValidationFields } from "../education/educationFormTypes";

//export function useForm<T>(initialForm:T){
export const useForm = <T extends object> (initialForm:T, formValidations: FormValidations<T>) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState<ValidationFields<T>>({} as ValidationFields<T>);
    
    useEffect(() => {
      createValidators();
    }, [formState])

    const isFormValid = useMemo( ()=>{
      for (const formValue of Object.keys( formValidation )){
        if(formValidation[formValue]!==null) return false;

      }
      return true;
    },[formValidation])
    
    
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

    const onSelectChange = (name: keyof T, value: T[keyof T]) => {
      setFormState({
          ...formState,
          [name]: value,
      });
  };
      
    const onResetForm =()=>{
      setFormState(initialForm);
    } 

    const createValidators = () => {
      const formCheckedValues : {[key:string]:string | null} = {};
      for (const formField of Object.keys(formValidations) as (keyof T)[]){
        const [fn, errorMessage] = formValidations[formField];
        const value = formState[formField];

        if (formField === 'endDate' && 'status' in formState && 'status' in initialForm) {
            const status = (formState as unknown as EducationFormInterface).status;
            formCheckedValues[`${String(formField)}Valid`] = fn(value, status) ? null : errorMessage;
        } else {
            formCheckedValues[`${String(formField)}Valid`] = fn(value) ? null : errorMessage;
        }
      }

      setFormValidation(formCheckedValues);
    }
      
  return {
    ...formState,
    formState,
    onInputChange,
    onSelectChange,
    onResetForm,
    ...formValidation,
    isFormValid
  }
}