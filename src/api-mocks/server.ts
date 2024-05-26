import { API_BASE_URL, API_ROUTES } from "../constants/api";
import { TransactionType, VendorType } from "../constants/common";

const apiClient = <T>(url: string): Promise<T> => {
    if (url === `${API_BASE_URL}${API_ROUTES.account.transactions.recent}`) {
        return Promise.resolve({
            data: [
                {
                    vendor: "Flights",
                    date: "2021/02/03",
                    meta: "Charged to debit card",
                    amount: 150,
                    type: TransactionType.credit,
                    vendorType: VendorType.ecom
                },
                {
                    vendor: "Hamleys",
                    date: "2021/02/03",
                    meta: "Charged to debit card",
                    amount: 150,
                    type: TransactionType.debit,
                    vendorType: VendorType.flights
                }
            ]
        } as T);
    } else if (url === `${API_BASE_URL}${API_ROUTES.account.cards}`) {
        return Promise.resolve({
            data: [
                {
                    cardName: "Bhavin Agarwal",
                    cardNumber: "7433460579247857",
                    cvv: 166,
                    expiryDate: "12/28"
                },
                {
                    cardName: "Anita Agarwal",
                    cardNumber: "7132204009846067",
                    cvv: 609,
                    expiryDate: "04/24"
                }
            ]
        } as T);
    }

    return Promise.resolve() as Promise<T>;
};

export default apiClient;
