import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean | void>) {
      if (action.payload) state.isOpen = action.payload;
      else {
        state.isOpen = !state.isOpen;
      }
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
