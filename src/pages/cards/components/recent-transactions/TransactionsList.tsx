import { styled } from "styled-components";

import { SettingOutlined } from "@ant-design/icons";
import Transaction from "./Transaction";
import {
    TransactionType,
    VendorType,
    VendorTypeToColor
} from "../../../../constants/common";
import TransactionIcon from "./TransactionIcon";

const TransactionsListWrapper = styled.div`
    padding: 38px 24px;
`;

const TransactionIconWrapper = styled.img<{ type: VendorType }>`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    width: fit-content;
    background: ${props => VendorTypeToColor[props.type]};
`;

const TransactionsList = () => {
    const transactions: {
        icon: JSX.Element;
        vendor: string;
        date: string;
        meta: string;
        amount: number;
        type: TransactionType;
    }[] = [
        {
            vendor: "Hamleys",
            date: "2021/02/03",
            meta: "Charged to debit card",
            amount: 150,
            type: TransactionType.debit,
            icon: <TransactionIcon vendorType={VendorType.ecom} />
        },
        {
            vendor: "Flights",
            date: "2021/02/03",
            meta: "Charged to debit card",
            amount: 150,
            type: TransactionType.credit,
            icon: <TransactionIcon vendorType={VendorType.flights} />
        }
    ];

    return (
        <TransactionsListWrapper>
            {transactions.map((transaction, index) => {
                const isLast = index === transactions.length - 1;
                const { vendor, amount, meta, type, icon, date } = transaction;

                return (
                    <Transaction
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
