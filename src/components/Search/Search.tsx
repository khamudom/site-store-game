import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search"
      />
      <FaSearch className={styles.icon} />
    </div>
  );
};

export default Search;
