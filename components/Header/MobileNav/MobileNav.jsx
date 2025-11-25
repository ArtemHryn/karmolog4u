import Link from 'next/link';
import React from 'react';
import Nav from '../Nav/Nav';
import SocialLinks from '@/components/Main/SocialLinks/SocialLinks';
import styles from './MobileNav.module.scss';
import socialStyles from './SocialLinks.module.scss';
import CLose from '@/components/Common/Icons/Close';
import Logo from '@/components/Common/Icons/Logo';
import { useLocale, useTranslations } from 'next-intl';

function MobileNav({ isOpen, setIsOpen }) {
  const t = useTranslations('Header');
  const locale = useLocale();
  return (
    <>
      <div className={`${styles.menu} ${isOpen ? styles.menu_open : ''}`}>
        <div className={styles.wrap}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.btn_close} ${styles.hover}`}
          >
            <CLose />
          </button>
          <Link href={'/'} className={`${styles.wrap_logo} ${styles.hover}`}>
            <span>
              <Logo styled={styles.logo} />
            </span>
            <p className={`${styles.title} ${locale === 'ru' ? styles.title_ru : ''}`}>
              {t('studio')}
            </p>
          </Link>
        </div>
        <Nav setIsOpen={setIsOpen} />
        <SocialLinks styles={socialStyles} />
      </div>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdrop_show : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </>
  );
}

export default MobileNav;
