import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ModalAddLinks from './ModalAddLinks';

import styles from './AdditionalLinks.module.scss';

const AdditionalLinks = ({ title = '7. Додаткові посилання' }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            {...register(`additional_links.0.name`)}
            placeholder="Назва"
            className={styles.input}
          />
          <div className={styles.link_input_wrapper}>
            <input
              type="text"
              {...register(`additional_links.0.link`)}
              placeholder="Посилання"
              className={`${styles.input} ${styles.input_link}`}
            />
            <button className={styles.add_button} type="button" onClick={() => setShowModal(true)}>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 9H11V7C11 6.45 10.55 6 10 6C9.45 6 9 6.45 9 7V9H7C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11H9V13C9 13.55 9.45 14 10 14C10.55 14 11 13.55 11 13V11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0Z"
                  fill="#6C6C6C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalAddLinks
          setShowModal={setShowModal}
          title={'Додаткові посилання'}
          fieldName={'additional_links'}
        />
      )}
    </>
  );
};

export default AdditionalLinks;
