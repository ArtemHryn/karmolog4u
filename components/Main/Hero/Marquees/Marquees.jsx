import Marquee from "react-fast-marquee";
import { unbounded } from "@/app/layout";

import styled from "./Marquees.module.scss";

const Marquees = () => {
  return (
    <div className={styled.marqueesContainer}>
      <Marquee speed="20" className={styled.redText}>
        <p className={`${styled.text_dark} ${unbounded.className}`}>
          СЕРГІЙ СКЛЯРЕНКО - ПРОВІДНИЙ КАРМОЛОГ, ПСИХОТЕРАПЕВТ, АСПІРАНТ
          ПСИХОЛОГІЇ&nbsp;
        </p>
        <p className={`${styled.text_dark} ${unbounded.className}`}>
          СЕРГІЙ СКЛЯРЕНКО - ПРОВІДНИЙ КАРМОЛОГ, ПСИХОТЕРАПЕВТ, АСПІРАНТ
          ПСИХОЛОГІЇ&nbsp;
        </p>
      </Marquee>
      <Marquee speed="20" className={styled.darkText} direction="right">
        <p className={`${styled.text} ${unbounded.className}`}>
          СЕРГІЙ СКЛЯРЕНКО - ПРОВІДНИЙ КАРМОЛОГ, ПСИХОТЕРАПЕВТ, АСПІРАНТ
          ПСИХОЛОГІЇ&nbsp;
        </p>
        <p className={`${styled.text} ${unbounded.className}`}>
          СЕРГІЙ СКЛЯРЕНКО - ПРОВІДНИЙ КАРМОЛОГ, ПСИХОТЕРАПЕВТ, АСПІРАНТ
          ПСИХОЛОГІЇ&nbsp;
        </p>
      </Marquee>
    </div>
  );
};

export default Marquees;
