import axios from "axios";
import { AppDispatch } from "../store";
import { setPerson, startLoadingPerson } from "./personSlice"
import { setEducations } from "../education/educationSlice";
import { setProjects } from "../project/projectSlice";

export const getPerson = () =>{

    return async(dispatch: AppDispatch )=>{
        dispatch(startLoadingPerson());

        try{
            const resp = await axios.get('/data/data.json');
            const data = resp.data;
            //console.log(data);
            const sortedProjects = [...data.projects].sort((a, b) => a.id - b.id);

            dispatch( setPerson (data.person));
            dispatch( setEducations(data.programs));
            dispatch( setProjects(sortedProjects));

        }catch(error){
            console.error(error);
        }
    }
}