import styled from "styled-components";
import { colorTokens } from "../../../../../designTokens";

const ActivityItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 36px;
    cursor: pointer;
`;

const ActivityText = styled.span`
    font-size: 13px;
    margin-top: 8px;
    color: ${() => colorTokens.light.activityCard.text};
    text-align: center;
`;

const ActivityIcon = styled.div`
    min-width: 32px;
    min-height: 32px;
`;

interface ActivityItemProps {
    text: string;
    icon: JSX.Element;
    itemKey: string;
    onClick: (key: string) => void;
}

const ActivityItem = ({
    text,
    itemKey,
    icon: Icon,
    onClick
}: ActivityItemProps) => {
    const handleClick = () => {
        onClick(itemKey);
    };

    return (
        <ActivityItemWrapper onClick={handleClick}>
            <ActivityIcon>{Icon}</ActivityIcon>
            <ActivityText>{text}</ActivityText>
        </ActivityItemWrapper>
    );
};

export default ActivityItem;
