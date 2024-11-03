export class Education {
    public id?: number;
    public name: string;
    public institution: string;
    public degreeType?: string;
    public startDate: Date;
    public endDate?: Date;
    public status: string;

    constructor(
        id: number,
        name: string,
        institution: string,
        startDate: Date,
        status: string,
        degreeType?: string,
        endDate?: Date
    ) {
        this.id = id;
        this.name = name;
        this.institution = institution;
        this.startDate = startDate;
        this.status = status;
        this.degreeType = degreeType;
        this.endDate = endDate;
    }
}