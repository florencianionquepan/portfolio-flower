import { Education } from "../store/model/Education"
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { openEducationToEdit } from "../store/education/educationSlice";
import { useSelector } from "react-redux";
import { EditionButton } from "../assets/EditionButton";
import { statusArray } from "../store/model/Status";

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

  const readableStatus = statusArray.find(s => s.key === education.status)?.value || education.status;

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
              <p> Estado: <span className="font-semibold">{readableStatus}</span></p>
          </div>
      </div>
      <div className="ml-auto">
          <EditionButton
          onClick={()=>onEdit()}
          disabled={loading || isFormOpen}
          label={`Edit ${education.name}`}
          />
      </div>
    </div>

    </>
    
  )
}
