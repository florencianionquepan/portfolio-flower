export class Image{
    id?: number;
    name?: string;
    url?: string;
    imageId?: string;
  
    constructor(id?: number, name?: string, url?: string, imageId?: string) {
      this.id = id;
      this.name = name;
      this.url = url;
      this.imageId = imageId;
    }
}