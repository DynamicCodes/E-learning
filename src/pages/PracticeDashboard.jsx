import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PracticeButtonDSA from "../components/PracticeButtonDSA";
import styles from "./PracticeDashboard.module.css";

const PracticeDashboard = () => {
  const navigate = useNavigate();

  const onPracticeButtonContinueShapeClick = useCallback(() => {
    navigate("/practice");
  }, [navigate]);

  return (
    <div className={styles.practiceDashboard}>
      <header className={styles.homepage}>
        <div className={styles.homepageChild} />
        <img
          className={styles.homepageItem}
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <div className={styles.icons8User902Wrapper}>
          <img
            className={styles.icons8User902}
            loading="lazy"
            alt=""
            src="/icons8user90-2@2x.png"
          />
        </div>
      </header>
      <main className={styles.sessions}>
        <section className={styles.practiceHeader}>
          <div className={styles.practiceTitle}>
            <b className={styles.practiceSession}>Practice Session</b>
            <div className={styles.practiceButtons}>
              <div className={styles.practiceButtonContainer}>
                <div className={styles.practiceButtonDSAParent}>
                  <PracticeButtonDSA
                    dSA="DSA"
                    onPracticeButtonContinueShapeClick={
                      onPracticeButtonContinueShapeClick
                    }
                  />
                  <PracticeButtonDSA
                    dSA="C++"
                    propPadding="23px 132px 25px"
                    propGap="10px"
                    propWidth="57px"
                    propPadding1="0px 0px 4px"
                  />
                  <div className={styles.practiceButtonDSA}>
                    <div className={styles.practiceButtonDSAChild} />
                    <div className={styles.practiceButtonDSAInner}>
                      <div className={styles.practiceButtonDSACParent}>
                        <div className={styles.practiceButtonDSAC}>
                          <b className={styles.c}>C</b>
                        </div>
                        <div className={styles.practiceButtonDSAIllustra}>
                          <div
                            className={styles.practiceButtonDSAIllustraChild}
                          />
                          <div className={styles.practiceButtonDSAIllustra1} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <b className={styles.continue}>Continue</b>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.practiceButtonJavaTitle}>
                    <b className={styles.java}>Java</b>
                    <div className={styles.practiceButtonJavaIllustrat}>
                      <div className={styles.practiceButtonJavaIllustrat1}>
                        <div
                          className={styles.practiceButtonJavaIllustratChild}
                        />
                        <div
                          className={styles.practiceButtonJavaIllustratItem}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.practiceButtonJavaContinue}>
                    <div className={styles.practiceButtonJavaContinue1} />
                    <b className={styles.continue1}>Continue</b>
                  </div>
                </div>
              </div>
              <div className={styles.javaSessions}>
                <div className={styles.javaSessionsTitle}>
                  <div className={styles.javaSessionsHeader}>
                    <h1 className={styles.java1}>Java</h1>
                  </div>
                  <div className={styles.javaSessionsList}>
                    <div className={styles.javaSessionItems}>
                      <div className={styles.javaSessionItemsChild} />
                      <div className={styles.learnJava}>Learn Java</div>
                    </div>
                    <div className={styles.javaSessionItems1}>
                      <div className={styles.javaSessionItemsItem} />
                      <div className={styles.logicBuildingIn}>
                        Logic Building in Java
                      </div>
                    </div>
                    <div className={styles.javaSessionItems2}>
                      <div className={styles.javaSessionItemsInner} />
                      <div className={styles.beginnerDsaIn}>
                        Beginner DSA in Java
                      </div>
                    </div>
                    <div className={styles.javaSessionItems3}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.advanceJava}>Advance Java</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moreSessionsWrapper}>
            <b className={styles.moreSessions}>More Sessions</b>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PracticeDashboard;
