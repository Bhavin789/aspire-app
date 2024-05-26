import styled from "styled-components";
import { colorTokens } from "../../../../designTokens";
import Divider from "../../../../components/generic/Divider";

import businessAndFinanceIcon from "../../../../assets/business-and-finance.svg";
import nextIcon from "../../../../assets/next.svg";

import { TransactionType } from "../../../../constants/common";

const TransactionWrapper = styled.div`
    display: flex;
    padding: 16px 0px;
    cursor: pointer;
    &:hover {
        background: ${() => colorTokens.light.transactions.hoverBackground};
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-self: start;
`;

const MetaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 12px;
`;

const AmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AmountText = styled.div<{ type: TransactionType }>`
    font-size: 14px;
    font-weight: 600;
    color: ${props => {
        return props.type === TransactionType.debit
            ? colorTokens.light.brand
            : colorTokens.light.textPrimary;
    }};
    margin-left: auto;
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
    margin-top: 14px;
    font-size: 13px;
    color: ${() => colorTokens.light.textSecondary};
`;

const DetailsText = styled.span`
    color: ${() => colorTokens.light.primary};
    margin-left: 8px;
`;

const DetailsIconWrapper = styled.div`
    width: 24px;
    height: 20px;
    background: ${() => colorTokens.light.primary};
    text-align: center;
    border-radius: 10px;
`;

const DetailsIcon = styled.img`
    margin-bottom: 1px;
`;

const RightArrowIcon = styled.img`
    margin-left: 8px;
`;

interface TransactionItemProps {
    icon: JSX.Element;
    vendor: string;
    date: string;
    meta: string;
    amount: number;
    type: TransactionType;
    isLast?: boolean;
}

const TransactionItem = ({
    vendor,
    date,
    meta,
    amount,
    type,
    icon,
    isLast
}: TransactionItemProps) => {
    const amountValue =
        type === TransactionType.debit ? `-S$ ${amount}` : `+S$ ${amount}`;

    return (
        <>
            <TransactionWrapper>
                <IconWrapper>{icon}</IconWrapper>
                <MetaWrapper>
                    <AmountWrapper>
                        <VendorText>{vendor}</VendorText>
                        <AmountText type={type}>{amountValue}</AmountText>
                        <RightArrowIcon src={nextIcon} />
                    </AmountWrapper>
                    <DateText>{date}</DateText>
                    <DetailsWrapper>
                        <DetailsIconWrapper>
                            <DetailsIcon
                                src={businessAndFinanceIcon}
                                alt="business-and-finance-icon"
                            />
                        </DetailsIconWrapper>
                        <DetailsText>{meta}</DetailsText>
                    </DetailsWrapper>
                </MetaWrapper>
            </TransactionWrapper>
            {!isLast ? <Divider /> : null}
        </>
    );
};

export default TransactionItem;
