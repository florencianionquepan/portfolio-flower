import { XMarkIcon } from "@heroicons/react/24/outline"
import { useForm } from "../hooks/useForm"
import { Technology } from "../store/model/Technology"
import { formValidations } from "./formValidations"
import { useState } from "react"
import { InputField } from "../formFields/InputField"
import { AppDispatch } from "../store/store"
import { useDispatch } from "react-redux"
import { closeFormTechnology } from "../store/technology/technologySlice"
import BreakpointDisplay from "../assets/Breakpoint"
import { startNewTechnology } from "../store/technology/thunk"

const initialFormState: Technology ={
    name: '',
    logoUrl:'',
    version: 1

}

export const TechnologyForm = () => {

    const dispatch: AppDispatch = useDispatch();

    const {name, logoUrl, version, onInputChange, formState, isFormValid, nameValid, logoUrlValid, versionValid} = useForm<Technology> (initialFormState, formValidations) 

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleCloseFormTechnology = ()=>{
        dispatch(closeFormTechnology())
    }

    const onSubmit = (event: React.SyntheticEvent) =>{
        event.preventDefault();
        setFormSubmitted(true);
        if(!isFormValid) return;
        dispatch(startNewTechnology(formState));
    }

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
        <BreakpointDisplay/>
        <div className="space-y-12 w-full max-w-2xl mx-auto">
            <div className="border rounded border-2 border-purple-600 p-5 mt-5 bg-orange-200">
                <div className="flex justify-between">
                    <h2 className="text-base font-semibold leading-7">
                        New Technology
                    </h2>
                    <button type="button" onClick={handleCloseFormTechnology}>
                    <XMarkIcon className="h-6 w-6 m-1 text-purple-600 hover:text-purple-800" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3" 
                role="listitem" aria-label="Technology background">
                    <div>
                        <InputField
                        name="name"
                        label="Name"
                        value={name}
                        onChange={onInputChange}
                        hasError={!!nameValid && formSubmitted}
                        errorMessage={nameValid} 
                        />
                    </div>

                    <div>
                        <InputField
                        name="version"
                        label="Version"
                        type="number"
                        value={version}
                        onChange={onInputChange}
                        hasError={!!versionValid && formSubmitted}
                        errorMessage={versionValid} 
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <InputField
                        name="logoUrl"
                        label="Logo URL"
                        value={logoUrl}
                        onChange={onInputChange}
                        hasError={!!logoUrlValid && formSubmitted}
                        errorMessage={logoUrlValid} 
                        />
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
  )
}
