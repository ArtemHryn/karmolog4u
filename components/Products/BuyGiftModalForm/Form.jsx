'use client';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useForm, Controller } from 'react-hook-form';
import { useLocale, useTranslations } from 'next-intl';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import Link from 'next/link';

import Title from '@/components/Common/Title/Title';

import styles from './BuyGiftModalForm.module.scss';
import 'react-phone-input-2/lib/bootstrap.css';
import { getPriceWithDiscount } from '../../../helper/products/getDiscount';

const Form = ({ price, discount }) => {
  const [license, setLicense] = useState(false);
  const [warehousesList, setWarehousesList] = useState([]);
  const [cityValue, setCityValue] = useState('');
  const t = useTranslations('Author_products.buy_gift_modal');
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = data => {
    console.log(data);
  };

  const loadOptions = async (value, callback) => {
    if (value.length < 3) return;
    const data = await fetch(`/api/nova-poshta/cities?city=${value}`);
    const options = await data.json();
    return options.data;
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
    if (!selectedCity) return;
    const data = await fetch(
      `/api/nova-poshta/warehouses?warehouse=${selectedCity.value}&ln=${locale}`
    );
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
              {...field}
              loadOptions={loadOptions}
              defaultOptions
              onChange={val => {
                field.onChange(val);
                onCityChange(val);
              }}
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
                {...field}
                options={warehousesList}
                onChange={val => field.onChange(val)}
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
      <div className={styles.form_price_wrapper}>
        <Title variant="p" styled={`${styles.form_price}`}>
          {t('price')}:<span className={`${discount ? styles.discount : ''}`}>{price}€</span>
        </Title>
        {discount && (
          <Title variant="p" styled={`${styles.form_price}`}>
            {getPriceWithDiscount({ discount, price })}€
          </Title>
        )}
      </div>
      <button type="submit" className={styles.submit_btn} disabled={!license}>
        {t('button')}
      </button>
    </form>
  );
};

export default Form;
