import { useState } from "react";
import { styled } from "styled-components";

import CardActivity from "./card-activity/CardActivity";
import CardsCarousel from "./cards/CardsCarousel";

import freezeCardLogo from "../../../../assets/freeze-card.svg";
import spendLimitLogo from "../../../../assets/spend-limit.svg";
import replaceCardLogo from "../../../../assets/replace-card.svg";
import deactivateCardLogo from "../../../../assets/deactivate-card.svg";
import gpayLogo from "../../../../assets/gpay.svg";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const Logo = styled.img`
    height: 35px;
    width: fit-content;
`;

const CardsArea = () => {
    const [shouldFreezeCard, setShouldFreezeCard] = useState(false);

    const handleCardActivityClick = (key: string) => {
        if (key === "freezeCard") {
            setShouldFreezeCard(previousFreeze => !previousFreeze);
        }
    };

    const cardActivities = [
        {
            text: shouldFreezeCard ? "Unfreeze Card" : "Freeze Card",
            key: "freezeCard",
            icon: <Logo src={freezeCardLogo} alt="logo" />
        },
        {
            text: "Set Spend Limit",
            key: "setSpendLimit",
            icon: <Logo src={spendLimitLogo} alt="logo" />
        },
        {
            text: "Add to GPay",
            key: "addToGpay",
            icon: <Logo src={gpayLogo} alt="logo" />
        },
        {
            text: "Replace Card",
            key: "replaceCard",
            icon: <Logo src={replaceCardLogo} alt="logo" />
        },
        {
            text: "Cancel Card",
            key: "cancelCard",
            icon: <Logo src={deactivateCardLogo} alt="logo" />
        }
    ];

    return (
        <CardWrapper>
            <CardsCarousel shouldFreezeCard={shouldFreezeCard} />
            <CardActivity
                onClick={handleCardActivityClick}
                cardActivities={cardActivities}
            />
        </CardWrapper>
    );
};

export default CardsArea;
