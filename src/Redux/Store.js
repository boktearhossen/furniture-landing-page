import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/BasketSlice'
import authReducer from './Slices/authSlice'

export const store = configureStore({
   reducer:{
        auth: authReducer,
        basket: basketReducer,
         

   },
});