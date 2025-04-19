import Swal from "sweetalert2";
import { ContactFormData } from "../../contact/ContactData"
import { AppDispatch } from "../store";
import { contactSent, errorContactForm, sendingContactData } from "./contactFormSlice";
import axios, { AxiosError } from "axios";

export const startSendingContactForm = (contact: ContactFormData, onSuccess: () => void)=>{
    return async(dispatch: AppDispatch ) =>{

        const apiUrl = import.meta.env.VITE_API_URL;

        dispatch(sendingContactData());

        const url=`${apiUrl}/public/contact`;
        try{
            const resp = await axios.post(url, contact);
            const message = resp.data;

            dispatch(contactSent());
            Swal.fire({
                icon:'success',
                title:'Success!',
                text:message
            })

            onSuccess();
    
        }catch(error){
            //console.log(error);
            const axiosError = error as AxiosError;

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: axiosError? axiosError.message : 'An unexpected error occurred.'
            });
            dispatch(errorContactForm(axiosError?.message || ''));
        }
    }
}