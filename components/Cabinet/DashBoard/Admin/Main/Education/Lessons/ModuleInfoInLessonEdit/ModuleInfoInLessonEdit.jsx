import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { base_url, THEORETICAL } from '@/helper/consts';

import styles from './ModuleInfoInLessonEdit.module.scss';

const fetchModuleInfo = async ({ token, module_id }) => {
  const res = await fetch(`${base_url}/admin/education/modules/get/${module_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

const ModuleInfoInLessonEdit = () => {
  const { module_id } = useParams();
  const { data: token } = useSession();
  const queryKey = ['module_info'];

  const {
    data: moduleInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () =>
      fetchModuleInfo({
        token: token.accessToken,
        module_id,
      }),
    enabled: !!module_id,
    placeholderData: prevD => prevD,
  });

  if (!module_id) return null;

  if (isLoading) return <div>Завантаження...</div>;
  if (isError || moduleInfo?.statusCode === 400 || moduleInfo?.statusCode === 401)
    return <div>Помилка завантаження інформацію про модуль...</div>;
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list_el}>
          <p className={styles.column_name}>Назва модулю:</p>
        </li>
        <li className={styles.list_el}>
          <p className={styles.column_data}>{moduleInfo.name}</p>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.list_el}>
          <p className={styles.column_name}>Тип Модулю:</p>
        </li>
        <li className={styles.list_el}>
          <p className={styles.column_data}>
            {moduleInfo.type === THEORETICAL ? 'Теоретичний' : 'Практичний'}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ModuleInfoInLessonEdit;
