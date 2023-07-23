import { dataController } from "../../mocks";
import { DataForCouponRequest, ICouponRepository } from "./coupons";

export class CouponRepository implements ICouponRepository {
    async getCoupon({productId, userId, coupounId}: DataForCouponRequest) {
        return dataController((db) => {
            const coupon = db.coupons.find((coupun) => coupun.id === coupounId);

            if(!coupon) return {error: 'Такого купона не сущетсвует'};

            const user = db.users.find((user) => user.id === userId); 
            if(!user) return {error: 'Такого купона не сущетсвует'};
            const isUserHasCoupon = user.coupons.find((coupon) => coupon.id === coupounId);
            if(!isUserHasCoupon) return {error: 'Такого купона не сущетсвует'};
            
            const product = db.products.find((product) => product.id === productId);
            if(!product) return {error: 'Такого купона не сущетсвует'};
            const isProductHasCoupon = product.avaliableCoupons.find((coupon) => coupon.id === coupounId);
            if(!isProductHasCoupon) return {error: 'Такого купона не сущетсвует'};

            return coupon;

            // @TODO добавить логику в сервисе продука на гет файнал прайс
            // используя в контроллере гет купон передавая купон в продукт
        })
    }

    async getFallbackCoupon({userId, coupounId, productId}: DataForCouponRequest) {
        return dataController((db) => {
            const coupon = db.coupons.find((coupun) => coupun.id === coupounId);

            if(!coupon) return {error: 'Такого купона не сущетсвует'};

            const user = db.users.find((user) => user.id === userId); 
            if(!user) return {error: 'Такого купона не сущетсвует'};

            const isUserHasCoupon = user.coupons.find((coupon) => coupon.id === coupounId);
            if(!isUserHasCoupon) return {error: 'Такого купона не сущетсвует'};

            const product = db.products.find((product) => product.id === productId);
            if(!product) return {error: 'Такого купона не сущетсвует'};
            const isProductHasCoupon = product.avaliableCoupons.find((coupon) => coupon.id === coupounId);
            if(!isProductHasCoupon) return {error: 'Такого купона не сущетсвует'};

            return coupon;
        })
    }

}