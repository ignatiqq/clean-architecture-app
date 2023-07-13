export type OrderStatus = 'new' | 'delivery' | 'completed';
export type CurrencyType = 'euro' | 'dollars' | 'rubles';

export type Order = {
    status: OrderStatus;
    cartNumber: string;
    createdAt: Date;
    totalPrice: number;
    currency: CurrencyType;
}