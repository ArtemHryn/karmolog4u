import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Common/Container/Container';

import styles from './AboutAssociation.module.scss';
import { useTranslations } from 'next-intl';

const AboutAssociation = () => {
  const t = useTranslations('Human_psychology.Association.About');
  return (
    <Container styled={styles.container}>
      <h2 className="visually-hidden">АСОЦІАЦІЯ “КАРМОТЕРАПІЇ ТА ПСИХОЛОГІЇ”</h2>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/about_association_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/about_association.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>{t('description1')}</p>
          <p className={styles.text}>{t('description2')}</p>
          <p className={styles.text}>{t('description3')}</p>
        </div>
      </div>
      <div className={styles.card_wrapper}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/about_association_2_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/about_association_2.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <div className={styles.text_wrapper}>
          <p className={styles.text}>{t('description4')}</p>
          <p className={styles.text}>{t('description5')}</p>
          <p className={styles.text}>{t('description6')}</p>
          <p className={styles.text}>{t('description7')}</p>
          <p className={styles.text}>{t('description8')}</p>
          <p className={styles.text}>
            <Link
              href={'https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7'}
              target="_blank"
            >
              {t('link')}
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutAssociation;
