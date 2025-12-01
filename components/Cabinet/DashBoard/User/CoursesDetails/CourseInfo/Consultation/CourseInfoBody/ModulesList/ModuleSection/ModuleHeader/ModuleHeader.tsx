import React from 'react';
import { format } from 'date-fns';
import { ModuleSectionProps } from '@/types/cons_adv_courses';
import { unbounded_client } from '@/app/[locale]/clients-fonts';

import styles from './ModuleHeader.module.scss';

interface ModuleHeaderProps extends ModuleSectionProps {
  showLessons: boolean;
  setShowLessons: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModuleHeader = ({ mod, showLessons, setShowLessons }: ModuleHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        {' '}
        <h4 className={`${styles.name} ${unbounded_client.className}`}>{mod.name}</h4>
        <p className={styles.dates}>
          З {format(mod.access.dateStart, 'dd.MM.yy')} по {format(mod.access.dateEnd, 'dd.MM.yy')}
        </p>
      </div>
      <button onClick={() => setShowLessons(prev => !prev)} className={`${styles.button}`}>
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.icon} ${showLessons ? styles.opened : ''}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00047 6.99982C6.77347 6.99982 6.54547 6.92282 6.36047 6.76782L0.360472 1.76782C-0.063528 1.41382 -0.120528 0.783821 0.232472 0.359821C0.586472 -0.0651785 1.21547 -0.121179 1.64047 0.231821L7.01147 4.70682L12.3735 0.392821C12.8035 0.0468215 13.4345 0.114821 13.7795 0.544821C14.1265 0.974821 14.0575 1.60382 13.6275 1.95082L7.62747 6.77882C7.44447 6.92582 7.22247 6.99982 7.00047 6.99982ZM7.01123 11.7073L12.3732 7.39232C12.8032 7.04732 13.4342 7.11532 13.7792 7.54432C14.1252 7.97532 14.0572 8.60432 13.6272 8.95132L7.62723 13.7793C7.44423 13.9263 7.22224 13.9993 7.00024 13.9993C6.77223 13.9993 6.54523 13.9223 6.36023 13.7673L0.360235 8.76732C-0.0647651 8.41432 -0.121765 7.78432 0.232235 7.35932C0.585235 6.93532 1.21523 6.87732 1.64023 7.23132L7.01123 11.7073Z"
            fill="#CFB691"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModuleHeader;
