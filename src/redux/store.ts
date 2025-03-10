import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./authSlice"

export const store = configureStore({
    reducer:{
        user: authSlicer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch