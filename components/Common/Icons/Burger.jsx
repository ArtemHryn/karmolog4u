const Burger = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className={`${styled ? styled : ""}`}
    >
      <g>
        <path d="M24 11.0006H0v2h24v-2ZM24 4.0002H0v2h24v-2ZM24 18H0v2h24v-2Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Burger;
