import { Product } from "../../product/models/product";
import { User } from "./user";

export class UserDto implements User {
    id: User['id'];
    name: User['name'];
    email: User['email'];;
    coupons: User['coupons'];
    orders: User['orders'];
    cart: User['cart'];

    constructor(data: User) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email
        this.coupons = data.coupons;
        this.cart = data.cart;
    }
}