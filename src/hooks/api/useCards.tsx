import { UseQueryResult, useQuery } from "@tanstack/react-query";

import apiClient from "../../api-mocks/server";
import { CardsAPIResponse } from "../../types/CardDetails";
import { API_BASE_URL, API_ROUTES, QUERY_KEYS } from "../../constants/api";

export const fetchRecentTransactions = async ({
    userId
}: {
    userId: number;
}): Promise<CardsAPIResponse> => {
    const response = await apiClient<CardsAPIResponse>(
        `${API_BASE_URL}${API_ROUTES.account.cards}`
    );

    return response;
};

export const useCards = ({
    userId
}: {
    userId: number;
}): UseQueryResult<CardsAPIResponse, Error> => {
    return useQuery<CardsAPIResponse, Error>({
        queryKey: [QUERY_KEYS.cards, userId],
        queryFn: () => fetchRecentTransactions({ userId })
    });
};
