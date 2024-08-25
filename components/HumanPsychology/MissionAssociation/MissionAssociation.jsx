import Link from 'next/link';
import { useTranslations } from 'next-intl';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';
import Document from './Document';

import styles from './MissionAssociation.module.scss';

const MissionAssociation = () => {
  const t = useTranslations('Human_psychology.Association.Mission');
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <p className={styles.warning}>
        <Document />
        <Link
          href={'https://drive.google.com/drive/folders/1--EQIuMjzA7NDUAAliB9Yi_vAUEcuzU7'}
          target="_blank"
        >
          {t('documents')}
        </Link>
      </p>
      <p className={styles.about_psycho}>{t('description1')}</p>
      <TitleNoStyles variant="h3" styled={styles.mission_title}>
        {t('useful_for_you')}:
      </TitleNoStyles>
      <ul className={styles.mission_list}>
        <li className={styles.mission_item}>
          <p
            className={styles.mission_text}
            dangerouslySetInnerHTML={{ __html: t.raw('description2') }}
          />

          <Title variant="p" styled={styles.mission_number}>
            1
          </Title>
        </li>
        <li className={styles.mission_item}>
          <p
            className={styles.mission_text}
            dangerouslySetInnerHTML={{ __html: t.raw('description3') }}
          />

          <Title variant="p" styled={styles.mission_number}>
            2
          </Title>
        </li>
      </ul>
    </Container>
  );
};

export default MissionAssociation;
