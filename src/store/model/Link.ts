export class Link{
  id?: number;
  title: string;
  url: string;

  constructor(title: string, url: string, id?: number) {
    this.id = id;
    this.title = title;
    this.url = url;
  }

}