import { createSlice } from '@reduxjs/toolkit'
import { authState } from './authState';


// Define the initial state using that type
const initialState: authState = {
    status:'checking',//auth - no-auth
    name:null,
    email:null,
    imageURL:null,
    role: []
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.status ='auth';
            state.name = payload.name; 
            state.email = payload.email; 
            state.imageURL = payload.imageURL;
            state.role = payload.role;
        },
        logout: (state) => {
            state.status ='no-auth';
            state.name = null;
            state.email = null;
            state.imageURL = null;
            state.role = [];
        },
        checkingCredentials :(state) =>{
            state.status='checking';
        }
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions

export default authSlice.reducer