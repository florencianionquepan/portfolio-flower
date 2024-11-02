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
      <div className="space-y-12 w-full max-w-4xl mx-auto">
        <div className="border rounded border-2 border-purple-600 p-5 mt-5 bg-orange-200">
          <div className="flex justify-between">
            <h2 className="text-base font-semibold leading-7">
              New Education
            </h2>
            <button type="button" onClick={handleCloseNewEducation}>
              <XMarkIcon className="h-6 w-6 m-1 text-purple-600 hover:text-purple-800" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3" role="listitem" aria-label="Educational background">
            
            <div className="mx-1 pr-3 border-purple-400 border-r-2 font-normal sm:row-span-3">
              <div className="mb-3 col-span-1">
                <InputField
                    name="startDate"
                    label="Start Date"
                    value={startDate}
                    onChange={onInputChange}
                    type="date"/>
              </div>
              <div className="mb-3 col-span-1">
                <InputField
                    name="endDate"
                    label="End Date"
                    value={endDate}
                    onChange={onInputChange}
                    type="date"              
                    />
              </div>
              
            </div>
          
            {/* Datos Educativos */}
            <div className="col-span-1">
              <InputField
                name="name"
                label="Title"
                value={name}
                onChange={onInputChange} />
            </div>
            <div className="col-span-1">
              <InputField
                name="institution"
                label="Institution"
                value={institution}
                onChange={onInputChange} />
            </div>
            <div className="col-span-1">
              <InputField
                name="degreeType"
                label="Type of Degree"
                value={degreeType}
                onChange={onInputChange} />
            </div>
            
            <div className="col-start-2 col-span-1">
              <SelectField 
                label="Status" 
                value={status} 
                options={statusArray} />
            </div>
            
        </div>

        <div className="mt-8 flex justify-center">
          <button type="button" className="border rounded border-2 border-purple-600 p-1 px-2">
            Save
          </button>
        </div>

        </div>
      </div>
    </form>
  );
};
