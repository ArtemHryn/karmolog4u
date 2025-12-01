'use client';

import { fetchCourseDetailsForUser } from '@/helper/platform/fetchCourseDetailsForUser';
import { useSuspenseQuery } from '@tanstack/react-query';
import AgreementInfo from './AgreementInfo/AgreementInfo';
import Greeting from './Greeting/Greeting';

import styles from './ConsultingHeader.module.scss';

interface ConsultingHeaderProps {
  token: string;
  id: string;
}

const text = [
  'Вітаємо вас на початку захопливого шляху до професійного консультування! Ви зробили важливий крок не лише для себе, а й для тих, кому зможете допомогти в майбутньому. Попереду – глибоке навчання, самопізнання та трансформація, що відкриє нові можливості та таланти.',
  'Нехай цей курс стане для вас джерелом натхнення, усвідомлення та внутрішнього зростання. Ви не самі – поруч спільнота однодумців і наставники, готові підтримати вас у цьому процесі. Довіряйте собі, будьте відкриті до нових знань і не бійтеся змін, адже саме вони приведуть вас до вашого істинного призначення.',
  'Бажаємо вам легкості в навчанні, глибоких відкриттів і впевненості в кожному кроці!',
];

const ConsultingHeader = ({ token, id }: ConsultingHeaderProps) => {
  const { data: course, isError } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseDetailsForUser(token, id),
  });

  // console.log(course);

  return (
    <div className={styles.wrapper}>
      <AgreementInfo isSign={course?.purchaseInfo?.agreement} />
      <div>
        <Greeting title={'Любі друзі!'} text={text} />
      </div>
    </div>
  );
};

export default ConsultingHeader;
