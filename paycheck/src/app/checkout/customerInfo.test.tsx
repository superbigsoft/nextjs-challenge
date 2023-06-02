import "reflect-metadata";
import "../../test/matchMedia.js";
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { createTestOrder } from "@/test/testData";
import CustomerInfo from "./customerInfo";

afterEach(cleanup);

test("Should display correct data", async () => {
    const order = createTestOrder();
    render(<CustomerInfo consumer={order.consumer}></CustomerInfo>);
    expect(screen.queryByRole("textbox", { name: "first name" })).toHaveValue("Nam");
    expect(screen.queryByRole("textbox", { name: "last name" })).toHaveValue("Vu");
});
