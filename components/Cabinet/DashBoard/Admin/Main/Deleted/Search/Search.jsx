import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const Search = ({ search, setSearch }) => {
  const [inputValue, setInputValue] = useState(search);
  const searchParams = useSearchParams();
  const router = useRouter();
  const debouncedSetSearch = useCallback(
    debounce(value => {
      const params = new URLSearchParams(searchParams.toString());
      setSearch(value);
      if (value) {
        params.set('search', value);
      } else {
        params.set('search', '');
      }

      router.replace(`?${params.toString()}`);
    }, 300),
    []
  );

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  return (
    <label className={styles.label}>
      <input
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
        placeholder="Пошук"
      />
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.search_icon}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
          fill="#7E7E7E"
        />
      </svg>
    </label>
  );
};

export default Search;
