import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/reducerProducts.js";
import cartReducer from "./reducers/reducerCart.js";
import userReducer from "./reducers/reducerUser.js";

export const store = configureStore({
    reducer:{
        itemsReducer,
        userReducer,
        cartReducer
    }
})