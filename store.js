import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";

// https://redux.js.org/usage/usage-with-typescript
export const store = configureStore({
    reducer: {
        test: testSlice
    }
})