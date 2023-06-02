"use client";
import Link from "next/link";
import { Button, Typography } from "antd";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Typography.Title level={1}>
                Welcome ScalaPay Demo space
            </Typography.Title>
            <Link href="/checkout">
                <Button type="primary" size="large">Checkout with ScalaPay</Button>
            </Link>
        </main>
    );
}
