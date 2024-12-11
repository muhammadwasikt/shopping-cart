import { AppLayout, Categories, createBrowserRouter, Home, MainPage, NewArrivals, PageNotFound, Products} from "../utils/imports"
import PaymentForm from "../pages/PaymentForm"
import  SignUp  from "../Auth/Users/SignUp"

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
                path: 'new-arrivals',
                element: <NewArrivals />
            },
            {
                path: 'payment-form',
                element: <PaymentForm />
            }
            
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }

])