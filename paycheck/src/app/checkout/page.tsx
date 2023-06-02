"use client";
import "reflect-metadata"

import { ICheckoutService } from "@/services/checkoutSrv";
import { IOrderStore } from "@/stores/orderStore";
import getIocContainer from "@/services/iocSrv";
import Checkout from "./checkout";

export default function CheckoutPage() {
    const container = getIocContainer();
    const orderStore = container.resolve<IOrderStore>("OrderStore")
    const checkoutSrv = container.resolve<ICheckoutService>("CheckoutSerive");
    return Checkout({orderStore, checkoutSrv})
}


