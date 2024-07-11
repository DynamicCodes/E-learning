import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Report.module.css";

const Report = () => {
  return (
    <div className={styles.report}>
      <div className={styles.reportChild} />
      <img className={styles.reportItem} alt="" src="/group-27.svg" />
      <img className={styles.reportInner} alt="" src="/group-28.svg" />
      <section className={styles.frameParent}>
        <FrameComponent4 />
        <FrameComponent3 />
      </section>
      <FrameComponent2 />
      <section className={styles.frameGroup}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <section className={styles.iHerebyDeclareContainer}>
        <p className={styles.iHerebyDeclare}>
          I hereby declare that the information given above is true to the best
          of my Information knowledge belief.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.date}>Date : Signature :</p>
      </section>
    </div>
  );
};

export default Report;
