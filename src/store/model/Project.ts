import { Image } from "./Image";
import { Link } from "./Link";
import { Status } from "./Status";
import { Technology } from "./Technology";

export class Project{
    id?: number; 
    title!: string; 
    description!: string; 
    technologies!: Technology[];
    endDate?: Date; 
    status: Status; 
    images: Image[]; 
    links?: Link[];
    
    constructor(
        title: string,
        description: string,
        technologies: Technology[],
        images: Image[],
        status: Status,
        endDate?: Date,
        links?: Link[],
        id?: number
      ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.endDate = endDate;
        this.status = status;
        this.images = images;
        this.links = links;
      }
}