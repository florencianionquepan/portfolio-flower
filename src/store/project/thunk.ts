import axios, { AxiosError } from "axios";
import { Project } from "../model/Project";
import { AppDispatch } from "../store";
import { addNewProject, closeFormProject, creatingNewProject, editingProject, errorProject, updateProject } from "./projectSlice";
import Swal from "sweetalert2";

export const startNewProject =(project: Project, files: File[]) =>{

    return async(dispatch: AppDispatch, getState ) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        //id de person obtener del store
        //console.log(getState());
        const {person} = getState().person;
        const id = person.id;

        dispatch(creatingNewProject());

        const formData = new FormData();
        const projectBlob = new Blob([JSON.stringify(project)], {
            type: 'application/json'
        });
        
        formData.append('project', projectBlob, 'project.json');
        if (files && files.length > 0) {
            files.forEach((file) => {
                formData.append('files', file);
            });
        }

        const url=`${apiUrl}/projects/person/${id}`;
        try{
            const resp = await axios.post(url, formData, {
                withCredentials:true
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

export const startEditProject = (project:Project, files: File[]) =>{
    return async(dispatch: AppDispatch) =>{

        const apiUrl = import.meta.env.VITE_API_URL;
        console.log(project);
        const idProject=project.id;

        const formData = new FormData();
        const projectBlob = new Blob([JSON.stringify(project)], {
            type: 'application/json'
        });
        
        formData.append('project', projectBlob, 'project.json');
        if (files && files.length > 0) {
            files.forEach((file) => {
                formData.append('files', file);
            });
        }

        const url=`${apiUrl}/projects/${idProject}`;
        dispatch(editingProject());
        try{
            const resp = await axios.put(url, formData, {
                withCredentials:true
            });

            const data: Project = resp.data;
            dispatch(updateProject(data));
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