import React from 'react';
import { Button, Search } from '../../components';
import { ReactComponent as Logo } from '../../assets/search-logo.svg';
import './_SearchPage.scss';
import SearchProvider from '../../provider/SearchProvider';
import Loader from 'react-loader-spinner';

const SearchPage = (): JSX.Element => {
  const { handleOnChange, handleSubmit, repoLoading, userLoading } =
    SearchProvider();
  return (
    <div className="search-page">
      {repoLoading || userLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="logo">{<Logo />}</div>
          <form onSubmit={handleSubmit}>
            <Search onChange={(e) => handleOnChange(e)} />
            <Button type="submit">Search Github</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default SearchPage;
