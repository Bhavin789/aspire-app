import styled from "styled-components";
import { colorTokens } from "../designTokens";

const AvailableBalanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BalanceText = styled.span`
    font-size: 14px;
    color: ${() => colorTokens.light.textPrimary};
`;

const BalanceAmountWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 18px;
`;

const BalanceAmount = styled.span`
    font-size: 26px;
    color: ${() => colorTokens.light.textPrimary};
    margin-left: 12px;
    font-weight: 600;
`;

const DollarDiv = styled.div`
    font-size: 13px;
    background: ${() => colorTokens.light.brand};
    border-radius: 4px;
    width: 40px;
    height: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AvailableBalance = ({
    availableBalance
}: {
    availableBalance: number;
}) => {
    return (
        <AvailableBalanceWrapper>
            <BalanceText>Available Balance</BalanceText>
            <BalanceAmountWrapper>
                <DollarDiv>$$</DollarDiv>
                <BalanceAmount>
                    <span>{availableBalance}</span>
                </BalanceAmount>
            </BalanceAmountWrapper>
        </AvailableBalanceWrapper>
    );
};

export default AvailableBalance;
