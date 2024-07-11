import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  ellipse5,
  rajKapur,
  btechElectronics,
  prop,
  propPadding,
  propGap,
  propAlignSelf,
  propGap1,
  propBorderRadius,
  propFlex,
  propMinWidth,
  propAlignSelf1,
  propPadding1,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap1,
    };
  }, [propAlignSelf, propGap1]);

  const ellipseIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      padding: propPadding1,
      width: propWidth,
    };
  }, [propAlignSelf1, propPadding1, propWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.ellipseParent} style={frameDiv1Style}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src={ellipse5}
          style={ellipseIconStyle}
        />
        <div
          className={styles.rajKapurBtechElectronics20Wrapper}
          style={frameDiv2Style}
        >
          <div className={styles.rajKapurBtechContainer}>
            <p className={styles.rajKapur}>{rajKapur}</p>
            <p className={styles.btechElectronics}>{btechElectronics}</p>
            <p className={styles.p}>{prop}</p>
            <p className={styles.fullStackDeveloper}>Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div
        className={styles.loremIpsumIsSimplyDummyTeWrapper}
        style={frameDiv3Style}
      >
        <div className={styles.loremIpsumIsContainer}>
          <p className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className={styles.loremIpsumIs1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  ellipse5: PropTypes.string,
  rajKapur: PropTypes.string,
  btechElectronics: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propGap1: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
