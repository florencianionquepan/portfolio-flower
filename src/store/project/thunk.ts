import axios, { AxiosError } from "axios";
import { Project } from "../model/Project";
import { AppDispatch } from "../store";
import { addNewProject, closeFormProject, creatingNewProject, errorProject } from "./projectSlice";
import Swal from "sweetalert2";

export const startNewProject =(project: Project) =>{

    return async(dispatch: AppDispatch, getState ) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        //id de person obtener del store
        //console.log(getState());
        const {person} = getState().person;
        const id = person.id;
        const newProject = project;
        console.log(newProject);

        dispatch(creatingNewProject());

        const url=`${apiUrl}/projects/person/${id}`;
        try{
            const resp = await axios.post(url, newProject,{
                withCredentials:true,
            });

            const data: Project = resp.data;
            dispatch(addNewProject(data));
            Swal.fire({
                icon:'success',
                title:'Success!',
                text:'Project record created successfully'
            })
            dispatch(closeFormProject());
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError;

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: axiosError? axiosError.message : 'An unexpected error occurred.'
            });
            dispatch(errorProject(axiosError?.message || ''));
        }
    }
}

export const startEditProject = (project:Project) =>{
    return async(dispatch: AppDispatch) =>{

    }
}