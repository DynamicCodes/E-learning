import PropTypes from "prop-types";
import styles from "./Structure.module.css";

const Structure = ({ className = "" }) => {
  return (
    <div className={[styles.structure, className].join(" ")}>
      <div className={styles.structureChild} />
      <img
        className={styles.structureItem}
        loading="lazy"
        alt=""
        src="/group-16@2x.png"
      />
      <div className={styles.structureInner}>
        <div className={styles.frameParent}>
          <div className={styles.discussionWrapper}>
            <h3 className={styles.discussion}>{`Discussion `}</h3>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.networkOptionsWrapper}>
              <div className={styles.networkOptions}>
                <img
                  className={styles.menuIcon}
                  loading="lazy"
                  alt=""
                  src="/menu.svg"
                />
                <div className={styles.operatingSystemWrapper}>
                  <b className={styles.operatingSystem}>Operating System</b>
                </div>
              </div>
            </div>
            <div className={styles.computerNetworkParent}>
              <b className={styles.computerNetwork}>Computer Network</b>
              <div className={styles.dsaParent}>
                <b className={styles.dsa}>DSA</b>
                <b className={styles.java}>JAVA</b>
                <div className={styles.frameContainer}>
                  <div className={styles.softwareEngineeringParent}>
                    <b className={styles.softwareEngineering}>
                      Software Engineering
                    </b>
                    <b className={styles.python}>Python</b>
                  </div>
                  <b className={styles.mathematics}>{`Mathematics `}</b>
                </div>
              </div>
            </div>
            <div className={styles.alumniContainerWrapper}>
              <div className={styles.alumniContainer}>
                <div className={styles.alumniContainerChild} />
                <b className={styles.alumni}>Alumni</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Structure.propTypes = {
  className: PropTypes.string,
};

export default Structure;
