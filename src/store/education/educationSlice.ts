import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Education } from '../model/Education'

// Define a type for the slice state
interface educationState {
    education: Education[] | [],
    loading: boolean,
    error:string | null
}

// Define the initial state using that type
const initialState: educationState = {
    education:[],
    loading:false,
    error:null
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
            state.education = action.payload,
            state.error = null
        },
        addNewEducation:(state, action: PayloadAction<Education>) =>{
            state.education.push(action.payload)
            state.loading=false,
            state.error=null
        },
        creatingNewEducation:(state) =>{
            state.loading=true
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
            setSaving,
            updateEducation,
            deleteEducationById 
            } = educationSlice.actions

export default educationSlice.reducer