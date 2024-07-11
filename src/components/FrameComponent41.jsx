import PropTypes from "prop-types";
import styles from "./FrameComponent41.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <header className={styles.phppw0r3m1Parent}>
          <img
            className={styles.phppw0r3m1Icon}
            loading="lazy"
            alt=""
            src="/1571916731phppw0r3m-1@2x.png"
          />
          <div className={styles.cDacsAdvancedComputingTraWrapper}>
            <div className={styles.cDacsAdvancedComputingContainer}>
              <p className={styles.cDacsAdvancedComputingTra}>
                <b>{`C-DAC’s Advanced Computing Training School `}</b>
              </p>
              <p className={styles.commonCampusPlacement}>
                {" "}
                Common Campus Placement Programme
              </p>
              <p className={styles.resume}>
                <span
                  className={styles.span}
                >{`                                `}</span>
                <b className={styles.resume1}>Resume</b>
              </p>
            </div>
          </div>
          <img
            className={styles.images1Icon}
            loading="lazy"
            alt=""
            src="/images-1@2x.png"
          />
        </header>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.basicInformation}>Basic Information</div>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
