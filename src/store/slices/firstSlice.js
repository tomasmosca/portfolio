import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define el estado inicial aquí
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    // Define tus reducers aquí
  },
});

export const { actions } = mySlice;
export default mySlice.reducer;
