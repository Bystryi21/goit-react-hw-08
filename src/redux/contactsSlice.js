import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
// import { initialState } from "./store";

export const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// // import { initialState } from "./store";

// export const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const slice = createSlice({
//   name: "contacts",
//   initialState: initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { addContact, deleteContact } = slice.actions;
// export default slice.reducer;
