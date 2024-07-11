import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import FeaturedCoursesHeader from "../components/FeaturedCoursesHeader";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";
import InnerStatsContainer from "../components/InnerStatsContainer";
import NewsItems from "../components/NewsItems";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <h1 className={styles.whatOurStudent}>What Our Student Say?</h1>
      <FrameComponent4 />
      <div className={styles.featuredCoursesContainerWrapper}>
        <div className={styles.featuredCoursesContainer}>
          <FeaturedCoursesHeader />
          <FrameComponent3 />
        </div>
      </div>
      <main className={styles.footerBackground}>
        <img
          className={styles.footerBackgroundChild}
          alt=""
          src="/rectangle-18.svg"
        />
        <img className={styles.footerBackgroundItem} alt="" />
      </main>
      <div className={styles.contactUs}>{`Contact Us `}</div>
      <FrameComponent5 />
      <div className={styles.placementStats}>
        <div className={styles.statsContainer}>
          <InnerStatsContainer />
          <div className={styles.news}>
            <h1 className={styles.aboutLatestTips}>
              About latest Tips and News
            </h1>
          </div>
          <NewsItems />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
