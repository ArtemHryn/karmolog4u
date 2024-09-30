const User = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className={`${styled ? styled : ""}`}
    >
      <g>
        <path d="M21 24.0005h-2v-5.043a2.9597 2.9597 0 0 0-2.957-2.957H7.957A2.96 2.96 0 0 0 5 18.9575v5.043H3v-5.043a4.963 4.963 0 0 1 4.957-4.957h8.086A4.963 4.963 0 0 1 21 18.9575v5.043ZM12 11.9999a5.9999 5.9999 0 1 1 6-6 6.006 6.006 0 0 1-6 6Zm0-10A4 4 0 1 0 12 10a4 4 0 0 0 0-8.0001Z" />
      </g>
      <defs>
        <clipPath>
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default User;
