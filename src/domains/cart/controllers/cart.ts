import { Product } from "../../product/models/product";
import { CartService } from "../services/cart";

export class CartController {
    public products: Product[];
    public isCartDataLoading: boolean;
    public error: Error | null;

    constructor(readonly cartService: CartService) {
        this.products = [];
        this.isCartDataLoading = false;
        this.error = null
    }

    private setCartDataLoading(flag: boolean) {
        this.isCartDataLoading = flag;
    }

    public async getAllProducts(userId: UserId) {
        try {
            this.setCartDataLoading(true);
            this.products = await this.cartService.getAllProducts(userId);
        } catch (error) {
            this.error = error as Error;
        }
    }

    public addToCart(userId: UserId, product: Product): void {
        this.products.push(product);
        this.cartService.addProduct(userId, product);
    }

    public async removeFromCart(userId: UserId, productId: ProductId) {
        try {
            this.products.filter(product => product.id !== productId);
            await this.cartService.removeFromCart(userId, productId);
        } catch (error) {
            this.error = error as Error;
        }
    }
}