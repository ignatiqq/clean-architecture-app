import { CurrencyType } from "../../product/repositories/product";

export interface ICoupon {
    id: CouponId;
    code: CouponKey;
    discount: DiscountValue;
    currency: CurrencyType;
}
