import { createSlice } from "@reduxjs/toolkit";

const sanitizePrice = (price) => {
  return typeof price === "string" ? parseFloat(price) : price;
};

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const sanitizedPrice = sanitizePrice(action.payload.price);

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          price: sanitizedPrice,
          quantity: 1,
        });
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Add the clearCart reducer
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart, // Don't forget to export the new action
} = cartSlice.actions;

export default cartSlice.reducer;
