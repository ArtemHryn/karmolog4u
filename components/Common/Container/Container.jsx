import styles from "./Container.module.scss";

const Container = ({ children, styled, styledSection }) => {
  return (
    <section
      className={`${styles.section} ${styledSection ? styledSection : ""}`}
    >
      <div className={`${styles.container} ${styled ? styled : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Container;
