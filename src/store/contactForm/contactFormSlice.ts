import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactFormData } from "../../contact/ContactData";

interface contactFormState{
    sending: boolean,
    error: string | null,
    contactForm: ContactFormData | null    
}


// Define the initial state using that type
const initialState: contactFormState = {
    sending:false,
    error:null,
    contactForm: null
}

export const contactFormSlice = createSlice({
    name: 'contact',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        sendContactData:(state, action: PayloadAction<ContactFormData>) =>{
            state.contactForm = action.payload;
            state.sending=false;
            state.error=null;
        },
        sendingContactData:(state) =>{
            state.sending=true;
        },
        errorContactForm:(state, action: PayloadAction<string>)=>{
            state.sending=false;
            state.error=action.payload;
        },
        contactSent: (state) =>{
            state.sending= false;
            state.error= null;
            state.contactForm= null;
        }
    },
})

export const { sendContactData,
            sendingContactData,
            errorContactForm,
            contactSent
            } = contactFormSlice.actions

export default contactFormSlice.reducer