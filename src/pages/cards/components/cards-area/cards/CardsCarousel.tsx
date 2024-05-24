import { styled } from "styled-components";
import Carousel from "../../../../../components/generic/Carousel";
import { CARDS_LOCAL_STORAGE_KEY } from "../../../../../constants/common";
import Card from "./Card";
import ShowCard from "./ShowCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
`;

interface CardsCarouselProps {
    shouldFreezeCard: boolean;
}

const CardsCarousel = ({ shouldFreezeCard }: CardsCarouselProps) => {
    const cards = useSelector((state: RootState) => state.cardsSlice.cards);

    const cardComponents = cards.map(card => {
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

    return (
        <CardWrapper>
            <ShowCard />
            <Carousel items={cardComponents} autoPlay={!shouldFreezeCard} />
        </CardWrapper>
    );
};

export default CardsCarousel;
