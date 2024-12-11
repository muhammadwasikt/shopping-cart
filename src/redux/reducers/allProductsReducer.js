import { createSlice } from "../../utils/imports"



const initialState = {
    allProducts: []
}


const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, {payload}) => {
            state.allProducts = payload
        }
    }
})

export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer