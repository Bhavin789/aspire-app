import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import FullWidthWrapper from "./components/generic/FullWidthWrapper";
import SideMenu from "./components/menu/SideMenu";
import AvailableBalance from "./components/AvailableBalance";

const { Header, Content } = Layout;

const App: React.FC = () => {
    const [isCollapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    return (
        <FullWidthWrapper>
            <Layout style={{ height: "100%" }}>
                <SideMenu isCollapsed={isCollapsed} />
                <Layout>
                    <Header
                        style={{ padding: 0, background: colorBgContainer }}
                    >
                        <Button
                            type="text"
                            icon={
                                isCollapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => setCollapsed(!isCollapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 60px",
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG
                        }}
                    >
                        <AvailableBalance availableBalance={100} />
                    </Content>
                </Layout>
            </Layout>
        </FullWidthWrapper>
    );
};

export default App;
