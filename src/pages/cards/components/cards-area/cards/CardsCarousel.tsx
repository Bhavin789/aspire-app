import { styled } from "styled-components";
import Carousel from "../../../../../components/generic/Carousel";
import { CARDS_LOCAL_STORAGE_KEY } from "../../../../../constants/common";
import { CreditCardDetails } from "../../../../../types/CardDetails";
import Card from "./Card";
import ShowCard from "./ShowCard";
import { useEffect } from "react";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
`;

interface CardsCarouselProps {
    shouldFreezeCard: boolean;
}

const CardsCarousel = ({ shouldFreezeCard }: CardsCarouselProps) => {
    const localStorageCards =
        localStorage.getItem(CARDS_LOCAL_STORAGE_KEY) || "[]";

    const cardComponents = (
        JSON.parse(localStorageCards) as CreditCardDetails[]
    ).map(card => {
        const { cardName, cardNumber, expiryDate, cvv } = card;
        return (
            <Card
                name={cardName}
                cvv={cvv}
                expiry={expiryDate}
                cardNumber={cardNumber}
            />
        );
    });

    useEffect(() => {
        console.log("localStorage", localStorage);
    }, [localStorage]);

    return (
        <CardWrapper>
            <ShowCard />
            <Carousel items={cardComponents} autoPlay={!shouldFreezeCard} />
        </CardWrapper>
    );
};

export default CardsCarousel;
