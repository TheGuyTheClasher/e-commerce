import { Product } from 'src/app/models/product';

export class Wishlist {
    id: number;
    productId: number;
    productName: string;
    productDescription: string;
    qty: number;
    price: number;

    constructor(id: number, product: Product, qty = 1) {
        this.id = id,
            this.productId = product.id,
            this.productName = product.name,
            this.productDescription = product.description;
        this.price = product.price,
            this.qty = qty;
    }
}
