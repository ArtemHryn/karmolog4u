import Link from 'next/link';
import { useLocale } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import Section from '@/components/PolicyAndOffer/Section';
import { web_site } from '@/helper/consts';
import { offerDefinitionsUk } from '@/helper/offer_and_policy/offer';
import { offerDefinitionsRU } from '@/helper/offer_and_policy/offer_ru';
import Container from '@/components/Common/Container/Container';

import styles from './page.module.scss';

const OfferPage = () => {
  const locale = useLocale();
  const offer = locale === 'uk' ? offerDefinitionsUk : offerDefinitionsRU;
  return (
    <Container styled={styles.container} styledSection={''}>
      <TitleNoStyles styled={styles.title}>ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ</TitleNoStyles>
      <div className={styles.text_section}>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>
            Управління даними сайтом <Link href={web_site}>{web_site}</Link> (далі – «Сайт») і
            онлайн курсом «Вступний курс з Матриці долі» (далі – «Онлайн курс») здійснюється
            фізичною особою-підприємцем Скляренко С.Р., який зареєстрований і діє відповідно до
            вимог законодавства України (далі – «Виконавець»).
          </p>
          <p className={styles.text}>
            Даний Договір публічної оферти (далі – «Оферта», «Договір») являє собою офіційну
            відкриту пропозицію Виконавця укласти Договір про надання Інформаційних консультаційних
            послуг шляхом акцепту даної Оферти на Сайті.
          </p>
        </div>
        {offer.map(item => (
          <>
            <Section clause={item} />
          </>
        ))}
      </div>
    </Container>
  );
};

export default OfferPage;
