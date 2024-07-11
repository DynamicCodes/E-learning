import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent = ({
  className = "",
  line23,
  am11Am,
  propMarginTop,
  propPadding,
  propAlignSelf,
  propWidth,
  propHeight,
  propDisplay,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const operatingSystemTimeStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const am11AmStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      height: propHeight,
      display: propDisplay,
    };
  }, [propAlignSelf, propWidth, propHeight, propDisplay]);

  return (
    <div
      className={[styles.lineParent, className].join(" ")}
      style={frameDiv4Style}
    >
      <img className={styles.frameChild} loading="lazy" alt="" src={line23} />
      <div
        className={styles.operatingSystemTime}
        style={operatingSystemTimeStyle}
      >
        <div className={styles.operatingSystemTimeDetails}>
          <div className={styles.am11Am} style={am11AmStyle}>
            {am11Am}
          </div>
          <div className={styles.operatingSystemJoin}>
            <div className={styles.operatingSystemJoinButton} />
            <a className={styles.joinNow}>Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  line23: PropTypes.string,
  am11Am: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent;
