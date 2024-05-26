export type CreditCardDetails = {
    cardNumber: string;
    cvv: number;
    expiryDate: string;
    cardName: string;
};

export interface CardsAPIResponse {
    data: CreditCardDetails[];
}
