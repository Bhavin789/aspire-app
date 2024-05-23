import { styled } from "styled-components";
import { colorTokens } from "../../../../designTokens";
import ShowCard from "./ShowCard";

import aspireLogo from "../../../../assets/aspire-white.svg";
import visaLogo from "../../../../assets/visa.svg";

import CardNumber from "./CardNumber";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
`;

const Logo = styled.img`
    align-self: end;
    margin-bottom: 28px;
`;

const CardName = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-bottom: 28px;
`;

const CardNumberWrapper = styled.div`
    margin-bottom: 16px;
`;

const CardExpiryWrapper = styled.div`
    display: flex;
`;

const CardExpiry = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: white;
`;

const CardCVV = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: white;
    display: flex;
    margin-left: 36.42px;
`;

const CardCVVWrapper = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-top: -2px;
    margin-left: 8px;
`;

const CardType = styled.div``;

const CardContainer = styled.div`
    margin-top: 12px;
    width: 414px;
    height: 248px;
    border-radius: 8px;
    background: ${() => colorTokens.light.brand};
    display: flex;
    flex-direction: column;
    padding: 28px;
`;

interface CardProps {
    name: string;
    cvv: number;
    expiry: string;
    cardNumber: string;
    type: string;
    shouldShowCardNumber?: boolean;
}

const Card = ({
    name,
    cvv,
    expiry,
    cardNumber,
    type,
    shouldShowCardNumber
}: CardProps) => {
    return (
        <CardWrapper>
            <ShowCard />
            <CardContainer>
                <Logo src={aspireLogo} alt="aspire-logo" />
                <CardName>{name}</CardName>
                <CardNumberWrapper>
                    <CardNumber
                        showNumber={shouldShowCardNumber}
                        cardNumber={cardNumber}
                    />
                </CardNumberWrapper>
                <CardExpiryWrapper>
                    <CardExpiry>Thru: {expiry}</CardExpiry>
                    <CardCVV>
                        <span>{"CVV:   "}</span>
                        <CardCVVWrapper>***</CardCVVWrapper>
                    </CardCVV>
                </CardExpiryWrapper>
                <Logo src={visaLogo} alt="aspire-logo" />
            </CardContainer>
        </CardWrapper>
    );
};

export default Card;
