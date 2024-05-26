import styled from "styled-components";
import { colorTokens } from "../../../../../designTokens";

import eyeIcon from "../../../../../assets/eye.svg";

const ShowCardWrapper = styled.div`
    display: flex;
    margin-left: auto;
    margin-bottom: 12px;
`;

const ShowCardText = styled.div`
    color: ${() => colorTokens.light.brand};
    font-size: 12px;
    font-weight: 700;
    margin-left: 6px;
    cursor: pointer;
`;

interface ShowCardProps {
    onClick: () => void;
    shouldShowCardNumber?: boolean;
}

const ShowCard = ({ onClick, shouldShowCardNumber }: ShowCardProps) => {
    const showText = shouldShowCardNumber
        ? "Hide card number"
        : "Show card number";
    return (
        <ShowCardWrapper>
            <img src={eyeIcon} alt="show-card-icon" />
            <ShowCardText onClick={onClick}>{showText}</ShowCardText>
        </ShowCardWrapper>
    );
};

export default ShowCard;
