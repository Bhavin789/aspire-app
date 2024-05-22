import { useState } from "react";
import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

interface TabsProps {
    items: { key: string; label: string }[];
    activeTab?: string;
    onClick: (key: string) => void;
}

const TabsWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

const TabItem = styled.div<{ isActive: boolean }>`
    font-size: 14px;
    font-weight: ${props => (props.isActive ? 700 : 400)};
    color: ${() => colorTokens.light.textPrimary};
    opacity: ${props => (props.isActive ? 1 : 0.3)};
    padding-bottom: 4.5px;
    border-bottom: ${props =>
        props.isActive ? `2px solid ${colorTokens.light.tabs.border}` : "none"};
    &:hover {
        cursor: pointer;
    }
`;

const Tab = ({
    isActive,
    tabKey,
    label,
    onClick
}: {
    isActive: boolean;
    tabKey: string;
    label: string;
    onClick: (key: string) => void;
}) => {
    const handleClick = () => {
        onClick(tabKey);
    };
    return (
        <TabItem onClick={handleClick} isActive={isActive}>
            {label}
        </TabItem>
    );
};

const Tabs = ({ items, activeTab, onClick }: TabsProps) => {
    const [selectedTab, setSelectedTab] = useState(activeTab ?? items[0].key);

    const handleTabClick = (key: string) => {
        setSelectedTab(key);
        onClick(key);
    };

    return (
        <TabsWrapper>
            {items.map(tab => {
                const { key, label } = tab;

                const isActive = key === selectedTab;
                return (
                    <Tab
                        isActive={isActive}
                        label={label}
                        tabKey={key}
                        onClick={handleTabClick}
                    />
                );
            })}
        </TabsWrapper>
    );
};

export default Tabs;
