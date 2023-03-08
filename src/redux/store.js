import { configureStore } from '@reduxjs/toolkit'
import randevuSlice from './slices/randevuSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        randevuSlice: randevuSlice.reducer
    },
})