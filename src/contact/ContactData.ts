export class ContactFormData {
    public email: string;
    public subject: string;
    public description: string;

    constructor(
        email: string,
        subject: string,
        description: string
    ) {
        this.email = email;
        this.subject = subject;
        this.description = description;
    }
}
