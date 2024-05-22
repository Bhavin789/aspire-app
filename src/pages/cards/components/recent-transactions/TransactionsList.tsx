import { styled } from "styled-components";

import { SettingOutlined } from "@ant-design/icons";
import Transaction from "./Transaction";

const TransactionsListWrapper = styled.div`
    padding: 38px 24px;
`;

const TransactionsList = () => {
    const transactions: {
        icon: JSX.Element;
        vendor: string;
        date: string;
        meta: string;
        amount: number;
        type: "credit" | "debit";
    }[] = [
        {
            vendor: "Hamleys",
            date: "2021/02/03",
            meta: "Charged to debit card",
            amount: 150,
            type: "debit",
            icon: <SettingOutlined />
        },
        {
            vendor: "Hamleys",
            date: "2021/02/03",
            meta: "Charged to debit card",
            amount: 150,
            type: "credit",
            icon: <SettingOutlined />
        }
    ];

    return (
        <TransactionsListWrapper>
            {transactions.map(transaction => {
                const { vendor, amount, meta, type, icon, date } = transaction;

                return (
                    <Transaction
                        vendor={vendor}
                        amount={amount}
                        type={type}
                        icon={icon}
                        date={date}
                        meta={meta}
                    />
                );
            })}
        </TransactionsListWrapper>
    );
};

export default TransactionsList;
