import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store"
import { errorTechnology, setTechnologies, startLoadingTechnologies } from "./technologySlice";
import { Technology } from "../model/Technology";

export const showTechnologies = ()=>{

    return async( dispatch: AppDispatch)=>{
        const apiUrl = import.meta.env.VITE_API_URL;

        dispatch(startLoadingTechnologies());

        const url=`${apiUrl}/technologies`;
        try{
            const resp = await axios.get(url);

            const data: Technology[] = resp.data;
            console.log(data);
            dispatch(setTechnologies(data));
    
        }catch(error){
            console.log(error);
            const axiosError = error as AxiosError;

            dispatch(errorTechnology(axiosError?.message || ''));
        }
    }
}