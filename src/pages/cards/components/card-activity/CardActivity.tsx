import styled from "styled-components";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ActivityItem from "./ActivityItem";
import { colorTokens } from "../../../../designTokens";

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
`;

const cardActivities = [
    {
        text: "Freeze Card",
        icon: <MenuFoldOutlined />
    },
    {
        text: "Set Spend Limit",
        icon: <MenuFoldOutlined />
    },
    {
        text: "Add to GPay",
        icon: <MenuFoldOutlined />
    },
    {
        text: "Replace Card",
        icon: <MenuFoldOutlined />
    },
    {
        text: "Cancel Card",
        icon: <MenuFoldOutlined />
    }
];

const CardActivity = () => {
    return (
        <CardActivityWrapper>
            <CardActivityItemsWrapper>
                {cardActivities.map(card => {
                    return <ActivityItem text={card.text} icon={card.icon} />;
                })}
            </CardActivityItemsWrapper>
        </CardActivityWrapper>
    );
};

export default CardActivity;
