import { useState } from 'react';
import ImageInput from './ImageInput';
import Input from './Input';
import ModalAddLinks from '../AdditionalLinks/ModalAddLinks';

import styles from './CoverWithPrice.module.scss';

const CoverWithPrice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.main_wrapper}>
        <ImageInput />
        <div className={styles.wrapper_without_image}>
          <Input name={'stream'} title={'Потік'} />
          <Input name={'price'} title={'Ціна курсу'} />
          <button
            type="button"
            className={styles.literature_btn}
            onClick={() => setShowModal(true)}
          >
            <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.878 5.8291L3 10.0136L11.878 12.8076L20.759 8.7786L11.878 5.8291Z"
                stroke="#6C6C6C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.195L11.878 15.9895L20.759 11.96"
                stroke="#6C6C6C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.87039 16.3768L11.7484 19.1708L20.6294 15.1418C21.8344 14.6493 21.7444 12.3113 20.6294 11.9603M11.8804 8.09277L14.1194 8.83627M2.87089 10.0133C1.66539 10.5058 1.75489 12.8438 2.87089 13.1953"
                stroke="#6C6C6C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Література
          </button>
        </div>
        {showModal && (
          <ModalAddLinks
            setShowModal={setShowModal}
            title={'Список літератури'}
            fieldName={'literature'}
            linkFieldName={'author'}
          />
        )}
      </div>
    </>
  );
};

export default CoverWithPrice;
