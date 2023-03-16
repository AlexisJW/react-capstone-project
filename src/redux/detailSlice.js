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
        state.gameDetail = {
          id: payload.id,
          title: payload.title,
          thumbnail: payload.thumbnail,
          image: payload.image,
          description: payload.description,
          instructions: payload.instructions,
          open_giveaway_url: payload.open_giveaway_url,
          published_date: payload.published_date,
          users: payload.users,
          status: payload.status,
        };
        state.isLoading = false;
      })      
      .addCase(getGameDetailFromApi.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

const gameDetailReducer = gameDetailSlice.reducer;
export default gameDetailReducer;
