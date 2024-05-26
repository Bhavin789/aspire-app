import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";
import { ButtonVariant } from "../../constants/common";

const StyledButton = styled.button<{
    variant: ButtonVariant;
    isDisabled?: boolean;
}>`
    height: 35px;
    background: ${props => colorTokens.light.button[props.variant]};
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    align-self: end;
    cursor: pointer;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => (props.isDisabled ? 0.5 : 1)};
    cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
`;

const IconWrapper = styled.span`
    margin-right: 8px;
    line-height: 0;
`;

interface PrimaryButtonProps {
    onClick: React.MouseEventHandler;
    text: string;
    icon?: React.ReactNode;
    variant: ButtonVariant;
    isDisabled?: boolean;
}

const PrimaryButton = ({
    onClick,
    text,
    icon,
    variant,
    isDisabled
}: PrimaryButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            variant={variant}
            isDisabled={isDisabled}
        >
            {icon ? <IconWrapper>{icon}</IconWrapper> : null}
            {text}
        </StyledButton>
    );
};

export default PrimaryButton;
