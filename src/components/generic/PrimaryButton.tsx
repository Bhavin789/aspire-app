import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

const StyledButton = styled.button`
    height: 35px;
    background: ${() => colorTokens.light.button.primary};
    border-radius: 4px;
    color: white;
    padding: 8px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    align-self: end;
`;

interface PrimaryButtonProps {
    onClick: React.MouseEventHandler;
    text: string;
    icon?: React.ReactNode;
}

const PrimaryButton = ({ onClick, text, icon }: PrimaryButtonProps) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default PrimaryButton;
