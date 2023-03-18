import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  gameDetail: {},
  isLoading: true,
};

export const getGameDetailFromApi = createAsyncThunk(
  'gameDetail/getGameDetailFromApi',
  async (id) => {
    const options = {
      method: 'GET',
      url: `https://gamerpower.p.rapidapi.com/api/giveaway?id=${id}`,
      headers: {
        'X-RapidAPI-Key': '6223871a56msh702574d839467dep1fb21fjsnf4ad30396fd3',
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    return response.data;
  },
);

const gameDetailSlice = createSlice({
  name: 'gameDetail',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGameDetailFromApi.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getGameDetailFromApi.fulfilled, (state, { payload }) => {
        const {
          id, title, type, image, description, platforms, worth, users, status, instructions,
        } = payload;

        const gameDetail = {
          id,
          title,
          type,
          image,
          description,
          platforms,
          worth,
          users,
          status,
          instructions,
        };

        return {
          ...state,
          gameDetail,
          isLoading: false,
        };
      })
      .addCase(getGameDetailFromApi.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const gameDetailReducer = gameDetailSlice.reducer;
export default gameDetailReducer;
