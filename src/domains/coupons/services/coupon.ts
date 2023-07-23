import { ICoupon } from "../models/coupon";
import { DataForCouponRequest, ICouponRepository } from "../repositories/coupons";

export class CouponService {
    baseCouponId = 1;
    
    constructor(readonly couponRepository: ICouponRepository) {

    }

    async getFallbackCoupon(data: DataForCouponRequest): Promise<ICoupon | null> {
        try {
            const response = await this.couponRepository.getFallbackCoupon({...data, coupounId: this.baseCouponId});

            if('error' in response) {
                return null;
            }

            return response;
        } catch (error) {
            return null;
        }
    }

    async getCoupon(data: DataForCouponRequest): Promise<ICoupon | null> {
        try {
            const response = await this.couponRepository.getCoupon(data);

            if('error' in response) {
                return this.getFallbackCoupon(data);
            }

            return response;
        } catch (error) {
            return this.getFallbackCoupon(data);
        }
    }

}