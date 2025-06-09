'use client';

import ReactPaginate from 'react-paginate';
import dynamic from 'next/dynamic';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });
import styles from './Footer.module.scss';

const Footer = ({ totalPage = 10, setCurrentPage, currentPage }) => {
  const next = (
    <div className={styles.next_prev_wrapper}>
      <span>Наступна</span>
      <svg
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.46967 11.0303C0.176777 10.7374 0.176777 10.2626 0.46967 9.96967L4.43934 6L0.46967 2.03033C0.176776 1.73744 0.176776 1.26256 0.469669 0.96967C0.762563 0.676777 1.23744 0.676777 1.53033 0.96967L6.03033 5.46967C6.32322 5.76256 6.32322 6.23744 6.03033 6.53033L1.53033 11.0303C1.23744 11.3232 0.762563 11.3232 0.46967 11.0303Z"
          fill="#7E7E7E"
        />
      </svg>
    </div>
  );
  const prev = (
    <div className={styles.next_prev_wrapper}>
      <svg
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.53033 0.96967C6.82322 1.26256 6.82322 1.73744 6.53033 2.03033L2.56066 6L6.53033 9.96967C6.82322 10.2626 6.82322 10.7374 6.53033 11.0303C6.23744 11.3232 5.76256 11.3232 5.46967 11.0303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L5.46967 0.96967C5.76256 0.676777 6.23744 0.676777 6.53033 0.96967Z"
          fill="#7E7E7E"
        />
      </svg>
      <span>Попередня</span>
    </div>
  );

  const pageOptions = Array.from({ length: totalPage }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  return (
    <div className={styles.footer}>
      <button onClick={() => setCurrentPage(1)} className={styles.to_first_page_button}>
        <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5303 2.03033C10.8232 1.73744 10.8232 1.26256 10.5303 0.96967C10.2374 0.676777 9.76256 0.676777 9.46967 0.96967L5.96967 4.46967C5.67678 4.76256 5.67678 5.23744 5.96967 5.53033L9.46967 9.03033C9.76256 9.32322 10.2374 9.32322 10.5303 9.03033C10.8232 8.73744 10.8232 8.26256 10.5303 7.96967L7.56066 5L10.5303 2.03033ZM5.53033 2.03033C5.82322 1.73744 5.82322 1.26256 5.53033 0.96967C5.23744 0.676776 4.76256 0.676776 4.46967 0.96967L0.969669 4.46967C0.676777 4.76256 0.676777 5.23744 0.969669 5.53033L4.46967 9.03033C4.76256 9.32322 5.23744 9.32322 5.53033 9.03033C5.82322 8.73744 5.82322 8.26256 5.53033 7.96967L2.56066 5L5.53033 2.03033Z"
            fill="#7E7E7E"
          />
        </svg>
        <span>Перша</span>
      </button>
      <ReactPaginate
        pageCount={totalPage}
        nextLabel={next}
        previousLabel={prev}
        nextClassName={`${styles.page_number} ${styles.page_number_next_prev}`}
        previousClassName={`${styles.page_number} ${styles.page_number_next_prev}`}
        breakLabel={'...'}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName={styles.container}
        pageLinkClassName={styles.page_number}
        activeLinkClassName={styles.page_number_active}
        onPageChange={e => setCurrentPage(e.selected + 1)}
        forcePage={currentPage - 1}
      />
      <div className={styles.page_selector_wrapper}>
        <p>Сторінка #</p>
        <SelectNoSSR
          options={pageOptions}
          value={pageOptions.find(opt => opt.value === currentPage)}
          onChange={opt => setCurrentPage(opt.value)}
          className={styles.page_selector}
          isSearchable={false}
          menuPosition="absolute"
          menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
          menuPlacement="auto"
          styles={{
            control: provided => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
            }),
            valueContainer: provided => ({
              ...provided,
              padding: '0',
            }),

            menu: provided => ({
              ...provided,
              zIndex: 9999,
              position: 'absolute',
            }),
            menuList: base => ({
              ...base,
              maxHeight: '200px',
              overflowY: 'auto', // список скролиться
            }),
            menuPortal: base => ({
              ...base,
              zIndex: 9999,
            }),
            singleValue: provided => ({
              ...provided,
              color: '#333',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
