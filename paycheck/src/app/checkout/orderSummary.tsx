"use client";

import CheckoutCard from "./checkoutCard";
import { Button, Typography } from "antd";
import Order from "@/models/order";

const { Text } = Typography;

type Props = {
    order: Order;
    submitting: boolean;
};

const AmountLine = (props: { label: string; amount: string; textClass?: string }) => {
    return (
        <div className="flex flex-row justify-between">
            <Text className={props.textClass}>{props.label}:</Text>
            <Text className={props.textClass}>{props.amount}</Text>
        </div>
    );
};

export default function OrderSummary({ order, submitting }: Props) {
    return (
        <>
            <CheckoutCard title="Order Summary">
                <>
                    <AmountLine label="Items" amount={order.itemsAmount.toString()}></AmountLine>
                    <AmountLine label="Shipping" amount={order.shippingAmount.toString()}></AmountLine>
                    <hr />
                    <AmountLine
                        label="Total before tax"
                        amount={`${order.itemsAmount.amount + order.shippingAmount.amount} ${order.itemsAmount.currency}`}
                    ></AmountLine>

                    <AmountLine label="Tax" amount={order.taxAmount.toString()}></AmountLine>
                    <hr />
                    <AmountLine label="Order total" amount={order.totalAmount.toString()} textClass="text-red-500 font-bold text-xl"></AmountLine>
                    <Button type="primary" htmlType="submit" className="w-full mt-3" loading={submitting}>
                        Place Order
                    </Button>
                </>
            </CheckoutCard>
        </>
    );
}
