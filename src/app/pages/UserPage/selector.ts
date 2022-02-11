import { createSelector } from 'reselect';
import { UserRootState } from '../../types';

const selectSearchUser = (state: UserRootState) => state.searchUser;

export const makeSelectUserData = createSelector(
  selectSearchUser,
  (searchUser) => searchUser.userData,
);
