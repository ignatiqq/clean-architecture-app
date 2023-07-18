import { dataController } from "../../mocks";
import { IProductRepository } from "./product";

export class ProductRepository implements IProductRepository {
    async getProductData(productId: ProductId) {
        return await dataController((db) => {
            return db.products.find((product) => product.id === productId) || null;
        })
    }

    async getAllProductsData() {
        return await dataController((db) => {
            return db.products;
        })
    }
}