import { Layout, theme } from "antd";
import AvailableBalance from "./components/AvailableBalance";
import { styled } from "styled-components";
import PrimaryButton from "../../components/generic/PrimaryButton";
import Card from "./components/Card";
import CardActivity from "./components/card-activity/CardActivity";

const { Content } = Layout;

const CardPageHeaderWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
`;

const ContentWrapper = styled.div`
    margin-top: 32px;
`;

const CardsPageWrapper = styled.div`
    margin-top: 35px;
`;

const CardsPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    return (
        <CardsPageWrapper>
            <CardPageHeaderWrapper>
                <AvailableBalance availableBalance={100} />
                <PrimaryButton text="New Card" />
            </CardPageHeaderWrapper>
            <ContentWrapper>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG
                    }}
                >
                    <Card
                        name="Bhavin Agarwal"
                        cvv={123}
                        expiry=""
                        type=""
                        cardNumber={123}
                    />
                    <CardActivity />
                </Content>
            </ContentWrapper>
        </CardsPageWrapper>
    );
};

export default CardsPage;
