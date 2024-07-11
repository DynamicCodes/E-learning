import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Faculty.module.css";

const Faculty = () => {
  return (
    <div className={styles.faculty}>
      <header className={styles.main}>
        <div className={styles.mainChild} />
        <img
          className={styles.mainItem}
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <div className={styles.icons}>
          <img
            className={styles.icons8User902}
            loading="lazy"
            alt=""
            src="/icons8user90-2@2x.png"
          />
        </div>
      </header>
      <section className={styles.divider} />
      <section className={styles.mentors}>
        <div className={styles.mentorsDescription}>
          <h1 className={styles.meetOurMentors}>Meet Our mentors</h1>
          <div className={styles.mentorsContent}>
            <b
              className={styles.learnAndGrow}
            >{`Learn and grow with help from world class mentors `}</b>
          </div>
        </div>
      </section>
      <div className={styles.contactUs}>{`Contact Us `}</div>
      <div className={styles.copyrightProtectedCdac}>
        Copyright Protected @CDAC 2023. All Right Resered
      </div>
      <section className={styles.content}>
        <div className={styles.courses}>
          <div className={styles.courseList}>
            <div className={styles.course}>
              <b className={styles.dataStructure}>Data Structure</b>
              <div className={styles.instructors}>
                <div className={styles.instructorList}>
                  <FrameComponent2
                    rectangle4325="/rectangle-4325@2x.png"
                    susmitaSen="Susmita Sen"
                    batch202223="Batch: 2022-23"
                  />
                  <div className={styles.instructor}>
                    <img
                      className={styles.instructorPhotoIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-4326@2x.png"
                    />
                    <div className={styles.instructorName}>
                      <b className={styles.rajivMishraBtechContainer}>
                        <p className={styles.rajivMishra}>Rajiv Mishra</p>
                        <p className={styles.btech}>{`Btech `}</p>
                        <p className={styles.batch201617}>Batch: 2016-17</p>
                      </b>
                    </div>
                  </div>
                  <div className={styles.instructor1}>
                    <img
                      className={styles.instructorPhotoIcon1}
                      loading="lazy"
                      alt=""
                      src="/rectangle-4327@2x.png"
                    />
                    <div className={styles.instructorName1}>
                      <b className={styles.raginiDasPhdContainer}>
                        <p className={styles.raginiDas}>Ragini Das</p>
                        <p className={styles.phd}>Phd</p>
                        <p className={styles.present}>Present</p>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.course1}>
              <b className={styles.operatingSystem}>Operating System</b>
              <div className={styles.instructors1}>
                <div className={styles.course2}>
                  <div className={styles.computerNetworkContent}>
                    <div className={styles.instructors2}>
                      <img
                        className={styles.instructorPhotoIcon2}
                        loading="lazy"
                        alt=""
                        src="/rectangle-4329@2x.png"
                      />
                      <div className={styles.instructorName2}>
                        <b className={styles.rashmiDasPhdContainer}>
                          <p className={styles.rashmiDas}>Rashmi Das</p>
                          <p className={styles.phd1}>Phd</p>
                          <p className={styles.batch202122}>Batch: 2021-22</p>
                        </b>
                      </div>
                    </div>
                  </div>
                  <b className={styles.computerNetwork}>Computer Network</b>
                </div>
                <div className={styles.instructorList1}>
                  <img
                    className={styles.instructorPhotoIcon3}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4330@2x.png"
                  />
                  <div className={styles.instructorName3}>
                    <b className={styles.priyaRayMphilContainer}>
                      <p className={styles.priyaRay}>Priya Ray</p>
                      <p className={styles.mphil}>MPhil</p>
                      <p className={styles.batch202223}>Batch: 2022-23</p>
                    </b>
                  </div>
                </div>
                <div className={styles.instructorList2}>
                  <img
                    className={styles.instructorListChild}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4331@2x.png"
                  />
                  <div className={styles.imonKalitaMcaMbaPresentWrapper}>
                    <b className={styles.imonKalitaMcaContainer}>
                      <p className={styles.imonKalita}>Imon Kalita</p>
                      <p className={styles.mcaMba}>MCA, MBA</p>
                      <p className={styles.present1}>Present</p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.course3}>
            <div className={styles.subhamSharmaCourse}>
              <div className={styles.instructors3}>
                <img
                  className={styles.instructorPhotoIcon4}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4333@2x.png"
                />
                <div className={styles.instructorName4}>
                  <b className={styles.subhamSharmaPhdContainer}>
                    <p className={styles.subhamSharma}>Subham Sharma</p>
                    <p className={styles.phd2}>Phd</p>
                    <p className={styles.batch2021221}>Batch: 2021-22</p>
                  </b>
                </div>
              </div>
              <FrameComponent2
                rectangle4325="/rectangle-4334@2x.png"
                susmitaSen="Reshma Hazarika"
                batch202223="Present"
                propWidth="188px"
                propPadding="0px 0px 2px"
                propMinWidth="188px"
                propWidth1="157px"
                propPadding1="0px 0px 0px 38px"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Faculty;
