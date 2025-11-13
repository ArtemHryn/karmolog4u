import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import styles from './AgreementInfo.module.scss';

interface AgreementInfoProps {
  isSign: boolean;
}

const AgreementInfo = ({ isSign }: AgreementInfoProps) => {
  if (isSign) return null;

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 6C9 5.448 9.448 5 10 5C10.552 5 11 5.448 11 6V11C11 11.552 10.552 12 10 12C9.448 12 9 11.552 9 11V6ZM9 14C9 13.448 9.448 13 10 13C10.552 13 11 13.448 11 14C11 14.552 10.552 15 10 15C9.448 15 9 14.552 9 14ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0Z"
        />
      </svg>
      <TitleNoStyles styled={styles.text} variant="h3">
        Договір поки що без підпису 🙂 Буде класно, якщо ви зможете підписати його найближчим часом.
      </TitleNoStyles>
    </div>
  );
};

export default AgreementInfo;
