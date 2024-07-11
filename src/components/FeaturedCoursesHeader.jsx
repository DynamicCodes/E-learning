import CardTopRow from "./CardTopRow";
import PropTypes from "prop-types";
import styles from "./FeaturedCoursesHeader.module.css";

const FeaturedCoursesHeader = ({ className = "" }) => {
  return (
    <div className={[styles.featuredCoursesHeader, className].join(" ")}>
      <div className={styles.featuredCoursesTitle}>
        <h3 className={styles.featuredCourses}>Featured Courses</h3>
      </div>
      <div className={styles.courseCards}>
        <CardTopRow
          cardIcons="/card-icons@2x.png"
          diplomaBigDataAnalytics="Diploma  Big Data Analytics "
        />
        <div className={styles.computingCard}>
          <div className={styles.computingCardLink}>
            <img
              className={styles.computingCardIcon}
              alt=""
              src="/computing-card-icon@2x.png"
            />
            <div className={styles.diplomaInAdvanceComputingParent}>
              <h3 className={styles.diplomaInAdvance}>
                Diploma in Advance Computing
              </h3>
              <div className={styles.computingCardBottom}>
                <div className={styles.computingBottomIcon} />
                <img
                  className={styles.computingCardBottomChild}
                  loading="lazy"
                  alt=""
                  src="/group-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <CardTopRow
          cardIcons="/rectangle-22@2x.png"
          diplomaBigDataAnalytics="Diploma in Artificial Intelligence "
          propWidth="456px"
          propRight="-47px"
          propLeft="23px"
          propWidth1="433px"
        />
      </div>
    </div>
  );
};

FeaturedCoursesHeader.propTypes = {
  className: PropTypes.string,
};

export default FeaturedCoursesHeader;
