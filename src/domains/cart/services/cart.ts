import { Product } from "../../product/models/product";
import { ICartRepository } from "../repositories/types";

export class CartService {
    constructor(readonly repository: ICartRepository){}

    getAllProducts(userId: UserId) {
        return this.repository.getAllProducts(userId);
    };

    addProduct(userId: UserId, product: Product) {
        return this.repository.addProduct(userId, product);
    }

    hasProduct(userId: UserId, productId: ProductId) {
        return this.repository.hasProduct(userId, productId);
    }

    removeFromCart(userId: UserId, productId: ProductId) {
        return this.repository.removeFromCart(userId, productId);
    }
}