import { createSlice } from '@reduxjs/toolkit';
import { SearchRepoState } from '../../types';

const initialState: SearchRepoState = {
  repoData: {},
};

export const searchRepoSlice = createSlice({
  name: 'searchRepo',
  initialState,
  reducers: {
    setRepoData: (state, action) => {
      state.repoData = action.payload;
    },
  },
});

export const { setRepoData } = searchRepoSlice.actions;
export default searchRepoSlice.reducer;
