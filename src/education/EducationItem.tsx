import { PencilIcon } from "@heroicons/react/24/outline";
import { Education } from "../store/model/Education"
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { openEducationToEdit } from "../store/education/educationSlice";
import { useSelector } from "react-redux";

interface EducationItemProps {
    education: Education;
}

export const EducationItem = ({education}: EducationItemProps) => {

  const dispatch: AppDispatch = useDispatch();
  const {loading, isFormOpen } = useSelector( (state: RootState) => state.education)

  const startYear = education.startDate ? new Date(education.startDate).getFullYear() : "-";
  const endYear = education.endDate ? new Date(education.endDate).getFullYear() : "-";

  const onEdit =()=>{
    dispatch(openEducationToEdit(education));
    //console.log(education.id);
  }

  return (
    <>
    <div className="flex items-center justify-between mt-2" role="listitem" aria-label="Educational background">
      <div className="flex flex-items-center justify-start mt-2" role="listitem" aria-label="Educational background">
          <div className="mx-1 pr-3 border-purple-400 border-r-2 font-normal">
            <p aria-label="Start year">{startYear}- </p>
            <p aria-label="End year">{endYear}</p>
          </div>
          <div className="pl-3">
              <p className="font-semibold"> {education.name} - {education.institution} </p>
              <p> {education.degreeType} </p>
              <p> Status: <span className="font-semibold">{education.status}</span></p>
          </div>
      </div>
      <div className="ml-auto">
        <button 
            className="bg-transparent border border-2 border-purple-600 
                        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-2"
                        disabled={loading || isFormOpen}
                        onClick={() => onEdit()} 
            aria-label={`Edit ${education.name}`} >
            <PencilIcon className="h-3 w-3 text-purple-600"></PencilIcon>
          </button>
      </div>
    </div>

    </>
    
  )
}
