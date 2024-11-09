export class Technology{
    public id: number;
    public name: string;
    public logoURL: string;
    public version: number;

    constructor(id?: number, 
                name?: string, 
                logoURL?: string, 
                version?: number) {
        this.id = id ?? 0;
        this.name = name ?? '';
        this.logoURL = logoURL ?? '';
        this.version = version ?? 0;
    }
}