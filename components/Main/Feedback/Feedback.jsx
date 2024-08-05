import { useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Viber from '@components/Common/SocialIcons/Viber';
import Whatsapp from '@components/Common/SocialIcons/Whatsapp';
import Telegram from '@components/Common/SocialIcons/Telegram';
import Link from 'next/link';
import Logo from '@components/Common/Icons/Logo';
import BlurLogo from '@components/Common/Icons/BlurLogo';
import { unbounded } from '@app/[locale]/layout';

import styles from './Feedback.module.scss';

const links = [
  {
    icon: Whatsapp,
    name: 'WhatsApp',
    to: 'https://wa.me/380678696760',
  },
  {
    icon: Telegram,
    name: 'Telegram',
    to: 'https://t.me/karmologforyou',
  },
  {
    icon: Viber,
    name: 'Viber',
    to: 'viber://chat/?number=%2B380678696760',
  },
];

function Feedback({ main }) {
  const t = useTranslations('Main.Feedback');
  return (
    <Container styled={styles.wrap} styledSection={styles.section}>
      <div className={styles.wrap_item}>
        <h2 className={`${main ? styles.main_title : styles.title} ${unbounded.className}`}>
          {t('title')}
        </h2>
        <div style={{ position: 'relative' }}>
          <p className={styles.description}>
            {t('description1')}
            <br />
            <br />
            {t('description2')}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="52"
            viewBox="0 0 125 52"
            fill="none"
            className={styles.arrow}
          >
            <path
              d="M1.98571 44.4145C0.700884 43.9089 0.0691509 42.4575 0.574698 41.1727C1.08025 39.8879 2.53163 39.2561 3.81646 39.7617L1.98571 44.4145ZM66.0615 44.9241L67.073 47.2103L66.0615 44.9241ZM120.854 0.503434C122.234 0.462622 123.386 1.54834 123.427 2.92845L124.092 25.4186C124.133 26.7987 123.047 27.9506 121.667 27.9914C120.287 28.0322 119.135 26.9465 119.094 25.5664L118.503 5.57514L98.5117 6.16629C97.1316 6.2071 95.9797 5.12138 95.9389 3.74128C95.8981 2.36117 96.9838 1.20929 98.3639 1.16847L120.854 0.503434ZM2.90109 42.0881C3.81646 39.7617 3.81601 39.7615 3.81571 39.7614C3.81579 39.7614 3.81562 39.7613 3.81579 39.7614C3.81612 39.7615 3.81701 39.7619 3.81845 39.7624C3.82133 39.7636 3.82643 39.7656 3.83373 39.7684C3.84831 39.7741 3.87166 39.7831 3.9036 39.7954C3.96749 39.8199 4.06571 39.8573 4.19684 39.9064C4.45911 40.0044 4.85289 40.1491 5.36664 40.3303C6.39438 40.693 7.90095 41.2018 9.79442 41.7783C13.5846 42.9322 18.9078 44.3515 25.0319 45.4127C37.3684 47.5504 52.5617 48.1635 65.0499 42.6379L67.073 47.2103C53.2246 53.3378 36.8377 52.5329 24.1782 50.3393C17.8043 49.2348 12.2755 47.7602 8.3382 46.5615C6.36793 45.9617 4.79189 45.4297 3.70295 45.0454C3.15837 44.8533 2.73529 44.698 2.44529 44.5895C2.30028 44.5353 2.18852 44.4928 2.11145 44.4632C2.07291 44.4484 2.04305 44.4368 2.02203 44.4286C2.01152 44.4246 2.00323 44.4213 1.99717 44.4189C1.99414 44.4178 1.99167 44.4168 1.98976 44.416C1.9888 44.4157 1.98779 44.4153 1.98731 44.4151C1.98644 44.4147 1.98571 44.4145 2.90109 42.0881ZM65.0499 42.6379C77.8696 36.9655 91.3594 26.6843 101.735 17.7031C106.9 13.2315 111.252 9.11962 114.31 6.12699C115.839 4.63121 117.043 3.41643 117.863 2.57787C118.273 2.15863 118.587 1.83353 118.797 1.61449C118.902 1.50497 118.981 1.42198 119.033 1.367C119.06 1.33951 119.079 1.31902 119.092 1.30573C119.098 1.29908 119.102 1.29423 119.105 1.2912C119.107 1.28968 119.108 1.28862 119.108 1.28802C119.109 1.28772 119.109 1.28761 119.109 1.28746C119.109 1.28747 119.109 1.2876 120.928 3.00234C122.747 4.71709 122.747 4.71744 122.746 4.71791C122.746 4.71822 122.746 4.7188 122.745 4.71942C122.744 4.72066 122.742 4.72236 122.74 4.72452C122.736 4.72884 122.73 4.73498 122.723 4.74292C122.708 4.75881 122.686 4.78192 122.657 4.81205C122.6 4.87233 122.516 4.96072 122.405 5.07574C122.185 5.30578 121.86 5.64236 121.438 6.07353C120.595 6.93581 119.365 8.1768 117.807 9.70078C114.693 12.7477 110.266 16.9312 105.007 21.4835C94.5334 30.5498 80.5899 41.2295 67.073 47.2103L65.0499 42.6379Z"
              fill="#CFB691"
            />
          </svg>
        </div>
      </div>
      <div className={styles.list_wrapper}>
        <ul className={styles.list}>
          {links.map(({ icon: Icon, name, to }, index) => (
            <li key={index}>
              <Link
                href={to}
                className={`${styles.link} ${unbounded.className}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon styled={styles.icon} />
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <BlurLogo styled={styles.blur} />
        <Logo styled={styles.logo} />
      </div>
    </Container>
  );
}

export default Feedback;
