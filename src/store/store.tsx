import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./person/personSlice"
import { authSlice } from "./auth/authSlice";
import { educationSlice } from "./education/educationSlice";
import { projectSlice } from "./project/projectSlice";
import { technologySlice } from "./technology/technologySlice";

export const store = configureStore({
    reducer:{
        person: personReducer,
        auth: authSlice.reducer,
        education: educationSlice.reducer,
        project: projectSlice.reducer,
        technology: technologySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;