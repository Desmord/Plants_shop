import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type ProductType = {
    id: string,
    price: string,
    title: string,
    description: string,
    images?: any[]
}

export type InitialStateType = {
    products: ProductType[] | []
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
        },
    }
})

export const {
    getProducts,
    setProducts,
} = productsSlice.actions;

export default productsSlice.reducer;