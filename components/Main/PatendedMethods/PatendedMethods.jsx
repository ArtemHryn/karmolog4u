import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";
import Slider from "./Slider/Slider";

import styles from "./PatentedMethods.module.scss";

const PatentedMethods = () => {
  return (
    <Container styled={styles.container}>
      <Title styled={styles.title}>
        Запатентовані методики
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 39"
          fill="none"
          className={styles.arrow}
        >
          <path
            d="M1.70343 4.98703C0.653037 4.09092 0.527969 2.51295 1.42409 1.46255C2.32021 0.412155 3.89817 0.287087 4.94857 1.18321L1.70343 4.98703ZM148.508 13.4526C149.759 14.0369 150.299 15.5246 149.715 16.7756L140.194 37.1619C139.61 38.4129 138.122 38.9534 136.871 38.3691C135.62 37.7848 135.079 36.2971 135.664 35.0461L144.127 16.925L126.006 8.46176C124.755 7.8775 124.214 6.38972 124.798 5.13872C125.383 3.88772 126.871 3.34722 128.122 3.93149L148.508 13.4526ZM3.326 3.08512C4.94857 1.18321 4.94824 1.18292 4.94803 1.18275C4.94813 1.18283 4.94805 1.18276 4.94824 1.18293C4.94864 1.18326 4.94954 1.18403 4.95094 1.18522C4.95374 1.1876 4.95854 1.19167 4.96533 1.19742C4.97891 1.20892 5.00045 1.2271 5.0298 1.25175C5.08853 1.30105 5.17854 1.37622 5.29885 1.47554C5.53948 1.67419 5.9012 1.96939 6.37597 2.34738C7.32565 3.10348 8.72676 4.19014 10.515 5.49757C14.0938 8.11407 19.2111 11.606 25.3541 15.1003C37.7013 22.1238 53.9195 28.9988 70.0079 29.0652L69.9873 34.0652C52.6255 33.9935 35.5079 26.6284 22.8819 19.4464C16.5382 15.8379 11.2596 12.2358 7.564 9.53385C5.71509 8.18206 4.25944 7.05343 3.26166 6.25904C2.7627 5.86178 2.37801 5.54793 2.11567 5.33136C1.98449 5.22306 1.88388 5.13907 1.81484 5.08111C1.78032 5.05213 1.7537 5.02965 1.73509 5.0139C1.72578 5.00603 1.71848 4.99983 1.7132 4.99535C1.71056 4.9931 1.70843 4.99129 1.7068 4.9899C1.70598 4.98921 1.70514 4.98849 1.70474 4.98814C1.70402 4.98753 1.70343 4.98703 3.326 3.08512ZM70.0079 29.0652C86.402 29.1329 105.513 25.2382 120.634 21.275C128.171 19.2994 134.672 17.3193 139.286 15.8336C141.592 15.091 143.426 14.4725 144.68 14.0406C145.307 13.8247 145.789 13.6554 146.113 13.5407C146.275 13.4833 146.397 13.4396 146.478 13.4105C146.519 13.396 146.549 13.3851 146.569 13.3779C146.579 13.3744 146.586 13.3717 146.59 13.3701C146.593 13.3693 146.594 13.3687 146.595 13.3683C146.596 13.3681 146.596 13.3681 146.596 13.368C146.596 13.368 146.596 13.368 147.45 15.7177C148.303 18.0675 148.303 18.0676 148.302 18.0679C148.302 18.068 148.301 18.0683 148.3 18.0686C148.299 18.0693 148.296 18.0701 148.293 18.0712C148.287 18.0734 148.278 18.0766 148.267 18.0807C148.244 18.089 148.211 18.101 148.167 18.1167C148.08 18.1481 147.951 18.1941 147.782 18.2538C147.445 18.3731 146.949 18.5472 146.308 18.7681C145.025 19.2099 143.159 19.8392 140.818 20.593C136.137 22.1004 129.546 24.108 121.901 26.1116C106.659 30.1067 87.0434 34.1356 69.9873 34.0652L70.0079 29.0652Z"
            fill="#CFB691"
          />
        </svg>
      </Title>
      <Slider />
    </Container>
  );
};

export default PatentedMethods;
