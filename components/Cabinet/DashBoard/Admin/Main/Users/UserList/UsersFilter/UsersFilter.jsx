'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';
import UserSortBy from './UserSortBy/UserSortBy';
import UsersSearch from './UsersSearch/UsersSearch';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './UsersFilter.module.scss';
import AddUserLink from '../../UserHeader/AddUserLink/AddUserLink';

const list = [
  { value: 'all', label: 'Всі користувачі' },
  { value: 'active', label: 'Активні користувачі' },
  { value: 'inactive', label: 'Неактивні користувачі' },
  { value: 'banned', label: 'Заблоковані користувачі' },
];

const defaultOption = {
  sort: {
    name: 'name',
    order: '1',
    display_name: 'за іменем А-Я',
  },
  filter: list[0],
};

const UsersFilter = () => {
  const [selectedOption, setSelectedOption] = useState(defaultOption.filter);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState(defaultOption.sort);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.filter_for_phone}>
        <SelectNoSSR
          options={list}
          value={selectedOption}
          onChange={opt => setSelectedOption(opt)}
          styles={{
            menu: base => ({
              ...base,
              zIndex: 3,
            }),
          }}
        />
      </div>
      <div className={styles.filter_wrapper}>
        <p className={styles.title}>Усі користувачі</p>
        <div className={styles.filter_for_table}>
          <SelectNoSSR
            options={list}
            value={selectedOption}
            onChange={opt => setSelectedOption(opt)}
            styles={{
              menu: base => ({
                ...base,
                zIndex: 3,
              }),
              control: base => ({
                ...base,
                height: '44px',
              }),
            }}
          />
        </div>
        <UsersSearch search={search} setSearch={setSearch} />
        <UserSortBy selectedFilter={selectedSort} setSelectedFilter={setSelectedSort} />
        <div className={styles.add_user_link_wrapper}>
          <AddUserLink />
        </div>
      </div>
    </div>
  );
};

export default UsersFilter;
