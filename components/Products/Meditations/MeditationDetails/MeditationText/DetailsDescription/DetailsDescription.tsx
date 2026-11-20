import { useLocale } from 'next-intl';

import styles from './DetailsDescription.module.scss';
import MarkdownDesc from './MarkdownDesc';

interface DetailsDescriptionProps {
  detailsDescription?: { [key: string]: string };
  detailsTitle?: { [key: string]: string };
}

const DetailsDescription = ({ detailsDescription, detailsTitle }: DetailsDescriptionProps) => {
  const locale = useLocale();
  return (
    <div className={styles.desc_wrapper}>
      {detailsTitle && <p className={styles.title}>{detailsTitle[locale]}</p>}
      {detailsDescription && <MarkdownDesc desc={detailsDescription[locale]} />}
    </div>
  );
};

export default DetailsDescription;
