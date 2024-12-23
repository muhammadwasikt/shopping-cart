import { AppLayout, Categories, createBrowserRouter, Home, MainPage, Sales, PageNotFound, Products} from "../utils/imports"
import PaymentForm from "../pages/PaymentForm"
import SearchProducts from "../components/common/SearchProducts"
import ProductModal from "../components/common/ProductDetail"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: 'home',
                element: <MainPage />
            },
            {
                path: 'products/:category',
                element: <Categories />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'sale',
                element: <Sales />
            },
            {
                path: 'payment-form',
                element: <PaymentForm />
            },
            {
                path: 'products/search/:title',
                element: <SearchProducts />
            },
            {
                path: 'products/detail/:id',
                element: <ProductModal />
            }

            
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }

])