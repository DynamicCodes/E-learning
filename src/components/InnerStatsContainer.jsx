import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./InnerStatsContainer.module.css";

const InnerStatsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.innerStatsContainer, className].join(" ")}>
      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <div className={styles.placementIcon}>
            <div className={styles.placementIconChild} />
            <div className={styles.placementIconInner}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.placementIconItem} />
          </div>
        </div>
        <GroupComponent />
      </div>
    </div>
  );
};

InnerStatsContainer.propTypes = {
  className: PropTypes.string,
};

export default InnerStatsContainer;
