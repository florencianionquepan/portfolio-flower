export class Technology{
    public id: number;
    public name: string;
    public logoUrl: string;
    public version: number;

    constructor(id?: number, 
                name?: string, 
                logoUrl?: string, 
                version?: number) {
        this.id = id ?? 0;
        this.name = name ?? '';
        this.logoUrl = logoUrl ?? '';
        this.version = version ?? 0;
    }
}