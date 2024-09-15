import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "./store";

export const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// export const contactsReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };

//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (contact) => contact.id != action.payload
//           ),
//         },
//       };

//     default:
//       return state;
//   }
// };
