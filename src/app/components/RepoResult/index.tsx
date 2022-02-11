import React from 'react';
import moment from 'moment';
import { numberFormat } from '../../utils/NumberFormat';
import { RepoResults } from '../../types';
import './_RepoResult.scss';

const RepoResult = ({ repo }: RepoResults) => {
  return (
    <div className="result-page">
      <div className="results">
        <section className="heading">{repo?.nameWithOwner}</section>
        <section className="text">{repo?.description}</section>
        <section className="sub-text">
          {`
          ${numberFormat(repo?.stargazerCount)} 
          Stars | ${repo?.languages} | ${
            repo?.licenseInfo
              ? `${repo?.licenseInfo} | Updated ${moment(
                  repo?.updatedAt,
                  'YYYYMMDD',
                ).fromNow()}`
              : `Updated ${moment(repo?.updatedAt, 'YYYYMMDD').fromNow()}`
          } `}
        </section>
      </div>
    </div>
  );
};

export default RepoResult;
