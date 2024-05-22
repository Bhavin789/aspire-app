import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

const Divider = styled.div`
    height: 1px;
    background: ${() => colorTokens.light.border};
`;

export default Divider;
