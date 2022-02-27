import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './auth'

export const store = configureStore({
    reducer: { authReducer },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});