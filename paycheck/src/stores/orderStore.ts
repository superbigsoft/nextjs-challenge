import Consumer from "@/models/consumer";
import Order from "@/models/order";
import Price, { Currency } from "@/models/price";
import Product from "@/models/product";
import ShippingDetail from "@/models/shippingDetail";

export interface IOrderStore {
    buildOrder(): Order;
}

export default class OrderStore implements IOrderStore {
    items!: Product[];
    consumer!: Consumer;
    shippingDetail!: ShippingDetail;
    shippingAmount!: Price;

    constructor() {
        // Initialise dummy data for the scope of this assessment.
        this.items = [
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

        this.shippingAmount = new Price(Currency.EUR, 2);

        this.consumer = {
            givenNames: "Nam",
            surname: "Vu",
        };

        const shippingDetail = new ShippingDetail();
        shippingDetail.name = `${this.consumer.givenNames} ${this.consumer.surname}`;
        this.shippingDetail = shippingDetail;
    }

    buildOrder(): Order {
        return new Order(this.consumer, this.items, this.shippingDetail, this.shippingAmount);
    }
}
