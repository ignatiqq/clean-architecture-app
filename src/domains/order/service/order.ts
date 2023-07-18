import { Order } from "../models/order";
import { OrderRepository } from "../repository/order";

export class OrderService {
    constructor(readonly repository: OrderRepository) {}

    createOrder(order: Order): Order {
        return this.repository.createOrder(order);
    }
}