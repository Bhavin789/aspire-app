import React, { useState } from "react";
import { Modal } from "antd";
import PrimaryButton from "../../../components/generic/PrimaryButton";
import { styled } from "styled-components";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import { generateRandomCreditCardDetails } from "../../../utils/getRandomCardDetails";
import { ButtonVariant } from "../../../constants/common";
import Input from "../../../components/generic/Input";
import cardsSlice from "../../../store/slices/cardsSlice";

import plusIcon from "../../../assets/plus.svg";

const ContentWrapper = styled.div`
    min-height: 50px;
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

    const dispatch = useDispatch();

    const handleOk = () => {
        const cardDetails = generateRandomCreditCardDetails(cardName);
        dispatch(cardsSlice.actions.appendCardDetails(cardDetails));
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
            key={"cancel"}
        />,
        <PrimaryButton
            text={"Add"}
            variant={ButtonVariant.brand}
            onClick={handleOk}
            key={"add"}
        />
    ];

    return (
        <>
            <PrimaryButton
                text="New Card"
                onClick={handleShowModal}
                variant={ButtonVariant.primary}
                icon={<img src={plusIcon} />}
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
