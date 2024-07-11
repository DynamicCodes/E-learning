import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={[styles.placementContentWrapper, className].join(" ")}>
      <div className={styles.placementContent}>
        <div className={styles.placementHeader}>
          <div className={styles.placementTitle}>
            <h1 className={styles.placements}>Placements</h1>
          </div>
          <h2 className={styles.studentsCrackedTheir}>
            Students Cracked Their Dream Careers In
          </h2>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <img
              className={styles.statBarsIcon}
              loading="lazy"
              alt=""
              src="/rectangle-28@2x.png"
            />
            <img
              className={styles.statBarsIcon1}
              loading="lazy"
              alt=""
              src="/rectangle-29@2x.png"
            />
            <div className={styles.statIcon}>
              <img
                className={styles.statIconChild}
                loading="lazy"
                alt=""
                src="/rectangle-30@2x.png"
              />
              <i className={styles.text}>
                <p className={styles.blankLine}>&nbsp;</p>
              </i>
            </div>
          </div>
          <img
            className={styles.statsChild}
            loading="lazy"
            alt=""
            src="/rectangle-31@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
