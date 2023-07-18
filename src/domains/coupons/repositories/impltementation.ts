import { dataController } from "../../mocks";
import { ICoupon } from "../models/coupon";
import { DataForCouponRequest, ICouponRepository } from "./coupons";

export class CouponRepository implements ICouponRepository {
    getCoupon({productId, userId, coupounId}: DataForCouponRequest) {
        return dataController((db) => {
            const coupon = db.coupons.find((coupun) => coupun.id === coupounId);

            if(!coupon) return null;

            const user = db.users.find((user) => user.id === userId); 
            if(!user) return null;
            const isUserHasCoupon = user.coupons.find((coupon) => coupon.id === coupounId);
            if(!isUserHasCoupon) return null;
            
            const product = db.products.find((product) => product.id === productId);
            if(!product) return null;
            const isProductHasCoupon = product.avaliableCoupons.find((coupon) => coupon.id === coupounId);
            if(!isProductHasCoupon) return null;

            return coupon;
        })
    }

}