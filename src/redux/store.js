// import { combineReducers, configureStore, persistReducer, persistStore } from "../utils/imports"

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from './reducers/allProductsReducer'
import AddToCartReducer from "./reducers/addToCart";
import userReducer from "./reducers/usersreducer";



const persistConfig = {
    key: "root",
    storage,
};

const rootReducers = combineReducers({
    product: ProductReducer,
    addToCart: AddToCartReducer,
    users:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });

export const persistor = persistStore(store);