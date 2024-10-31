import axios from "axios";
import { AppDispatch } from "../store"
import { addNewEducation, creatingNewEducation } from "./educationSlice";
import { Education } from "../model/Education";

export const startNewEducation =() =>{

    return async(dispatch: AppDispatch, getState) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        //id de person obtener del store
        //console.log(getState());
        const {person} = getState().person;
        const id = person.id;
        console.log(id);

        const newEducation = {

        }

        dispatch(creatingNewEducation());

        const url=`${apiUrl}/programs/person/${id}`;
        try{
            const resp = await axios.post(url, newEducation,{
                withCredentials:true,
            });

            const data: Education = resp.data;
            dispatch(addNewEducation(data));
    
        }catch(error){
            console.log(error);
        }
        
        //dispatch

        //dispatch(newEducation)
    }
}