import React, { useCallback, useState } from 'react';
import Loader from 'react-loader-spinner';
import { DropProps } from '../../types';
import { ReactComponent as Carat } from '../../assets/carat.svg';
import { useApolloClient } from '@apollo/client';
import './_DropDown.scss';

const DropDown = ({ title, items }: DropProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const client = useApolloClient();

  const handleLogout = useCallback(async () => {
    setLoading(true);
    localStorage.clear();
    window.location.href = '/';
    await client.resetStore();
    setLoading(false);
  }, [client]);

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dd-wrapper">
      {loading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={toggle}
            onClick={toggle}
          >
            <div className="dd-header__title">
              <div>
                {title}
                <span className="carat">
                  <Carat />
                </span>
              </div>
            </div>
          </div>
          {open && (
            <ul className="dd-list">
              <li>
                <button onClick={handleLogout} className="button">
                  <span>{items}</span>
                </button>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default DropDown;
