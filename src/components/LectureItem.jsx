import PropTypes from "prop-types";
import styles from "./LectureItem.module.css";

const LectureItem = ({ className = "" }) => {
  return (
    <div className={[styles.lectureItem, className].join(" ")}>
      <div className={styles.lectureItemChild} />
      <h2 className={styles.lecture}>Lecture</h2>
      <div className={styles.dashboardItem}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.discussion}>
            <div className={styles.classes}>Classes</div>
            <div className={styles.discussion1}>Discussion</div>
          </div>
          <div className={styles.insightsItem}>
            <div className={styles.insights}>Insights</div>
            <div className={styles.schedule}>
              <div className={styles.resource}>Resource</div>
              <div className={styles.mySchedule}>My Schedule</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.userLogout}>
          <img
            className={styles.icons8User903}
            loading="lazy"
            alt=""
            src="/icons8user90-2@2x.png"
          />
          <div className={styles.logOutWrapper}>
            <div className={styles.logOut}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

LectureItem.propTypes = {
  className: PropTypes.string,
};

export default LectureItem;
