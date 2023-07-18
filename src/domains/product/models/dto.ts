import { Product } from "./product";

export class ProductDto implements Product {
    id: Product['id'];
    title: Product['title'];
    price: Product['price'];
    avaliableCoupons: Product['avaliableCoupons'];

    constructor({id, title, price, avaliableCoupons}: Product) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.avaliableCoupons = avaliableCoupons;
    }
}