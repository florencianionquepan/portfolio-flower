import { AppDispatch } from "../store";
import { checkingCredentials } from "./authSlice"

export const startSignIn =()=>{

    return async(dispatch: AppDispatch)=>{
        dispatch( checkingCredentials() );
        //no hago mas nada pq se va a recargar la pagina
    }

}