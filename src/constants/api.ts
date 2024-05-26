export const API_BASE_URL = "https://aspire-mock-api";

export const QUERY_KEYS = {
    recentTransactions: "recent-transactions",
    cards: "cards"
};

export const API_ROUTES = {
    account: {
        index: "/users/1/account",
        transactions: {
            recent: "/users/1/account/transactions/recent"
        },
        cards: {
            index: "/users/1/account/cards"
        }
    }
};
