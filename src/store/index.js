// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// Importa tus reducers aquí

const rootReducer = {
  // Añade tus reducers aquí
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
