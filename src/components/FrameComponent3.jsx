import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.learnMoreContainerWrapper, className].join(" ")}>
      <div className={styles.learnMoreContainer}>
        <div className={styles.learnMoreLink}>
          <Button
            className={styles.learnMoreButton}
            name="Learn More"
            id="learnmore"
            variant="primary"
            href="/course"
          >
            Learn More
          </Button>
        </div>
        <div className={styles.testimonialCarousel}>
          <div className={styles.testimonialCarouselChild} />
          <div className={styles.testimonialSlider}>
            <h3 className={styles.testimonials}>Testimonials</h3>
          </div>
          <div className={styles.testimonialCards}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialTopRow}>
                <div className={styles.testimonialTopRowChild} />
                <div className={styles.testimonialImages}>
                  <img
                    className={styles.testimonialAvatarsIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <div className={styles.testimonialDetails}>
                    <div className={styles.testimonialNames}>
                      <div className={styles.sidharthRay}>Sidharth Ray</div>
                      <div className={styles.btechCivil}>Btech Civil</div>
                      <div className={styles.testimonialLocations}>2017-18</div>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialQuotes}>
                  <div className={styles.loremIpsumIsContainer}>
                    <p className={styles.loremIpsumIs}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p className={styles.loremIpsumIs1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialTopRow1}>
                <div className={styles.testimonialTopRowItem} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/ellipse-5@2x.png"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.riaDasParent}>
                      <div className={styles.riaDas}>Ria Das</div>
                      <div className={styles.btechElectronics}>
                        Btech Electronics
                      </div>
                      <div className={styles.div}>2021-22</div>
                    </div>
                  </div>
                </div>
                <div className={styles.loremIpsumIsSimplyDummyTeWrapper}>
                  <div className={styles.loremIpsumIsContainer1}>
                    <p className={styles.loremIpsumIs2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p className={styles.loremIpsumIs3}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialTopRow2}>
                <div className={styles.testimonialTopRowInner} />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className={styles.frameContainer}>
                    <div className={styles.rimjimKalitaParent}>
                      <div className={styles.rimjimKalita}>Rimjim Kalita</div>
                      <div className={styles.btechCivil1}>Btech Civil</div>
                      <div className={styles.div1}>2016-17</div>
                    </div>
                  </div>
                </div>
                <div className={styles.loremIpsumIsSimplyDummyTeContainer}>
                  <div className={styles.loremIpsumIsContainer2}>
                    <p className={styles.loremIpsumIs4}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p className={styles.loremIpsumIs5}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialNavigation}>
              <img
                className={styles.testimonialNavigationChild}
                loading="lazy"
                alt=""
                src="/group-22.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
