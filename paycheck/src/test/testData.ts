import Order from "@/models/order";
import Price, { Currency } from "@/models/price";
import Product from "@/models/product";
import ShippingDetail from "@/models/shippingDetail";

export function createTestOrder() {
    const items = [
        Object.assign(new Product(), {
            id: 1,
            price: new Price(Currency.EUR, 10),
            quantity: 1,
            name: "T Shirt",
            category: "clothes",
            sku: "123456",
            brand: "Nike",
        }),
        Object.assign(new Product(), {
            id: 2,
            price: new Price(Currency.EUR, 2),
            quantity: 2,
            name: "DAS101",
            category: "Adidas",
            sku: "112245",
            brand: "Adidas",
        }),
    ];

    const shippingAmount = new Price(Currency.EUR, 2);

    const consumer = {
        givenNames: "Nam",
        surname: "Vu",
    };

    const shippingDetail = new ShippingDetail();
    shippingDetail.name = `${consumer.givenNames} ${consumer.surname}`;
    return new Order(consumer, items, shippingDetail, shippingAmount);
}