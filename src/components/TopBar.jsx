import PropTypes from "prop-types";
import styles from "./TopBar.module.css";

const TopBar = ({ className = "" }) => {
  return (
    <header className={[styles.topBar, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.cdac2Icon}
          loading="lazy"
          alt=""
          src="/cdac-2@2x.png"
        />
        <div className={styles.title}>
          <div className={styles.centreForDevelopment}>
            Centre for Development of Advanced Computing
          </div>
        </div>
        <div className={styles.certificate}>
          <div className={styles.assignmentCertificate}>
            <div className={styles.explore}>
              <a className={styles.explore1}>{`Explore `}</a>
              <div className={styles.exploreInner}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/polygon-6.svg"
                />
              </div>
            </div>
            <a className={styles.assignment}>Assignment</a>
            <a className={styles.certificate1}>Certificate</a>
          </div>
        </div>
      </div>
      <div className={styles.notificationContainer}>
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/notification@2x.png"
        />
      </div>
    </header>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
