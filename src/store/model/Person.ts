import { Education } from "./Education";

export class Person{
    public id: number;
    public name: string;
    public lastName: string;
    public tel?: string; 
    public email?: string; 
    public dateOfBirth?: Date; 
    public occupation?: string; 
    public presentation?: string; 

    constructor(
        id: number,
        name: string,
        lastName: string,
        tel?: string,
        email?: string,
        dateOfBirth?: Date,
        occupation?: string,
        presentation?: string
    ) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.tel = tel;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.occupation = occupation;
        this.presentation = presentation;
    }
}