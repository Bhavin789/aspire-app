import { styled } from "styled-components";
import { colorTokens } from "../../../../designTokens";

interface TransactionFooterProps {
    onSeeAllClick?: () => void;
}

const ShowCardText = styled.div`
    color: ${() => colorTokens.light.brand};
    font-size: 12px;
    font-weight: 700;
    margin-left: 6px;
`;

const TransactionFooterWrapper = styled.div`
    height: 80px;
    background: #edfff5;
    border: 1px solid #ddffec;
    width: 100%;
    border-radius: 8px;
    margin-top: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TransactionFooter = ({}: TransactionFooterProps) => {
    return (
        <TransactionFooterWrapper>
            <ShowCardText>View all card transactions</ShowCardText>
        </TransactionFooterWrapper>
    );
};

export default TransactionFooter;
