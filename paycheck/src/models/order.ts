import Consumer from "./consumer";
import Price, { Currency } from "./price";
import Product from "./product";
import ShippingDetail from "./shippingDetail";

class Order {
    consumer: Consumer;
    items: Product[];
    shipping: ShippingDetail;
    shippingAmount: Price;
    taxAmount: Price;
    itemsAmount: Price;
    totalAmount: Price;

    constructor(consumer: Consumer, items: Product[], shipping: ShippingDetail, shipingAmount: Price) {
        this.consumer = consumer;
        this.items = items;
        this.shipping = shipping;
        this.shippingAmount = shipingAmount;
        this.itemsAmount = this.updateItemsAmount();
        this.taxAmount = this.updateTaxAmount();
        this.totalAmount = this.updateTotalAmount();
    }
    private updateTaxAmount(): Price {
        const taxAmount = Price.getDefaultPrice();
        taxAmount.amount = ((this.shippingAmount.amount + this.itemsAmount.amount) * 10) / 100;
        return taxAmount;
    }

    private updateItemsAmount(): Price {
        return this.items.reduce((price, item) => {
            price.amount += item.price.amount * item.quantity;
            return price;
        }, Price.getDefaultPrice());
    }

    private updateTotalAmount(): Price {
        const totalAmount = Price.getDefaultPrice();
        totalAmount.amount = this.itemsAmount.amount + this.shippingAmount.amount + this.taxAmount.amount;
        return totalAmount;
    }
}

export default Order;
