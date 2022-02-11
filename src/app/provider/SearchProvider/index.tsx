import { useLazyQuery } from '@apollo/client';
import { Dispatch } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchRepo } from '../../generated/SearchRepo';
import { SearchUser } from '../../generated/SearchUser';
import { setRepoData } from '../../pages/RepoPage/slice';
import { setUserData } from '../../pages/UserPage/slice';
import { REPO_QUERY, USER_QUERY } from '../queries';

const repoDispatch = (dispatch: Dispatch) => ({
  setRepoData: (repoData: SearchRepo) => dispatch(setRepoData(repoData)),
});

const userDispatch = (dispatch: Dispatch) => ({
  setUserData: (userData: SearchUser) => dispatch(setUserData(userData)),
});

const SearchProvider = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const { setRepoData } = repoDispatch(useDispatch());
  const [searchRepo, { loading: repoLoading, data: repoData }] = useLazyQuery(
    REPO_QUERY,
    {
      onCompleted(data) {
        if (data) {
          setRepoData(repoData);
          history.push('/results/repos');
        } else {
          history.push('/home');
        }
      },
      onError(error) {
        if (error.message) {
          console.log(error.message);
        }
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  const { setUserData } = userDispatch(useDispatch());
  const [searchUser, { loading: userLoading, data: userData }] = useLazyQuery(
    USER_QUERY,
    {
      onCompleted(data) {
        if (data) {
          setUserData(userData);
        } else {
          history.push('/home');
        }
      },
      onError(error) {
        if (error.message) {
          console.log(error.message);
        }
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  const handleSubmit = () => {
    if (!searchInput || searchInput === '' || searchInput == null) {
      toast.info('Please input a value');
    }

    searchRepo({
      variables: {
        query: searchInput,
        first: 10,
        type: 'REPOSITORY',
      },
    });
    searchUser({
      variables: {
        query: searchInput,
        first: 10,
        type: 'USER',
      },
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchInput(value);
  };
  return { handleOnChange, handleSubmit, repoLoading, userLoading };
};

export default SearchProvider;
