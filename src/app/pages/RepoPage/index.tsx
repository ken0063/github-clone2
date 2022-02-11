import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Pagination, RepoResult, SideBar } from '../../components';
import SearchProvider from '../../provider/SearchProvider';
import { createSelector } from 'reselect';
import { makeSelectRepoData } from './selector';
import { useSelector } from 'react-redux';
import './_RepoPage.scss';

export type RepoPageProp = {
  repo: {};
  id: string;
};

const stateSelector = createSelector(makeSelectRepoData, (repoData) => ({
  repoData,
}));

const RepoPage = (): JSX.Element => {
  const { repoLoading } = SearchProvider();

  const { repoData } = useSelector(stateSelector);
  return (
    <div className="results-page">
      {repoLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="result-wrapper">
            <SideBar repo={453} user={4362} />
            <div className="result-items">
              <div className="result-heading">
                {repoData?.search?.repositoryCount}
                repository results
              </div>
              {repoData?.search?.nodes?.map((repo, idx) => (
                <RepoResult key={idx} repo={repo} />
              ))}
            </div>
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default RepoPage;
