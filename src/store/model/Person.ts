export class Person{
    private id: number;
    private name: string;
    private lastName: string;
    private tel?: string; 
    private email?: string; 
    private dateOfBirth?: Date; 
    private occupation?: string; 
    private presentation?: string; 

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