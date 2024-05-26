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

interface InputProps {
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, onChange }: InputProps) => {
    return <StyledInput placeholder={placeholder} onChange={onChange} />;
};

export default Input;
