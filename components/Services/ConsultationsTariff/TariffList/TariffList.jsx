import tariffs from "@helper/consultationsTariffList";
import DropDown from "./DropDown";

import styles from "./TariffList.module.scss";

const TariffList = () => {
  return (
    <ul className={styles.list}>
      {tariffs.map((tariff) => (
        <li key={tariff.title}>
          <DropDown tariff={tariff} />
        </li>
      ))}
    </ul>
  );
};

export default TariffList;
