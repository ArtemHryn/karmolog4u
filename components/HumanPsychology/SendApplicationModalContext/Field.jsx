import styles from "./SendApplicationModalContext.module.scss";

const Field = ({
  register,
  type = "text",
  name,
  title,
  error,
  required = true,
}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        id={name}
        className={styles.input}
        placeholder=" "
        {...register(name, {
          required: { value: required, message: "Заповніть поле" },
        })}
      />
      <label htmlFor={name} className={styles.label}>
        {title}
      </label>
      {error[name] && <p className={styles.error}>{error[name].message}</p>}
    </div>
  );
};

export default Field;
