import { useQuery } from '@tanstack/react-query';
import { base_url } from '../helper/consts';

const fetchLessons = async ({ token, status, filters, limit, page, module_id, course_id }) => {
  const { searchQuery, name, access } = filters;
  if (!token) {
    throw new Error('Токен не надано');
  }

  const params = new URLSearchParams();

  params.append('name', name);
  params.append('page', page);
  params.append('limit', limit);
  params.append('status', status);

  if (searchQuery) {
    params.append('searchQuery', searchQuery);
  }

  if (Array.isArray(access) && access.length > 0) {
    params.append('access', access.join(','));
  }

  const res = await fetch(
    `${base_url}/admin/education/lessons/get-all/${module_id ? 'module' : 'course'}/${
      module_id ? module_id : course_id
    }?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка зміни статусу';
    throw new Error(message);
  }

  return res.json();
};

export const useLessonsQuery = ({ token, activeBtn, filters, limit, page, moduleId, courseId }) => {
  return useQuery({
    queryKey: ['lessons', filters.name, filters.access, page, activeBtn, filters.searchQuery],
    queryFn: () =>
      fetchLessons({
        token,
        status: activeBtn,
        filters,
        limit,
        page,
        ...(moduleId ? { module_id: moduleId } : { course_id: courseId }),
      }),
  });
};
