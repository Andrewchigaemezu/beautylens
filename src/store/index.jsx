import { createSlice, configureStore } from "@reduxjs/toolkit";

const modalInitialState = { isOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    openCloseModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const store = configureStore({
  reducer: modalSlice.reducer,
});

export default store;
export const modalAction = modalSlice.actions;
