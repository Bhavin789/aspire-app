import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CreditCardDetails } from "../../types/CardDetails";

interface CardsState {
    cards: CreditCardDetails[];
}

const initialState: CardsState = {
    cards: []
};

export const cardsSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        appendCardDetails: (
            state,
            action: PayloadAction<CreditCardDetails>
        ) => {
            state.cards.unshift(action.payload);
        },
        setCardDetails: (state, action: PayloadAction<CreditCardDetails[]>) => {
            state.cards = action.payload;
        }
    }
});

export default cardsSlice;
