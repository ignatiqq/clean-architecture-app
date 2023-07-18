import { HTTPResponseType } from "../typescript"
import { Cart } from "./cart/models/cart"
import { Product } from "./product/models/product"

type DatabaseType = {
    products: Product[],
    cart: Record<UserId, Cart>,
}

const database: DatabaseType = {
    products: [],
    cart: {},
}

const sleep = async (ms: number): Promise<void> => {
    return new Promise((res) => {
        setTimeout(() => res(), ms);
    })
}

type DatabaseCallbackType<T> = (db: DatabaseType) => T;

export const modifyData = async <T>(cb: DatabaseCallbackType<T>) => {
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