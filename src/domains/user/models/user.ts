import { Cart } from "../../cart/models/cart";
import { ICoupon } from "../../coupons/models/coupon";

export type User = {
    id: string;
    name: string;
    email: string;
    coupons: ICoupon[];
    // not implemented but has to
    orders: any;
    cart: Cart;
};