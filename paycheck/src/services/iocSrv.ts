import { DependencyContainer, container } from "tsyringe";
import CheckoutService, { ICheckoutService } from "./checkoutSrv";
import OrderStore, { IOrderStore } from "@/stores/orderStore";

let isInited = false;
export default function getIocContainer(): DependencyContainer  {
    if (!isInited) {
        isInited = true;
        container.registerSingleton<ICheckoutService>("CheckoutSerive", CheckoutService);
        container.registerSingleton<IOrderStore>("OrderStore", OrderStore);
    }
    return container
}
