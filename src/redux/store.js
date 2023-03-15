import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import gamesReducer from './gameSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
