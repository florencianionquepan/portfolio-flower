import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./slices/personSlice"
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer:{
        person: personReducer,
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;