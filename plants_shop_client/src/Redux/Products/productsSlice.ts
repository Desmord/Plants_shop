import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
    products: []
}

const initialState: InitialStateType = {
    products: []
}

const productsSlice = createSlice({
    name: `products`,
    initialState,
    reducers: {
        getProducts: (state) => { return state },
    }
})

export const {
    getProducts
} = productsSlice.actions;

export default productsSlice.reducer;