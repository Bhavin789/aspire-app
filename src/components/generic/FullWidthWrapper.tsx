import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
`;
const FullWidthWrapper = ({ children }: { children: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default FullWidthWrapper;
