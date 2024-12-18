import { createRoot, PersistGate, persistor, Provider, RouterProvider, routes, store } from './utils/imports'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={routes} />
        </PersistGate>
    </Provider>
)
