// src/redux/reducers/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // Initialize as an empty array
  },
  reducers: {
    addToFavorites: (state, action) => {
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.items.push(action.payload); // Add new product
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      ); // Remove product
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
