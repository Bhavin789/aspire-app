import React from "react";

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
        color: #01d167;
        font-weight: 600;
    }
    .ant-layout-sider {
        height: 100%;
    }
`;

const SideMenu = ({ isCollapsed }: { isCollapsed: boolean }) => {
    return (
        <SideMenuWrapper>
            <Sider
                trigger={null}
                collapsible
                collapsed={isCollapsed}
                width={340}
                style={{ background: colorTokens.light.sideMenu }}
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
                    defaultSelectedKeys={["home"]}
                    items={getSideMenuItems()}
                />
            </Sider>
        </SideMenuWrapper>
    );
};

export default SideMenu;
