import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// https://redux.js.org/usage/usage-with-typescript
export const testSlice = createSlice({
    name: 'test',
    initialState: {}, // Initial state
    reducers: {
        setTest: (state, action) => { // Type of action payload was missing
            state.test = action.payload
        },
    }
})

// Export actions
export const { setTest } = testSlice.actions
// Export select's
export const selectTest = ( state ) => state.attendee.test
// Export reducer
export default testSlice.reducer
