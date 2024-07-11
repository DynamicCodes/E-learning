import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.placementPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.hiringPartnersWrapper}>
          <h1 className={styles.hiringPartners}>Hiring Partners</h1>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.sakshankTechnologies}>
              <p className={styles.sakshank}>Sakshank</p>
              <p className={styles.technologies}>Technologies</p>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.kalvium}>Kalvium</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild1} />
            <div className={styles.noduko}>Noduko</div>
          </div>
          <img
            className={styles.polygonIcon}
            loading="lazy"
            alt=""
            src="/polygon-8.svg"
          />
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <div className={styles.sodalesSolution}>
                <p className={styles.sodales}>{`Sodales `}</p>
                <p className={styles.solution}>Solution</p>
              </div>
            </div>
            <div className={styles.netWebTechnologyParent}>
              <div className={styles.netWebTechnology}>Net Web Technology</div>
              <img className={styles.frameChild3} alt="" src="/polygon-9.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
