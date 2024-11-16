import { XMarkIcon } from "@heroicons/react/24/outline";
import { InputField } from "../formFields/InputField";
import { SelectField } from "../formFields/SelectField";
import { useForm } from "../hooks/useForm";
import { Status } from "../store/model/Status";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { closeFormEducation } from "../store/education/educationSlice";
import { InputDateField } from "../formFields/InputDateField";
import { formValidations } from "./formValidations";
import { useState } from "react";
import { startEditEducation, startNewEducation } from "../store/education/thunk";
import { Education } from "../store/model/Education";

interface EducationFormProps {
  educationToEdit: Education | null; 
}

export const EducationForm: React.FC<EducationFormProps> = ({educationToEdit}) => {

const dispatch: AppDispatch = useDispatch();

const initialFormState: Education = {
    id: educationToEdit?.id || undefined,
    name: educationToEdit?.name || '', 
    institution: educationToEdit?.institution || '', 
    degreeType: educationToEdit?.degreeType || undefined, 
    status: educationToEdit?.status || '', 
    startDate: educationToEdit? new Date(educationToEdit!.startDate) : new Date(2023, 0, 1), 
    endDate: educationToEdit? new Date(educationToEdit!.endDate) : undefined, 
}; 


  const [formSubmitted, setFormSubmitted] = useState(false)

  const { name, institution, degreeType, startDate, endDate, status, onInputChange, onSelectChange,
    formState, nameValid, institutionValid, degreeTypeValid, startDateValid, endDateValid, statusValid, isFormValid }  
      = useForm<Education>(initialFormState, formValidations );
  
  const statusArray: string[] = Object.values(Status);

  const handlecloseFormEducation =() =>{
      dispatch(closeFormEducation());
  }

  const onSubmit = (event: React.SyntheticEvent) =>{
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    educationToEdit?.id? dispatch(startEditEducation(formState)): dispatch(startNewEducation(formState));
  }

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="space-y-12 w-full max-w-4xl mx-auto">
        <div className="border rounded border-2 border-purple-600 p-5 mt-5 bg-orange-200">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold leading-7">
              {educationToEdit? 'Edit Education' : 'New Education'}
            </h2>
            <button type="button" onClick={handlecloseFormEducation}>
              <XMarkIcon className="h-6 w-6 m-1 text-purple-600 hover:text-purple-800" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" role="listitem" aria-label="Educational background">
            
            <div className="ml-2 sm:pr-3 sm:border-purple-400 sm:border-r-2 
            md:row-span-3 col-span-1 mt-0">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <InputDateField
                      name="startDate"
                      label="Start Date"
                      value={startDate}
                      onChange={onInputChange}
                      hasError={!!startDateValid && formSubmitted}
                      errorMessage={startDateValid} 
                      />
                </div>
                <div>
                  <InputDateField
                      name="endDate"
                      label="End Date"
                      value={endDate}
                      onChange={onInputChange}
                      hasError={!!endDateValid && formSubmitted}
                      errorMessage={endDateValid}     
                      />
                </div>
              </div>
              
              
            </div>

            <div className="md:col-span-2 ml-2">
              <div className="grid grid-cols-2 gap-3">

                <div className="col-span-2 md:col-span-1">
                  <InputField
                    name="name"
                    label="Title"
                    value={name}
                    onChange={onInputChange} 
                    hasError={!!nameValid && formSubmitted}
                    errorMessage={nameValid}
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <InputField
                    name="institution"
                    label="Institution"
                    value={institution}
                    onChange={onInputChange} 
                    hasError={!!institutionValid && formSubmitted}
                    errorMessage={institutionValid}
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <InputField
                    name="degreeType"
                    label="Type of degree"
                    value={degreeType}
                    onChange={onInputChange} 
                    hasError={!!degreeTypeValid && formSubmitted}
                    errorMessage={degreeTypeValid}
                    />
                </div>
                
                <div className="col-span-2 md:col-start-1 md:col-span-1">
                  <SelectField 
                    label="Status" 
                    value={status}
                    onSelectChange={(value) => onSelectChange("status", value)}
                    options={statusArray} 
                    hasError={!!statusValid && formSubmitted}
                    errorMessage={statusValid}
                    />
                </div>
              </div>
              
            </div>

        </div>

        <div className="mt-8 flex justify-center">
          <button type="submit" className="border rounded border-2 border-purple-600 p-1 px-2">
            Save
          </button>
        </div>

        </div>
      </div>
    </form>
  );
};
