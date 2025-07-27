import Swal from "sweetalert2";
import { ContactFormData } from "../../contact/ContactData"
import { AppDispatch } from "../store";
import { contactSent, errorContactForm, sendingContactData } from "./contactFormSlice";
import emailjs from "@emailjs/browser";

export const startSendingContactForm = (contact: ContactFormData, onSuccess: () => void)=>{

    const {
        VITE_EMAILJS_SERVICE_ID: serviceId,
        VITE_EMAILJS_TEMPLATE_ID: templateId,
        VITE_EMAILJS_PUBLIC_KEY: publicKey,
      } = import.meta.env;
      
    
    return async(dispatch: AppDispatch ) =>{

        dispatch(sendingContactData());

        try {
            
            const templateParams = {
              from_email: contact.email,
              subject: contact.subject,
              message: contact.description,
            };
      
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
            dispatch(contactSent());
      
            Swal.fire({
              icon: "success",
              title: "¡Mensaje enviado!",
              text: "Gracias por tu contacto. Te responderé pronto.",
            });
      
            onSuccess();
      
          } catch (error: unknown) {
            let errorMessage = "Ocurrió un error inesperado.";
      
            if (typeof error === "string") {
              errorMessage = error;
            } else if (error && typeof error === "object" && "text" in error) {
              errorMessage = (error as { text?: string }).text || errorMessage;
            } else if (error instanceof Error) {
              errorMessage = error.message;
            }
      
            Swal.fire({
              icon: "error",
              title: "Error al enviar el mensaje",
              text: errorMessage,
            });
      
            dispatch(errorContactForm(errorMessage));
        }
    };
    
}