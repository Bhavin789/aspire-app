import { styled } from "styled-components";
import { colorTokens } from "../../../../designTokens";
import ShowCard from "./ShowCard";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
`;

const CardContainer = styled.div`
    margin-top: 12px;
    width: 414px;
    height: 248px;
    border-radius: 8px;
    background: ${() => colorTokens.light.brand};
`;

const Card = ({
    name,
    cvv,
    expiry,
    cardNumber,
    type
}: {
    name: string;
    cvv: number;
    expiry: string;
    cardNumber: number;
    type: string;
}) => {
    return (
        <CardWrapper>
            <ShowCard />
            <CardContainer />
        </CardWrapper>
    );
};

export default Card;
