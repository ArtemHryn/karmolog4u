const ArrowDown = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      fill="currentColor"
      className={`${styled ? styled : ""}`}
    >
      <path
        fill="#FDFDFD"
        d="M7 7.5a1.993 1.993 0 0 1-1.414-.585L.293 1.621 1.707.207 7 5.5 12.293.207l1.414 1.414-5.293 5.293A1.993 1.993 0 0 1 7 7.5Z"
      />
    </svg>
  );
};

export default ArrowDown;
