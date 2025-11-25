import { useTranslations } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import styles from './ResultLifeMap.module.scss';

const SpiritLesson = ({ spiritLesson }) => {
  const t = useTranslations('Calculator.compatibility');
  return (
    <div className={styles.spirit_wrapper}>
      <TitleNoStyles variant="h3" styled={styles.spirit_title}>
        {t('spirit_lesson_title')}
      </TitleNoStyles>
      <TitleNoStyles variant="p" styled={styles.spirit_keys}>
        {spiritLesson.keys.join(' - ')}
      </TitleNoStyles>
    </div>
  );
};

export default SpiritLesson;
