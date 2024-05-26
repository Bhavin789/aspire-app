import { Input as AntdInput } from "antd";
import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

const StyledInput = styled(AntdInput)`
    .ant-input-outlined {
        background: green;
        .ant-input-outlined:hover {
            border-color: red;
        }
    }

    &.ant-input {
        height: 44px;
        &:hover {
            border-color: ${() => colorTokens.light.brand};
        }
        &:focus {
            border-color: ${() => colorTokens.light.brand};
        }
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ErrorWrapper = styled.span`
    color: ${() => colorTokens.light.error};
    font-size: 10px;
`;

interface InputProps {
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    error?: string;
}

const Input = ({ placeholder, onChange, value, error }: InputProps) => {
    return (
        <InputWrapper>
            <StyledInput
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                status={error ? "error" : ""}
            />
            {error ? <ErrorWrapper>{error}</ErrorWrapper> : null}
        </InputWrapper>
    );
};

export default Input;
