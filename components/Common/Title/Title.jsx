import { unbounded } from "@app/[locale]/layout";
import styles from "./Title.module.scss";

const Title = ({ children, styled, variant = "h1" }) => {
  const Tag = variant;
  return (
    <Tag className={`${styles.title} ${unbounded.className} ${styled}`}>
      {children}
    </Tag>
  );
};

export default Title;
