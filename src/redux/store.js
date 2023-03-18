import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import gamesReducer from './gameSlice';
import gameDetailReducer from './detailSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    gameDetail: gameDetailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
