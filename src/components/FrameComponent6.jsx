import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.weWantToEnsureThatOurLeaParent}>
        <div className={styles.weWantToContainer}>
          <p className={styles.weWantTo}>
            We want to ensure that our learners achieve the best possible
          </p>
          <p className={styles.careerOutcomesAnd}>
            career outcomes and are able to fulfill their professional goals.
          </p>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.placementStatsParent}>
            <h1 className={styles.placementStats}>Placement Stats</h1>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-16@2x.png"
            />
          </div>
          <div className={styles.helpingOurLearnersgetTheBeWrapper}>
            <div className={styles.helpingOurLearnersget}>
              Helping our LearnersGet the Best CareerBreakthroughs andinto the
              Best Companies
            </div>
          </div>
        </div>
      </div>
      <img className={styles.separatorIcon} alt="" src="/separator@2x.png" />
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
