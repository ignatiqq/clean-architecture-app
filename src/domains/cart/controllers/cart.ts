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

    public addToCart(product: Product): void {
        this.products.push(product);
        this.cartService.addProduct(product);
    }

    public async removeFromCart(id: ProductId) {
        try {
            this.products.filter(product => product.id !== id);
            await this.cartService.removeFromCart(id);
        } catch (error) {
            this.error = error as Error;
        }
    }
}