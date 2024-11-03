import { useDispatch } from "react-redux"
import { Titles } from "../assets/Titles"
import { AppDispatch, RootState } from "../store/store"
import { EducationForm } from "./EducationForm"
import { useSelector } from "react-redux"
import { openNewEducation } from "../store/education/educationSlice"
import { PlusIcon } from "@heroicons/react/24/outline"
import { EducationItem } from "./EducationItem"
import { useMemo } from "react"


export const Education = () => {

  const dispatch: AppDispatch = useDispatch();
  const {educations, loading, isFormOpen} = useSelector( (state: RootState) => state.education)

  const handleOpenNewEducation = () =>{
    console.log(educations);
    dispatch( openNewEducation() );
  }

  const sortedEducations = useMemo(() => {
    return [...educations].sort((a, b) => {
        const endDateA = new Date(a.startDate).getTime();
        const endDateB = new Date(b.startDate).getTime();
        return endDateB - endDateA;
    });
}, [educations]);

  return (
    <div className="p-8 xl:p-16">
      <div className="flex items-center justify-between mb-4">
        <Titles title="Education"/>
        <button className="bg-transparent border border-2 border-purple-600 
        rounded-full hover:shadow hover:shadow-purple-600 disabled:opacity-25 p-1"
        onClick={handleOpenNewEducation}
        disabled={loading || isFormOpen}>
          <PlusIcon className="h-5 w-5 text-purple-600"></PlusIcon>
        </button>
      </div>
      <div>
        {sortedEducations.map((e)=>(
          <EducationItem
          key={e.id} 
          education={e}
          />
        ))}
      </div>
      { isFormOpen && <EducationForm/> }
    </div>
  )
}
