import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import TestimonialContainer from "../components/TestimonialContainer";
import BackgroundContainer from "../components/BackgroundContainer";
import Footer1 from "../components/Footer1";
import styles from "./PlacementPage.module.css";

const PlacementPage = () => {
  return (
    <div className={styles.placementPage}>
      <div className={styles.contactUs}>{`Contact Us `}</div>
      <section className={styles.placementPageInner}>
        <div className={styles.frameParent}>
          <FrameComponent6 />
          <FrameComponent2 />
        </div>
      </section>
      <section className={styles.placementPageChild}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} loading="lazy" alt="" />
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <b className={styles.signIn}>SIGN IN</b>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <section className={styles.frameSection}>
        <div className={styles.testimonialContainerParent}>
          <TestimonialContainer />
          <BackgroundContainer />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default PlacementPage;
