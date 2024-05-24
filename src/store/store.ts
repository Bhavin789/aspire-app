import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";

export const store = configureStore({
    reducer: {
        cardsSlice: cardsSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
