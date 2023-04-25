import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../Products/productsSlice';

export type InitialStateType = {
    products: [{
        quantity: number,
        product: ProductType,
    }] | []
}

const initialState: InitialStateType = {
    products: []
}

const cartSlice = createSlice({
    name: `cart`,
    initialState,
    reducers: {
        getCart: (state) => { return state },
        setProductQuantity: (state, action: PayloadAction<{ givenProduct: ProductType | null, newQuantity: number }>) => {

            let products = JSON.parse(JSON.stringify(state.products));
            const isProductAlreadyAdded = products.find((product: any) =>
                product.product.id === action.payload.givenProduct?.id ? true : false) ? true : false;

            if (isProductAlreadyAdded) {
                products = products.map((product: ({ quantity: number, product: ProductType })) => {
                    return {
                        ...product,
                        quantity: action.payload.newQuantity
                    }
                })
            } else {
                products.push({ quantity: action.payload.newQuantity, product: action.payload.givenProduct });
            }

            state.products = products;
        },
        removeProductFromCart: ((state, action: PayloadAction<{ productId: string }>) => {

            if (action.payload.productId) {
                let products = JSON.parse(JSON.stringify(state.products));

                products = products.filter((product: ({ quantity: number, product: ProductType })) =>
                    product.product.id === action.payload.productId ? false : true)

                state.products = products;

            }

        })
    }
})

export const {
    getCart,
    setProductQuantity,
    removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;