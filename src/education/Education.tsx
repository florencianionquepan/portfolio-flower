import { useDispatch } from "react-redux"
import { Titles } from "../assets/Titles"
import { startNewEducation } from "../store/education/thunk"
import { AppDispatch, RootState } from "../store/store"
import { EducationForm } from "./EducationForm"
import { useSelector } from "react-redux"
import { openNewEducation } from "../store/education/educationSlice"


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
      <div className="flex items-center justify-between">
        <Titles title="Education"/>
        <button className="bg-fuchsia-300 text-gray-800 
        font-bold py-2 px-4 rounded hover:bg-fuchsia-200 disabled:opacity-25"
        onClick={handleOpenNewEducation}
        disabled={loading || isFormOpen}>
          +
        </button>
      </div>
      { isFormOpen && <EducationForm/> }
    </div>
  )
}
