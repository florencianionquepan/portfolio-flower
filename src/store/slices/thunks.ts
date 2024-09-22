import { AppDispatch } from "../store";
import { setPerson, startLoadingPerson } from "./personSlice"

export const getPerson = () =>{
    const apiUrl = import.meta.env.VITE_API_URL;

    return async(dispatch: AppDispatch )=>{
        dispatch(startLoadingPerson());

        const resp= await fetch(`${apiUrl}/public/profile/ñonquepan`);
        const respJson = await resp.json();
        const data = respJson.data;

        dispatch( setPerson (data));
    }
}