import { createSlice } from "../../utils/imports"



const initialState = {
    addToCart: []

}


const AddToCartSlice = createSlice({
    name: 'AddToCart',
    initialState,
    reducers: {
        setAddToCart: (state, { payload }) => {
            const existingProduct = state.addToCart.find(item => item.id === payload.id);

            if (existingProduct) {
                // Update quantity of existing product
                state.addToCart = state.addToCart.map(item => {
                    return (
                        item.id === payload.id
                            ? { ...item, quantity: item.quantity + 1, price: payload.price + item.price }
                            : item
                    )
                });
            } else {
                state.addToCart.push({ ...payload, quantity: 1 });
            }
        },
        setDeleteCart: (state, { payload }) => {

            state.addToCart = state.addToCart.filter(item => item.id != payload.id)
        },
        setLessToCart: (state, { payload }) => {
            const existingProduct = state.addToCart.find(item => item.id === payload.id);

            if (existingProduct) {
                // Update quantity of existing product
                state.addToCart = state.addToCart.map(item => {
                    if (item?.quantity > 1) {
                        return (
                            item?.id === payload.id
                                ? { ...item, quantity: item.quantity - 1, price: item.price - payload.price }
                                : item
                        )
                    }else {
                       return item
                    }
                    
                    
                });
            }
        },
    }
})


export const { setAddToCart, setDeleteCart, setLessToCart } = AddToCartSlice.actions
export default AddToCartSlice.reducer