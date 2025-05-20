import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
        state.push(action.payload)
    },
    removeCart: (state, action) => {
        state.splice(action.payload, 1)
    },
    clearCart: () => [],
  }
})

export const selectSubtotal = (state) => {
  return state.cart.reduce((acc, item) => acc + (item.price || 0), 0)
}

export const {addCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;