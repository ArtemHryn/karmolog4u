"use client";
import { useState } from "react";
import Link from "next/link";
import { open_Sans, unbounded } from "@app/layout";

import ActiveDropDown from "./ActiveDropDown";
import ToggleArrow from "@components/Common/Icons/ConsultationsIcons/ToggleArrow";

import styles from "./TariffList.module.scss";

const DropDown = ({ tariff }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description, time, price, isPerHour } = tariff;

  return (
    <article className={styles.tariff}>
      <button
        aria-label="Toggle more details"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.toggle_btn} ${
          isOpen ? styles.toggle_btn_open : ""
        }`}
      >
        <ToggleArrow styled={styles.icon_arrow} />
      </button>
      <p
        className={`${styles.tariff_title} ${unbounded.className} ${
          isPerHour ? styles.tariff_title_per_hour : ""
        }`}
      >
        {title}
      </p>

      <button
        aria-label="Open more details"
        className={`${styles.details_btn} ${open_Sans.className} ${
          isOpen ? styles.is_hidden : ""
        }`}
        onClick={() => setIsOpen(true)}
      >
        Детальніше про послугу
      </button>

      <div className={styles.wrapper_mob}>
        <ActiveDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          time={time}
        />
      </div>
      <p className={`${styles.price} ${unbounded.className}`}>
        {price}
        <span>{isPerHour ? "/година" : ""}</span>
      </p>
      <Link
        href={"consultations/dialog"}
        aria-label="Записатися"
        className={`${styles.btn} ${open_Sans.className}`}
      >
        Записатися
      </Link>

      <div className={styles.wrapper_tab}>
        <ActiveDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          time={time}
        />
      </div>
    </article>
  );
};

export default DropDown;
