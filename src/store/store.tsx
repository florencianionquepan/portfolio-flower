import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./person/personSlice"
import { authSlice } from "./auth/authSlice";
import { educationSlice } from "./education/educationSlice";

export const store = configureStore({
    reducer:{
        person: personReducer,
        auth: authSlice.reducer,
        education: educationSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;