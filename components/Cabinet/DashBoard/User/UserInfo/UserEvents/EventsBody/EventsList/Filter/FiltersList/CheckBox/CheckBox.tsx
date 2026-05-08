import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  storageKey: string;
  checked: boolean;
  label: string;
  name: string;
  onChange: () => void;
}

const CheckBox = ({ storageKey, checked, label, name, onChange }: CheckBoxProps) => {
  return (
    <>
      {' '}
      <label className={styles.checkboxWrapper} htmlFor={storageKey}>
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          id={storageKey}
          className={styles.checkboxInput}
        />
        <span className={styles.customCheckbox}></span>
        {label}
      </label>
    </>
  );
};

export default CheckBox;
