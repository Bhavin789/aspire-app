import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import FullWidthWrapper from "./components/generic/FullWidthWrapper";
import SideMenu from "./components/menu/SideMenu";
import AvailableBalance from "./pages/cards/components/AvailableBalance";
import CardsPage from "./pages/cards/CardPage";
import { styled } from "styled-components";

const { Header, Content } = Layout;

const ContentWrapper = styled.div`
    margin: 24px 60px;
`;

const App: React.FC = () => {
    const [isCollapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    return (
        <FullWidthWrapper>
            <Layout hasSider={true}>
                <SideMenu isCollapsed={isCollapsed} />
                <Layout style={{ marginLeft: 340 }}>
                    <ContentWrapper>
                        <CardsPage />
                    </ContentWrapper>
                </Layout>
            </Layout>
        </FullWidthWrapper>
    );
};

export default App;
