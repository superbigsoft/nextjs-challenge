"use client";

import CheckoutCard from "./checkoutCard";
import { Select } from "antd";
import Input from "../components/Input";
import { useStateWithCustomSetter } from "@/hooks/useStateWithCustomSetter";
import ShippingDetail from "@/models/shippingDetail";

export default function ShippingInfo({shippingInfo}: {shippingInfo: ShippingDetail}) {
  const [recipient, setRecipient] = useStateWithCustomSetter(shippingInfo.name, (val) => shippingInfo.name = val)
  const [phone, setPhone] = useStateWithCustomSetter(shippingInfo.phone, (val) => shippingInfo.phone = val)
  const [address, setAddress] = useStateWithCustomSetter(shippingInfo.line1, (val) => shippingInfo.line1 = val)
  const [postcode, setPostcode] = useStateWithCustomSetter(shippingInfo.postcode, (val) => shippingInfo.postcode = val)
  const [suburb, setSuburb] = useStateWithCustomSetter(shippingInfo.suburb, (val) => shippingInfo.suburb = val)
  const [country, setCountry] = useStateWithCustomSetter(shippingInfo.countryCode, (val) => shippingInfo.countryCode = val)
    return (
        <>
            <CheckoutCard title="Shipping Details">
                <>
                    <Input placeholder="Recipient" required aria-label="recipient" value={recipient} onChange={val => setRecipient(val)} />
                    <Input placeholder="Phone" type="tel" aria-label="phone" value={phone} onChange={val => setPhone(val)} />
                    <Input placeholder="Address" required aria-label="address" value={address} onChange={val => setAddress(val)}/>
                    <Input placeholder="Postcode" type="number" required aria-label="postcode" value={postcode} onChange={val => setPostcode(val)}/>
                    <Input placeholder="Suburb" aria-label="suburb" value={suburb} onChange={val => setSuburb(val)}/>
                    <Select
                        aria-label="country" 
                        defaultValue={country || "IT"}
                        className="w-full"
                        onChange={val => setCountry(val)}
                        options={[
                            { value: "IT", label: "Italia" },
                            { value: "CH", label: "Switzerland" },
                        ]}
                    />
                </>
            </CheckoutCard>
        </>
    );
}
