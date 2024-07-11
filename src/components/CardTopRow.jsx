import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CardTopRow.module.css";

const CardTopRow = ({
  className = "",
  cardIcons,
  diplomaBigDataAnalytics,
  propWidth,
  propRight,
  propLeft,
  propWidth1,
}) => {
  const cardLinksStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const diplomaBigDataStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth1,
    };
  }, [propLeft, propWidth1]);

  return (
    <div className={[styles.cardTopRow, className].join(" ")}>
      <img className={styles.cardIcons} alt="" src={cardIcons} />
      <div className={styles.cardLinks} style={cardLinksStyle}>
        <h3 className={styles.diplomaBigData} style={diplomaBigDataStyle}>
          {diplomaBigDataAnalytics}
        </h3>
        <div className={styles.cardBottomRow}>
          <div className={styles.bottomCardIcons} />
          <img
            className={styles.cardBottomRowChild}
            loading="lazy"
            alt=""
            src="/group-6.svg"
          />
        </div>
      </div>
    </div>
  );
};

CardTopRow.propTypes = {
  className: PropTypes.string,
  cardIcons: PropTypes.string,
  diplomaBigDataAnalytics: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default CardTopRow;
