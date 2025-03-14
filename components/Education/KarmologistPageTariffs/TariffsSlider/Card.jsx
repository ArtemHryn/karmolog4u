import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { unbounded } from '@app/[locale]//layout';
import useLocalizedValue from '@hooks/useLocalizedValue';
import HeroNavArrow from '@components/Common/Icons/HeroNavArrow';

import styles from './TariffsSlider.module.scss';

const Card = ({ card, link }) => {
  const t = useTranslations('Education.karmologist_himself.karmologist_page_tariff');
  const locale = useLocale();
  const renderAboutCourse = useLocalizedValue(card.aboutCourse);
  return (
    <div className={styles.card}>
      <p className={styles.recruitment}>{t('in_progress')}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: typeof card.title === 'string' ? card.title : card.title[locale],
        }}
        className={`${styles.card_title} ${unbounded.className}`}
      />
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {renderAboutCourse.map(el => (
            <li key={el} className={styles.list_text_element}>
              <p className={styles.icon}>
                <HeroNavArrow />
              </p>
              <p className={styles.list_text} dangerouslySetInnerHTML={{ __html: el }} />
            </li>
          ))}
        </ul>
        <p className={`${styles.price} ${unbounded.className}`}>{card.price}</p>
        <div className={styles.btn_wrapper}>
          <Link href={link} className={`${styles.btn}`}>
            {t('full_payment')}
          </Link>
          {!card.hidePrepaymentBtn && (
            <Link href={link} className={`${styles.btn} ${styles.second_btn}`}>
              Предоплата 50%
            </Link>
          )}
        </div>
      </div>

      {card.nextSlideInfo && (
        <div className={styles.message_wrapper}>
          <p
            className={`${styles.message} ${unbounded.className} ${
              locale === 'ru' ? styles.message_ru : ''
            }`}
            dangerouslySetInnerHTML={{ __html: t.raw('next_slide') }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 32"
            fill="none"
            className={styles.arrow}
          >
            <path
              d="M1.25314 6.75259C0.3386 5.71819 0.435766 4.13826 1.47016 3.22372C2.50456 2.30918 4.08449 2.40634 4.99903 3.44074L1.25314 6.75259ZM48.3297 28.5746L48.0718 26.0879L48.3297 28.5746ZM100.357 4.63778C101.709 4.91675 102.579 6.2391 102.3 7.59134L97.7544 29.6273C97.4755 30.9795 96.1531 31.8496 94.8009 31.5706C93.4487 31.2917 92.5786 29.9693 92.8576 28.6171L96.8985 9.02955L77.311 4.98864C75.9587 4.70967 75.0887 3.38732 75.3676 2.03509C75.6466 0.682849 76.969 -0.187208 78.3212 0.0917581L100.357 4.63778ZM3.12609 5.09666C4.99903 3.44074 4.99869 3.44035 4.99843 3.44006C4.99846 3.4401 4.99829 3.4399 4.99835 3.43997C4.99847 3.4401 4.99893 3.44062 4.99973 3.44153C5.00134 3.44334 5.00432 3.4467 5.00867 3.45157C5.01735 3.46131 5.03148 3.47712 5.05097 3.49878C5.08994 3.54211 5.15032 3.60886 5.2314 3.6974C5.39359 3.87449 5.63849 4.13863 5.96044 4.47673C6.60454 5.15313 7.55583 6.12429 8.76907 7.2859C11.199 9.61241 14.6621 12.6859 18.7974 15.682C27.1821 21.757 37.8334 27.1498 48.0718 26.0879L48.5876 31.0613C36.4331 32.3218 24.4826 25.9756 15.8638 19.731C11.4973 16.5674 7.85809 13.3359 5.31123 10.8974C4.03607 9.67656 3.03033 8.65022 2.3395 7.92474C1.99399 7.5619 1.72694 7.274 1.54405 7.0743C1.4526 6.97444 1.38216 6.8966 1.33344 6.84243C1.30909 6.81535 1.29016 6.79419 1.27674 6.77914C1.27004 6.77162 1.26471 6.76563 1.26077 6.7612C1.2588 6.75898 1.25718 6.75715 1.25591 6.75572C1.25527 6.755 1.25458 6.75422 1.25426 6.75385C1.25366 6.75317 1.25314 6.75259 3.12609 5.09666ZM48.0718 26.0879C58.7937 24.976 71.3359 19.7815 81.3629 14.7271C86.34 12.2183 90.6289 9.77961 93.6723 7.96876C95.1932 7.06383 96.4008 6.31698 97.2254 5.79822C97.6376 5.53888 97.954 5.33665 98.1657 5.20029C98.2715 5.13211 98.3512 5.08042 98.4036 5.04629C98.4298 5.02923 98.4492 5.01656 98.4616 5.00842C98.4678 5.00436 98.4723 5.00142 98.475 4.99963C98.4764 4.99874 98.4773 4.99814 98.4778 4.99782C98.478 4.99766 98.4781 4.99765 98.4782 4.99757C98.4781 4.99762 98.4779 4.99775 99.852 7.08622C101.226 9.1747 101.226 9.17497 101.225 9.17532C101.225 9.17553 101.224 9.17595 101.224 9.17638C101.222 9.17723 101.221 9.17837 101.218 9.1798C101.214 9.18266 101.208 9.18667 101.2 9.19183C101.184 9.20213 101.162 9.21699 101.132 9.23626C101.073 9.2748 100.986 9.33101 100.873 9.40378C100.647 9.54931 100.316 9.76111 99.8879 10.0304C99.032 10.5688 97.7889 11.3375 96.229 12.2656C93.1109 14.121 88.7179 16.619 83.6135 19.192C73.4776 24.3012 60.2586 29.8509 48.5876 31.0613L48.0718 26.0879Z"
              fill="#CFB691"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Card;
