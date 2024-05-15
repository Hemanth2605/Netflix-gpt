import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lang',
    initialState: {
    language : 'en'
    },
    reducers: {
    changeLanguage: (state,action) => {
        state.language = action.payload;
    }
    }
});

export const {changeLanguage} = langSlice.actions;
export default langSlice.reducer;