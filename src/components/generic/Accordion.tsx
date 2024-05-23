import { Collapse, CollapseProps } from "antd";

import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

import downArrowIcon from "../../assets/down-arrow.svg";
import upArrowIcon from "../../assets/up-arrow.svg";

const AccordionWrapper = styled.div`
    .ant-collapse-header {
        height: 72px;
        background: ${() => colorTokens.light.accordion.background};
        border-radius: 8px !important;
    }

    .ant-collapse-header-text {
        margin: auto;
    }

    .ant-collapse {
        border: ${() => `1px solid ${colorTokens.light.border}`};
    }

    .ant-collapse-content {
    }

    .ant-collapse-expand-icon {
        margin: auto;
    }

    .ant-collapse-content {
        border-top: ${() => `1px solid ${colorTokens.light.border}`};
    }
`;

const AccordionHeaderWrapper = styled.div`
    display: flex;
`;

const HeaderText = styled.div`
    font-size: 14px;
    margin-left: 12px;
    color: ${() => colorTokens.light.sideMenu};
`;

/**
 *
 * TODO: Fix type
 */
const ExpandIcon = (panelProps: any) => {
    if (panelProps.isActive) {
        return <img src={upArrowIcon} alt="expand" />;
    }
    return <img src={downArrowIcon} alt="expand" />;
};

const Accordion = ({
    text,
    icon,
    content
}: {
    text: string;
    icon?: JSX.Element;
    content: JSX.Element;
}) => {
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: (
                <AccordionHeaderWrapper>
                    {icon}
                    <HeaderText>{text}</HeaderText>
                </AccordionHeaderWrapper>
            ),
            children: content
        }
    ];

    return (
        <AccordionWrapper>
            <Collapse
                defaultActiveKey={["1"]}
                items={items}
                expandIconPosition="end"
                expandIcon={ExpandIcon}
            />
        </AccordionWrapper>
    );
};

export default Accordion;
