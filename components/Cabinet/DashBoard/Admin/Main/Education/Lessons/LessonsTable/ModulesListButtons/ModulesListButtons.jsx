import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { inter } from '@/app/[locale]/layout';
import styles from './ModulesListButtons.module.scss';
import { base_url } from '@/helper/consts';

const fetchModules = async ({ token, limit, page, course_id }) => {
  const params = new URLSearchParams();

  params.append('page', page);
  params.append('limit', limit);
  params.append('name', '1');

  const res = await fetch(
    `${base_url}/admin/education/modules/get-all/${course_id}?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};

const ModulesListButtons = ({ activeModule, setActiveModule }) => {
  const queryKey = ['modules_list'];
  const { course_id } = useParams();
  const { data: token } = useSession();
  const {
    data: modules,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () =>
      fetchModules({
        token: token.accessToken,
        limit: 20,
        page: 1,
        course_id,
      }),
    placeholderData: prevD => prevD,
  });

  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className={styles.list}>
      {modules[0].data.map(({ name, id }) => (
        <li key={id}>
          <button
            className={`${styles.button} ${activeModule === id ? styles.button_active : ''} ${
              inter.className
            }`}
            onClick={() => setActiveModule(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ModulesListButtons;
