import { ICoupon } from "../../coupons/models/coupon";

export type Product = {
    id: string;
    title: string;
    price: number;
    avaliableCoupons: ICoupon[];
}