import { createSlice } from "@reduxjs/toolkit";


const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    setText: (state, action) => action.payload,
  },
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;