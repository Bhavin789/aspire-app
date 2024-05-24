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
`;

const ShowCard = () => {
    return (
        <ShowCardWrapper>
            <img src={eyeIcon} alt="show-card-icon" />
            <ShowCardText>Show card number</ShowCardText>
        </ShowCardWrapper>
    );
};

export default ShowCard;
