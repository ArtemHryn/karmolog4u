import Link from 'next/link';
import { useLocale } from 'next-intl';
import { policyUK } from '@/helper/offer_and_policy/policy_ua';
import { policyRU } from '@/helper/offer_and_policy/policy_ru';

import styles from './page.module.scss';
import Container from '@/components/Common/Container/Container';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { web_site } from '@/helper/consts';
import Section from '@/components/PolicyAndOffer/Section';

const PolicyPage = () => {
  const locale = useLocale();
  const policy = locale === 'uk' ? policyUK : policyRU;
  return (
    <Container styled={styles.container} styledSection={''}>
      {' '}
      <TitleNoStyles styled={styles.title}>
        ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ
      </TitleNoStyles>
      <div className={styles.text_section}>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Управління даними сайтом <Link href={web_site}>{web_site}</Link> (далі – «Сайт») і
            онлайн курсом «Вступний курс з Матриці долі» (далі – «Онлайн курс») здійснюється
            фізичною особою-підприємцем Скляренком С.Р.
          </p>
          <p className={styles.text}>
            Політика конфіденційності та захисту персональних даних (далі – «Політика
            конфіденційності») діє відносно всієї інформації, яку Онлайн курс, що розташований за
            адресою в мережі Інтернет: <Link href={web_site}>{web_site}</Link> отримує про
            Користувача під час використання сайту Онлайн курсу, програм і продуктів Онлайн курсу.
          </p>
          <p className={styles.text}>
            Звертаємо Вашу увагу, що Сайт та Онлайн курс підготували дану Політику конфіденційності
            з урахуванням останніх змін в законодавстві, що регулює захист персональних даних, а
            саме – з урахуванням вимог Загального регламенту захисту даних (Регламент ЄС № 2016/679
            від 27.04.2016 року або GDPR – General Data Protection Regulation).
          </p>
        </div>
        {policy.map(item => (
          <>
            <Section clause={item} />
          </>
        ))}
      </div>
    </Container>
  );
};

export default PolicyPage;
