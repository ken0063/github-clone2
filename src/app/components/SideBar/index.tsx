import React from 'react';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../utils/NumberFormat';
import { SidebarProps } from '../../types';
import './_SideBar.scss';

const SideBar = ({ repo, user }: SidebarProps): JSX.Element => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/results/repos" className="items">
          <li>
            <span>Repositories</span>
            {/* <span className="pill">{numberFormat(repo)}</span> */}
          </li>
        </Link>
        <Link to="/results/users" className="items">
          <li>
            <span>Users</span>
            {/* <span className="pill">{numberFormat(user)}</span> */}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
