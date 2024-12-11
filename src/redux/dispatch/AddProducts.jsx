import { axios, setProducts, useDispatch, useEffect } from "../../utils/imports"


const AddProducts = () => {

    const dispatch = useDispatch()

    const getProducts = async ()=>{
        try {
        const allProducts = await axios.get('https://fakestoreapi.in/api/products?limit=150')
        
        dispatch(setProducts(allProducts?.data))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

  return null
}

export default AddProducts
