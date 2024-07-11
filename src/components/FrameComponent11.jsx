import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.academicProjects}>Academic Projects</div>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.titlePlatformContainer}>
          <p className={styles.title}>{`Title :  `}</p>
          <p
            className={styles.platform}
          >{`Platform :                                                                                                          Duration : `}</p>
          <p className={styles.description}>{`Description : `}</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
