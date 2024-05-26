import { API_BASE_URL, API_ROUTES } from "../constants/api";
import { TransactionType, VendorType } from "../constants/common";

const apiClient = <T>(url: string): Promise<T> => {
    if (url === `${API_BASE_URL}${API_ROUTES.transactions.recent}`) {
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
    }

    return Promise.resolve() as Promise<T>;
};

export default apiClient;
