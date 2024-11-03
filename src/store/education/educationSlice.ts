import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Education } from '../model/Education'

// Define a type for the slice state
interface educationState {
    educations: Education[] | [],
    loading: boolean,
    error:string | null,
    isFormOpen: boolean
}

// Define the initial state using that type
const initialState: educationState = {
    educations:[],
    loading:false,
    error:null,
    isFormOpen:false
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
            state.educations.push(action.payload)
            state.loading=false,
            state.error=null
        },
        creatingNewEducation:(state) =>{
            state.loading=true
        },
        openNewEducation: (state) =>{
            state.isFormOpen=true;
        },
        closeNewEducation: (state) =>{
            state.isFormOpen=false;
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
            closeNewEducation,
            setSaving,
            updateEducation,
            deleteEducationById 
            } = educationSlice.actions

export default educationSlice.reducer