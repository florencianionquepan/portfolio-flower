import { useDispatch } from "react-redux"
import { Titles } from "../assets/Titles"
import { AppDispatch, RootState } from "../store/store"
import { EducationForm } from "./EducationForm"
import { useSelector } from "react-redux"
import { openNewEducation } from "../store/education/educationSlice"
import { EducationItem } from "./EducationItem"
import { useMemo } from "react"
import { CreationButton } from "../assets/CreationButton"


export const EducationSection = () => {

  const dispatch: AppDispatch = useDispatch();
  const {educations, loading, isFormOpen, educationToEdit} = useSelector( (state: RootState) => state.education)

  const handleOpenNewEducation = () =>{
    //console.log(educations);
    dispatch( openNewEducation() );
  }

  const sortedEducations = useMemo(() => {
    if (!Array.isArray(educations)) return [];
    
    return [...educations].sort((a, b) => {
        const endDateA = new Date(a.startDate).getTime();
        const endDateB = new Date(b.startDate).getTime();
        return endDateB - endDateA;
    });
}, [educations]);

  return (
    <div className="p-8 xl:px-16" id="education">
      <div className="flex items-center justify-between mb-4">
        <Titles title="Education"/>
        <CreationButton
        onClick={handleOpenNewEducation}
        disabled={loading || isFormOpen}
        />
      </div>
      <div>
        {sortedEducations.map((e)=>(
          <EducationItem
          key={e.id} 
          education={e}
          />
        ))}
      </div>
      { isFormOpen && <EducationForm educationToEdit={educationToEdit}/> }
    </div>
  )
}
