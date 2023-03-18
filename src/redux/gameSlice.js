import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  games: [],
  isLoading: true,
};

export const getGamesFromApi = createAsyncThunk(
  'games/getGamesFromApi',
  async () => {
    const config = {
      method: 'get',
      url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
      headers: {
        'X-RapidAPI-Key': '6223871a56msh702574d839467dep1fb21fjsnf4ad30396fd3',
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
      },
    };

    const response = await axios(config);
    return response.data;
  },
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGamesFromApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getGamesFromApi.fulfilled, (state, { payload }) => {
        const games = Object.entries(payload).map(([gameId, gameItems]) => ({
          id: gameId,
          title: gameItems.title,
          image: gameItems.image,
        }));

        return { ...state, isLoading: false, games };
      })
      .addCase(getGamesFromApi.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
