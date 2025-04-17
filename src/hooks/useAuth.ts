import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useFetch } from "./useFetch";
import { login, logout } from "../store/auth/authSlice";

export const useAuth = () =>{

/*     const { status } = useSelector( (state: RootState) => state.auth)

    const isAuth= useMemo(()=> status==='checking', [status]); */

    const dispatch = useAppDispatch();

    const { data, isLoading, hasError, error } = useFetch("auth");

    useEffect(()=>{
        //console.log({ data, isLoading, hasError, error });

        if(error?.code==401) dispatch(logout())
        if(!hasError && data){
            dispatch(login(data))
        }

    },[isLoading])

}