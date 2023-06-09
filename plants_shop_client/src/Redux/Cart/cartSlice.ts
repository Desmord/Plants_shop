import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../Products/productsSlice';

export type InitialStateType = {
    products: [{
        quantity: number,
        product: ProductType,
        notes: string
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
        setCart: (state, action: PayloadAction<[]>) => {
            localStorage.setItem(`kodilla_project_cart`, JSON.stringify(state.products))
            state.products = action.payload;
        },
        clearAllProductsFromCart: (state) => {
            localStorage.setItem(`kodilla_project_cart`, JSON.stringify([]))
            state.products = []
        },
        setProductQuantity: (state, action: PayloadAction<{ givenProduct: ProductType | null, newQuantity: number }>) => {

            let products = JSON.parse(JSON.stringify(state.products));
            const isProductAlreadyAdded = products.find((product: any) =>
                product.product.id === action.payload.givenProduct?.id ? true : false) ? true : false;

            if (isProductAlreadyAdded) {
                products = products.map((product: ({ quantity: number, product: ProductType })) => {
                    if (product.product.id === action.payload.givenProduct?.id) {
                        return {
                            ...product,
                            quantity: action.payload.newQuantity
                        }
                    } else {
                        return { ...product }
                    }

                })
            } else {
                products.push({ quantity: action.payload.newQuantity, product: action.payload.givenProduct });
            }

            localStorage.setItem(`kodilla_project_cart`, JSON.stringify(products))
            state.products = products;
        },
        removeProductFromCart: ((state, action: PayloadAction<{ productId: string }>) => {

            if (action.payload.productId) {
                let products = JSON.parse(JSON.stringify(state.products));

                products = products.filter((product: ({ quantity: number, product: ProductType })) =>
                    product.product.id === action.payload.productId ? false : true)

                localStorage.setItem(`kodilla_project_cart`, JSON.stringify(products))
                state.products = products;
            }

        }),
        setProductNote: (state, action: PayloadAction<{ givenProduct: ProductType | null, newNote: string }>) => {

            let products = JSON.parse(JSON.stringify(state.products));

            products = products.map((product: ({ quantity: number, product: ProductType })) => {
                return {
                    ...product,
                    notes: action.payload.newNote
                }
            })

            localStorage.setItem(`kodilla_project_cart`, JSON.stringify(products))
            state.products = products;
        },
    }
})

export const {
    getCart,
    setCart,
    setProductQuantity,
    removeProductFromCart,
    setProductNote,
    clearAllProductsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;