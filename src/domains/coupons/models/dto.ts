import { ICoupon } from "./coupon";

export class CouponDTO {
    id: ICoupon['id'];
    code: ICoupon['code'];
    discount: ICoupon['discount'];
    currency: ICoupon['currency'];

    constructor({id, code, discount, currency}: ICoupon) {
        this.id = id;
        this.code = code;
        this.discount = discount;
        this.currency = currency;
    }

    getDiscountString() {
        return this.discount + ' ' + this.currency;
    }
}