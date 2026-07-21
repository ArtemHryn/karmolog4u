'use client';

import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import SimpleModalContainer from '../../Common/SimpleModalContainer/SimpleModalContainer';
import SendApplicationModalContext from '../SendApplicationModalContext/SendApplicationModalContext';
import styles from './SendAppToAssociation.module.scss';

const SendAppToAssociation = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('Human_psychology.Association.SendAppTo');
  return (
    <Container styledSection={styles.section} styled={styles.container}>
      <div className={styles.spot} />
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <div className={styles.main_wrapper}>
        <div className={styles.inner_wrapper}>
          <p className={styles.text_bold}>{t('what_you_need')}</p>
          <p className={styles.text}>{t('fill_app')}:</p>
          <ul>
            <li>
              <p className={styles.text}>➢ {t('need_to1')}</p>
            </li>
            <li>
              <p className={styles.text}>➢ {t('need_to2')}</p>
            </li>
            <li>
              <p className={styles.text}>➢ {t('need_to3')}</p>
            </li>
            <li>
              <p className={styles.text}>➢ {t('need_to4')}</p>
            </li>
          </ul>
          <p className={styles.text}>{t('paid_entrance')}</p>
          <p className={styles.text_bold}>{t('together_change_the_world')}</p>
          <button onClick={() => setShowModal(true)} className={styles.link}>
            {t('button')}
          </button>
        </div>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/association_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/association.webp'}
            width={736}
            height={520}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
      </div>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal} showCenter>
          <SendApplicationModalContext />
        </SimpleModalContainer>
      )}
    </Container>
  );
};

export default SendAppToAssociation;
