import PropTypes from "prop-types";
import styles from "./FrameComponent22.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.academicDetails}>Academic Details</div>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.academicInfoWrapper}>
        <div className={styles.academicInfo}>
          <div className={styles.levelStream}>
            <div className={styles.level}>Level</div>
          </div>
          <div className={styles.levelStream1}>
            <div className={styles.stream}>Stream</div>
          </div>
          <div className={styles.instituteBoarduniversityWrapper}>
            <div className={styles.instituteBoarduniversity}>
              Institute Board/University
            </div>
          </div>
          <div className={styles.passingYearDegreeWrapper}>
            <div className={styles.passingYearDegree}>Passing Year Degree</div>
          </div>
          <div className={styles.division}> % Division</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
