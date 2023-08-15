"use client";
import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Image from "next/image";
import arrow from "../../../public/assets/header/01 align center.svg";

const links = [
  {
    title: "ПОСЛУГИ",
    links: [
      { name: "Терапевничні сесії", link: "" },
      { name: "Консультація з матриці долі", link: "" },
      { name: "Офлайн зустрічі", link: "" },
    ],
    id: 12,
  },
  {
    title: "НАВЧАННЯ",
    links: [
      { name: "Курс “Cам собі кармолог”", link: "" },
      { name: "Консультантський курс", link: "" },
      { name: "Поглиблений курс", link: "" },
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
      { name: "Медитації", link: "" },
      { name: "Вебінари", link: "" },
      { name: "Гайди", link: "" },
      { name: "Подарунки від Студії", link: "" },
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
                <span>
                  <Image
                    priority
                    src={arrow}
                    alt="Follow us on Twitter"
                    className={`${styles.dropdown_icon} ${
                      +active === +item.id ? styles.dropdown_icon_rotate : ""
                    }`}
                  />
                </span>
              </button>
              <ul
                className={`${styles.dropdown_list} ${
                  +active === +item.id ? styles.dropdown_open : ""
                }`}
              >
                {item.links.map((link, index) => (
                  <li key={index} className={styles.dropdown_item}>
                    <a href="#" className={styles.dropdown_link}>
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
