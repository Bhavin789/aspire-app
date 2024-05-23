import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import PrimaryButton from "../../../components/generic/PrimaryButton";
import { styled } from "styled-components";
import debounce from "lodash.debounce";
import { generateRandomCreditCardDetails } from "../../../utils/getRandomCardDetails";
import { CreditCardDetails } from "../../../types/CardDetails";
import { CARDS_LOCAL_STORAGE_KEY } from "../../../constants/common";

const ContentWrapper = styled.div`
    min-height: 200px;
    margin: auto;
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

    return (
        <>
            <PrimaryButton text="New Card" onClick={handleShowModal} />
            <Modal
                title="Add new card"
                open={isModalOpen}
                onOk={handleOk}
                okText={"Add"}
                onCancel={handleCancel}
                centered={true}
                destroyOnClose={true}
            >
                <ContentWrapper>
                    <Input
                        placeholder="Enter card name"
                        onChange={handleInputChange}
                    />
                </ContentWrapper>
            </Modal>
        </>
    );
};

export default NewCardModal;
