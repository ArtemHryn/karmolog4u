import { useFieldArray, useFormContext } from 'react-hook-form';
import ModalContainer from './ModalContainer';
import { open_Sans } from '@app/[locale]/layout';

import styles from './AdditionalLinks.module.scss';

const ModalAddLinks = ({ setShowModal, fieldName, title }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: fieldName,
    control,
  });

  const lastElement = index => {
    return fields.length <= 5 && index + 1 === fields.length;
  };

  return (
    <ModalContainer setShowModal={setShowModal}>
      {' '}
      <div className={styles.modal}>
        <p className={styles.modal_title}>{title}</p>
        <div className={styles.modal_main_list_wrapper}>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.list_wrapper}>
              <p className={styles.list_number}>{index + 1}. </p>
              <div className={styles.input_wrapper}>
                <input
                  {...register(`${fieldName}.${index}.author`)}
                  placeholder="Назва"
                  className={styles.list_input}
                />
                <div className={styles.modal_link_input_wrapper}>
                  <input
                    {...register(`${fieldName}.${index}.link`, {
                      pattern: {
                        value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/,
                        message: 'Введіть коректне посилання',
                      },
                    })}
                    placeholder="Посилання"
                    className={`${styles.list_input} ${
                      lastElement(index) ? styles.list_input_last_link : ''
                    }`}
                  />
                  {lastElement(index) && (
                    <button
                      className={`${styles.add_button} ${styles.add_button_modal}`}
                      type="button"
                      onClick={() => append({ name: '', link: '' })}
                    >
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 9H11V7C11 6.45 10.55 6 10 6C9.45 6 9 6.45 9 7V9H7C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11H9V13C9 13.55 9.45 14 10 14C10.55 14 11 13.55 11 13V11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0Z"
                          fill="#6C6C6C"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className={styles.remove_button}
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4142 12.5002L17.7072 8.20725C18.0982 7.81625 18.0982 7.18425 17.7072 6.79325C17.3162 6.40225 16.6842 6.40225 16.2933 6.79325L12.0002 11.0862L7.70725 6.79325C7.31625 6.40225 6.68425 6.40225 6.29325 6.79325C5.90225 7.18425 5.90225 7.81625 6.29325 8.20725L10.5862 12.5002L6.29325 16.7933C5.90225 17.1842 5.90225 17.8162 6.29325 18.2072C6.48825 18.4022 6.74425 18.5002 7.00025 18.5002C7.25625 18.5002 7.51225 18.4022 7.70725 18.2072L12.0002 13.9142L16.2933 18.2072C16.4882 18.4022 16.7443 18.5002 17.0002 18.5002C17.2562 18.5002 17.5122 18.4022 17.7072 18.2072C18.0982 17.8162 18.0982 17.1842 17.7072 16.7933L13.4142 12.5002Z"
                      fill="#6C6C6C"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.save_button} ${open_Sans.className}`}
          onClick={() => setShowModal(false)}
        >
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 15C16 15.551 15.552 16 15 16H13V13C13 12.448 12.553 12 12 12H6C5.447 12 5 12.448 5 13V16H3C2.448 16 2 15.551 2 15V3C2 2.449 2.448 2 3 2H5V7C5 7.552 5.447 8 6 8H10C10.553 8 11 7.552 11 7C11 6.448 10.553 6 10 6H7V2H10.172C10.435 2 10.692 2.107 10.879 2.293L15.707 7.121C15.896 7.31 16 7.562 16 7.829V15ZM7 16H11V14H7V16ZM17.121 5.707L12.293 0.879C11.727 0.312 10.973 0 10.172 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H6H12H15C16.654 18 18 16.654 18 15V7.829C18 7.027 17.687 6.273 17.121 5.707Z"
              fill="#FDFDFD"
            />
          </svg>
          Зберегти
        </button>
      </div>
    </ModalContainer>
  );
};

export default ModalAddLinks;
