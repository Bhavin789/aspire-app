import React, { useState } from "react";
import { Modal } from "antd";
import { styled } from "styled-components";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import PrimaryButton from "../../../components/generic/PrimaryButton";
import { generateRandomCreditCardDetails } from "../../../utils/getRandomCardDetails";
import { ButtonVariant } from "../../../constants/common";
import Input from "../../../components/generic/Input";
import cardsSlice from "../../../store/slices/cardsSlice";

import plusIcon from "../../../assets/plus.svg";

const ContentWrapper = styled.div`
    min-height: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const isAddButtonDisabled = !firstName || !lastName;

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const dispatch = useDispatch();

    const handleOk = () => {
        let hasError = false;
        if (!firstName) {
            hasError = true;
            setFirstNameError("First name is a required field");
        }

        if (!lastName) {
            hasError = true;
            setLastNameError("Last name is a required field");
        }

        if (hasError) {
            return;
        }

        const cardDetails = generateRandomCreditCardDetails(
            `${firstName} ${lastName}`
        );
        dispatch(cardsSlice.actions.appendCardDetails(cardDetails));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFirstNameChange = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;

            if (!value) {
                setFirstNameError("First name is a required field");
            } else {
                setFirstNameError("");
            }
            setFirstName(value);
        },
        500
    );

    const handleLastNameChange = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;

            if (!value) {
                setLastNameError("First name is a required field");
            } else {
                setLastNameError("");
            }

            setLastName(value);
        },
        500
    );

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setFirstNameError("");
        setLastNameError("");
    };

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
                afterClose={handleReset}
            >
                <ContentWrapper>
                    <Input
                        placeholder="Enter first name"
                        onChange={handleFirstNameChange}
                        error={firstNameError}
                    />
                    <Input
                        placeholder="Enter last name"
                        onChange={handleLastNameChange}
                        error={lastNameError}
                    />
                </ContentWrapper>
            </StyledModal>
        </>
    );
};

export default NewCardModal;
