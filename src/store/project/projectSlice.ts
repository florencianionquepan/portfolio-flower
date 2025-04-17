import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Project } from '../model/Project'

// Define a type for the slice state
interface ProjectState {
    projects: Project[] | [],
    loading: boolean,
    error:string | null,
    isFormOpen: boolean,
    projectToEdit: Project | null
}

// Define the initial state using that type
const initialState: ProjectState = {
    projects:[],
    loading:false,
    error:null,
    isFormOpen:false,
    projectToEdit: null
}

export const projectSlice = createSlice({
    name: 'Project',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        startLoadingProjects: (state)=>{
            state.loading=true
        },
        setProjects: (state, action: PayloadAction<Project[]>) =>{
            state.loading=false,
            state.projects = action.payload,
            state.error = null
        },
        //when a new Project is already created 
        addNewProject:(state, action: PayloadAction<Project>) =>{
            state.projects = [...state.projects, action.payload]
            state.loading=false,
            state.error=null
        },
        creatingNewProject:(state) =>{
            state.loading=true
        },
        openNewProject: (state) =>{
            state.isFormOpen=true;
        },
        openProjectToEdit: (state, action: PayloadAction<Project>) =>{
            state.isFormOpen=true;
            state.projectToEdit=action.payload
        },
        editingProject:(state)=>{
            state.loading=true;
        },
        closeFormProject: (state) =>{
            state.isFormOpen=false;
            state.projectToEdit=null;
        },
        updateProject:(state, action)=>{
            state.loading=false;
            state.projects = state.projects.map((e)=>
            e.id === action.payload.id? action.payload : e);
            state.error=null;
        },
        errorProject:(state, action: PayloadAction<string>)=>{
            state.loading=false;
            state.error=action.payload;
        },
        deleteProjectById: ()=>{

        }
    },
})

export const { startLoadingProjects, 
            setProjects, 
            addNewProject,
            creatingNewProject,
            openNewProject,
            openProjectToEdit,
            editingProject,
            closeFormProject,
            updateProject,
            errorProject,
            deleteProjectById 
            } = projectSlice.actions

export default projectSlice.reducer