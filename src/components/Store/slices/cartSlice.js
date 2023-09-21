import { createSlice } from "@reduxjs/toolkit";

const storedCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const totalCountHandler = () => {};

const totalPriceHAndler = () => {};

const TotalAmt = (items) => {
  const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    const d = a?.price * a?.quantity;
    return accumulator + d;
  }
  return sum;
};
const ini = { totalCount: 0, items: [], totalPrice: 0 };

const cartSlice = createSlice({
  name: "coin",
  initialState: ini,
  reducers: {
    addCartItem: (state, action) => {
      const { quantity } = action.payload;
      const { image, name, price } = action.payload?.selectedItem;

      const existingItem = state.items.find(
        (item) =>
          item.image === image && item.name === name && item.price === price
      );
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        state.items = updatedItems;
      } else {
        const newItem = {
          image,
          name,
          price,
          quantity: quantity,
        };
        state.items = [...state.items, newItem];
      }
      state.totalCount = state.totalCount + quantity;
      const totalmt = TotalAmt(state.items);
      state.totalPrice = totalmt;
    },

    RemoveCartItem: (state, action) => {
      const { image, name, price } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.image === image && item.name === name && item.price === price
      );

      if (existingItem && existingItem.quantity > 1) {
        const updatedItems = state.items.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.items = updatedItems;
      } else {
        const updatedItems = state.items.filter(
          (item) =>
            item.image !== image || item.name !== name || item.price !== price
        );
        state.items = updatedItems;
      }
      state.totalCount = state.totalCount - 1;
      const totalmt = TotalAmt(state.items);
      state.totalPrice = totalmt;
    },
  },
});

export const { addCartItem, RemoveCartItem } = cartSlice.actions;

export default cartSlice.reducer;

export const cartDetails = (state) => state.cartItems;