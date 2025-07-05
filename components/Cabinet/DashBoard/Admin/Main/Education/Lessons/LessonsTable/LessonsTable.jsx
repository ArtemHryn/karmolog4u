'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import Filters from '../../TablesInfo/Filters/Filters';
import Table from './Table/Table';
import Actions from '../../Modules/ModulesTable/Actions/Actions';
import ModulesListButtons from './ModulesListButtons/ModulesListButtons';

import styles from './LessonsTable.module.scss';
import { PUBLISHED } from '@/helper/consts';
import { useLessonMutation } from '@/hooks/useLessonMutation';

const LessonsTable = () => {
  const [search, setSearch] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);
  const [numberOfLessons, setNumberOfLessons] = useState(null);
  const router = useRouter();
  const params = useParams();
  const moduleId = params.module_id;
  const [activeModule, setActiveModule] = useState(moduleId);
  const { data: token } = useSession();

  const lessonsMutation = useLessonMutation({ token: token?.accessToken, queryKey: ['lessons'] });

  const onDeleteLessons = () => {
    const arrayOfIds = selectedProducts.map(item => item.id);
    lessonsMutation.mutate({ id: arrayOfIds, action: 'delete' });
  };

  useEffect(() => {
    if (moduleId && activeModule && activeModule !== moduleId) {
      router.push(
        `/cabinet/dashboard/admin/education/${params.course_id}/modules/${activeModule}/lessons`
      );
    }
  }, [activeModule, moduleId, params.course_id, router]);

  return (
    <div className={styles.wrapper}>
      {moduleId && (
        <ModulesListButtons activeModule={activeModule} setActiveModule={setActiveModule} />
      )}
      <div className={styles.actions_wrapper}>
        <Actions
          search={search}
          setSearch={setSearch}
          selectedProducts={selectedProducts}
          onBulkDelete={onDeleteLessons}
        />
        <Filters
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          numberOfCourses={numberOfLessons}
        />
      </div>
      <Table
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        search={search}
        activeBtn={activeBtn}
        setNumberOfLessons={setNumberOfLessons}
      />
    </div>
  );
};

export default LessonsTable;
