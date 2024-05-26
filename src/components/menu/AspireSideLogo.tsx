import { styled } from "styled-components";

import logo from "../../assets/aspire-logo.svg";

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 48px;
    cursor: pointer;
`;

const Logo = styled.img`
    height: 35px;
    width: fit-content;
`;

const Caption = styled.div`
    margin-top: 18px;
    color: white;
    opacity: 0.3;
    height: 33px;
`;

const AspireSideLogo = ({
    onClick,
    isCollapsed
}: {
    onClick?: () => void;
    isCollapsed: boolean;
}) => {
    return (
        <LogoWrapper onClick={onClick}>
            <Logo src={logo} alt="logo"></Logo>
            <Caption>
                {!isCollapsed
                    ? "Trusted way of banking for 3,000+ SMEs and startups in Singapore"
                    : ""}
            </Caption>
        </LogoWrapper>
    );
};

export default AspireSideLogo;
