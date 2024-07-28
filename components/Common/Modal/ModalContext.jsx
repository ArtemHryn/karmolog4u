import Link from 'next/link';
import { open_Sans, unbounded } from '@app/[locale]/layout';

import styles from './Modal.module.scss';

const links = [
  {
    name: 'WhatsApp',
    to: 'https://wa.me/380678696760',
  },
  {
    name: 'Telegram',
    to: 'https://t.me/karmologforyou',
  },
  {
    name: 'Viber',
    to: 'viber://chat/?number=%2B380678696760',
  },
];

const ModalContext = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${unbounded.className}`}>ВАЖЛИВЕ ПОВІДОМЛЕННЯ!</h1>
      <p className={styles.text}>
        Для швидкої оплати просимо звернутися за допомогою у <span>WhatsApp</span>,{' '}
        <span>Telegram</span> або <span>Viber</span>:
      </p>
      <ul className={styles.btn_list}>
        {links.map(link => (
          <li key={link.name}>
            <Link
              href={link.to}
              className={`${styles.btn} ${open_Sans.className}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalContext;
