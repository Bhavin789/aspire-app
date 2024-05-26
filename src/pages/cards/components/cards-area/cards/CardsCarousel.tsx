import { styled } from "styled-components";
import Carousel from "../../../../../components/generic/Carousel";
import { CARDS_LOCAL_STORAGE_KEY } from "../../../../../constants/common";
import Card from "./Card";
import ShowCard from "./ShowCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useCards } from "../../../../../hooks/api/useCards";
import cardsSlice from "../../../../../store/slices/cardsSlice";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
`;

interface CardsCarouselProps {
    shouldFreezeCard: boolean;
}

const CardsCarousel = ({ shouldFreezeCard }: CardsCarouselProps) => {
    const { data } = useCards({ userId: 1 });

    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(cardsSlice.actions.setCardDetails(data.data));
        }
    }, [data]);

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
