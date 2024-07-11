import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  propAlignSelf,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
  propBorderRight,
  propBorderRight1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      backgroundColor: propBackgroundColor,
      width: propWidth,
    };
  }, [propAlignSelf, propBackgroundColor, propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const lineDivStyle = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const lineDiv1Style = useMemo(() => {
    return {
      borderRight: propBorderRight1,
    };
  }, [propBorderRight1]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.placementFigures}>
        <div className={styles.placedWithin6Container}>
          <p className={styles.p}>
            <i className={styles.i}>90%</i>
          </p>
          <p className={styles.placedWithin6MonthCourse}>
            <i>{`placed within 6 month course `}</i>
          </p>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.dividerChild} style={lineDivStyle} />
      </div>
      <div className={styles.placementFigures1}>
        <div className={styles.lpaAverageDreamContainer}>
          <p className={styles.lpa}>
            <i className={styles.lpa1}>5-12 LPA</i>
          </p>
          <p className={styles.averageDreamJobCtc}>
            <i>average dream job CTC</i>
          </p>
        </div>
      </div>
      <div className={styles.frameItem} style={lineDiv1Style} />
      <div className={styles.placementFigures2}>
        <div className={styles.hiringPartners}>
          <p className={styles.p1}>
            <i className={styles.i1}>100+</i>
          </p>
          <p className={styles.hiringPartners1}>
            <i>Hiring Partners</i>
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBorderRight: PropTypes.any,
  propBorderRight1: PropTypes.any,
};

export default GroupComponent;
