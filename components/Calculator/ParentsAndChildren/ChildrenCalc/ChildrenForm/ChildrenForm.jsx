import { open_Sans } from '@app/[locale]/layout';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getParentsAndChildrenTables } from '@helper/calculator/parentsAndChildren';

import styles from './ChildrenForm.module.scss';
import { useTranslations } from 'next-intl';

const ChildrenForm = ({ setTable, setShowTable }) => {
  const t = useTranslations('Calculator.personal');
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ date }) => {
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      parents: true,
    });
    const parentsAndChildrenTable = getParentsAndChildrenTables({ info: result });
    setTable(parentsAndChildrenTable[1]);
    setShowTable(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        rules={{
          required: { value: true, message: t('empty_d_date_error') },
          pattern: {
            value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
            message: t('incorrect_d_date_error'),
          },
        }}
        render={({ field }) => (
          <div className={styles.date_wrapper}>
            <label htmlFor="date" className={styles.date_label}>
              {t('b_date')}
            </label>
            <TextMaskInput
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              guide={false}
              placeholder={t('b_date_placeholder')}
              id="date"
              className={styles.date_input}
            />{' '}
            {errors.date && <p className={styles.error}>{errors.date.message}</p>}
          </div>
        )}
      />
      <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
        {t('calc_button')}
      </button>
    </form>
  );
};

export default ChildrenForm;
