import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store"
import { addNewEducation, closeFormEducation, creatingNewEducation, editingEducation, errorEducation, updateEducation } from "./educationSlice";
import { Education } from "../model/Education";
import Swal from "sweetalert2";

export const startNewEducation =(education: Education) =>{

    return async(dispatch: AppDispatch, getState ) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        //id de person obtener del store
        //console.log(getState());
        const {person} = getState().person;
        const id = person.id;
        const newEducation = education;

        dispatch(creatingNewEducation());

        const url=`${apiUrl}/programs/person/${id}`;
        try{
            const resp = await axios.post(url, newEducation,{
                withCredentials:true,
            });

            const data: Education = resp.data;
            dispatch(addNewEducation(data));
            Swal.fire({
                icon:'success',
                title:'Success!',
                text:'Education record created successfully'
            })
            dispatch(closeFormEducation());
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError;

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: axiosError? axiosError.message : 'An unexpected error occurred.'
            });
            dispatch(errorEducation(axiosError?.message || ''));
        }
    }
}

export const startEditEducation =(education: Education) =>{

    return async(dispatch: AppDispatch) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        const id = education.id;
        const educationToEdit = education;

        dispatch(editingEducation());

        const url=`${apiUrl}/programs/${id}`;
        try{
            const resp = await axios.put(url, educationToEdit,{
                withCredentials:true,
            });

            const data: Education = resp.data;
            dispatch(updateEducation(data));
            Swal.fire({
                icon:'success',
                title:'Success!',
                text:'Education record created successfully'
            })
            dispatch(closeFormEducation());
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError;

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: axiosError? axiosError.message : 'An unexpected error occurred.'
            });
            dispatch(errorEducation(axiosError?.message || ''));
        }
    }
}