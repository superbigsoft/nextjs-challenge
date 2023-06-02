import "reflect-metadata";
import "../../test/matchMedia.js";
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Mock, It, Times } from "moq.ts";
import { IOrderStore } from "../../stores/orderStore";
import { ICheckoutService } from "../../services/checkoutSrv";
import userEvent from "@testing-library/user-event";
import Checkout from "./checkout";
import { createTestOrder } from "@/test/testData";

afterEach(cleanup);

test("Should redirect", async () => {
    const user = userEvent.setup();

    const order = createTestOrder();
    const mockOrderStore = new Mock<IOrderStore>().setup((instance) => instance.buildOrder()).returns(order);
    const orderStore = mockOrderStore.object();

    const postOrderResult = {
        token: "token",
        expires: new Date(),
        checkoutUrl: "unit/test",
    };
    const mockCheckoutSrv = new Mock<ICheckoutService>().setup((instance) => instance.postOrder(It.IsAny())).returns(Promise.resolve(postOrderResult));
    const checkoutSrv = mockCheckoutSrv.object();

    render(<Checkout orderStore={orderStore} checkoutSrv={checkoutSrv}></Checkout>);
    await user.click(screen.getByRole("button", { name: /Place Order/i }));
    expect(window.location.href).toEqual(postOrderResult.checkoutUrl);
    mockOrderStore.verify((mock) => mock.buildOrder(), Times.Once());
    mockCheckoutSrv.verify((mock) => mock.postOrder(It.IsAny()), Times.Once());
});

test("Should not redirect when mandatory field empty", async () => {
    window.location.href = "untouched";
    const user = userEvent.setup();

    const order = createTestOrder();
    order.consumer.givenNames = "";
    const mockOrderStore = new Mock<IOrderStore>().setup((instance) => instance.buildOrder()).returns(order);
    const orderStore = mockOrderStore.object();

    const mockCheckoutSrv = new Mock<ICheckoutService>();
    const checkoutSrv = mockCheckoutSrv.object();

    render(<Checkout orderStore={orderStore} checkoutSrv={checkoutSrv}></Checkout>);
    await user.click(screen.getByRole("button", { name: /Place Order/i }));

    expect(window.location.href).toEqual("untouched");
    mockOrderStore.verify((mock) => mock.buildOrder(), Times.Once());
    mockCheckoutSrv.verify((mock) => mock.postOrder(It.IsAny()), Times.Never());
});
