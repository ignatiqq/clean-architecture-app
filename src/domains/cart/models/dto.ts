import { Product } from "../../product/models/product";
import { Cart } from "./cart";

export class CartDto implements Cart {
    products: Product[];

    constructor({products}: Cart) {
        this.products = products;
    }
}