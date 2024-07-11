import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./OtherPersonal.module.css";

const OtherPersonal = ({
  className = "",
  otherInformation,
  propPadding,
  propWidth,
}) => {
  const informationLabelsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const otherInformationStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.otherPersonal, className].join(" ")}>
      <div className={styles.informationLabels} style={informationLabelsStyle}>
        <div className={styles.informationLabelsChild} />
        <div className={styles.otherInformation} style={otherInformationStyle}>
          {otherInformation}
        </div>
      </div>
      <div className={styles.otherPersonalInner}>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

OtherPersonal.propTypes = {
  className: PropTypes.string,
  otherInformation: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default OtherPersonal;
