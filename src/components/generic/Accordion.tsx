import { Collapse, CollapseProps } from "antd";

import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

const AccordionWrapper = styled.div`
    .ant-collapse-header {
        height: 72px;
        background: ${() => colorTokens.light.accordion.background};
        border-radius: 8px !important;
    }

    .ant-collapse {
        border: ${() => `1px solid ${colorTokens.light.border}`};
    }

    .ant-collapse-content {
    }

    .ant-collapse-expand-icon {
        margin: auto;
    }
`;

const AccordionHeaderWrapper = styled.div`
    display: flex;
`;

const HeaderText = styled.div`
    font-size: 14px;
    color: ${() => colorTokens.light.sideMenu};
`;

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
            />
        </AccordionWrapper>
    );
};

export default Accordion;
