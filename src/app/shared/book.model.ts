export class Book {
    public id: number;
    public title: string;
    public description: string;
    public rating: number;

    constructor(id: number, title: string, description: string, rating: number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.rating = rating;
    }
}