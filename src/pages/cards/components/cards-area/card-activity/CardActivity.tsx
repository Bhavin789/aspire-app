import styled from "styled-components";

import ActivityItem from "./ActivityItem";
import { colorTokens } from "../../../../../designTokens";

const CardActivityItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 116px;
    align-items: center;
    gap: 30px;
    align-items: baseline;
    height: 50%;
`;

const CardActivityWrapper = styled.div`
    border-radius: 16px;
    display: flex;
    justify-content: center;
    background: ${() => colorTokens.light.activityCard.background};
    height: 116px;
    align-items: center;
    padding: 18px;
    margin-top: 16px;
`;

interface CardActivityProps {
    onClick: (key: string) => void;
    cardActivities: { text: string; key: string; icon: JSX.Element }[];
}

const CardActivity = ({ onClick, cardActivities }: CardActivityProps) => {
    return (
        <CardActivityWrapper>
            <CardActivityItemsWrapper>
                {cardActivities.map(card => {
                    return (
                        <ActivityItem
                            text={card.text}
                            icon={card.icon}
                            onClick={onClick}
                            itemKey={card.key}
                            key={card.key}
                        />
                    );
                })}
            </CardActivityItemsWrapper>
        </CardActivityWrapper>
    );
};

export default CardActivity;
