import { IProductRepository } from "../repositories/product";

export class ProductService {
    constructor(readonly repository: IProductRepository) {}

    async getProductData(productId: ProductId) {
        return this.repository.getProductData(productId);
    }

    async getAllProductData() {
        return this.repository.getAllProductsData();
    }

    async getProductFinalPrice(userId: UserId, productId: ProductId) {
        return await this.repository.getProductData(productId);
    }
}