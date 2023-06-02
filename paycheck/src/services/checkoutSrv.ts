import Order from "@/models/order";
import BaseService from "./baseSrv";
import axios from "axios";

export interface ICheckoutService {
    postOrder(order: Order): Promise<{ token: string; expires: Date; checkoutUrl: string }>;
}

export default class CheckoutService extends BaseService implements ICheckoutService {
    async postOrder(order: Order): Promise<{ token: string; expires: Date; checkoutUrl: string }> {
        const response = await axios.post(this.getUrl("/order"), {
            consumer: order.consumer,
            items: order.items.map(item => item.toRequestPayload()),
            shipping: order.shipping,
            shippingAmount: order.shippingAmount.toRequestPayload(),
            taxAmount: order.taxAmount.toRequestPayload(),
            totalAmount: order.totalAmount.toRequestPayload(),
            merchant: {
                redirectCancelUrl: "https://portal.integration.scalapay.com/failure-url",
                redirectConfirmUrl: "https://portal.integration.scalapay.com/success-url",
            },
            type: "online",
            product: "pay-in-3",
            orderExpiryMilliseconds: 600000,
        });

        return response.data;
    }
}

