import { XMarkIcon } from "@heroicons/react/24/outline";
import { InputField } from "../formFields/InputField";
import { SelectField } from "../formFields/SelectField";
import { useForm } from "../hooks/useForm";
import { Status } from "../store/model/Status";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { closeNewEducation } from "../store/education/educationSlice";

interface EducationForm {
    name: string,
    institution: string,
    degreeType: string | null;
    startDate: Date;
    endDate: Date | null;
    status: string;
}


export const EducationForm = () => {

  const dispatch: AppDispatch = useDispatch();

  const { name, institution, degreeType, startDate, endDate, status, onInputChange }  
      = useForm<EducationForm>({
        name: 'Ingenieria',
        institution: 'Universidad...',
        degreeType: '',
        status: '',
        startDate: new Date(),
        endDate: new Date()
      });
  
  const statusArray: string[] = Object.values(Status);

  const handleCloseNewEducation =() =>{
      dispatch(closeNewEducation());
  }

  return (
    <form autoComplete="off">
      <div className="space-y-12">
        <div className="border rounded border-white-900 p-5 mt-5">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold leading-7 text-white-900">
              New Education
            </h2>
            <button type="button" className="border rounded" onClick={handleCloseNewEducation}>
              <XMarkIcon className="h-6 w-6 m-1 text-white" aria-hidden="true" />
            </button>
          </div>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              name="name"
              label="Title"
              value={name}
              onChange={onInputChange}              
              />
            <InputField
              name="institution"
              label="Institution"
              value={institution}
              onChange={onInputChange}              
              />
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
                name="degreeType"
                label="Type of Degree"
                value={degreeType}
                onChange={onInputChange}              
                />
            <SelectField 
            label="Status" 
            value={status} 
            options={statusArray} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
                name="startDate"
                label="startDate"
                value={startDate}
                onChange={onInputChange}
                type="date"              
                />
            <InputField
                name="endDate"
                label="endDate"
                value={endDate}
                onChange={onInputChange}
                type="date"              
                />
          </div>


        </div>
      </div>
    </form>
  );
};
