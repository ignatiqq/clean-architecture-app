import { Order } from "../models/order";

export interface OrderRepository {
    createOrder: (orderData: Order) => Order;
}