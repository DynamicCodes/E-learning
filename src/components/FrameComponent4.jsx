import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.testimonialOptionsWrapper, className].join(" ")}>
      <div className={styles.testimonialOptions}>
        <div className={styles.currentEventsWrapper}>
          <h3 className={styles.currentEvents}>Current Events</h3>
        </div>
        <div className={styles.programOptionsParent}>
          <div className={styles.programOptions}>
            <img
              className={styles.programIcons}
              loading="lazy"
              alt=""
              src="/rectangle-4353@2x.png"
            />
            <div className={styles.programLinks}>
              <div className={styles.programLinksChild} />
              <b className={styles.facultyDevelopmentProgram}>
                Faculty Development Program (FDP)
              </b>
            </div>
          </div>
          <div className={styles.programOptions1}>
            <img
              className={styles.programOptionsChild}
              loading="lazy"
              alt=""
              src="/rectangle-4322@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.capacityBuildingProgram}>
                Capacity Building Program (CBP)
              </b>
            </div>
          </div>
          <div className={styles.futureSkillsLinkWrapper}>
            <div className={styles.futureSkillsLink}>
              <img
                className={styles.futureSkillsIcon}
                loading="lazy"
                alt=""
                src="/rectangle-4351@2x.png"
              />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.futureSkills}>Future Skills</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.testimonialOptionsChild}
          loading="lazy"
          alt=""
          src="/group-24.svg"
        />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
