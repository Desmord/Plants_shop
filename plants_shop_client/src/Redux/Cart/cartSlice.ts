import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
    products: []
}

const initialState: InitialStateType = {
    products: []
}

const cartSlice = createSlice({
    name: `cart`,
    initialState,
    reducers: {
        getCart: (state) => { return state },
    }
})

export const {
    getCart
} = cartSlice.actions;

export default cartSlice.reducer;