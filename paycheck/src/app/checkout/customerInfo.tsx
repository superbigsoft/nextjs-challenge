"use client";

import Consumer from "../../models/consumer";
import CheckoutCard from "./checkoutCard";
import { useStateWithCustomSetter } from "../../hooks/useStateWithCustomSetter";
import Input from "../components/Input";

export default function CustomerInfo({ consumer }: { consumer: Consumer }) {
    const [firstName, setFirstName] = useStateWithCustomSetter(consumer.givenNames, (val) => (consumer.givenNames = val));
    const [lastName, setLastName] = useStateWithCustomSetter(consumer.surname, (val) => (consumer.surname = val));

    return (
        <>
            <CheckoutCard title="Customer Details">
                <>
                    <Input
                        placeholder="First name"
                        required
                        aria-label="first name"
                        value={firstName}
                        onChange={(val) => setFirstName(val)}
                    />
                    <Input
                        placeholder="Last name"
                        required
                        aria-label="last name"
                        value={lastName}
                        onChange={(val) => setLastName(val)}
                    />
                </>
            </CheckoutCard>
        </>
    );
}
