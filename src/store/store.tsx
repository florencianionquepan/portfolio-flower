import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./slices/personSlice"

export const store = configureStore({
    reducer:{
        person: personReducer
    }
})