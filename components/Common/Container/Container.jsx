import styles from "./Container.module.scss";

const Container = ({ children, styled }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styled ? styled : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Container;
