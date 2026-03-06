import { useLocale } from 'next-intl';

import styles from './DetailsDescription.module.scss';

interface DetailsDescriptionProps {
  detailsDescription?: { [key: string]: string };
  detailsTitle?: { [key: string]: string };
}

const DetailsDescription = ({ detailsDescription, detailsTitle }: DetailsDescriptionProps) => {
  const locale = useLocale();
  return (
    <div className={styles.desc_wrapper}>
      {detailsTitle && <p className={styles.title}>{detailsTitle[locale]}</p>}
      {detailsDescription && <p className={styles.desc}>{detailsDescription[locale]}</p>}
    </div>
  );
};

export default DetailsDescription;
