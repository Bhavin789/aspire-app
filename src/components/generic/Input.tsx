import { Input as AntdInput } from "antd";
import { styled } from "styled-components";

const StyledInput = styled(AntdInput)`
    .ant-input-outlined {
        background: green;
        .ant-input-outlined:hover {
            border-color: red;
        }
    }

    .ant-input {
        background: green;
        border-color: red;
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
