import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "./store";

// export const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    filter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filter } = slice.actions;
export default slice.reducer;

// export const filter = createAction("filter/filterName");

// export const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filter/filterName":
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
