import Container from '@/components/Common/Container/Container';

import styles from './Feedbacks.module.scss';
import { unbounded } from '@/app/[locale]//layout';
import FeedbacksSlider from './FeedbacksSlider/FeedbacksSlider';
import { useTranslations } from 'next-intl';

const Feedbacks = ({ feedbacks }) => {
  const t = useTranslations('Services.feedbacks');
  return (
    <Container>
      <h1 className={`${styles.title} ${unbounded.className}`}>{t('title')}</h1>
      <FeedbacksSlider feedbacks={feedbacks} />
    </Container>
  );
};

export default Feedbacks;
