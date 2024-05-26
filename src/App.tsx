import React, { useState } from "react";
import { Layout } from "antd";
import FullWidthWrapper from "./components/generic/FullWidthWrapper";
import SideMenu from "./components/menu/SideMenu";
import CardsPage from "./pages/cards/CardPage";
import { styled } from "styled-components";

const ContentWrapper = styled.div`
    margin: 24px 60px;
    background: white;
`;

const App: React.FC = () => {
    const [isCollapsed, setCollapsed] = useState(false);

    const handleLogoClick = () => {
        setCollapsed(collapsed => !collapsed);
    };

    return (
        <FullWidthWrapper>
            <Layout hasSider={true}>
                <SideMenu
                    isCollapsed={isCollapsed}
                    onLogoClick={handleLogoClick}
                />
                <Layout
                    style={{
                        marginLeft: isCollapsed ? 80 : 340,
                        background: "white"
                    }}
                >
                    <ContentWrapper>
                        <CardsPage />
                    </ContentWrapper>
                </Layout>
            </Layout>
        </FullWidthWrapper>
    );
};

export default App;
