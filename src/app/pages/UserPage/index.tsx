import React from 'react';
import './_UserPage.scss';
import { Pagination, SideBar, UserResult } from '../../components';

const UserPage = (): JSX.Element => {
  return (
    <div className="results-page">
      {/* {userLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : ( */}
      <>
        <div className="result-wrapper">
          <SideBar repo={453} user={4362} />
          <div className="result-items">
            <div className="result-heading">
              {/* {user?.userCount}  */}
              87368 user results
            </div>
            {/* {user?.userInfo?.map((user) => */}
            {/* user?.name ?  */}
            <UserResult name="kzjbvkcjsbv" nickName="kjdbcjksb" info="kjbckb" />
            {/* : '', */}
            {/* )} */}
          </div>
        </div>
        <Pagination />
      </>
      {/* )} */}
    </div>
  );
};

export default UserPage;
