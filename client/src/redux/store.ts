import { configureStore } from "@reduxjs/toolkit";
import chatSlice from './createSlice'

export const store = configureStore({
    reducer:{
        reducer: chatSlice
    }
})