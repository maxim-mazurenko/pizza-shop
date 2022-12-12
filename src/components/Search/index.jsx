import React from 'react';
import styles from './Search.module.scss';
import { SearchContex } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContex);

  return (
    <div className={styles.content}>
      <input
        className={styles.root}
        placeholder="Поиск пиццы..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <svg className={styles.iconSearch}>
        <path
          d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z"
          fill="#464646"
        />
      </svg>

      {searchValue && (
        <svg className={styles.iconClose} onClick={() => setSearchValue('')}>
          <path
            d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
            id="exit"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
