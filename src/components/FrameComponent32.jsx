import PropTypes from "prop-types";
import styles from "./FrameComponent32.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.starRatingParent}>
          <div className={styles.starRating}>
            <div className={styles.nameCourseContainer}>
              <p className={styles.name}>{`Name : `}</p>
              <p className={styles.course}>{`Course : `}</p>
              <p className={styles.address}>{`Address : `}</p>
              <p className={styles.practiceRank}>{`Practice Rank: `}</p>
            </div>
            <img
              className={styles.starsIcon}
              loading="lazy"
              alt=""
              src="/star-6.svg"
            />
            <img
              className={styles.starsIcon1}
              loading="lazy"
              alt=""
              src="/star-6.svg"
            />
            <img
              className={styles.starsIcon2}
              loading="lazy"
              alt=""
              src="/star-6.svg"
            />
            <img
              className={styles.starsIcon3}
              loading="lazy"
              alt=""
              src="/star-9.svg"
            />
            <img
              className={styles.starsIcon4}
              loading="lazy"
              alt=""
              src="/star-9.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.ccppId}>{`CCPP ID : `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameWrapper1}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.pgDac}>PG - DAC Marks</div>
          </div>
        </div>
        <div className={styles.frameInner} />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.snoWrapper}>
          <div className={styles.sno}>S.No.</div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.moduleWrapper}>
            <div className={styles.module}>Module</div>
          </div>
          <div className={styles.maximumMarksTheoryParent}>
            <div className={styles.maximumMarksTheory}>
              Maximum Marks (Theory)
            </div>
            <div className={styles.obtainedMarksWrapper}>
              <div className={styles.obtainedMarks}>Obtained Marks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
