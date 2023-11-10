const Document = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86 87"
      fill="none"
      className={styled ? styled : ""}
    >
      <g clipPath="url(#clip0_3451_9640)">
        <path
          d="M25.0837 43.5H60.917V50.6667H25.0837V43.5ZM25.0837 65H50.167V57.8333H25.0837V65ZM78.8337 27.6832V86.5H7.16699V11.25C7.16699 8.39892 8.29958 5.66462 10.3156 3.6486C12.3316 1.63259 15.0659 0.5 17.917 0.5L51.6505 0.5L78.8337 27.6832ZM53.7503 25.5833H66.6002L53.7503 12.7335V25.5833ZM71.667 79.3333V32.75H46.5837V7.66667H17.917C16.9666 7.66667 16.0552 8.0442 15.3832 8.7162C14.7112 9.38821 14.3337 10.2996 14.3337 11.25V79.3333H71.667Z"
          fill="#2E2E2E"
        />
      </g>
      <defs>
        <clipPath id="clip0_3451_9640">
          <rect
            width="86"
            height="86"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Document;
