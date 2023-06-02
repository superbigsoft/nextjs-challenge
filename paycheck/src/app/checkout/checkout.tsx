"use client";
import CustomerInfo from "./customerInfo";
import CartItems from "./cartItems";
import ShippingInfo from "./shippingInfo";
import { Col, Form, Row, Space, Spin } from "antd";
import OrderSummary from "./orderSummary";
import { useEffect, useState } from "react";
import Order from "@/models/order";
import { ICheckoutService } from "@/services/checkoutSrv";
import { IOrderStore } from "@/stores/orderStore";


export default function Checkout({ orderStore, checkoutSrv }: { orderStore: IOrderStore; checkoutSrv: ICheckoutService; }) {
    async function onFinish(order: Order) {
        setSubmitting(true);
        try {
            const response = await checkoutSrv.postOrder(order);
            window.location.href = response.checkoutUrl;
        } catch (err) {
            setSubmitting(false);
        }
    }

    const [order, setOrder] = useState<Order>();
    const [submitting, setSubmitting] = useState<boolean>(false);

    useEffect(() => {
        setOrder(orderStore.buildOrder());
    }, [orderStore]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            {!order ?
                (<Spin />) :
                (<Form name="checkout" className="w-full" onFinish={() => onFinish(order)}>
                    <Row gutter={16} className="w-full">
                        <Col span={17}>
                            <Space direction="vertical" className="w-full">
                                <CustomerInfo consumer={order.consumer} />
                                <CartItems items={order.items} />
                                <ShippingInfo shippingInfo={order.shipping} />
                            </Space>
                        </Col>
                        <Col span={7}>
                            <OrderSummary order={order} submitting={submitting} />
                        </Col>
                    </Row>
                </Form>)}
        </main>
    );
}
