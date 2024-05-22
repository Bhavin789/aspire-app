import styled from "styled-components";
import { colorTokens } from "../../../../designTokens";

const ActivityItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 36px;
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

const ActivityItem = ({
    text,
    icon: Icon
}: {
    text: string;
    icon: JSX.Element;
}) => {
    return (
        <ActivityItemWrapper>
            <ActivityIcon>{Icon}</ActivityIcon>
            <ActivityText>{text}</ActivityText>
        </ActivityItemWrapper>
    );
};

export default ActivityItem;
