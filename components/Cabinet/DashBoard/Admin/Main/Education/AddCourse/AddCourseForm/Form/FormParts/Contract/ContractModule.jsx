import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import ModalContainer from '../AdditionalLinks/ModalContainer';
import CalendarComponent from './CalendarComponent';
import Points from './Points';
import Buttons from './Buttons';

import styles from './Contract.module.scss';
import { unbounded } from '@/app/[locale]/layout';

const ContractModule = ({ setOpenModal }) => {
  const [savedData, setSavedData] = useState(null);
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useFormContext();

  const { fields, append, remove, replace } = useFieldArray({
    name: 'points',
    control,
  });

  useEffect(() => {
    const formData = getValues();
    replace(formData.points);
    setSavedData(formData);    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRejectChanges = () => {
    reset(savedData);
    setOpenModal(false);
  };

  return (
    <ModalContainer setShowModal={setOpenModal} resetForm={handleRejectChanges}>
      <div className={styles.wrapper_modal}>
        <h2 className={`${styles.title} ${unbounded.className}`}>
          Основний текст договору для коригування
        </h2>
        <div className={styles.main_calendar_wrapper}>
          <CalendarComponent title={'Дата договору'} name={'contract_date'} isDate />
          <CalendarComponent title={'Строк підписання'} name={'sign_up_to'} />
          <label className={styles.label_price}>
            Вартість навчання
            <input
              {...register('price_in_contract', {
                required: 'Введіть ціну',
                onChange: e => {
                  const onlyNumbers = e.target.value.replace(/\D/g, '');
                  e.target.value = onlyNumbers;
                },
              })}
              className={`${styles.input} ${styles.input_price}`}
              type="number"
            />
          </label>
        </div>
        <label className={`${styles.label} ${styles.label_header}`}>
          Шапка договору
          <textarea
            {...register('contract_header', { required: 'Введіть назву' })}
            className={`${styles.textarea} ${styles.textarea_header}`}
            placeholder="Ведіть текст шапки пункту"
            onInput={e => {
              e.target.style.height = 'auto'; // Скидаємо попередню висоту
              e.target.style.height = e.target.scrollHeight + 'px'; // Ставимо нову висоту
            }}
          />
        </label>
        <Points fields={fields} append={append} remove={remove} />
        <Buttons setOpenModal={setOpenModal} savedData={savedData} onReject={handleRejectChanges} />
      </div>
    </ModalContainer>
  );
};

export default ContractModule;
