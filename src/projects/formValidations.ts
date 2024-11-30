import { FormValidations } from "../education/educationFormTypes";
import { Project } from "../store/model/Project";

export const formValidations: FormValidations<Project> = {
    title: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The title can only contain letters and spaces.'
    ],
    description: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The description can only contain letters and spaces.'
    ]
    
    
}