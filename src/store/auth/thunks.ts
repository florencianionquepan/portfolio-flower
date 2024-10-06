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

        const resp= await fetch(`${apiUrl}/logout`,{
            method: 'POST',
            credentials: 'include'
        });
        if(resp.ok){
            dispatch(logout());
        }
    }
}