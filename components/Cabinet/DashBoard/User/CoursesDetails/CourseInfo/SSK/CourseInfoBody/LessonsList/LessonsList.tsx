'use client';

import { useState } from 'react';
import Lesson from './Lesson';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';

import styles from './LessonsList.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CourseInfoHeaderProps } from '@/types/ssk_course';
import { fetchLessonsList } from '@/helper/platform/fetchUserLessonsList';
import UnavailableLessonModal from './UnavailableLessonModal/UnavailableLessonModal';
import ModalPayment from '@/components/Cabinet/DashBoard/User/UserInfo/Education/CoursesList/PaymentButtons/ModalPayment/ModalPayment';
import useUserInfo from '@/hooks/useUserInfo';
import ProductsLoading from '@/components/Products/ProductsLoading/ProductsLoading';

const LessonsList = ({ token, id }: CourseInfoHeaderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const { data: lessons } = useSuspenseQuery({
    queryKey: ['lessons', id],
    queryFn: () => fetchLessonsList(token, id),
    gcTime: 24 * 60 * 60 * 1000,
  });

  const { data, isLoading, isError } = useUserInfo({
    token: token,
    action: 'courses',
    queryKey: ['user-courses'],
    enabled: showPaymentModal,
  });

  if (!lessons || lessons.length === 0) return null;

  const sortedLessons = [...lessons].sort((a, b) => {
    return Number(b.isAvailable === true) - Number(a.isAvailable === true);
  });

  const course = data?.find((c: { id: string }) => c.id === id);

  return (
    <div>
      <ul className={styles.list}>
        {sortedLessons.map(lesson => (
          <Lesson key={lesson.id} lesson={lesson} setShowModal={setShowModal} />
        ))}
      </ul>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <UnavailableLessonModal
            setShowModal={setShowModal}
            setShowPaymentModal={setShowPaymentModal}
          />
        </SimpleModalContainer>
      )}
      {showPaymentModal && (
        <SimpleModalContainer setShowModal={setShowPaymentModal} showCenter>
          {isLoading && <ProductsLoading />}
          {isError && <p>Помилка завантаження курсу</p>}
          {!isLoading && !isError && !!course && (
            <ModalPayment
              allowed={course.paymentTypes.allowed}
              requisitesText={course.paymentTypes.requisitesText || ''}
              id={id}
              name={course.name}
            />
          )}
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default LessonsList;
