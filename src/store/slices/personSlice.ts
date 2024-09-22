import { createSlice } from '@reduxjs/toolkit'
import { Person } from '../model/Person'

// Define a type for the slice state
interface PersonState {
    person: Person | null,
    loading: boolean,
    error:string | null
}

// Define the initial state using that type
const initialState: PersonState = {
    person: null,
    loading: false,
    error: null
}

export const personSlice = createSlice({
    name: 'person',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        startLoadingPerson: (state, ) =>{
            state.loading = true
        },
        setPerson: (state, action)=>{
            console.log(action);
        }
    },
})

export const { startLoadingPerson, setPerson } = personSlice.actions

export default personSlice.reducer