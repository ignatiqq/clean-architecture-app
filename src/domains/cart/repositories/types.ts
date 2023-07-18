import { Product } from "../../product/models/product";

export interface ICartRepository {
    addProduct: (userId: UserId, product: Product) => Promise<Product>;
    hasProduct: (userId: UserId, productId: ProductId) => Promise<boolean>;
    getAllProducts: (userId: UserId) => Promise<Product[]>;
    removeFromCart: (userId: UserId, productId: ProductId) => Promise<Product | null>;
}