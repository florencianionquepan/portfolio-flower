import axios from "axios";
import { AppDispatch } from "../store";
import { checkingCredentials, logout } from "./authSlice"

export const startSignIn =()=>{

    return async(dispatch: AppDispatch)=>{
        dispatch( checkingCredentials() );
        //no hago mas nada pq se va a recargar la pagina
    }

}

export const logoutSpring = () =>{
    const apiUrl = import.meta.env.VITE_API_URL;

    return async(dispatch: AppDispatch)=>{

        try{
            const resp= await axios.post(`${apiUrl}/logout`,{}, {
                withCredentials:true
            });
            if(resp.status==200){
                dispatch(logout());
            }
        }catch(error){
            console.error("Logout error:",error);
        }
    }
}