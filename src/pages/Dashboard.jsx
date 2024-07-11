import MainContainer from "../components/MainContainer";
import MenuIcon from "../components/MenuIcon";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <MainContainer />
      <main className={styles.userPanel}>
        <section className={styles.userProfile}>
          <div className={styles.userHeaderWrapper}>
            <div className={styles.userHeader}>
              <div className={styles.userInfo}>
                <div className={styles.userRow}>
                  <div className={styles.userName}>
                    <img
                      className={styles.userBoxDuotoneLineIcon}
                      loading="lazy"
                      alt=""
                      src="/user-box-duotone-line@2x.png"
                    />
                    <div className={styles.nameContainer}>
                      <h1 className={styles.rajMalhotra}>Raj Malhotra</h1>
                    </div>
                  </div>
                </div>
                <MenuIcon />
              </div>
              <div className={styles.navigation}>
                <div className={styles.navItems}>
                  <div className={styles.dashboardNavItem}>
                    <h1 className={styles.dashboard1}>Dashboard</h1>
                  </div>
                  <div className={styles.portfolioContent}>
                    <h1 className={styles.notification}>Notification</h1>
                    <div className={styles.linkItems}>
                      <h1 className={styles.setting}>Setting</h1>
                    </div>
                    <div className={styles.linkItems1}>
                      <a className={styles.practice}>Practice</a>
                    </div>
                    <div className={styles.linkItems2}>
                      <h1 className={styles.logOut}>Log Out</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} loading="lazy" alt="" />
            <img className={styles.frameInner} alt="" />
            <img className={styles.lineIcon} alt="" />
            <img className={styles.frameChild1} alt="" />
            <img className={styles.frameChild2} alt="" />
            <img className={styles.frameChild3} alt="" />
            <img className={styles.frameChild4} alt="" />
            <div className={styles.mainContentWrapper}>
              <div className={styles.mainContent}>
                <div className={styles.dashboardHeader}>
                  <h1 className={styles.dashboard2}>DASHBOARD</h1>
                </div>
                <div className={styles.courseInfo}>
                  <div className={styles.courseDetails}>
                    <div className={styles.courseNameContainerParent}>
                      <div className={styles.courseNameContainer}>
                        <h1 className={styles.currentCourse}>Current Course</h1>
                      </div>
                      <div className={styles.enrolledCourse}>
                        <div className={styles.enrolledCourseChild} />
                        <h2
                          className={styles.diplomaInArtificial}
                        >{`Diploma in Artificial Intelligence `}</h2>
                        <div className={styles.courseProgress}>
                          <div className={styles.progressContainer}>
                            <div className={styles.progressBars}>
                              <div className={styles.progressBarTop} />
                              <img
                                className={styles.progressBarBottom}
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <div className={styles.courseLessons}>
                              <div className={styles.lessonsLabel}>
                                <div className={styles.lessons}>
                                  4/14 Lessons
                                </div>
                                <div
                                  className={styles.toTheCourse}
                                >{`To the course    >`}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.learningProgress}>
                    <div className={styles.learningContainer}>
                      <div className={styles.learningHeader}>
                        <div className={styles.learningLessons}>
                          <p className={styles.p}>32</p>
                          <p className={styles.learningLessons1}>
                            Learning Lessons
                          </p>
                        </div>
                        <div className={styles.lessonsOverview}>
                          <div className={styles.allLessons}>
                            <p className={styles.p1}>12</p>
                            <p className={styles.allLessons1}>All Lessons</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.lessonBars}>
                      <div className={styles.barsContainer}>
                        <div className={styles.progressBarsContainer}>
                          <div className={styles.individualBars}>7</div>
                          <div className={styles.individualBars1}>6</div>
                          <div className={styles.individualBars2}>5</div>
                          <div className={styles.individualBars3}>4</div>
                          <div className={styles.individualBars4}>3</div>
                          <div className={styles.individualBars5}>2</div>
                          <div className={styles.individualBars6}>1</div>
                        </div>
                      </div>
                      <div className={styles.frameParent}>
                        <div className={styles.frameGroup}>
                          <div className={styles.frameWrapper}>
                            <div className={styles.lineParent}>
                              <img
                                className={styles.frameChild5}
                                loading="lazy"
                                alt=""
                              />
                              <div className={styles.frameContainer}>
                                <div className={styles.lineGroup}>
                                  <img
                                    className={styles.frameChild6}
                                    loading="lazy"
                                    alt=""
                                  />
                                  <div className={styles.lineWrapper}>
                                    <img
                                      className={styles.frameChild7}
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                  <div className={styles.lineDiv} />
                                  <div className={styles.frameDiv}>
                                    <div className={styles.frameParent1}>
                                      <div className={styles.lineContainer}>
                                        <img
                                          className={styles.frameChild8}
                                          loading="lazy"
                                          alt=""
                                        />
                                      </div>
                                      <div className={styles.lineFrame}>
                                        <img
                                          className={styles.frameChild9}
                                          loading="lazy"
                                          alt=""
                                        />
                                      </div>
                                      <img
                                        className={styles.frameChild10}
                                        loading="lazy"
                                        alt=""
                                      />
                                      <div className={styles.frameChild11} />
                                    </div>
                                  </div>
                                  <div className={styles.progressIndicators}>
                                    <div className={styles.statusIndicators}>
                                      <div
                                        className={styles.indicatorCircles}
                                      />
                                      <div
                                        className={styles.indicatorCircles1}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.progressStatus}>
                            <img
                              className={styles.progressStatusChild}
                              loading="lazy"
                              alt=""
                              src="/group-15.svg"
                            />
                            <div className={styles.statusLabel}>
                              <div className={styles.notStartedYetParent}>
                                <div className={styles.notStartedYet}>
                                  Not Started Yet
                                </div>
                                <div className={styles.inProgress}>
                                  In progress
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.calendar}>
                          <div className={styles.weekdays}>
                            <div className={styles.dayNames}>
                              <div className={styles.mon}>Mon</div>
                            </div>
                            <div className={styles.dayNames1}>
                              <div className={styles.tue}>Tue</div>
                            </div>
                            <div className={styles.dayNames2}>
                              <div className={styles.wed}>Wed</div>
                            </div>
                            <div className={styles.dayNames3}>
                              <div className={styles.thur}>Thur</div>
                            </div>
                            <div className={styles.dayNames4}>
                              <div className={styles.fri}>Fri</div>
                            </div>
                            <div className={styles.sat}>Sat</div>
                            <div className={styles.dayNames5}>
                              <div className={styles.sun}>Sun</div>
                            </div>
                          </div>
                          <div className={styles.attendance}>
                            <div className={styles.attendanceIndicator}>
                              <div className={styles.attendanceMark}>
                                <div className={styles.attendanceCircle} />
                              </div>
                              <div className={styles.complete}>Complete</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.overallStatistics}>
              <div className={styles.overallContainer}>
                <div className={styles.overallHeader}>
                  <h1 className={styles.overallAttendance}>
                    Overall Attendance
                  </h1>
                  <div className={styles.overallChart}>
                    <div className={styles.attendanceCircle1}>
                      <div className={styles.progressCircle} />
                      <div className={styles.emptyProgress}>
                        <div className={styles.tinyCircle} />
                        <div className={styles.emptyTiny}>75 %</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.subjectAttendance}>
                <div className={styles.subjectAttendanceChild} />
                <div className={styles.attendanceTitle}>
                  <div className={styles.attendanceBySubjectWrapper}>
                    <h2 className={styles.attendanceBySubject}>
                      Attendance by subject
                    </h2>
                  </div>
                  <div className={styles.operatingSystemDetails}>
                    <div className={styles.operatingSystemParent}>
                      <h2 className={styles.operatingSystem}>
                        Operating System
                      </h2>
                      <div className={styles.oSProgress}>
                        <div className={styles.oSProgressBar}>
                          <div className={styles.oSProgressBarChild} />
                          <div className={styles.oSProgressBarItem} />
                        </div>
                      </div>
                      <div className={styles.oSProgressPercent}>
                        <div className={styles.emptyOS}>89%</div>
                      </div>
                    </div>
                    <div className={styles.webTechnologyDetails}>
                      <div className={styles.webTechnologyParent}>
                        <h2 className={styles.webTechnology}>Web Technology</h2>
                        <div className={styles.webProgress}>
                          <div className={styles.webProgressBar}>
                            <div className={styles.webProgressBarChild} />
                            <div className={styles.webProgressPercent}>
                              <div className={styles.emptyWebPercent}>100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.subjectList}>
                  <div className={styles.subjectNames}>
                    <h2 className={styles.dsa}>DSA</h2>
                    <div className={styles.subjectBars}>
                      <div className={styles.coloredBars}>
                        <div className={styles.coloredBarsChild} />
                        <div className={styles.subjectProgress} />
                      </div>
                    </div>
                    <div className={styles.emptyBars}>
                      <div className={styles.noBars}>48%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.subjectList1}>
                  <div className={styles.networkParent}>
                    <h2 className={styles.network}>Network</h2>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.frameChild12} />
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>95%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.subjectList2}>
                  <div className={styles.javaParent}>
                    <h2 className={styles.java}>JAVA</h2>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div1}>100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.dashboardChild} />
      <div className={styles.dashboardItem} />
    </div>
  );
};

export default Dashboard;
