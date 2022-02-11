import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftCarat } from '../../assets/left-carat.svg';
import { ReactComponent as RightCarat } from '../../assets/right-carat.svg';
import './_Pagination.scss';

const Pagination = (): JSX.Element => {
  return (
    <div className="pages">
      <ul>
        <Link to="#" className="arrows">
          <LeftCarat />
        </Link>

        <li>
          <Link to="#" className="buttons">
            1
          </Link>
        </li>
        <li>
          <Link to="#" className="buttons">
            2
          </Link>
        </li>

        <Link to="#" className="arrows">
          <RightCarat />
        </Link>
      </ul>
    </div>
  );
};

export default Pagination;
