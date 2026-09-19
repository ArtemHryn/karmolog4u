import { useState } from 'react';
import { unbounded_client } from '@/app/[locale]/clients-fonts';
import { useTranslations } from 'next-intl';
import CopySVG from './CopySVG';
import styles from './CharityModal.module.scss';

const CharityModal = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const t = useTranslations('Human_psychology.Foundation.recommendation.help_window');

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (error) {
      console.error('Не вдалося скопіювати:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} ${unbounded_client.className}`}>{t('title')}</h2>
      <div className={styles.text_wrapper}>
        <p className={styles.text}>{t('help_text')}</p>
        <div>
          <p className={styles.text}>{t('recipient')}:</p>
          <p className={styles.text}>
            {t('recipient_info')}
            <button
              className={styles.copy_btn}
              onClick={() => copyToClipboard(t('recipient_info'), 'recipient')}
              title="Копіювати"
            >
              {copied === 'recipient' ? <span>✓</span> : <CopySVG />}
            </button>
          </p>
        </div>
        <p className={styles.text}>
          {t('details')}{' '}
          <button
            className={styles.copy_btn}
            title="Копіювати"
            onClick={() => copyToClipboard('44968593', 'details')}
          >
            {copied === 'details' ? <span>✓</span> : <CopySVG />}
          </button>
        </p>
        <div>
          <p className={styles.text}>IBAN:</p>
          <p className={styles.text}>
            UA933220010000026007700017692{' '}
            <button
              className={styles.copy_btn}
              title="Копіювати"
              onClick={() => copyToClipboard('UA933220010000026007700017692', 'IBAN')}
            >
              {copied === 'IBAN' ? <span>✓</span> : <CopySVG />}
            </button>
          </p>
        </div>
        <div>
          <p className={styles.text}>{t('assignment')}:</p>
          <p className={styles.text}>
            {t('assignment_info')}{' '}
            <button
              className={styles.copy_btn}
              title="Копіювати"
              onClick={() => copyToClipboard(t('assignment_info'), 'assignment')}
            >
              {copied === 'assignment' ? <span>✓</span> : <CopySVG />}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharityModal;
