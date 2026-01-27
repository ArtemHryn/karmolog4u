import Input from './Input';

import styles from './AgreementUserData.module.scss';

const AgreementUserData = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        name={'fullName'}
        label={'Фізична особа, громадянин'}
        placeholder="Прізвище, ім’я, по батькові"
      />
      <Input name={'passportData'} label={'Паспортні дані'} placeholder="АА оооооо" />
      <Input name={'idCode'} label={'Ідентифікаційний код'} placeholder="1234567890" />
      <Input name={'phone'} label={'Номер телефону'} placeholder="+38(066)9955992" />
    </div>
  );
};

export default AgreementUserData;
