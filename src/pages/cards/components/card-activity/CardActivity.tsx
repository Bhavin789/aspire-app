import styled from "styled-components";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ActivityItem from "./ActivityItem";
import { colorTokens } from "../../../../designTokens";

import freezeCardLogo from "../../../../assets/freeze-card.svg";
import spendLimitLogo from "../../../../assets/spend-limit.svg";
import replaceCardLogo from "../../../../assets/replace-card.svg";
import deactivateCardLogo from "../../../../assets/deactivate-card.svg";
import gpayLogo from "../../../../assets/gpay.svg";

const CardActivityItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 116px;
    align-items: center;
    gap: 30px;
    align-items: baseline;
    height: 50%;
`;

const Logo = styled.img`
    height: 35px;
    width: fit-content;
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
        icon: <Logo src={freezeCardLogo} alt="logo" />
    },
    {
        text: "Set Spend Limit",
        icon: <Logo src={spendLimitLogo} alt="logo" />
    },
    {
        text: "Add to GPay",
        icon: <Logo src={gpayLogo} alt="logo" />
    },
    {
        text: "Replace Card",
        icon: <Logo src={replaceCardLogo} alt="logo" />
    },
    {
        text: "Cancel Card",
        icon: <Logo src={deactivateCardLogo} alt="logo" />
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
