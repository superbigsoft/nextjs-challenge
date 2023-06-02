export enum Currency { 
  EUR = "EUR",
  USD = "USD"
}

class Price {
  currency: Currency;
  amount: number = 0;

  constructor(currency: Currency, amount: number) {
    this.amount = amount;
    this.currency = currency;
  }

  toRequestPayload() {
    return {
      amount: this.amount.toString(),
      currency: this.currency
    }
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }

  static getDefaultPrice(): Price {
    return new Price(Currency.EUR, 0)
  }
};

export default Price;
