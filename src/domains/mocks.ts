import { Cart } from "./cart/models/cart"
import { ICoupon } from "./coupons/models/coupon"
import { Product } from "./product/models/product"

type DatabaseType = {
    products: Product[],
    cart: Record<UserId, Cart>,
    coupons: ICoupon[],
    users: any;
}

const coupons: ICoupon[] = [
    {
        id: 123,
        code: 'DISCOUNT550',
        discount: 550,
        currency: 'rubles'
    },
    {
        id: 456,
        code: 'WELCOME1000',
        discount: 1000,
        currency: 'rubles'
    },
]

const database: DatabaseType = {
    products: [],
    cart: {},
    users: [],
    coupons,
}

const sleep = async (ms: number): Promise<void> => {
    return new Promise((res) => {
        setTimeout(() => res(), ms);
    })
}

type DatabaseCallbackType<T> = (db: DatabaseType) => T;

export const dataController = async <T>(cb: DatabaseCallbackType<T>) => {
    await sleep(200);
    return cb(database);
}

export const getData = async <T = any>(key: string): Promise<T> => {
    return new Promise((res, rej) => {
        sleep(300).then(() => {
            let result = null;
            key.split('.').forEach((lKey) => {
                result = database[lKey as keyof typeof database];
            });
            if(result === null){
                rej('not valid key');
                return;
            }

            return res(result);
        });
    });
}