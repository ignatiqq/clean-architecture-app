import { Product } from "../models/product";

export type CurrencyType = 'euro' | 'dollars' | 'rubles';

export interface IProductRepository {
    getProductData: (productId: ProductId) => Promise<Product | null>;
    getAllProductsData: () => Promise<Product[]>;
}