"use client";
import React, { useState } from "react";
import styles from "./Nav.module.scss";
import ArrowDown from "@components/Common/Icons/ArrowDown";

const links = [
  {
    title: "ПОСЛУГИ",
    links: [
      { name: "Терапевтичні сесії", link: "/therapy-sessions" },
      { name: "Консультація з матриці долі", link: "/consultations" },
      { name: "Офлайн зустрічі", link: "/offline-meetings" },
    ],
    id: 12,
  },
  {
    title: "НАВЧАННЯ",
    links: [
      { name: "Курс “Cам собі кармолог”", link: "/karmologist-himself" },
      { name: "Консультантський курс", link: "/consulting-course" },
      { name: "Поглиблений курс", link: "/advanced-course" },
    ],
    id: 13,
  },
  {
    title: "ГО ПСИХОЛОГІЯ ЛЮДСЬКОЇ ДОЛІ",
    links: [
      { name: "Асоціація учнів", link: "" },
      { name: "Благодійний фонд", link: "" },
    ],
    id: 14,
  },
  {
    title: "АВТОРСЬКІ ПРОДУКТИ",
    links: [
      { name: "Медитації", link: "/products/meditations" },
      { name: "Навчальні курси", link: "/products/courses" },
      { name: "Гайди", link: "/products/guides-and-books" },
      { name: "Подарунки Студії", link: "/products/gifts" },
    ],
    id: 15,
  },
  { title: "КАЛЬКУЛЯТОР", links: "" },
];

function Nav() {
  const [active, setActive] = useState(null);

  const onClick = (e) => {
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
                <p className={styles.title}>{item.title}</p>
                <ArrowDown
                  styled={`${styles.dropdown_icon} ${
                    +active === +item.id ? styles.dropdown_icon_rotate : ""
                  }`}
                />
              </button>
              <ul
                className={`${styles.dropdown_list} ${
                  +active === +item.id ? styles.dropdown_open : ""
                }`}
              >
                {item.links.map((link, index) => (
                  <li key={index} className={styles.dropdown_item}>
                    <a href={link.link} className={styles.dropdown_link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li>
              <a href="#" className={styles.title}>
                {item.title}
              </a>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Nav;
