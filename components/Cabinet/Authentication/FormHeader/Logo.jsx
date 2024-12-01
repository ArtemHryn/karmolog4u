import styles from './FormHeader.module.scss';

const Logo = () => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
      <g clipPath="url(#clip0_5393_10051)">
        <path
          d="M31.9225 16.1496L31.9227 16.077L32 15.9998L27.3136 11.3134V4.68635H20.6864L16 0L11.3136 4.68635H4.68635V11.3136L0.149574 15.8504L0.0775113 15.8502L0.0772635 15.9227L0 16L4.68635 20.6864V27.3136H11.3136L16 32L20.6864 27.3136H27.3136V20.6864L31.8504 16.1496H31.9225ZM31.6149 15.9277L27.3136 15.917V11.6264L31.6149 15.9277ZM22.1761 9.67255C21.2995 9.25851 20.4129 9.32288 19.6378 9.77435C18.4576 10.4618 18.0061 11.3431 17.4683 12.2857C17.3244 12.6059 17.256 12.746 17.1649 12.9251C17.1065 12.9615 17.1453 10.174 17.1453 8.56983C18.7285 8.56983 20.4456 8.56983 21.9609 8.56983C21.9609 8.04485 21.9609 7.24864 21.9609 6.51442C20.0098 6.51442 18.0774 6.51442 16.1315 6.51442L16.1349 4.90747H20.5952L23.7677 8.08L22.1761 9.67255ZM13.4996 18.6708L14.6578 17.5116C14.6244 17.9848 14.5523 18.468 14.432 18.9756C14.1157 18.8704 13.8039 18.7723 13.4996 18.6708ZM14.2148 19.7027C13.7418 20.7435 13.3419 21.7536 12.4303 22.3039C11.7384 22.7214 10.9952 22.8215 10.2493 22.6003C10.0497 22.5412 9.90533 22.4733 9.78002 22.3941L12.8399 19.3312C13.2908 19.4721 13.7534 19.6037 14.2148 19.7027ZM14.6741 17.182L13.2661 18.5913C12.3392 18.2701 11.4967 17.8912 10.8568 17.1483C10.5197 16.7853 10.2889 16.4405 10.1564 16.0961L14.6506 16.1072C14.6773 16.4661 14.6863 16.8222 14.6741 17.182ZM19.1955 19.3372L22.35 22.4884C22.194 22.5625 21.9887 22.637 21.723 22.6915C19.9159 23.0619 17.9987 21.4151 17.8496 19.7453C17.8496 19.7453 18.6309 19.5413 19.1955 19.3372ZM17.596 18.9734C17.596 18.9734 17.4541 18.3556 17.3613 17.5051L18.5908 18.7334C18.2654 18.8372 17.9316 18.9182 17.596 18.9734ZM17.3281 17.1589C17.3001 16.8283 17.282 16.474 17.2832 16.1136L21.8921 16.1251C21.8289 16.2976 21.7391 16.4705 21.6197 16.6443C21.0036 17.5398 19.9754 18.2431 18.8251 18.6544L17.3281 17.1589ZM21.0202 10.8298L17.4893 14.3641C17.787 13.2492 18.4115 12.3842 19.3285 11.5299C19.8476 11.0311 20.41 10.8147 21.0202 10.8298ZM15.9099 6.51442C13.9376 6.51442 11.9504 6.51442 9.91351 6.51442C9.91351 7.29175 9.91351 7.91333 9.91351 8.60969C11.64 8.60969 13.2876 8.60969 14.9267 8.60969C14.9267 10.0819 14.9366 11.7106 14.9366 12.9211C14.9366 12.9211 13.9629 11.1673 13.3045 10.4103C12.303 9.25874 11.046 9.15154 9.80009 9.6389L8.23648 8.07675L11.4055 4.9077H15.9133L15.9099 6.51442ZM14.3292 14.1632L11.0118 10.8493C11.3117 10.8486 11.6064 10.9184 11.8944 11.0685C12.3698 11.36 12.7856 11.6832 13.194 12.1299C13.7291 12.7153 14.0979 13.3874 14.3292 14.1632ZM9.58021 9.73152C9.44201 9.79836 9.33006 9.87415 9.30208 9.89394C9.29765 10.4928 9.39991 11.4078 9.39991 11.4078L9.69783 11.2711C10.0435 11.0586 10.3853 10.9229 10.7216 10.8716L14.4396 14.586C14.4802 14.7668 14.5152 14.9522 14.5431 15.1439C14.5795 15.3945 14.6095 15.6412 14.6323 15.8861L10.0859 15.8749C9.93207 15.2888 10.0574 14.6917 10.4264 13.9939L10.5653 13.7262C10.1837 13.7262 9.44695 13.7599 9.34318 13.766C9.01979 13.7854 9.0448 13.8431 8.88754 14.0578C8.52251 14.5563 8.44453 15.2789 8.51854 15.871L4.90725 15.8621V11.4053L8.07973 8.23278L9.58021 9.73152ZM8.55447 16.0924C8.5941 16.2892 8.65056 16.4641 8.71817 16.6C9.19758 17.5633 10.2506 18.4581 11.5048 18.8907C11.8555 19.0076 12.2245 19.1334 12.6029 19.2555L9.59826 22.2633C9.51232 22.195 9.42688 22.1197 9.32686 22.0355L9.33083 22.1145C9.33083 22.273 9.32882 22.4099 9.32613 22.536L8.08814 23.7751L4.90747 20.5947V16.0832L8.55447 16.0924ZM9.31794 22.8566C9.31346 23.0471 9.31077 23.2283 9.31671 23.445C9.31671 23.445 9.30382 23.7595 9.56283 23.9012C10.4568 24.3908 11.3944 24.2969 12.411 23.7781C13.3706 23.2479 14.0508 22.3294 14.6018 21.3473C14.6831 21.2024 14.9074 20.8517 14.9032 20.7549C14.9032 22.2913 14.8455 25.2496 14.9019 25.3826C14.9364 25.4635 15.3856 25.4811 15.869 25.4722L15.8655 27.0925H11.4055L8.24443 23.9314L9.31794 22.8566ZM16.0901 25.4665C16.3673 25.4574 16.6369 25.441 16.8278 25.4249C17.1614 25.3964 17.1357 25.256 17.1357 24.9898C17.1357 23.5916 17.1528 22.4451 17.0931 21.0568C17.0923 20.8949 17.0849 20.6992 17.0849 20.6992C17.0849 20.6992 17.2783 21.0382 17.3848 21.225C17.8221 21.9914 18.2119 22.8594 18.9865 23.471C19.8785 24.1753 21.6474 24.5351 22.454 23.9814C22.5914 23.8871 22.6836 23.3668 22.7291 22.8668L23.7756 23.9123L20.5952 27.0928H16.0864L16.0901 25.4665ZM22.7502 22.5756C22.7579 22.4419 22.7616 22.3168 22.7616 22.2103C22.7616 22.2103 22.6992 22.2838 22.552 22.3777L19.4214 19.2503C20.7562 18.7074 22.0233 18.2634 22.9624 17.0411C23.163 16.7798 23.3131 16.4658 23.4044 16.1288L27.0925 16.1379V20.5947L23.9314 23.7558L22.7502 22.5756ZM23.4555 15.9079C23.5768 15.2667 23.4881 14.5681 23.1313 14.0003C23.1313 14.0003 23.0572 13.856 22.9958 13.8118C22.7925 13.6667 21.3235 13.7272 21.329 13.7349C21.8572 14.4827 22.1271 15.1927 21.9587 15.9042L17.2867 15.8928C17.2966 15.5126 17.3301 15.1313 17.3974 14.7692L21.3092 10.8535C21.6846 10.9053 22.0776 11.038 22.4889 11.2411L22.6432 11.3394C22.686 10.8813 22.7281 10.6366 22.7373 10.1079C22.6949 9.95808 22.5781 9.88402 22.3832 9.77856L23.9235 8.23648L27.0925 11.4055V15.9168L23.4555 15.9079ZM24.0797 8.07973L27.0925 5.064V11.0925L24.0797 8.07973ZM26.9363 4.90747L23.9232 7.92347L20.9075 4.90747H26.9363ZM16.1349 4.68635L16.1441 0.456895L20.3736 4.68635H16.1349ZM15.9232 0.389537L15.9138 4.68635H11.6264L15.9232 0.389537ZM8.07973 7.92027L5.064 4.90747H11.0925L8.07973 7.92027ZM4.90747 5.06373L7.92347 8.07675L4.90747 11.0925V5.06373ZM4.68635 11.6264V15.8616L0.461353 15.8512L4.68635 11.6264ZM0.38508 16.0723L4.68635 16.083V20.3738L0.38508 16.0723ZM7.93166 23.9314L4.90747 26.9585V20.9075L7.93166 23.9314ZM5.08626 27.0925L8.08791 24.0879L11.0925 27.0925H5.08626ZM15.8651 27.3136L15.8559 31.5431L11.6264 27.3136H15.8651ZM16.0768 31.6105L16.0862 27.3136H20.3738L16.0768 31.6105ZM23.9314 24.0683L26.9585 27.0925H20.9075L23.9314 24.0683ZM27.0925 26.9137L24.0879 23.9121L27.0925 20.9075V26.9137ZM27.3136 20.3736V16.1384L31.5387 16.1488L27.3136 20.3736Z"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <clipPath id="clip0_5393_10051">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
