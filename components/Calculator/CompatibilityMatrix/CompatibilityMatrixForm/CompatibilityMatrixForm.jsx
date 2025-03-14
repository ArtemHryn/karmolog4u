import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { open_Sans } from '@app/[locale]//layout';

import styles from './CompatibilityMatrixForm.module.scss';
import PersonElement from './PersonElement';
import { useTranslations } from 'next-intl';

const CompatibilityMatrixForm = ({ setUsersInfo, setIsShowMatrix, usersInfo }) => {
  const router = useRouter();
  const t = useTranslations('Calculator.personal');
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      info:
        usersInfo && usersInfo.length === 0
          ? [
              { date: '', name: '' },
              { date: '', name: '' },
            ]
          : usersInfo,
    },
  });
  const { fields } = useFieldArray({
    name: 'info',
    control,
  });

  const onSubmit = data => {
    const url = data.info.map((el, index) => {
      return `date${index + 1}=${encodeURIComponent(el.date)}${
        el.name ? `&name${index + 1}=${encodeURIComponent(el.name)}` : ''
      }`;
    });
    setUsersInfo(data.info);
    setIsShowMatrix(true);

    router.push(`/calculator/compatibility-matrix?${url.join('&')}`, {
      scroll: false,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <PersonElement
          key={field.id}
          index={index}
          register={register}
          control={control}
          errors={errors.info}
        />
      ))}
      <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
        {t('calc_button')}
      </button>
    </form>
  );
};

export default CompatibilityMatrixForm;
