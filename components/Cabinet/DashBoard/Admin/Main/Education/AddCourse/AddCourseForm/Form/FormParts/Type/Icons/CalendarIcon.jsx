const CalendarIcon = ({ styled }) => {
  return (
    <svg
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styled ? styled : ''}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14C4 13.45 4.45 13 5 13C5.55 13 6 13.45 6 14C6 14.55 5.55 15 5 15C4.45 15 4 14.55 4 14ZM9 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15H9C8.45 15 8 14.55 8 14C8 13.45 8.45 13 9 13ZM15 18H3C2.449 18 2 17.551 2 17V11H16V17C16 17.551 15.551 18 15 18ZM3 4H4V5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5V4H12V5C12 5.55 12.45 6 13 6C13.55 6 14 5.55 14 5V4H15C15.551 4 16 4.449 16 5V9H2V5C2 4.449 2.449 4 3 4ZM15 2H14V1C14 0.45 13.55 0 13 0C12.45 0 12 0.45 12 1V2H6V1C6 0.45 5.55 0 5 0C4.45 0 4 0.45 4 1V2H3C1.346 2 0 3.346 0 5V17C0 18.654 1.346 20 3 20H15C16.654 20 18 18.654 18 17V5C18 3.346 16.654 2 15 2Z"
        fill="#1D2023"
      />
    </svg>
  );
};

export default CalendarIcon;
