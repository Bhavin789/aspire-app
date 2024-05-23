import styled from "styled-components";

const ShowCardNumberWrapper = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 700;
`;

const HideCardNumberWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;

const CardDot = styled.div`
    background: white;
    width: 8px;
    height: 8px;
    border-radius: 4px;
`;

const DotsGroupWrapper = styled.div`
    display: flex;
    gap: 6px;
`;

const DotsGroup = () => {
    return (
        <DotsGroupWrapper>
            <CardDot />
            <CardDot />
            <CardDot />
            <CardDot />
        </DotsGroupWrapper>
    );
};

const CardNumber = ({
    showNumber,
    cardNumber
}: {
    showNumber?: boolean;
    cardNumber: string;
}) => {
    const getCardNumber = () => {
        if (showNumber) {
            let chunks = cardNumber.match(/.{1,4}/g) || [];

            console.log("chunks****", chunks);

            return cardNumber.replace(/(.{4})/g, "$1 ");
        }

        return cardNumber.slice(-4).split("").join(" ");
    };

    if (showNumber) {
        return <ShowCardNumberWrapper>{getCardNumber()}</ShowCardNumberWrapper>;
    }

    return (
        <HideCardNumberWrapper>
            <DotsGroup />
            <DotsGroup />
            <DotsGroup />
            <ShowCardNumberWrapper>{getCardNumber()}</ShowCardNumberWrapper>
        </HideCardNumberWrapper>
    );
};

export default CardNumber;
