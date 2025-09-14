import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { base_url } from '../helper/consts';

const fetchCourses = async token => {
  const res = await fetch(`${base_url}/admin/education/course/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка завантаження курсів';
    throw new Error(message);
  }

  const data = await res.json();

  if (!Array.isArray(data)) return [];

  return data.map(el => ({
    value: el.id,
    label: el.name,
    type: el.type,
  }));
};

export const useCoursesList = () => {
  const { data: session } = useSession();

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['courses_list', 'users'],
    queryFn: () => fetchCourses(session?.accessToken),
    enabled: !!session?.accessToken, // чекаємо на токен
  });

  return { coursesOptions: data, isLoading, isError, error };
};
