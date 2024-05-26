import { CreditCardDetails } from "../types/CardDetails";

const generateRandomNumber = (length: number): string => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result;
};

const generateCardNumber = (): string => {
    let cardNumber = "";
    for (let i = 0; i < 4; i++) {
        cardNumber += generateRandomNumber(4);
    }
    return cardNumber;
};

const generateCVV = (): number => Number(generateRandomNumber(3));

const generateExpiryDate = (): string => {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * 6) + 24;
    return (month < 10 ? "0" : "") + month + "/" + year;
};

export const generateRandomCreditCardDetails = (
    cardName: string
): CreditCardDetails => ({
    cardName,
    cardNumber: generateCardNumber(),
    cvv: generateCVV(),
    expiryDate: generateExpiryDate()
});
