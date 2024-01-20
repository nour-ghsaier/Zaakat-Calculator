export interface PriceMetal {
    "baseCurrency"?: "USD",
    "rates": {
      "EUR":number ,
      "GBP":number,
      "PA": number,
      "PL": number,
      "XAG":number,
      "XAU":number
    },
    "success"?: string,
    "unit"?: "ounce",
    "validationMessage"?: []
}
