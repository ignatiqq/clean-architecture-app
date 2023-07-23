import { ICoupon } from "../models/coupon";

export type DataForCouponRequest = {
    productId: ProductId;
    userId: UserId;
    coupounId: CouponId;
}

export interface ICouponRepository {
    getCoupon: (data: DataForCouponRequest) => Promise<ICoupon | {error: string}>;
    getFallbackCoupon: (data: DataForCouponRequest) => Promise<ICoupon | {error: string}>
}