import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CreditCardDetails } from "../../types/CardDetails";

interface CounterState {
    cards: CreditCardDetails[];
}

const initialState: CounterState = {
    cards: [
        {
            cardName: "Bhavin Agarwal",
            cardNumber: "7433 4605 7924 7857",
            cvv: 166,
            expiryDate: "12/28"
        },
        {
            cardName: "Anita Agarwal",
            cardNumber: "7132 2040 0984 6067",
            cvv: 609,
            expiryDate: "04/24"
        }
    ]
};

export const cardsSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        appendCardDetails: (
            state,
            action: PayloadAction<CreditCardDetails>
        ) => {
            state.cards.push(action.payload);
        }
    }
});

export default cardsSlice;
