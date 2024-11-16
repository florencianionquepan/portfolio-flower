import { FormValidations } from "../education/educationFormTypes";
import { Technology } from "../store/model/Technology";

export const formValidations: FormValidations<Technology> = {
    name: [
        (value: string) => /^[A-Za-z\s]+$/.test(value) && value!==undefined, 
        'The name is required and can only contain letters and spaces.'
    ],
    logoUrl: [
        (value: string) => /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(value) || value=='', 
        'The URL must be valid (e.g., https://example.com)'
    ],
    version: [
        (value: number) =>  value !== undefined && value > 1,
        'The version is required and must be higher than one.'
    ]
}