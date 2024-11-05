'use client';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import Link from 'next/link';

import Title from '@components/Common/Title/Title';

import styles from './BuyGiftModalForm.module.scss';
import 'react-phone-input-2/lib/bootstrap.css';

const Form = ({ price }) => {
  const [license, setLicense] = useState(false);
  const [warehousesList, setWarehousesList] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const t = useTranslations('Author_products.buy_gift_modal');

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    console.log(data);
  };
  getValues('city');
  const loadOptions = async (value, callback) => {
    if (value.length < 3) return;
    const data = await fetch(`/api/nova-poshta/cities?city=${value}`);
    const options = await data.json();
    await callback(options.data);
  };

  const cityStyling = {
    control: () => `${styles.control}`,
    indicatorSeparator: () => styles.indicatorSeparator,
    menu: () => styles.menu,
    option: ({ isSelected, isFocused }) =>
      isSelected || isFocused ? styles.option_selected : styles.option,
    input: () => styles.singleValue,
    singleValue: () => styles.singleValue,
  };

  const onCityChange = async selectedCity => {
    const data = await fetch(`/api/nova-poshta/warehouses?warehouse=${selectedCity.value}`);
    const wh = await data.json();
    setWarehousesList(wh.data);
    setValue('city', selectedCity);
    setCityValue(selectedCity.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Title variant="p" styled={styles.form_title}>
        {t('enter_your_info')}:
      </Title>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          className={styles.input}
          placeholder=" "
          {...register('name')}
        />
        <label htmlFor="name" className={styles.label}>
          {t('name')}
        </label>
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder=" "
          {...register('email', {
            required: t('email.empty_error'),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t('email.wrong_email_error'),
            },
          })}
        />
        <label htmlFor="email" className={styles.label}>
          {t('email.email')}
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <p>{t('city.city')}</p>
        <Controller
          name="city"
          control={control}
          rules={{
            required: { value: true, message: t('city.choose_city') },
          }}
          render={({ field }) => (
            <AsyncSelect
              loadOptions={loadOptions}
              defaultOptions
              onChange={onCityChange}
              noOptionsMessage={() => {
                return t('city.enter_three_letters');
              }}
              classNames={cityStyling}
              placeholder={t('city.placeholder')}
            />
          )}
        />
      </div>
      {cityValue && warehousesList.length !== 0 && (
        <div>
          <p>{t('warehouse.warehouse')}</p>
          <Controller
            name="warehouse"
            control={control}
            rules={{
              required: { value: true, message: t('warehouse.choose_wh') },
            }}
            render={({ field }) => (
              <Select
                options={warehousesList}
                onChange={wh => setValue('warehouse', wh.value)}
                noOptionsMessage={() => {
                  return t('warehouse.not_found');
                }}
                classNames={cityStyling}
                placeholder={t('warehouse.placeholder')}
              />
            )}
          />
        </div>
      )}
      <div>
        <p>{t('phone.phone')}</p>
        <Controller
          name="phone"
          control={control}
          rules={{
            minLength: {
              value: 12,
              message: t('phone.min_length_error'),
            },
            required: { value: true, message: t('phone.empty_number_error') },
          }}
          render={({ field }) => (
            <PhoneInput
              country={'ua'}
              value={field.value}
              onChange={phone => field.onChange(phone)}
              prefix="+"
              defaultMask="(...) ...-..-.."
              className={styles.phone}
              inputClass={styles.flagInput}
              buttonClass={styles.buttonClass}
              dropdownClass={styles.dropdownClass}
            />
          )}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.checkbox_wrapper}>
        <input
          type="checkbox"
          id="license"
          checked={license}
          onChange={e => setLicense(e.target.checked)}
        />
        <label htmlFor="license">
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
        <p className={styles.text}>
          {t('license.part1')}{' '}
          <Link href={'/'} target="_blank">
            {t('license.part2')}
          </Link>{' '}
          {t('license.part3')}{' '}
          <Link href={'/'} target="_blank">
            {t('license.part4')}
          </Link>
        </p>
      </div>
      <Title variant="p" styled={styles.form_price}>
        {t('price')}:<span>{price}</span>
      </Title>
      <button type="submit" className={styles.submit_btn} disabled={!license}>
        {t('button')}
      </button>
    </form>
  );
};

export default Form;
