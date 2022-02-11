import { createSelector } from 'reselect';
import { RepoRootState } from '../../types';

const selectSearchRepo = (state: RepoRootState) => state.searchRepo;

export const makeSelectRepoData = createSelector(
  selectSearchRepo,
  (searchRepo) => searchRepo.repoData,
);
