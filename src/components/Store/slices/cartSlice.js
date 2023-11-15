// import { createSlice } from "@reduxjs/toolkit";
// const updateLocalStorage = (items, totalCount, totalPrice) => {
//   localStorage.setItem("cartItems", JSON.stringify(items));
//   localStorage.setItem("totalCount", totalCount);
//   localStorage.setItem("totalPrice", totalPrice);
// };
// const storedCartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const storedTotalCount = localStorage.getItem("totalCount")
//   ? parseInt(localStorage.getItem("totalCount"))
//   : 0;

// const storedTotalPrice = localStorage.getItem("totalPrice")
//   ? parseFloat(localStorage.getItem("totalPrice"))
//   : 0;
// const TotalAmt = (items) => {
//   const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
//   function add(accumulator, a) {
//     const d = a?.price * a?.quantity;
//     return accumulator + d;
//   }
//   return sum;
// };
// const ini = {
//   totalCount: storedTotalCount, // Initialize with totalCount from local storage
//   items: storedCartItems, // Initialize with items from local storage
//   totalPrice: storedTotalPrice, // Initialize with totalPrice from local storage
// };

// const cartSlice = createSlice({
//   name: "coin",
//   initialState: ini,
//   reducers: {
//     addCartItem: (state, action) => {
//       const { quantity } = action.payload;
//       const { image, name, price } = action.payload?.selectedItem;

//       const existingItem = state.items.find(
//         (item) =>
//           item.image === image && item.name === name && item.price === price
//       );
//       if (existingItem) {
//         const updatedItems = state.items.map((item) =>
//           item === existingItem
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//         state.items = updatedItems;
//       } else {
//         const newItem = {
//           image,
//           name,
//           price,
//           quantity: quantity,
//         };
//         state.items = [...state.items, newItem];
//       }
//       state.totalCount = state.totalCount + quantity;
      // const totalmt = TotalAmt(state.items);
//       state.totalPrice = totalmt;
//       updateLocalStorage(state.items, state.totalCount, state.totalPrice);
//     },

//     RemoveCartItem: (state, action) => {
//       const { image, name, price } = action.payload;
//       const existingItem = state.items.find(
//         (item) =>
//           item.image === image && item.name === name && item.price === price
//       );

//       if (existingItem && existingItem.quantity > 1) {
//         const updatedItems = state.items.map((item) =>
//           item === existingItem
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
//         state.items = updatedItems;
//       } else {
//         const updatedItems = state.items.filter(
//           (item) =>
//             item.image !== image || item.name !== name || item.price !== price
//         );
//         state.items = updatedItems;
//       }
//       state.totalCount = state.totalCount - 1;
//       const totalmt = TotalAmt(state.items);
//       state.totalPrice = totalmt;
//       updateLocalStorage(state.items, state.totalCount, state.totalPrice);
//     },
//   },
// });

// export const { addCartItem, RemoveCartItem } = cartSlice.actions;

// export default cartSlice.reducer;

// export const cartDetails = (state) => state.cartItems;



// this is for Cart[0]product-id....


import { createSlice } from "@reduxjs/toolkit";
const updateLocalStorage = (items, totalCount, totalPrice) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("totalCount", totalCount);
  localStorage.setItem("totalPrice", totalPrice);
};
const storedCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const storedTotalCount = localStorage.getItem("totalCount")
  ? parseInt(localStorage.getItem("totalCount"))
  : 0;

const storedTotalPrice = localStorage.getItem("totalPrice")
  ? parseFloat(localStorage.getItem("totalPrice"))
  : 0;
const TotalAmt = (items) => {
  const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    const d = a?.price * a?.quantity;
    return accumulator + d;
  }
  return sum;
};
const ini = {
  totalCount: storedTotalCount, // Initialize with totalCount from local storage
  items: storedCartItems, // Initialize with items from local storage
  totalPrice: storedTotalPrice, // Initialize with totalPrice from local storage
};

const cartSlice = createSlice({
  name: "cart",
  initialState: ini,
  reducers: {
    addCartItem: (state, action) => {
      const { quantity } = action.payload;
      const { product_id, image, name, price } = action.payload?.selectedItem;

      const existingItem = state.items.find(
        (item) =>
          item.product_id === product_id &&
          item.image === image &&
          item.name === name &&
          item.price === price
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
          product_id,
          image,
          name,
          price,
          quantity: quantity,
        };
        state.items = [...state.items, newItem];
      }
      state.totalCount = state.totalCount + quantity;
      const totalmt = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      state.totalPrice = totalmt;
      updateLocalStorage(state.items, state.totalCount, state.totalPrice);
    },

    RemoveCartItem: (state, action) => {
      const { product_id, image, name, price } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.product_id === product_id &&
          item.image === image &&
          item.name === name &&
          item.price === price
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
            item.product_id !== product_id ||
            item.image !== image ||
            item.name !== name ||
            item.price !== price
        );
        state.items = updatedItems;
      }
      state.totalCount = state.totalCount - 1;
      const totalmt = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      state.totalPrice = totalmt;
      updateLocalStorage(state.items, state.totalCount, state.totalPrice);
    },
  },
});

export const { addCartItem, RemoveCartItem } = cartSlice.actions;

export default cartSlice.reducer;

export const cartDetails = (state) => state.cartItems;
