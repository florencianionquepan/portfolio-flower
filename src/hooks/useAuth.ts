import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useFetch } from "./useFetch";
import { login, logout } from "../store/auth/authSlice";

export const useAuth = () =>{

    const dispatch = useAppDispatch();

    const { data, isLoading, hasError, error } = useFetch("auth");

    useEffect(()=>{

        if(error?.code==401) dispatch(logout())
        if(!hasError && data){
            dispatch(login(data))
        }

    },[isLoading])

}