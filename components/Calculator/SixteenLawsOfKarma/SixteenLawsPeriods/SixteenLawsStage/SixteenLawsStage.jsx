import { useLocale } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SixteenLawsStage.module.scss';

const SixteenLawsStage = ({ periods, chosenPeriod }) => {
  const locale = useLocale();
  if (!periods) return null;
  const periodNames = {
    uk: [
      'Перший етап зцілення ключа',
      'Другий етап зцілення ключа',
      'Третій етап зцілення ключа',
      'Четвертий етап зцілення ключа',
      'П’ятий етап  зцілення ключа',
    ],
    ru: [
      'Первый этап исцеления ключа',
      'Второй этап исцеления ключа',
      'Третий этап исцеления ключа',
      'Четвертый этап исцеления ключа',
      'Пятый этап исцеления ключа',
    ],
  };
  const currentPeriod = periods.find(el => el.id === chosenPeriod.id);
  if (!currentPeriod) return null;
  return (
    <ul className={styles.stage_list}>
      {currentPeriod.arcanes.map((period, index) => (
        <li key={index} className={styles.stage_item}>
          <TitleNoStyles styled={styles.stage_name} variant="p">
            {periodNames[locale][index]}
          </TitleNoStyles>
          <TitleNoStyles variant="p" styled={styles.stage_arcanes}>
            {period}
          </TitleNoStyles>
        </li>
      ))}
    </ul>
  );
};

export default SixteenLawsStage;
