import Pagination from './Pagination';

import styles from './Footer.module.scss';

const Footer = ({ totalPage, setCurrentPage, currentPage, total }) => {
  return (
    <>
      <div className={styles.items_info_wrapper}>
        <p>
          Показано {(currentPage - 1) * 20 + 1}-{Math.min(currentPage * 20, total)} з {total}
        </p>
      </div>
      <Pagination totalPage={totalPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
};

export default Footer;
