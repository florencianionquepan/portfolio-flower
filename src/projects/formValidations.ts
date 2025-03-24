import { FormValidations } from "../education/educationFormTypes";
import { Project } from "../store/model/Project";
import { Technology } from "../store/model/Technology";

export const formValidations: FormValidations<Project> = {
    title: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The title can only contain letters and spaces.'
    ],
    description: [
        (value: string) => /^[A-Za-z0-9\s.,]+$/.test(value),
        'The description can only contain letters, numbers, spaces, commas, and periods.'
    ],
    technologies: [
        (value: Technology[]) => value && value.length >0,
        'There has to be at least one technology' 
    ]
    
    
}