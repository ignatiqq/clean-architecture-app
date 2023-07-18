import { ICoupon } from "../../coupons/models/coupon";

export type User = {
    id: string;
    name: string;
    email: string;
    preferences: string[],
    allergies: string[]
    coupons: ICoupon[]
};