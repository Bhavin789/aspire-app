export enum TransactionType {
    debit = "debit",
    credit = "credit"
}

export enum VendorType {
    ecom = "ecom",
    flights = "flights",
    alert = "alert"
}

export const VendorTypeToColor = {
    [VendorType.ecom]: "#009DFF1A",
    [VendorType.flights]: "#00D6B51A",
    [VendorType.alert]: "#F251951A"
};

export const CARDS_LOCAL_STORAGE_KEY = "cards";
