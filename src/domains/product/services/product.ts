import { ProductRepository } from "../repositories/product";

export class ProductService {
    constructor(readonly repository: ProductRepository) {}

    getProductData(id: number) {
        return this.repository.getProductData(id);
    }

    getProductFinalPrice(id: number) {
        return this.repository.getProductFinalPrice(id);
    }
}