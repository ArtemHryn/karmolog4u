import ReactPaginate from 'react-paginate';

import styles from './Footer.module.scss';

const Pagination = ({ totalPage, setCurrentPage, currentPage }) => {
  const next = (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.next}>
      <path
        d="M11.4794 15.5895L7.06854 11.1786C6.75609 10.8661 6.58057 10.4422 6.58057 10.0003C6.58057 9.55836 6.75609 9.13451 7.06854 8.82197L11.4794 4.41113L12.6577 5.58947L8.25021 10.0003L12.661 14.4111L11.4794 15.5895Z"
        fill="#454545"
      />
    </svg>
  );
  const prev = (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.prev}>
      <path
        d="M11.4794 15.5895L7.06854 11.1786C6.75609 10.8661 6.58057 10.4422 6.58057 10.0003C6.58057 9.55836 6.75609 9.13451 7.06854 8.82197L11.4794 4.41113L12.6577 5.58947L8.25021 10.0003L12.661 14.4111L11.4794 15.5895Z"
        fill="#454545"
      />
    </svg>
  );

  return (
    <ReactPaginate
      pageCount={totalPage}
      nextLabel={next}
      nextClassName={styles.page_number}
      previousClassName={styles.page_number}
      previousLabel={prev}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName={styles.container}
      pageLinkClassName={styles.page_number}
      activeLinkClassName={styles.page_number_active}
      onPageChange={e => setCurrentPage(e.selected + 1)}
      forcePage={currentPage -1}
    />
  );
};

export default Pagination;
