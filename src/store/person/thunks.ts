import axios from "axios";
import { AppDispatch } from "../store";
import { setPerson, startLoadingPerson } from "./personSlice"
import { setEducations } from "../education/educationSlice";
import { setProjects } from "../project/projectSlice";

export const getPerson = () =>{
    //luego vamos a cargar todos los datos de persona(educations, projetcs, etc)
    const apiUrl = import.meta.env.VITE_API_URL;

    return async(dispatch: AppDispatch )=>{
        dispatch(startLoadingPerson());

        try{
            const resp = await axios.get(`${apiUrl}/public/profile/ñonquepan`);
            const data = resp.data;
            //console.log(data);

            dispatch( setPerson (data.person));
            dispatch( setEducations(data.programs));
            dispatch( setProjects(data.projects));

        }catch(error){
            console.error(error);
        }
    }
}