import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import styles from './MobPhone.module.scss';

const MobPhone = ({ control, errors }) => {
  return (
    <Controller
      name="mobPhone"
      control={control}
      rules={{
        minLength: {
          value: 12,
          message: 'Мінімум 12 цифр',
        },
        required: {
          value: true,
          message: "Поле обов'язкове",
        },
      }}
      render={({ field }) => (
        <PhoneInput
          country={'ua'}
          value={field.value}
          placeholder="+38(099) 999-99-99"
          onChange={value => {
            field.onChange(`+${value}`); // додаємо + вручну
          }}
          prefix="+"
          defaultMask="+..(...) ...-..-.."
          className={styles.phone}
          inputClass={`${styles.flagInput} ${errors.mobPhone ? styles.error : ''}`}
          dropdownClass={styles.dropdownClass}
          countryCodeEditable={false}
        />
      )}
    />
  );
};

export default MobPhone;
