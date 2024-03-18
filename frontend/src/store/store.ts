import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const makeStore = (preloadedState?: object) => {
  return configureStore({
    reducer: combineReducers({
      cart: cartReducer,
    }),
    preloadedState
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];