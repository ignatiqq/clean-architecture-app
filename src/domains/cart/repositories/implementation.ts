import { modifyData, getData } from "../../mocks";
import { Product } from "../../product/models/product";
import { ICartRepository } from "./types";

/**
 * Репозиторий будет содержать в себе логику выборки данных
 * В этом классе будет находится имплементация выборки данных для конкретной
 * базы данных или конкретного протокола
 * САМОЕ ГЛАВНОЕ ЧТОБЫ ВЫБОРКА ДАННЫХ СООТВЕТСТВОВАЛА ИНТЕРФЕЙСУ РЕПОЗИТОРИЯ
 * А ЕСЛИ НЕТ, МОЖНО В ЭТОМ ЖЕ КЛАССЕ ИСПОЛЬЗОВАТЬ АДАПТЕРЫ, ДЛЯ ТОГО, ЧТОБЫ
 * ПРИВЕСТИ ДАННЫЕ К НУЖНОМУ ВИДУ, В НАШЕМ СЛУЧАЕ К ВИДУ "ICartRepository".
 */
class CartRepository implements ICartRepository {
    public async addProduct(userId: UserId, product: Product) {
        await modifyData((db) => {
            if(!db.cart[userId]) db.cart = {...db.cart, [userId]: {products: []}}
            db.cart[userId].products.push(product);
        });
        return product;
    };

    public async getAllProducts(userId: ProductId) {
        return await getData<Product[]>(`cart.${userId}.products`);
    }

    public async hasProduct(userId: UserId, productId: ProductId) {
        const data = await modifyData((db) => {
            return !!db.cart[userId]?.products?.find(product => product.id === productId);
        });
        return data;
    };

    public async removeFromCart(userId: string, productId: string) {
        const product = await modifyData<Product | null>((db) => {
            let productToReturn = null;
            db.cart[userId].products = db.cart[userId].products.filter(product => {
                if(product.id === productId) {
                    productToReturn = product
                }
                return product.id !== productId;
            });
            return productToReturn;

        });
        return product;
    }
}