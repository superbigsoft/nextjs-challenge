import { createTestOrder } from "@/test/testData";

test("Should calculate total amount correctly", async () => {
    const order = createTestOrder();
    expect(order.totalAmount.amount).toEqual(17.6);
});
