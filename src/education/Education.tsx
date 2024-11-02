import { useDispatch } from "react-redux"
import { Titles } from "../assets/Titles"
import { startNewEducation } from "../store/education/thunk"
import { AppDispatch, RootState } from "../store/store"
import { EducationForm } from "./EducationForm"
import { useSelector } from "react-redux"
import { openNewEducation } from "../store/education/educationSlice"
import { PlusIcon } from "@heroicons/react/24/outline"


export const Education = () => {

  const dispatch: AppDispatch = useDispatch();
  const {loading, isFormOpen} = useSelector( (state: RootState) => state.education)

  //esta funcion va a estar e n el boton de enviar educacion debajo del formulario!!!
  const onClickNewEducation = () =>{
    dispatch(startNewEducation());

  }

  const handleOpenNewEducation = () =>{
    dispatch( openNewEducation() );
  }

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
      <div className="flex flex-items-center justify-start mt-2" role="listitem" aria-label="Educational background">
        <div className="mx-1 pr-3 border-purple-400 border-r-2 font-normal">
          <p aria-label="Start year">2010 - </p>
          <p aria-label="End year">2016 </p>
        </div>
        <div className="pl-3">
            <p className="font-semibold"> Chemical Engineer - Universidad Nacional del Sur</p>
            <p> Bachelor of Engineering</p>
            <p> Status: <span className="font-semibold">COMPLETED</span></p>
        </div>
      </div>
      { isFormOpen && <EducationForm/> }
    </div>
  )
}
