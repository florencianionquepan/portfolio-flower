import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { EducationFormInterface} from "../education/educationFormTypes";
import { Image } from "../store/model/Image";
import { FormValidations, ValidationFields } from "../formFields/FormValidations";
import { Technology } from "../store/model/Technology";

export const useForm = <T extends object> (initialForm:T, formValidations: FormValidations<T>) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState<ValidationFields<T>>({} as ValidationFields<T>);
    
    useEffect(() => {
      createValidators();
    }, [formState])

    const isFormValid = useMemo( ()=>{
      for (const formValue of Object.keys( formValidation ) as Array<keyof ValidationFields<T>>){
        if(formValidation[formValue]!==null) return false;

      }
      return true;
    },[formValidation])
    
    
    const onInputChange =({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        
      const {name, value, type} = target;
      //console.log(name, value);
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

    const onSelectChange = (name: keyof T, value: string | Technology[]) => {
/*       if (name === 'status') {
        value = Status[value as keyof typeof Status];  // Convierte la clave al valor del enum
      } */
      setFormState({
          ...formState,
          [name]: value
      });
    };

    const updateFormImages = (updatedImages: Image[]) => {
      setFormState((prev) => ({
        ...prev,
        images: updatedImages
      }));
    };
      
    const onResetForm =()=>{
      setFormState(initialForm);
    } 

    const createValidators = () => {
      // Este objeto debe tener claves como "titleValid", "endDateValid", etc.
      const formCheckedValues: ValidationFields<T> = {} as ValidationFields<T>;

      for (const formField of Object.keys(formValidations) as (keyof T)[]){
        const [fn, errorMessage] = formValidations[formField];
        const value = formState[formField];
        const key = `${String(formField)}Valid` as keyof ValidationFields<T>;

        if (formField === 'endDate' && 'status' in formState && 'status' in initialForm) {
            const status = (formState as unknown as EducationFormInterface).status;
            formCheckedValues[key] = (fn(value, status) ? null : errorMessage) as ValidationFields<T>[typeof key];
        } else {
          formCheckedValues[key] = (fn(value) ? null : errorMessage) as ValidationFields<T>[typeof key];
        }
      }

      setFormValidation(formCheckedValues);
    }
      
  return {
    ...formState,
    formState,
    onInputChange,
    onSelectChange,
    updateFormImages,
    onResetForm,
    ...formValidation,
    isFormValid
  }
}