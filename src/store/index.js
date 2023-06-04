// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// Import reducers

const rootReducer = {
  // reducers
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
