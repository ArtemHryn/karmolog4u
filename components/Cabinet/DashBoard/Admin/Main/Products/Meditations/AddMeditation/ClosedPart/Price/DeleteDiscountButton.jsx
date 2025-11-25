import { open_Sans } from '@/app/[locale]/layout';
import styles from '../ClosedPart.module.scss';
import { useFormContext } from 'react-hook-form';

const DeleteDiscountButton = () => {
  const { setValue } = useFormContext();

  const onDeleteDiscount = () => {
    setValue('discount', null);
  };

  return (
    <button
      onClick={() => onDeleteDiscount()}
      className={`${styles.delete_discount_button} ${open_Sans.className}`}
    >
      <svg viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.3327 3.83333H13.166V2.16667C13.166 1.72464 12.9904 1.30072 12.6779 0.988155C12.3653 0.675595 11.9414 0.5 11.4993 0.5H6.49935C6.05732 0.5 5.6334 0.675595 5.32084 0.988155C5.00828 1.30072 4.83268 1.72464 4.83268 2.16667V3.83333H0.666016V5.5H2.33268V18C2.33268 18.663 2.59607 19.2989 3.06492 19.7678C3.53376 20.2366 4.16964 20.5 4.83268 20.5H13.166C13.8291 20.5 14.4649 20.2366 14.9338 19.7678C15.4026 19.2989 15.666 18.663 15.666 18V5.5H17.3327V3.83333ZM6.49935 2.16667H11.4993V3.83333H6.49935V2.16667ZM13.9993 18C13.9993 18.221 13.9116 18.433 13.7553 18.5893C13.599 18.7455 13.387 18.8333 13.166 18.8333H4.83268C4.61167 18.8333 4.39971 18.7455 4.24343 18.5893C4.08715 18.433 3.99935 18.221 3.99935 18V5.5H13.9993V18Z"
          fill="#FDFDFD"
        />
        <path d="M8.16666 8.83301H6.5V15.4997H8.16666V8.83301Z" fill="#FDFDFD" />
        <path d="M11.4987 8.83301H9.83203V15.4997H11.4987V8.83301Z" fill="#FDFDFD" />
      </svg>
      <span>Видалити</span>
    </button>
  );
};

export default DeleteDiscountButton;
