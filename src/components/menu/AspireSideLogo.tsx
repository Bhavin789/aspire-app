import { styled } from "styled-components";

import logo from "../../assets/aspire-logo.svg";

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 48px;
`;

const Logo = styled.img`
    height: 35px;
    width: fit-content;
`;

const Caption = styled.div`
    margin-top: 18px;
    color: white;
    opacity: 0.3;
`;

const AspireSideLogo = () => {
    return (
        <LogoWrapper>
            <Logo src={logo} alt="logo"></Logo>
            <Caption>
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </Caption>
        </LogoWrapper>
    );
};

export default AspireSideLogo;
