const Octogram = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={styled}
    >
      <path
        d="M30 15L25.6061 19.3939V25.6061H19.3939L15 30L10.6061 25.6061H4.39395V19.3939L0 15L4.39395 10.6061V4.39395H10.6061L15 0L19.3939 4.39395H25.6061V10.6061L30 15ZM23.8389 17.6238L26.4639 14.9988L23.8389 12.3738L23.1064 11.6426V6.89238H18.3563L17.625 6.15996L15 3.53496V3.53613L11.6426 6.89355H6.89238V11.6438L6.15996 12.375L3.53496 15L6.16113 17.625L6.89355 18.3551V23.1053H11.6438L12.375 23.8377L15 26.4627L17.625 23.8377L18.3563 23.1053H23.1064V18.3551L23.8389 17.6238Z"
        fill="#FDFDFD"
      />
    </svg>
  );
};

export default Octogram;