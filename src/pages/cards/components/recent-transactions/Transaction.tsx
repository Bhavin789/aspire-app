import styled from "styled-components";
import { colorTokens } from "../../../../designTokens";

const TransactionWrapper = styled.div`
    display: flex;
`;

const IconWrapper = styled.div`
    display: flex;
`;

const MetaWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AmountWrapper = styled.div`
    display: flex;
`;

const AmountText = styled.div<{ type: "credit" | "debit" }>`
    font-size: 14px;
    font-weight: 600;
    color: ${props => {
        return props.type === "debit"
            ? colorTokens.light.brand
            : colorTokens.light.textPrimary;
    }};
`;

const VendorText = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${() => colorTokens.light.textPrimary};
`;

const DateText = styled.div`
    font-size: 13px;
    color: ${() => colorTokens.light.textSecondary};
`;

const DetailsWrapper = styled.div`
    display: flex;

    font-size: 13px;
    color: ${() => colorTokens.light.textSecondary};
`;

const DetailsText = styled.span`
    color: ${() => colorTokens.light.primary};
`;

const Transaction = ({
    vendor,
    date,
    meta,
    amount,
    type,
    icon
}: {
    icon: JSX.Element;
    vendor: string;
    date: string;
    meta: string;
    amount: number;
    type: "credit" | "debit";
}) => {
    const amountValue = type === "debit" ? `-S$ ${amount}` : `+S$ ${amount}`;

    return (
        <TransactionWrapper>
            <IconWrapper>{icon}</IconWrapper>
            <MetaWrapper>
                <VendorText>{vendor}</VendorText>
                <DateText>{date}</DateText>
                <DetailsWrapper>
                    <DetailsText>{meta}</DetailsText>
                </DetailsWrapper>
            </MetaWrapper>
            <AmountWrapper>
                <AmountText type={type}>{amountValue}</AmountText>
            </AmountWrapper>
        </TransactionWrapper>
    );
};

export default Transaction;
