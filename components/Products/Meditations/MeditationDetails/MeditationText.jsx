import Title from '@components/Common/Title/Title';
import Link from 'next/link';

import styles from './MeditationsDescriptions.module.scss';
import MeditationsTextList from './MeditationsTextList';
import useLocalizedValue from '@hooks/useLocalizedValue';
import { useTranslations } from 'next-intl';

const list = {
  title: { uk: 'ЯК ОТРИМАТИ МЕДИТАЦІЮ?', ru: 'КАК ПОЛУЧИТЬ МЕДИТАЦИЮ?' },
  text: {
    uk: [
      'Натисніть на кнопку “Придбати” та заповніть дані, вказавши ім’я, електронну адресу та номер мобільного телефону.',
      'Здійсніть оплату вибраного матеріалу.',
      'Одразу після успішної транзакції вам на пошту прийде лист з доступом до особистого кабінету, де буде розміщена медитація.',
    ],
    ru: [
      'Нажмите на кнопку "Купить" и заполните данные, указав имя, электронный адрес и номер мобильного телефона.',
      'Оплатите выбранный материал.',
      'После успешной транзакции, вы получите электронное письмо с доступом в личный кабинет, где и будет размещена медитация.',
    ],
  },
};

const MeditationText = ({ name, desc, price, category, img }) => {
  const t = useTranslations('Author_products.meditations.list');
  const categoryList = ['closed', 'webinars'];
  const pic = img ? img.split('/') : null;

  const localizedText = useLocalizedValue(desc.text);
  const localizedWarning = useLocalizedValue(desc.warning);

  return (
    <div>
      <Title styled={styles.title}>{name}</Title>
      {price && (
        <>
          <Title variant="p" styled={styles.price}>
            {price}
          </Title>
          <Link
            href={`/products/buy-product?${price ? `price=${price}` : ''}&name=${name}&pic=${
              img ? pic[pic.length - 1] : ''
            }`}
            className={styles.button}
          >
            {t('buy_button')}
          </Link>
        </>
      )}
      {desc?.text && (
        <div className={styles.text_wrapper}>
          {localizedText.map(el => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
      <div className={styles.list_wrapper}>
        {categoryList.includes(category) && <MeditationsTextList list={list} />}
        {desc?.list && <MeditationsTextList list={desc.list} />}
        {desc?.warning && <p>{localizedWarning}</p>}
      </div>
    </div>
  );
};

export default MeditationText;
