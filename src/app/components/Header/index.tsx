import React, { useEffect } from 'react';
import { HeaderProp } from '../../types';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { ViewerProvider } from '../../provider';
import DropDown from '../DropDown';
import './_Header.scss';

const Header = ({ hasProps }: HeaderProp): JSX.Element => {
  const { data } = ViewerProvider();
  // const handleSearch = (e) => {
  //   if (e.key === 'Enter') {
  //     // handleSubmit();
  //   }
  // };
  // useEffect(() => {
  //   ViewerProvider();
  // }, []);

  return (
    <>
      <div className={hasProps ? 'header' : 'no-logo'}>
        {hasProps && (
          <>
            <Link to="/home" className="logo-wrapper">
              <Logo />
            </Link>

            <div className="search">
              <Search
                placeholder="Search"
                // onChange={(e) => handleOnChange(e)}
                // onKeyDown={handleSearch}
              />
            </div>
          </>
        )}

        <div className="header-right">
          <img
            src={data?.viewer?.avatarUrl}
            width="50px"
            height="50px"
            alt="User-avatar"
          />
          <DropDown title={data?.viewer?.login} items="Logout" />
        </div>
      </div>
    </>
  );
};

export default Header;
