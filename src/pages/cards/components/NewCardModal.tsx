import React, { useState } from "react";
import { Modal } from "antd";
import PrimaryButton from "../../../components/generic/PrimaryButton";
import { styled } from "styled-components";
import debounce from "lodash.debounce";
import { generateRandomCreditCardDetails } from "../../../utils/getRandomCardDetails";
import { CreditCardDetails } from "../../../types/CardDetails";
import {
    ButtonVariant,
    CARDS_LOCAL_STORAGE_KEY
} from "../../../constants/common";
import Input from "../../../components/generic/Input";

const ContentWrapper = styled.div`
    min-height: 200px;
    margin: auto;
`;

const FooterWrapper = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 8px;
`;

const StyledModal = styled(Modal)`
    .ant-modal-header {
        .ant-modal-title {
            font-size: 24px;
            font-weight: 700;
        }
    }
`;

const NewCardModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardName, setCardName] = useState("");

    const [error, setError] = useState("");

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const saveCardDetails = (cardDetails: CreditCardDetails) => {
        const existingCards = localStorage.getItem(CARDS_LOCAL_STORAGE_KEY);
        let cardsArray: CreditCardDetails[] = existingCards
            ? JSON.parse(existingCards)
            : [];

        cardsArray.push(cardDetails);
        localStorage.setItem(
            CARDS_LOCAL_STORAGE_KEY,
            JSON.stringify(cardsArray)
        );
    };

    const handleOk = () => {
        const cardDetails = generateRandomCreditCardDetails(cardName);
        saveCardDetails(cardDetails);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setCardName(value);
        },
        500
    );

    const buttons = [
        <PrimaryButton
            text={"Cancel"}
            variant={ButtonVariant.primary}
            onClick={handleCancel}
        />,
        <PrimaryButton
            text={"Add"}
            variant={ButtonVariant.brand}
            onClick={handleOk}
        />
    ];

    return (
        <>
            <PrimaryButton
                text="New Card"
                onClick={handleShowModal}
                variant={ButtonVariant.primary}
            />
            <StyledModal
                title="Add new card"
                open={isModalOpen}
                onOk={handleOk}
                okText={"Add"}
                onCancel={handleCancel}
                centered={true}
                destroyOnClose={true}
                footer={<FooterWrapper>{buttons}</FooterWrapper>}
            >
                <ContentWrapper>
                    <Input
                        placeholder="Enter card name"
                        onChange={handleInputChange}
                    />
                </ContentWrapper>
            </StyledModal>
        </>
    );
};

export default NewCardModal;