import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCourseTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPlacementTextClick = useCallback(() => {
    navigate("/placement-page");
  }, [navigate]);

  const onPracticeTextClick = useCallback(() => {
    navigate("/practice-dashboard");
  }, [navigate]);

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.contentChild} />
        <div className={styles.main}>
          <div className={styles.mainChild} />
          <header className={styles.courses}>
            <div className={styles.frameParent}>
              <div className={styles.cdac2Parent}>
                <img
                  className={styles.cdac2Icon}
                  loading="lazy"
                  alt=""
                  src="/cdac-2@2x.png"
                />
                <div className={styles.centreForDevelopmentOfAdvaWrapper}>
                  <div className={styles.centreForDevelopment}>
                    Centre for Development of Advanced Computing
                  </div>
                </div>
              </div>
              <div className={styles.navigation}>
                <div className={styles.navLinks}>
                  <div className={styles.navLinksContainer}>
                    <a className={styles.course} onClick={onCourseTextClick}>
                      Course
                    </a>
                  </div>
                  <div className={styles.navLinksContainer1}>
                    <a
                      className={styles.placement}
                      onClick={onPlacementTextClick}
                    >
                      Placement
                    </a>
                  </div>
                  <div className={styles.navLinksContainer2}>
                    <a
                      className={styles.practice}
                      onClick={onPracticeTextClick}
                    >
                      Practice
                    </a>
                  </div>
                  <div className={styles.navLinksContainer3}>
                    <a className={styles.hireFromUs}>Hire from Us</a>
                  </div>
                  <div className={styles.galleryWrapper}>
                    <a className={styles.gallery}>Gallery</a>
                  </div>
                  <img
                    className={styles.userBoxDuotoneLineIcon}
                    loading="lazy"
                    alt=""
                    src="/user-box-duotone-line@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/group-3.svg" />
            <div className={styles.heroRight}>
              <h1 className={styles.teachingIsThe}>
                Teaching is the Internet Age means we must teach tomorrow’s
                skill today
              </h1>
              <img
                className={styles.heroRightChild}
                loading="lazy"
                alt=""
                src="/group-13.svg"
              />
            </div>
            <div className={styles.joinOptionsWrapper}>
              <div className={styles.joinOptions}>
                <div className={styles.facultyOption}>
                  <img
                    className={styles.facultyOptionChild}
                    loading="lazy"
                    alt=""
                    src="/polygon-1.svg"
                  />
                  <div className={styles.facultyLink}>
                    <div className={styles.joinAsFaculty}>Join as Faculty</div>
                  </div>
                </div>
                <div className={styles.studentOption}>
                  <div className={styles.studentLink}>
                    <div className={styles.joinAsStudent}>Join as Student</div>
                  </div>
                  <img
                    className={styles.studentOptionChild}
                    loading="lazy"
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
