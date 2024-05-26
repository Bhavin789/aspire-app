import { TransactionType, VendorType } from "../constants/common";

export interface RecentTransactionAPIResponse {
    data: {
        vendor: string;
        date: string;
        meta: string;
        amount: number;
        type: TransactionType;
        vendorType: VendorType;
    }[];
}
