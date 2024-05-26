import React, { useState } from "react";

import { Layout, Menu } from "antd";
import getSideMenuItems from "../../utils/getSideMenuItems";
import AspireSideLogo from "./AspireSideLogo";
import { colorTokens } from "../../designTokens";
import { styled } from "styled-components";

const { Sider } = Layout;

const SideMenuWrapper = styled.div`
    height: 100%;
    .ant-menu-item {
        margin: 0;
        padding: 0 !important;
        height: 84px;
        font-size: 16px;
    }
    .ant-menu-item-selected {
        background: transparent;
        color: ${() => colorTokens.light.brand};
        font-weight: 600;
    }
    .ant-layout-sider {
        height: 100%;
    }

    .ant-menu-title-content {
        margin-left: 16px;
    }
`;

const SideMenu = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const [selectedItem, setSelectedItem] = useState("home");

    const handleMenuItemSelection = ({ key }: { key: string }) => {
        setSelectedItem(key);
    };

    return (
        <SideMenuWrapper>
            <Sider
                trigger={null}
                collapsible
                collapsed={isCollapsed}
                width={340}
                style={{
                    background: colorTokens.light.sideMenu,
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0
                }}
            >
                <AspireSideLogo />
                <Menu
                    theme="dark"
                    style={{
                        background: colorTokens.light.sideMenu,
                        marginLeft: "48px",
                        width: "calc(100% - 48px)"
                    }}
                    mode="inline"
                    defaultSelectedKeys={[selectedItem]}
                    selectedKeys={[selectedItem]}
                    items={getSideMenuItems({ selectedItem })}
                    onSelect={handleMenuItemSelection}
                />
            </Sider>
        </SideMenuWrapper>
    );
};

export default SideMenu;
