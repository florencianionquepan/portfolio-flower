import { FormValidations } from "../formFields/FormValidations";
import { ContactFormData } from "./ContactData";

export const formValidations: FormValidations<ContactFormData> = {
    email: [
        (value: string) => /\S+@\S+\.\S+/.test(value), 
        'The email is not valid'
    ],
    subject: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The subject can only contain letters and spaces.'
    ],
    description: [
        (value: string) => /^[A-Za-z0-9\s.,]+$/.test(value),
        'The description can only contain letters, numbers, spaces, commas, and periods.'
    ]
}