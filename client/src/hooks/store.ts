// logic to create store
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../app/services/AuthApi";
import { authSlice } from "../features/AuthFeature/AuthSlice";
export const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
