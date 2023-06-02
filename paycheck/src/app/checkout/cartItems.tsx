"use client";

import Column from "antd/es/table/Column";
import CheckoutCard from "./checkoutCard";
import Product from "@/models/product";
import { Table } from "antd";
import Price from "@/models/price";

type Props = {
    items: Product[];
};

export default function CartItems({ items }: Props) {
    return (
        <>
            <CheckoutCard title="Items in cart">
                <Table rowKey="id" dataSource={items}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Brand" dataIndex="brand" key="brand" />
                    <Column title="Quantity" dataIndex="quantity" key="quantity" />
                    <Column
                        title="Price"
                        dataIndex="price"
                        key="price"
                        render={(price: Price) => <>{price.toString()}</>}
                    />
                </Table>
            </CheckoutCard>
        </>
    );
}
