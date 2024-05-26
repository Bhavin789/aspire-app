import styled from "styled-components";

const ShowCardNumberWrapper = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 4px;
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
    const getCardNumber = ({
        start,
        end
    }: {
        start?: number;
        end?: number;
    }) => {
        return cardNumber.slice(start, end);
    };

    if (showNumber) {
        return (
            <HideCardNumberWrapper>
                <ShowCardNumberWrapper>
                    {getCardNumber({ start: 0, end: 4 })}
                </ShowCardNumberWrapper>
                <ShowCardNumberWrapper>
                    {getCardNumber({ start: 4, end: 8 })}
                </ShowCardNumberWrapper>
                <ShowCardNumberWrapper>
                    {getCardNumber({ start: 8, end: 12 })}
                </ShowCardNumberWrapper>
                <ShowCardNumberWrapper>
                    {getCardNumber({ start: 12, end: 16 })}
                </ShowCardNumberWrapper>
            </HideCardNumberWrapper>
        );
    }

    return (
        <HideCardNumberWrapper>
            <DotsGroup />
            <DotsGroup />
            <DotsGroup />
            <ShowCardNumberWrapper>
                {getCardNumber({ start: 12 })}
            </ShowCardNumberWrapper>
        </HideCardNumberWrapper>
    );
};

export default CardNumber;
