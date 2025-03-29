import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./person/personSlice"
import { authSlice } from "./auth/authSlice";
import { educationSlice } from "./education/educationSlice";
import { projectSlice } from "./project/projectSlice";
import { technologySlice } from "./technology/technologySlice";
import { contactFormSlice } from "./contactForm/contactFormSlice";

export const store = configureStore({
    reducer:{
        person: personReducer,
        auth: authSlice.reducer,
        education: educationSlice.reducer,
        project: projectSlice.reducer,
        technology: technologySlice.reducer,
        contact: contactFormSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;