import dynamic from 'next/dynamic';
import { useProductsListForUsers } from '@/hooks/useProductsListForUsers';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './UserProductAdd.module.scss';

const UserProductAdd = ({ selectedOption, setSelectedOption }) => {
  const { productsList, isError, isLoading } = useProductsListForUsers();

  return (
    <>
      <div className={styles.save_courses_button_wrapper}>
        <p>Додати до продуктів</p>
        {selectedOption?.length > 0 && (
          <button
            className={styles.save_courses_button}
            onClick={() => console.log(selectedOption)}
          >
            <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z"
                fill="#1D2023"
              />
            </svg>
          </button>
        )}
      </div>
      <SelectNoSSR
        isMulti
        isLoading={isLoading}
        options={isError ? [] : productsList}
        value={selectedOption}
        onChange={opt => setSelectedOption(opt)}
        styles={{
          menu: base => ({
            ...base,
            zIndex: 3,
            maxWidth: '600px',
          }),
          control: base => ({
            ...base,
            minHeight: '44px',
            maxWidth: '600px',
          }),
        }}
      />
    </>
  );
};

export default UserProductAdd;
