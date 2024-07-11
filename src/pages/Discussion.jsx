import Structure from "../components/Structure";
import styles from "./Discussion.module.css";

const Discussion = () => {
  return (
    <div className={styles.discussion}>
      <Structure />
      <section className={styles.shapes}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild2} />
                <div className={styles.frameChild3} />
              </div>
              <footer className={styles.rectangleFrame}>
                <div className={styles.frameChild4} />
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discussion;
