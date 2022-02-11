import React from 'react';
import { SearchProp } from '../../types';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import './_Search.scss';

const Search = ({
  placeholder,
  onChange,
  onKeyDown,
}: SearchProp): JSX.Element => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
};

export default Search;
