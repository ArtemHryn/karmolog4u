import Container from "@components/Common/Container/Container";

import styles from "./Feedbacks.module.scss";
import { unbounded } from "@app/layout";
import FeedbacksSlider from "./FeedbacksSlider/FeedbacksSlider";

const Feedbacks = ({ feedbacks }) => {
  return (
    <Container>
      <h1 className={`${styles.title} ${unbounded.className}`}>
        Відгуки від клієнтів
      </h1>
      <FeedbacksSlider feedbacks={feedbacks} />
    </Container>
  );
};

export default Feedbacks;
