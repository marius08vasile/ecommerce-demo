import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartState = {
  products: ProductModels.client.CartProduct[]
}

type IdAction = PayloadAction<string>;
type ProductAction = PayloadAction<ProductModels.server.Product>;

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: ProductAction) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: IdAction) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (!item) return;
      item.quantity++;
    },
    decrementQuantity: (state, action: IdAction) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (!item) return;
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action: IdAction) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      if (!removeItem) return;
      state.products = removeItem;
    },
    resetCartState: (state) => {
      state.products = [];
    }
  },
});

const CartActions = cartSlice.actions;
export { CartActions };

const cartReducer = cartSlice.reducer;
export default cartReducer;