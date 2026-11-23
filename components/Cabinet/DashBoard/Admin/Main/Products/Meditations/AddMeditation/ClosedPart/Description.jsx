import { useFormContext } from 'react-hook-form';
import { open_Sans } from '@/app/[locale]/layout';
import MarkdownHelp from '../../../MarkdownHelp/MarkdownHelp';
import styles from './ClosedPart.module.scss';
import Tick from '../Tick';

const Description = () => {
  const { register } = useFormContext();
  return (
    <>
      <Tick name={'isMarkdown'} label="Markdown форматування" id="101" />
      <label className={`${styles.label} `}>
        <span className={styles.labelWithHelp}>
          Опис українською <MarkdownHelp />
        </span>
        <textarea
          {...register('description_uk')}
          className={`${styles.textarea} ${open_Sans.className}`}
          placeholder="Введіть опис українською"
        />
      </label>
      <label className={`${styles.label}`}>
        <span className={styles.labelWithHelp}>
          Опис російською <MarkdownHelp />
        </span>
        <textarea
          {...register('description_ru')}
          className={`${styles.textarea} ${open_Sans.className}`}
          placeholder="Введіть опис російською"
        />
      </label>
    </>
  );
};

export default Description;
