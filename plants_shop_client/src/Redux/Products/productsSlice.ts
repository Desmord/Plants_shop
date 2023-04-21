import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
    products: any[]
}

const initialState: InitialStateType = {
    products: []
}

const productsSlice = createSlice({
    name: `products`,
    initialState,
    reducers: {
        getProducts: (state) => { return state },
        setProducts: (state, action: PayloadAction<any[]>) => {
            state.products = action.payload
        }
    }
})

export const {
    getProducts,
    setProducts,
} = productsSlice.actions;

export default productsSlice.reducer;