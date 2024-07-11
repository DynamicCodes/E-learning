import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PracticeButtonDSA.module.css";

const PracticeButtonDSA = ({
  className = "",
  dSA,
  propPadding,
  propGap,
  propWidth,
  propPadding1,
  onPracticeButtonContinueShapeClick,
}) => {
  const practiceButtonDSAStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const practiceButtonContinueStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const navigate = useNavigate();

  const onPracticeButtonContinueShapeClick1 = useCallback(() => {
    navigate("/practice");
  }, [navigate]);

  return (
    <div
      className={[styles.practiceButtonDSA, className].join(" ")}
      style={practiceButtonDSAStyle}
    >
      <div className={styles.practiceButtonDSAChild} />
      <div className={styles.practiceButtonDSATitle}>
        <b className={styles.dsa}>{dSA}</b>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} style={rectangleDiv1Style} />
        </div>
      </div>
      <div
        className={styles.practiceButtonContinue}
        style={practiceButtonContinueStyle}
      >
        <div className={styles.practiceButtonContinueEleme}>
          <div
            className={styles.practiceButtonContinueShape}
            onClick={onPracticeButtonContinueShapeClick}
          />
          <b className={styles.continue}>Continue</b>
        </div>
      </div>
    </div>
  );
};

PracticeButtonDSA.propTypes = {
  className: PropTypes.string,
  dSA: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,

  /** Action props */
  onPracticeButtonContinueShapeClick: PropTypes.func,
};

export default PracticeButtonDSA;
