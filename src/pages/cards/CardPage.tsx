import { Layout, theme } from "antd";
import AvailableBalance from "./components/AvailableBalance";
import { styled } from "styled-components";
import Accordion from "../../components/generic/Accordion";
import TransactionsList from "./components/recent-transactions/TransactionsList";

import recentTransactionsIcon from "../../assets/recent-transactions.svg";
import cardDetailsIcon from "../../assets/details.svg";

import Tabs from "../../components/generic/Tabs";
import NewCardModal from "./components/NewCardModal";
import CardsArea from "./components/cards-area/CardsArea";

const { Content } = Layout;

const CardPageHeaderWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
`;

const TabWrapper = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
`;

const CardsPageWrapper = styled.div`
    margin-top: 35px;
    background: white;
`;

const AccordionIcon = styled.img`
    height: 24px;
    width: fit-content;
`;

const TransactionWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const CardsPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    const handleTabClick = (key: string) => {
        console.log(key);
    };

    return (
        <CardsPageWrapper>
            <CardPageHeaderWrapper>
                <AvailableBalance availableBalance={100} />
                <NewCardModal />
            </CardPageHeaderWrapper>
            <TabWrapper>
                <Tabs
                    items={[
                        { label: "My debit cards", key: "debitCard" },
                        { label: "My company cards", key: "companyCard" }
                    ]}
                    onClick={handleTabClick}
                />
            </TabWrapper>
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                    // background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    display: "flex",
                    gap: 46,
                    boxShadow: "0px 2px 12px #00000014",
                    border: "1px solid #FCFCFC"
                }}
            >
                <CardsArea />
                <TransactionWrapper>
                    <Accordion
                        text="Card Details"
                        content={<TransactionsList />}
                        icon={
                            <AccordionIcon src={cardDetailsIcon} alt="logo" />
                        }
                    />
                    <Accordion
                        text="Recent transactions"
                        content={<TransactionsList />}
                        icon={
                            <AccordionIcon
                                src={recentTransactionsIcon}
                                alt="logo"
                            />
                        }
                    />
                </TransactionWrapper>
            </Content>
        </CardsPageWrapper>
    );
};

export default CardsPage;
