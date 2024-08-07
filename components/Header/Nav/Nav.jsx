'use client';
import React, { useState } from 'react';
import styles from './Nav.module.scss';
import ArrowDown from '@components/Common/Icons/ArrowDown';
import { useLocale } from 'next-intl';

const links = [
  {
    title: { uk: 'ПОСЛУГИ', ru: 'УСЛУГИ' },
    links: [
      {
        name: { uk: 'Терапевтичні сесії', ru: 'Терапевтические сессии' },
        link: '/therapy-sessions',
      },
      {
        name: { uk: 'Консультація з матриці долі', ru: 'Консультация по матрице судьбы' },
        link: '/consultations',
      },
      { name: { uk: 'Офлайн-зустрічі', ru: 'Офлайн-зустрічі' }, link: '/offline-meetings' },
    ],
    id: 12,
  },
  {
    title: { uk: 'НАВЧАННЯ', ru: 'НАВЧАННЯ' },
    links: [
      {
        name: { uk: 'Курс "Cам собі кармолог"', ru: 'Курс "Cам собі кармолог"' },
        link: '/karmologist-himself',
      },
      {
        name: { uk: 'Консультантський курс', ru: 'Консультантський курс' },
        link: '/consulting-course',
      },
      { name: { uk: 'Поглиблений курс', ru: 'Поглиблений курс' }, link: '/advanced-course' },
    ],
    id: 13,
  },
  {
    title: { uk: 'ГО ПСИХОЛОГІЯ ЛЮДСЬКОЇ ДОЛІ', ru: 'ГО ПСИХОЛОГІЯ ЛЮДСЬКОЇ ДОЛІ' },
    links: [
      {
        name: {
          uk: 'Асоціація "Кармотерапії та психології"',
          ru: 'Асоціація "Кармотерапії та психології"',
        },
        link: '/association',
      },
      { name: { uk: 'Благодійний фонд', ru: 'Благодійний фонд' }, link: '/charitable-foundation' },
    ],
    id: 14,
  },
  {
    title: { uk: 'АВТОРСЬКІ ПРОДУКТИ', ru: 'АВТОРСЬКІ ПРОДУКТИ' },
    links: [
      { name: { uk: 'Медитації', ru: 'Медитації' }, link: '/products/meditations' },
      { name: { uk: 'Вебінари', ru: 'Вебінари' }, link: '/products/courses' },
      { name: { uk: 'Гайди та книги', ru: 'Гайди та книги' }, link: '/products/guides-and-books' },
      { name: { uk: 'Подарунки Студії', ru: 'Подарунки Студії' }, link: '/products/gifts' },
    ],
    id: 15,
  },
  { title: { uk: 'КАЛЬКУЛЯТОР', ru: 'КАЛЬКУЛЯТОР' }, links: '/calculator' },
];

function Nav() {
  const [active, setActive] = useState(null);
  const locale = useLocale();

  const onClick = e => {
    if (+e.currentTarget.attributes.id.value === active) {
      setActive(null);
    } else {
      setActive(+e.currentTarget.attributes.id.value);
    }
  };

  return (
    <ul className={styles.links_wrap}>
      {links.map((item, index) => (
        <React.Fragment key={index}>
          {Array.isArray(item.links) ? (
            <li id={item.id} className={styles.dropdown_wrap}>
              <button
                type="button"
                className={styles.dropdown_button}
                id={item.id}
                onClick={onClick}
              >
                <p className={styles.title}>{item.title[locale]}</p>
                <ArrowDown
                  styled={`${styles.dropdown_icon} ${
                    +active === +item.id ? styles.dropdown_icon_rotate : ''
                  }`}
                />
              </button>
              <ul
                className={`${styles.dropdown_list} ${
                  +active === +item.id ? styles.dropdown_open : ''
                }`}
              >
                {item.links.map((link, index) => (
                  <li key={index} className={styles.dropdown_item}>
                    <a href={link.link} className={styles.dropdown_link}>
                      {link.name[locale]}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li>
              <a href={item.links} className={styles.title}>
                {item.title[locale]}
              </a>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Nav;
