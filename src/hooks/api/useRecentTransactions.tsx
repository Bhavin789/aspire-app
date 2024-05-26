import { UseQueryResult, useQuery } from "@tanstack/react-query";

import apiClient from "../../api-mocks/server";
import { RecentTransactionAPIResponse } from "../../types/RecentTransaction";
import { API_BASE_URL, API_ROUTES, QUERY_KEYS } from "../../constants/api";

export const fetchRecentTransactions = async ({
    userId
}: {
    userId: number;
}): Promise<RecentTransactionAPIResponse> => {
    const response = await apiClient<RecentTransactionAPIResponse>(
        `${API_BASE_URL}${API_ROUTES.transactions.recent}`
    );

    return response;
};

export const useRecentTransactions = ({
    userId
}: {
    userId: number;
}): UseQueryResult<RecentTransactionAPIResponse, Error> => {
    return useQuery<RecentTransactionAPIResponse, Error>({
        queryKey: [QUERY_KEYS.recentTransactions, userId],
        queryFn: () => fetchRecentTransactions({ userId })
    });
};
