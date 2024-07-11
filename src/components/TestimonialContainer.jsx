import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./TestimonialContainer.module.css";

const TestimonialContainer = ({ className = "" }) => {
  return (
    <div className={[styles.testimonialContainer, className].join(" ")}>
      <div className={styles.testimonialItems}>
        <div className={styles.testimonialItemsInner}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/ellipse-41@2x.png"
                />
                <div className={styles.nikitaKalitaBca202122FronWrapper}>
                  <div className={styles.nikitaKalitaBcaContainer}>
                    <p className={styles.nikitaKalita}>Nikita Kalita</p>
                    <p className={styles.bca}>BCA</p>
                    <p className={styles.p}>2021-22</p>
                    <p className={styles.frontEndDeveloper}>
                      Front End Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.loremIpsumIsContainer}>
                <p className={styles.loremIpsumIs}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className={styles.loremIpsumIs1}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
            <FrameComponent
              ellipse5="/ellipse-51@2x.png"
              rajKapur="Raj Kapur"
              btechElectronics="Btech Electronics"
              prop="2015-16"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.ellipseIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-61@2x.png"
                  />
                  <div className={styles.miraKhanBtechElectronics20Wrapper}>
                    <div className={styles.miraKhanBtechContainer}>
                      <p className={styles.miraKhan}>Mira Khan</p>
                      <p className={styles.btechElectronics}>
                        Btech Electronics
                      </p>
                      <p className={styles.p1}>2021-22</p>
                      <p className={styles.backendDeveloper}>
                        Backend Developer
                      </p>
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
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/ellipse-4-1@2x.png"
              />
            </div>
            <div className={styles.rimjimDasBtechCivil202122Wrapper}>
              <div className={styles.rimjimDasBtechContainer}>
                <p className={styles.rimjimDas}>Rimjim Das</p>
                <p className={styles.btechCivil}>Btech Civil</p>
                <p className={styles.p2}>2021-22</p>
                <p className={styles.databaseAdminitrator}>
                  Database Adminitrator
                </p>
              </div>
            </div>
            <div className={styles.loremIpsumIsContainer2}>
              <p className={styles.loremIpsumIs4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className={styles.loremIpsumIs5}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/ellipse-5-1@2x.png"
                />
                <div className={styles.lisaDasBtechCivil202122FWrapper}>
                  <div className={styles.lisaDasBtechContainer}>
                    <p className={styles.lisaDas}>Lisa Das</p>
                    <p className={styles.btechCivil1}>Btech Civil</p>
                    <p className={styles.p3}>2021-22</p>
                    <p className={styles.frontEndDeveloper1}>
                      Front End Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.loremIpsumIsSimplyDummyTeContainer}>
                <div className={styles.loremIpsumIsContainer3}>
                  <p className={styles.loremIpsumIs6}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className={styles.loremIpsumIs7}>
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
          <FrameComponent
            ellipse5="/ellipse-6-1@2x.png"
            rajKapur="Rajvir Dey"
            btechElectronics="BCA"
            prop="2011-12"
            propPadding="12.7px 8px 20.3px"
            propGap="12.3px"
            propAlignSelf="unset"
            propGap1="31.3px"
            propBorderRadius="unset"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf1="unset"
            propPadding1="0px 1px"
            propWidth="278px"
          />
        </div>
      </div>
    </div>
  );
};

TestimonialContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContainer;
