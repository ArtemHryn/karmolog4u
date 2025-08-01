import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';

import styles from './UsersSearch.module.scss';

const UsersSearch = ({ search, setSearch }) => {
  const [inputValue, setInputValue] = useState(search);
  const [showInput, setShowInput] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, 500),
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
    <label className={`${styles.label} ${showInput ? styles.label_active : ''}`}>
      <button
        aria-label="відкрити пошук"
        onClick={() => setShowInput(prev => !prev)}
        className={`${styles.show_button} ${showInput ? styles.show_button_show_input : ''}`}
      >
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6ZM9.67923 10.7399C8.66322 11.5297 7.38653 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.38653 11.5297 8.66322 10.7399 9.67923L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L9.67923 10.7399Z"
            fill="#7E7E7E"
          />
        </svg>
      </button>
      <input
        value={inputValue}
        onChange={handleChange}
        className={`${styles.input} ${showInput ? styles.input_active : ''}`}
        placeholder="Пошук"
      />
    </label>
  );
};

export default UsersSearch;
