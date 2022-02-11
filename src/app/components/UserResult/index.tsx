import React from 'react';
import { UserResProps } from '../../types';
import './_UserResult.scss';

const UserResult = ({ name, nickName, info }: UserResProps): JSX.Element => {
  return (
    <div className="result-page">
      <div className="results">
        <div className="group">
          <section className="heading">{name}</section>
          <section className="text">{nickName}</section>
        </div>

        <section className="sub-text">{info}</section>
      </div>
    </div>
  );
};

export default UserResult;
