import { createSlice } from '@reduxjs/toolkit';
import { SearchUserState } from '../../types';

const initialState: SearchUserState = {
  userData: {},
};

const searchUserSlice = createSlice({
  name: 'searchUser',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = searchUserSlice.actions;
export default searchUserSlice.reducer;
