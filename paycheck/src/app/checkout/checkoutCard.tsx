"use client";

import { Card, Space } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function CheckoutCard({ children, title }: Props) {
  return (
    <>
      <Card title={title} className="w-full">
        <Space direction="vertical" className="w-full">
          {children}
        </Space>
      </Card>
    </>
  );
}
