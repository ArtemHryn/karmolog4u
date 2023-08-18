import React from "react";

const SliderArrow = ({ styled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 24"
      fill="none"
      className={styled}
    >
      <path d="M1.412 24.0001L0 22.5881L9.881 12.7071C10.0685 12.5196 10.1738 12.2653 10.1738 12.0001C10.1738 11.7349 10.0685 11.4806 9.881 11.2931L0.0170002 1.43109L1.431 0.0170898L11.293 9.87909C11.8554 10.4417 12.1714 11.2046 12.1714 12.0001C12.1714 12.7956 11.8554 13.5585 11.293 14.1211L1.412 24.0001Z" />
    </svg>
  );
};

export default SliderArrow;
