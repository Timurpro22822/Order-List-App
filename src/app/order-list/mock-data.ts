import { IOrderItem } from "./order-item";

export const ORDERS: IOrderItem[] = [
    {
        name: "Apple MacBook Pro 2021",
        price: 2500,
        date: new Date(2022, 11, 9),
        delivered: true
      },
      {
        name: "Apple iPhone 14 Pro Max 256GB Deep Purple",
        price: 1999,
        date: new Date(2022, 11, 9),
        delivered: false
      },
      {
        name: "MSI G24C4 144HZ 1ms",
        price: 200,
        date: new Date(2022, 11, 9),
        delivered: false
      }
];