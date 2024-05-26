import { styled } from "styled-components";

import TransactionItem from "./TransactionItem";
import TransactionIcon from "./TransactionIcon";
import { useRecentTransactions } from "../../../../hooks/api/useRecentTransactions";
import { useMemo } from "react";

const TransactionsListWrapper = styled.div`
    padding: 38px 24px;
`;

const TransactionsList = () => {
    const { data } = useRecentTransactions({ userId: 1 });

    const transactions = useMemo(() => {
        return (
            data?.data.map(transaction => {
                const { vendor, date, meta, amount, type, vendorType } =
                    transaction;

                return {
                    vendor,
                    date,
                    meta,
                    amount,
                    type,
                    icon: <TransactionIcon vendorType={vendorType} />
                };
            }) || []
        );
    }, [data]);

    return (
        <TransactionsListWrapper>
            {transactions.map((transaction, index) => {
                const isLast = index === transactions.length - 1;
                const { vendor, amount, meta, type, icon, date } = transaction;

                return (
                    <TransactionItem
                        vendor={vendor}
                        amount={amount}
                        type={type}
                        icon={icon}
                        date={date}
                        meta={meta}
                        isLast={isLast}
                    />
                );
            })}
        </TransactionsListWrapper>
    );
};

export default TransactionsList;
