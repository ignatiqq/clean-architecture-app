
export interface ProductRepository {
    getProductData: (productId: number) => void;
    getProductFinalPrice: (productId: number) => void;
}