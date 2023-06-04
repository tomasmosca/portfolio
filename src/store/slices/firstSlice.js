import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // state
};

const currSlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    // reducers
  },
});

export const { actions } = currSlice;
export default currSlice.reducer;
