import { Education } from "../store/model/Education";
import { FormValidations } from "./educationFormTypes";

export const formValidations: FormValidations<Education> = {
    name: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The name can only contain letters and spaces.'
    ],
    institution: [
        (value: string) => /^[A-Za-z\s]+$/.test(value), 
        'The institution can only contain letters and spaces.'
    ],
    degreeType: [
        (value: string | undefined) => {
            if (value && !/^[A-Za-z\s]*$/.test(value)) {
                return false; 
            }
            return true; 
        }, 
        'The degree type can only contain letters and spaces.'
    ],
    startDate: [
        (value: Date | null) => {
            if (value) {
                const today = new Date();
                return value < today; 
            }
            return false; 
        },
        'The start date must be in the past.'
    ],
    endDate: [
        (value: Date | null | undefined, status: string) => {
            if (status === 'PENDING' || status === 'IN PROGRESS' || status === "" ) {
                return true; 
            }
            const today = new Date();
            if(value) return value < today;
            return false;
        },
        'The end date is required unless the status is pending or in progress.'
    ],
    status: [
        (value: string) => !!value, 
        'Status is required.'
    ]
}