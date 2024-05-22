import { styled } from "styled-components";
import { colorTokens } from "../../../designTokens";

const CardWrapper = styled.div`
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
    return <CardWrapper />;
};

export default Card;
