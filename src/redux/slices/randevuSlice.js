import { createSlice } from "@reduxjs/toolkit";

const randevuSlice = createSlice({
    name: "randevuSlice",
    initialState: {
        randevu: []
    },
    reducers: {
        setRandevu: (state, action) => {
            state.randevu = action.payload;
        }

    }
});

export const { setRandevu } = randevuSlice.actions;

export default randevuSlice;