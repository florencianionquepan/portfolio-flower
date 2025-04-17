import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Technology } from "../model/Technology";


// Define a type for the slice state
interface TechnologyState {
    technologies: Technology[] | [],
    loading: boolean,
    error:string | null,
    isFormOpen: boolean,
    technologyToEdit: Technology | null
}

// Define the initial state using that type
const initialState: TechnologyState = {
    technologies: [],
    loading: false,
    error: null,
    isFormOpen: false,
    technologyToEdit: null
}

export const technologySlice = createSlice({
    name: 'technology',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        startLoadingTechnologies: (state, ) =>{
            state.loading = true
        },
        setTechnologies: (state, action)=>{
            //console.log(action);
            state.loading =false;
            state.technologies = action.payload;
        },
        //when a new Technology is already created 
        addNewTechnology:(state, action: PayloadAction<Technology>) =>{
            state.technologies = [...state.technologies, action.payload]
            state.loading=false,
            state.error=null
        },
        creatingNewTechnology:(state) =>{
            state.loading=true
        },
        openNewTechnology: (state) =>{
            state.isFormOpen=true;
        },
        openTechnologyToEdit: (state, action: PayloadAction<Technology>) =>{
            state.isFormOpen=true;
            state.technologyToEdit=action.payload
        },
        editingTechnology:(state)=>{
            state.loading=true;
        },
        closeFormTechnology: (state) =>{
            state.isFormOpen=false;
            state.technologyToEdit=null;
        },
        updateTechnology:(state, action)=>{
            state.loading=false;
            state.technologies = state.technologies.map((t)=>
            t.id === action.payload.id? action.payload : t);
            state.error=null;
        },
        errorTechnology:(state, action: PayloadAction<string>)=>{
            state.loading=false;
            state.error=action.payload;
        },
        deleteTechnologyById: ()=>{

        }
    },
})

export const {startLoadingTechnologies, 
    setTechnologies,
    addNewTechnology,
    creatingNewTechnology,
    openNewTechnology,
    openTechnologyToEdit,
    editingTechnology,
    closeFormTechnology,
    updateTechnology,
    errorTechnology,
    deleteTechnologyById
    } = technologySlice.actions;

export default technologySlice.reducer