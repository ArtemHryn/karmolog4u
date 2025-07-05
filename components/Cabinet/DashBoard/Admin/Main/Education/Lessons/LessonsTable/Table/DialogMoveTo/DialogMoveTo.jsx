import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import ModalContainer from '../../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/ModalContainer';
import { open_Sans } from '@/app/[locale]/layout';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './DialogMoveTo.module.scss';

const DialogMoveTo = ({ setShowDialogMoveTo, rowData, onMoveLesson }) => {
  const { module_id } = useParams();
  const queryClient = useQueryClient();
  const rawModules = queryClient.getQueryData(['modules_list']);
  const modules = rawModules?.[0]?.data?.map(({ name, id }) => ({ label: name, value: id })) || [];
  const [selectedModule, setSelectedModule] = useState(modules[0] || null);

  return (
    <ModalContainer setShowModal={setShowDialogMoveTo}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Перенесення уроку до другого модулю</p>
        <div className={styles.label_wrapper}>
          <label className={`${styles.title} ${styles.label} ${open_Sans.className}`}>
            Назва уроку:
            <input disabled value={rowData.name} className={styles.input} />
          </label>
          <label className={`${styles.title} ${styles.label} ${open_Sans.className}`}>
            З модулю:
            <input
              disabled
              value={
                modules.find(moduleEl => moduleEl.value === module_id)?.label || 'Невідомий модуль'
              }
              className={styles.input}
            />
          </label>
          <div className={`${styles.label}`}>
            <p className={`${styles.title}`}>До модулю:</p>
            <SelectNoSSR
              options={modules}
              value={selectedModule || (modules.length > 0 ? modules[0] : null)}
              onChange={opt => setSelectedModule(opt)}
              placeholder="Оберіть модуль"
            />
          </div>
        </div>
        <button
          type="button"
          className={`${styles.button} ${open_Sans.className}`}
          onClick={() => {
            onMoveLesson(selectedModule?.value, rowData.id);
            setShowDialogMoveTo(false);
          }}
        >
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 15C16 15.551 15.552 16 15 16H13V13C13 12.448 12.553 12 12 12H6C5.447 12 5 12.448 5 13V16H3C2.448 16 2 15.551 2 15V3C2 2.449 2.448 2 3 2H5V7C5 7.552 5.447 8 6 8H10C10.553 8 11 7.552 11 7C11 6.448 10.553 6 10 6H7V2H10.172C10.435 2 10.692 2.107 10.879 2.293L15.707 7.121C15.896 7.31 16 7.562 16 7.829V15ZM7 16H11V14H7V16ZM17.121 5.707L12.293 0.879C11.727 0.312 10.973 0 10.172 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H6H12H15C16.654 18 18 16.654 18 15V7.829C18 7.027 17.687 6.273 17.121 5.707Z"
              fill="#FDFDFD"
            />
          </svg>
          Зберегти
        </button>
      </div>
    </ModalContainer>
  );
};

export default DialogMoveTo;
