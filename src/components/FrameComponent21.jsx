import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent21.module.css";

const FrameComponent2 = ({
  className = "",
  rectangle4325,
  susmitaSen,
  batch202223,
  propWidth,
  propPadding,
  propMinWidth,
  propWidth1,
  propPadding1,
}) => {
  const instructorStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propWidth, propPadding, propMinWidth]);

  const instructorPhotoIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const instructorNameStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.instructor, className].join(" ")}
      style={instructorStyle}
    >
      <div className={styles.instructorDetails}>
        <img
          className={styles.instructorPhotoIcon}
          loading="lazy"
          alt=""
          src={rectangle4325}
          style={instructorPhotoIconStyle}
        />
        <div className={styles.instructorName} style={instructorNameStyle}>
          <b className={styles.susmitaSenMtechContainer}>
            <p className={styles.susmitaSen}>{susmitaSen}</p>
            <p className={styles.mtech}>Mtech</p>
            <p className={styles.batch202223}>{batch202223}</p>
          </b>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  rectangle4325: PropTypes.string,
  susmitaSen: PropTypes.string,
  batch202223: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default FrameComponent2;
