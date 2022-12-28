import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 424242
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

const {actions, reducer} = userSlice;

export default reducer;

export const {
   
} = actions;