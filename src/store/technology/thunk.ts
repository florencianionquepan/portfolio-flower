import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";
import { AppDispatch } from "../store"
import { addNewTechnology, closeFormTechnology, creatingNewTechnology, errorTechnology, setTechnologies, startLoadingTechnologies } from "./technologySlice";
import { Technology } from "../model/Technology";
import { ErrorResponse } from "../model/ErrorResponse";

export const showTechnologies = ()=>{

    return async( dispatch: AppDispatch)=>{
        const apiUrl = import.meta.env.VITE_API_URL;

        dispatch(startLoadingTechnologies());

        const url=`${apiUrl}/technologies`;
        try{
            const resp = await axios.get(url,{ withCredentials: true });

            const data: Technology[] = resp.data;
            //console.log(data);
            dispatch(setTechnologies(data));
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError;

            dispatch(errorTechnology(axiosError?.message || ''));
        }
    }
}

export const startNewTechnology =(technology: Technology)=>{
    return async(dispatch: AppDispatch) =>{

        const apiUrl = import.meta.env.VITE_API_URL;
        const newTechnology = technology;

        dispatch(creatingNewTechnology());

        const url=`${apiUrl}/technologies`;
        try{
            const resp = await axios.post(url, newTechnology,{
                withCredentials:true,
            });

            const data: Technology = resp.data;
            dispatch(addNewTechnology(data));
            Swal.fire({
                icon:'success',
                title:'Success!',
                text:'Technology record created successfully'
            })
            dispatch(closeFormTechnology());
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError<ErrorResponse>;
            const detailMessages = axiosError?.response?.data?.detalle 
                                        ? Object.values(axiosError.response.data.detalle).join('. ') 
                                        : 'An error occurred';

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: detailMessages
            });
            dispatch(errorTechnology(detailMessages));
        }
    }
}