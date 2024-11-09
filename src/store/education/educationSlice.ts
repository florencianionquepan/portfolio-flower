import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Education } from '../model/Education'

// Define a type for the slice state
interface educationState {
    educations: Education[] | [],
    loading: boolean,
    error:string | null,
    isFormOpen: boolean,
    educationToEdit: Education | null
}

// Define the initial state using that type
const initialState: educationState = {
    educations:[],
    loading:false,
    error:null,
    isFormOpen:false,
    educationToEdit: null
}

export const educationSlice = createSlice({
    name: 'education',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        startLoadingEducations: (state)=>{
            state.loading=true
        },
        setEducations: (state, action: PayloadAction<Education[]>) =>{
            state.loading=false,
            state.educations = action.payload,
            state.error = null
        },
        addNewEducation:(state, action: PayloadAction<Education>) =>{
            state.educations = [...state.educations, action.payload]
            state.loading=false,
            state.error=null
        },
        creatingNewEducation:(state) =>{
            state.loading=true
        },
        openNewEducation: (state) =>{
            state.isFormOpen=true;
        },
        openEducationToEdit: (state, action: PayloadAction<Education>) =>{
            state.isFormOpen=true;
            state.educationToEdit=action.payload
        },
        closeNewEducation: (state) =>{
            state.isFormOpen=false;
            state.educationToEdit=null;
        },
        setSaving: (state)=>{

        },
        updateEducation:(state, action)=>{

        },
        deleteEducationById: (state, action)=>{

        }
    },
})

export const { startLoadingEducations, 
            setEducations, 
            addNewEducation,
            creatingNewEducation,
            openNewEducation,
            openEducationToEdit,
            closeNewEducation,
            setSaving,
            updateEducation,
            deleteEducationById 
            } = educationSlice.actions

export default educationSlice.reducer