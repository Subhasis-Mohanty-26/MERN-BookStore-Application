import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added to cart successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Item already exists in the cart",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK!",
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// increaseQuantity: (state, action) => {
//   const item = state.cartItems.find((item) => item._id === action.payload._id);
//   if (item) {
//     item.quantity += 1;
//   }
// },
// decreaseQuantity: (state, action) => {
//   const item = state.cartItems.find((item) => item._id === action.payload._id);
//   if (item && item.quantity > 1) {
//     item.quantity -= 1;
//   }
// },

// // Optional: when adding to cart, initialize quantity
// addToCart: (state, action) => {
//   const existingItem = state.cartItems.find(item => item._id === action.payload._id);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     state.cartItems.push({ ...action.payload, quantity: 1 });
//   }
// },
