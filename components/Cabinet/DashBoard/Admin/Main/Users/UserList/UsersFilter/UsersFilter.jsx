import dynamic from 'next/dynamic';
import UserSortBy from './UserSortBy/UserSortBy';
import UsersSearch from './UsersSearch/UsersSearch';
import AddUserLink from '../../UserHeader/AddUserLink/AddUserLink';
import { useCoursesList } from '@/hooks/useCoursesListForUsers';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './UsersFilter.module.scss';

const UsersFilter = ({
  selectedOption,
  setSelectedOption,
  search,
  setSearch,
  selectedSort,
  setSelectedSort,
}) => {
  const { coursesOptions, isLoading, isError } = useCoursesList();

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.filter_for_phone}>
        <SelectNoSSR
          isClearable
          options={isError ? [] : coursesOptions}
          isLoading={isLoading}
          value={selectedOption}
          onChange={opt => setSelectedOption(opt)}
          placeholder="Вибрати курс"
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
            isClearable
            value={selectedOption}
            options={isError ? [] : coursesOptions}
            isLoading={isLoading}
            placeholder="Вибрати курс"
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
