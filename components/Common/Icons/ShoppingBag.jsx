const ShoppingBag = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className={`${styled ? styled : ""}`}
    >
      <g>
        <path d="M18 6a5.9997 5.9997 0 0 0-6-6 6 6 0 0 0-6 6H0v15a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6h-6Zm-6-4a3.9998 3.9998 0 0 1 4 4H8a4 4 0 0 1 4-4Zm10 19a1.0001 1.0001 0 0 1-1 1H3a1.0002 1.0002 0 0 1-1-1V8h4v2h2V8h8v2h2V8h4v13Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShoppingBag;
