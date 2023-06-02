import Price, { Currency } from "./price";

class Product {
  id: number = 0;
  price: Price = Price.getDefaultPrice();
  quantity: number = 0;
  name: string | undefined;
  category: string | undefined;
  sku: string | undefined;
  brand: string | undefined;

  toRequestPayload() {
    return {
      price: this.price.toRequestPayload(),
      quantity: this.quantity,
      name: this.name,
      category: this.category,
      sku: this.sku,
      brand: this.brand
    }
  }
}

export default Product;
