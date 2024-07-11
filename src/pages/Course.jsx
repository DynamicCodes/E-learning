import TopBar from "../components/TopBar";
import LectureItem from "../components/LectureItem";
import FrameComponent from "../components/FrameComponent";
import styles from "./Course.module.css";

const Course = () => {
  return (
    <div className={styles.course}>
      <TopBar />
      <main className={styles.navigation}>
        <section className={styles.navigationItems}>
          <LectureItem />
          <div className={styles.courseList}>
            <div className={styles.courseContainer}>
              <div className={styles.courseHeading}>
                <div className={styles.myCourses}>My Courses</div>
                <div className={styles.courses}>
                  <div className={styles.courseCards}>
                    <div className={styles.cardDetails}>
                      <img
                        className={styles.cardIcons}
                        loading="lazy"
                        alt=""
                        src="/rectangle-4300@2x.png"
                      />
                      <div className={styles.cardNames}>
                        <div className={styles.cardNamesChild} />
                        <b className={styles.java}>JAVA</b>
                      </div>
                    </div>
                    <div className={styles.moreCourses}>
                      <div className={styles.moreCoursesContainer}>
                        <img
                          className={styles.moreCoursesContainerChild}
                          alt=""
                          src="/rectangle-4301@2x.png"
                        />
                        <div className={styles.moreCoursesItem}>
                          <div className={styles.moreCoursesItemChild} />
                          <b className={styles.c}>C++</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardDetails1}>
                      <img
                        className={styles.cardDetailsChild}
                        loading="lazy"
                        alt=""
                        src="/rectangle-4302@2x.png"
                      />
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <b className={styles.dsa}>DSA</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.scheduleList}>
                <div className={styles.scheduleCards}>
                  <div className={styles.task}>
                    <div className={styles.taskContainer}>
                      <div className={styles.taskHeading}>
                        <div className={styles.todaysTask}>Today’s Task</div>
                      </div>
                      <div className={styles.operatingSystem}>
                        <div className={styles.operatingSystemChild} />
                        <h3 className={styles.operatingSystemDay}>
                          Operating System Day 1
                        </h3>
                        <FrameComponent
                          line23="pending_76:21"
                          am11Am="9am-11 am"
                        />
                      </div>
                    </div>
                    <div className={styles.dSA}>
                      <div className={styles.dSAContainer}>
                        <div className={styles.dSAContainerChild} />
                        <div className={styles.dSAHeading}>
                          <h3 className={styles.dsaDay1}>DSA Day 1</h3>
                        </div>
                        <div className={styles.dSATime}>
                          <div className={styles.am1Pm}>11am-1 pm</div>
                          <div className={styles.dSAJoin}>
                            <div className={styles.dSAJoinButton} />
                            <a className={styles.joinNow}>Join Now</a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dSASeparator}>
                        <img
                          className={styles.dSASeparatorChild}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.scheduleDetails}>
                    <div className={styles.scheduleDetailsChild} />
                    <div className={styles.networkAssignment}>
                      <h3 className={styles.computerNetworkDay}>
                        Computer Network Day 1
                      </h3>
                    </div>
                    <FrameComponent
                      line23="pending_76:35"
                      am11Am="2pm-4pm am"
                      propMarginTop="unset"
                      propPadding="5px 0px 0px"
                      propAlignSelf="unset"
                      propWidth="109px"
                      propHeight="23px"
                      propDisplay="inline-block"
                    />
                  </div>
                  <div className={styles.scheduleDetails1}>
                    <div className={styles.scheduleDetailsItem} />
                    <div className={styles.assignment}>Assignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Course;
