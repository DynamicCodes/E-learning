import PropTypes from "prop-types";
import styles from "./BackgroundContainer.module.css";

const BackgroundContainer = ({ className = "" }) => {
  return (
    <div className={[styles.backgroundContainer, className].join(" ")}>
      <div className={styles.backgroundContainerChild} />
      <div className={styles.backgroundDataParent}>
        <div className={styles.backgroundData}>
          <img
            className={styles.backgroundIcons}
            loading="lazy"
            alt=""
            src="/polygon-16.svg"
          />
          <h2 className={styles.btechMechanical}>
            <p className={styles.p}> 65%</p>
            <p className={styles.btechMechanical1}> B.Tech Mechanical</p>
          </h2>
        </div>
        <div className={styles.backgroundData1}>
          <img
            className={styles.backgroundDataChild}
            loading="lazy"
            alt=""
            src="/polygon-16.svg"
          />
          <h2 className={styles.btechElectronics}>
            <p className={styles.p1}> 80%</p>
            <p className={styles.btech}> B.Tech Electronics</p>
          </h2>
        </div>
        <div className={styles.backgroundData2}>
          <img
            className={styles.backgroundDataItem}
            alt=""
            src="/polygon-16.svg"
          />
          <h2 className={styles.btechCivil}>
            <p className={styles.p2}> 50%</p>
            <p className={styles.btech1}>{`   B.Tech `}</p>
            <p className={styles.civil}> Civil</p>
          </h2>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.biomedicalIconParent}>
            <img
              className={styles.biomedicalIcon}
              loading="lazy"
              alt=""
              src="/polygon-16.svg"
            />
            <h2 className={styles.btechBiomedical}>
              <p className={styles.p3}> 32%</p>
              <p className={styles.btechBiomedical1}> B.Tech Biomedical</p>
            </h2>
          </div>
        </div>
        <div className={styles.backgrounds}>
          <h1 className={styles.ourLearnersComeContainer}>
            <p className={styles.ourLearnersCome}>
              Our learners come from diverse
            </p>
            <p className={styles.backgroundsAndExperiences}>
              backgrounds and experiences
            </p>
          </h1>
          <div className={styles.englishParent}>
            <div className={styles.englishIconParent}>
              <img
                className={styles.englishIcon}
                loading="lazy"
                alt=""
                src="/polygon-16.svg"
              />
              <h2 className={styles.baEnglish}>
                <p className={styles.p4}> 15%</p>
                <p className={styles.baEnglish1}>{`BA English `}</p>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.mathsIconParent}>
          <img
            className={styles.mathsIcon}
            loading="lazy"
            alt=""
            src="/polygon-16.svg"
          />
          <h2 className={styles.bscMaths}>
            <p className={styles.p5}> 25%</p>
            <p className={styles.bscMaths1}>{`Bsc Maths `}</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

BackgroundContainer.propTypes = {
  className: PropTypes.string,
};

export default BackgroundContainer;
