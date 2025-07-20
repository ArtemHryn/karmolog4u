'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import UsersTable from './UsersTable/UsersTable';
import UsersFilter from './UsersFilter/UsersFilter';

import styles from './UserList.module.scss';
import { base_url } from '@/helper/consts';

const fetchUsers = async ({ token, search, selectedOption, selectedSort, currentPage }) => {
  const params = new URLSearchParams();

  params.append('sortBy', selectedSort.name);
  params.append('sortOrder', selectedSort.order);
  params.append('page', currentPage);
  params.append('limit', 20);
  if (search) {
    params.append('search', search);
  }

  if (selectedOption) {
    params.append('course_id', selectedOption.value);
  }

  const res = await fetch(`${base_url}/user/get/all?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

const defaultValues = {
  selectedSort: {
    name: 'name',
    order: '1',
    display_name: 'за іменем А-Я',
  },
};

const UserList = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState(defaultValues.selectedSort);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: token } = useSession();

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['users_list', search, selectedOption, selectedSort, currentPage],
    queryFn: () =>
      fetchUsers({ token: token.accessToken, search, selectedOption, selectedSort, currentPage }),
    placeholderData: prevD => prevD,
  });

  if (isLoading) <div>Loading...</div>;
  if (isError) <div>Error...</div>;

  return (
    <div className={styles.users_lists_wrapper}>
      <UsersFilter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        search={search}
        setSearch={setSearch}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <UsersTable
        users={users?.[0]?.data || null}
        totalUsers={users?.[0]?.totalPromo || 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default UserList;
