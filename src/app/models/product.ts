export class Product {
    id: number
    name: string
    description: string
    price: number
    ImageURL: string

    constructor(id, name, description = '', price = 0, ImageURL) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.ImageURL = ImageURL;
    }
};
